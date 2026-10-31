import { readFileSync } from 'node:fs';
type Color = { rgb: number[]; alpha: number };
function declarations(css: string): Map<string, string> {
  return new Map([...css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(match => [match[1], match[2].trim()]));
}
function parseColor(value: string): Color {
  if (/^#[\da-f]{6}$/i.test(value)) return { rgb: [1, 3, 5].map(offset => Number.parseInt(value.slice(offset, offset + 2), 16)), alpha: 1 };
  if (value.startsWith('rgb(')) {
    const [channels, alpha] = value.slice(4, -1).split('/');
    return { rgb: channels.trim().split(/\s+/).map(Number), alpha: alpha === undefined ? 1 : Number(alpha.trim()) };
  }
  throw new Error(`Unsupported color token: ${value}`);
}
function luminance(rgb: number[]) {
  const values = rgb.map(channel => { const value = channel / 255; return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4; });
  return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
}
export function getPaletteReport() {
  const primitives = declarations(readFileSync('src/shared/tokens/primitives.css', 'utf8'));
  const semantic = readFileSync('src/shared/tokens/semantic.css', 'utf8');
  const base = declarations(semantic.match(/:root\s*\{([^}]+)\}/)?.[1] || '');
  const dark = declarations(semantic.match(/:root\[data-theme='dark'\]\s*\{([^}]+)\}/)?.[1] || '');
  const combinations = [
    { label: 'Texto principal / fondo', foreground: '--color-text', background: '--color-bg' },
    { label: 'Texto secundario / fondo', foreground: '--color-text-muted', background: '--color-bg' },
    { label: 'Texto / acción coral', foreground: '--color-action-text', background: '--color-action' },
    { label: 'Texto / apoyo rosa', foreground: '--color-support-text', background: '--color-support' },
    { label: 'Texto / pie oscuro', foreground: '--color-inverse', background: '--color-deep' },
  ];
  return ['light', 'dark'].flatMap(theme => {
    const tokens = new Map([...primitives, ...base, ...(theme === 'dark' ? dark : new Map<string, string>())]);
    function resolve(name: string, depth = 0): string {
      if (depth > 12) throw new Error(`Token cycle: ${name}`);
      const value = tokens.get(name);
      if (!value) throw new Error(`Missing token: ${name}`);
      return value.replace(/var\((--[\w-]+)\)/g, (_match, child: string) => resolve(child, depth + 1));
    }
    return combinations.map(pair => {
      const foreground = parseColor(resolve(pair.foreground));
      const background = parseColor(resolve(pair.background));
      const composite = foreground.rgb.map((channel, index) => channel * foreground.alpha + background.rgb[index] * (1 - foreground.alpha));
      const a = luminance(composite), b = luminance(background.rgb);
      const ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
      return { ...pair, theme, ratio, minimum: 4.5, pass: ratio >= 4.5 };
    });
  });
}
