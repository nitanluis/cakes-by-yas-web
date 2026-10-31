"""Download only the business image URLs already observed in the browser DOM."""
from pathlib import Path
import json
import urllib.parse
import urllib.request

root = Path(__file__).parent
products = json.loads((root / 'profile-products.json').read_text(encoding='utf-8'))
results = []
for item in [products[index] for index in [0, 1, 2, 5, 8, 9]]:
    image = item['images'][0]
    hostname = urllib.parse.urlparse(image['src']).hostname or ''
    if not hostname.endswith('.cdninstagram.com'):
        raise ValueError('Only the observed Instagram CDN is supported')
    shortcode = item['href'].strip('/').split('/')[-1]
    destination = root / (shortcode + '.jpg')
    request = urllib.request.Request(image['src'], headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(request, timeout=20) as response:
        payload = response.read()
    destination.write_bytes(payload)
    results.append({'post': 'https://www.instagram.com' + item['href'], 'file': destination.name, 'caption': image['alt'], 'observed_width': image['naturalWidth'], 'observed_height': image['naturalHeight']})
    print(destination.name, len(payload), flush=True)
(root / 'downloads.json').write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
