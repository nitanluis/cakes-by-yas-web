"""Preserve only additional public stylesheet URLs observed in the browser DOM."""
from pathlib import Path
import json
import urllib.parse
import urllib.request

root = Path(__file__).parent
old = json.loads((root / 'source-styles/manifest.json').read_text(encoding='utf-8'))
existing = {item['url'] for item in old['assets']}
urls = json.loads((root / 'raw/extra-style-urls.json').read_text(encoding='utf-8'))
destination = root / 'source-styles/extra'
destination.mkdir(exist_ok=True)
records = []
for url in urls:
    if url in existing:
        continue
    parsed = urllib.parse.urlparse(url)
    if parsed.hostname != 'bernicebakery.com' or not parsed.path.startswith('/cdn/shop/t/4/assets/') or not parsed.path.endswith('.css'):
        raise ValueError('Only observed theme stylesheets are supported')
    name = Path(parsed.path).name
    with urllib.request.urlopen(url, timeout=20) as response:
        payload = response.read()
    (destination / name).write_bytes(payload)
    records.append({'url': url, 'file': name})
    print(name, len(payload), flush=True)
(destination / 'manifest.json').write_text(json.dumps(records, indent=2) + '\n', encoding='utf-8')
