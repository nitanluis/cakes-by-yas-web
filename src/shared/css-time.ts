// CSS optimizers may rewrite 1200ms as 1.2s. Preserve the unit when reading tokens.
export function cssSeconds(value: string): number {
  const time = value.trim();
  if (time === '0') return 0;
  const match = time.match(/^(-?(?:\d+(?:\.\d*)?|\.\d+))(ms|s)$/i);
  if (!match) throw new Error(`Expected a CSS time in ms or s: ${value}`);
  const amount = Number(match[1]);
  return match[2].toLowerCase() === 'ms' ? amount / 1000 : amount;
}
