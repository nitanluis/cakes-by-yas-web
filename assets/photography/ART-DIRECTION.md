---
status: direction-accepted-candidates-under-review
last-reviewed: 2026-10-30
owner: "Usuario y Yas"
revisit-trigger: "Revisión de la muestra o diferencias detectadas contra los pasteles reales"
---

# Serie de fotografía de Cakes by Yas

## Encargo confirmado

Recrear profesionalmente las fotografías de pasteles reales de Yas. El usuario confirma autoría de los pasteles y pide un mismo fondo y acabado profesional en toda la serie. Conservar los originales y comparar cada resultado contra su fuente.

## Dirección aceptada para la serie

Respuesta del usuario, 2026-10-30: le gusta el fondo de la muestra con corona; exige un acabado natural que conserve la credibilidad del pastel real. La aprobación corresponde al fondo y dirección, no a cada detalle de todas las recreaciones. Comparación y candidatos en `REVIEW.md`.

- Ciclorama continuo de color marfil cálido con un matiz rosado muy sutil; superficie mate del mismo color.
- Luz principal grande y difusa desde arriba a la izquierda, relleno suave a la derecha; sombra de contacto natural.
- Fotografía de producto realista, textura de crema y materiales visible. Sin acabado plástico, contraste HDR agresivo, brillo artificial ni decorado de stock.
- Cámara a la altura de la parte media/alta del pastel, ligeramente elevada para ver su superficie superior; conservar el ángulo de cada referencia cuando cambiarlo requiera inventar detalles.
- Encuadre vertical 4:5 con producto completo, base y espacio alrededor; adaptable a máscaras de arco y tarjetas.
- Sin flores, utensilios, telas, frutas o elementos añadidos ajenos al pastel original. El fondo común organiza la serie; las decoraciones del pastel conservan sus colores reales.

## Invariantes

Excepción de portada2026-10-31: el usuario pidió una imagen memorable más vinculada a la identidad nueva. El hero editorial incluye una cinta coral sobre la mesa como elemento de ambientación, fuera del pastel, sin convertirla en parte del diseño ofrecido. Esta excepción no se extiende a las imágenes de catálogo. Fuente real DVY7b_UkX74; prompt completo en `generation-record-hero-v2.json`.

Número de pisos, silueta, proporciones, colores del glaseado, textura, decoración, toppers, velas y texto visible del pastel. No inventar caras no vistas, rellenar detalles desconocidos ni cambiar un diseño por uno que parezca más lujoso. Corregir contexto fotográfico e iluminación; conservar el trabajo artesanal real.

Las imágenes resultantes son recreaciones fotográficas con IA, no capturas originales de cámara. Se registra la fuente de cada una y la revisión de fidelidad antes de usarlas como fotos de catálogo.

## Herramienta y primer prompt

Herramienta: `image_gen` integrada, modo edición; sin API/CLI.

Entrada de la muestra: `assets/source-instagram/DaA0XJTRK7q.jpg`, publicación https://www.instagram.com/cakes_byyas_/p/DaA0XJTRK7q/.

Prompt:

> Use case: precise-object-edit. Edit target: the supplied real cake photograph. Produce a high resolution professional product photograph, portrait 4:5, ideally 2048 by 2560. Preserve this exact handmade cake and its original viewing angle: one tall ivory frosted cylinder, the same piped top and base borders, gold leaf placement, mirrored-gold Happy Birthday lettering, gold crown with pink jewels, all three thin unlit magenta candles, and the same clusters of gold spheres in their original positions. Keep the cake proportions, decoration count, frosting texture, text, and colors faithful to the source. Change only the photographic environment, framing, light and image quality. Replace the domestic hexagonal wall and ornate lace pedestal with a seamless warm ivory studio cyclorama with a very subtle blush undertone and a matching matte tabletop. Retain a simple round cake board under the cake; no decorative cake stand. Use large softbox light from upper left, gentle fill from right, a believable soft contact shadow and restrained natural color grading. Frame the whole cake including candles with comfortable breathing room; bakery catalog photography with lifelike handmade texture and crisp but natural detail. No extra props, additional decorations, fake logos, watermarks, redesigned cake, CGI sheen or excessive blur. Existing Happy Birthday text must remain exact and legible.
