# Revisión de la primera serie — 2026-10-30

El usuario acepta el fondo de la muestra con corona y pide que el resultado tenga aspecto de fotografía profesional real. Ese fondo y luz son la dirección común; no se ha recibido aprobación individual para publicar todas las ediciones.

Las seis imágenes son recreaciones asistidas por IA de productos reales del negocio. Se conservan originales, prompts y candidatos. Ninguna se describe aquí como nueva captura de cámara ni se garantiza que resulte indetectable como edición generativa.

## Revisión visual comparada

| Candidato | Conservado en la comparación | Diferencias / revisión pendiente |
|---|---|---|
| `royal-gold-v1.png` | Un piso marfil, corona, tres velas magenta, texto Happy Birthday, grupos dorados y pan de oro | Se retiró pedestal ornamental; comprobar tono de crema/dorados y geometría fina de la corona con Yas |
| `royal-butterfly-v1.png` | Corona sin velas, mariposas, grupos rosa/blanco/dorado, texto y crema irregular | Cambia algo la apariencia de la espátula y la reflexión dorada; candidato, no reproducción píxel a píxel |
| `dominican-blue-v1.png` | Pastel blanco, bordes azules, topper geométrico, base plateada y textura de crema | El azul se percibe más saturado y el topper cambia ligeramente de proporción; revisar antes de selección final |
| `trolls-belen-v1.png` | Dos pisos azul/rosa, BELEN, muñeca, arcoíris, flores, hongos y grupos de bolas | La textura de crema se volvió más marcada que en la fuente; candidato en reserva para retoque más conservador |
| `flan-v1.png` | Flan redondo sin decoración añadida, caramelo y textura de los lados | Base cambia de caja a plato simple; balance cálido y brillo por validar |
| `tres-leches-v1.png` | Bandeja de aluminio, tres mitades de fresa, texto, borde de crema y detalles dorados | Se retiró plato exterior; leves cambios de composición/espaciado de adornos; revisar junto al original |

## Criterio de aceptación

- El fondo organiza la serie; no obliga a alterar colores del pastel.
- La crema conserva poros, trazos y pequeñas irregularidades reales, sin suavizado plástico ni textura artificial exagerada.
- No hay letras deformadas, objetos fundidos, decoraciones añadidas ni pérdida de topper/base por recorte.
- Revisar al tamaño de tarjeta, en móvil y al abrir la foto grande. No simular detalle inexistente con un escalado y llamarlo 4K.
- Yas confirma que cada imagen sigue representando un producto que elaboró. Si una edición cambia materialmente el trabajo, se retoca o se usa el original.

Dimensiones efectivas de esta generación: 1122×1402 px; aproximadamente 4:5. La resolución se registra tal cual, sin presentarla como 2048×2560.

Registros: `generation-records.json`, `generation-records-batch-2.json` y prompt de muestra en `ART-DIRECTION.md`. Fuentes estables y dimensiones originales en `../source-instagram/downloads.json`.

## Hero editorial v2 — 2026-10-31

`yas-day-hero-v2.png`,1672×941 nativos, edición con image_gen de `../source-instagram/DVY7b_UkX74.jpg`. Cambia la portada de corona/velas por el pastel de mariposas real, con fondo marfil y una cinta coral externa. Conserva un piso, corona sin velas, mariposas, colores de adornos y la inscripción. La crema, los reflejos y geometría fina de la corona cambian ligeramente frente al original; contrastar con Yas antes de publicación comercial. El set y la cinta son generativos. No sustituye las fotografías del catálogo.

Integrado en la preview con alt específico en ambos idiomas y variantes WebP; la misma fuente genera OG. El archivo anterior queda conservado. Prompt íntegro y procedencia: `generation-record-hero-v2.json`.
