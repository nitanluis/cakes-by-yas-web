---
status: implemented-in-local-preview
primary_target: src/pages/[locale]/index.astro
related_targets: src/components/Navigation.astro, src/components/Catalog.astro
---

THESIS: En dos segundos se entiende que Yas hace pasteles de cumpleaños por encargo y cómo consultar. Rechaza fotos inconexas, productos inventados y una portada genérica de tarjetas.

OWN-WORLD: DESIGN.md, tokens de tres capas y traducción medida de Bernice.

STORY: Ver pastel → explorar creaciones → leer menú y opciones → preparar fecha/porciones/sabores/diseño → conversar con Yas.

FIRST VIEWPORT: 1440×900, header 100 px y gutter 57.6 px; foto de ancho completo, título 12vw y círculo de consulta. 390×844, gutter 15.6 px, título 17vw, pastel completo y CTA en flujo. Entre 768 y 1120, navegación compacta, sin logo colapsado.

FORM: Dirección de referencia y marca fijada por usuario el 2026-10-30; neutros y composición fotográfica propuestas en preview.

FINISH: Build y barreras correctas, resumen real del recorrido sin desborde ni errores, menú/idioma/contacto utilizables con teclado, revisión visual de capturas y aprobación comercial de fotos y nombres antes de publicación.

SECOND PASS: Hero y títulos 800, CTA circular de una palabra con máscara de mordisco medida y giro, wipe SVG y SplitText, bandas diagonales de fondo, máscara creciente de cinta sin pausa de hover, catálogo de diez entradas (cuatro familias fotográficas y seis tipográficas), CTA central de arco y proceso con numeración grande. Ver referencia-v2 para evidencia nueva.

FEATURED V3: Sin mínimo 132vh ni límite 1800px de la cuadrícula; ancho de cada tarjeta 30% del área interior (gutter 4vw y dos gaps5%). Intro→tarjetas compactado. Velocidades de fondo 168/98.823529px por segundo, medidas en Bernice, con duración calculada por longitud. Sin botón de pausa por petición explícita; movimiento reducido conservado. Separadores con el isotipo de la marca y nodos, sin estrellas. Evidencia `featured-v3`.

BRAND/INTRO: Nueva identidad SVG entregada2026-10-31, incluida en todas las firmas e iconos. Preloader una vez/pestaña, entrega del logo a cabecera y cortina curva; entrada directa con anclas, repetición o movimiento reducido, cancelación inmediata por entrada de usuario. CTA inferior con imagen estática No_Anim, sin encabezado visual duplicado, texto220→20unidadesSVG y botón order recto distinto del círculo de hero. Evidencia `brand-intro-v1`.

HERO V2: Por petición del usuario2026-10-31, portada editorial basada en el pastel real de mariposas. Marfil con reflejo rosa y cinta coral externa al producto; el área izquierda queda tranquila para la tipografía. Fuente central en `src/data/hero.ts`, compartida con OG y alt bilingüe. Conserva movimiento, título y flujo de contacto. No cambia el catálogo ni constituye aprobación comercial de la recreación. Original y versión anterior conservados.
