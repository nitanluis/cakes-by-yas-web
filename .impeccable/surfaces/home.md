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

SECOND PASS: Hero y títulos800, CTA circular de una palabra con máscara de mordisco medida y giro, wipe SVG y SplitText, máscara creciente de cinta sin pausa de hover, catálogo de diez entradas (cuatro familias fotográficas y seis tipográficas), CTA central de arco y proceso con numeración grande. Fondo vigente: Doble firma. Ver referencia-v2 para evidencia histórica.

FEATURED V3 (histórico): Sin mínimo132vh ni límite1800px de la cuadrícula; ancho de cada tarjeta30% del área interior (gutter4vw y dos gaps5%). Intro→tarjetas compactado. Las velocidades168/98.823529px/s correspondían a las bandas retiradas. Sin botón de pausa por petición explícita; movimiento reducido conservado. Separadores con el isotipo de la marca y nodos, sin estrellas. Evidencia histórica `featured-v3`.

FEATURED V4 (histórico, sustituido por V5): Usuario delega la elección entre Doble firma y Y monumental; se implementó Y monumental. Una sola copia del isotipo original, opacidad28%, sin texto ni bucle. Giro−6→2, desplazamiento x−3→3% y viaje vertical calculado para escritorio y pila móvil, vinculados al scroll. Evidencia histórica `featured-monogram-v1`.

FINISH V4: Build y barreras pasan; recorrido local Brave11/11, ES1440/1024 y EN390 sin desborde. Movimiento comprobado con PageDown y reposo sin entrada; consulta por teclado y Escape devuelve foco. Axe0violaciones ES/EN, con comprobaciones incompletas de contraste/atributos documentadas. Captura final1440 revisada visualmente. Grid de fondo con pistas minmax(0,1fr) mantiene centrado el isotipo aunque supere el ancho/alto disponible. Movimiento reducido y ausencia de JS revisados en fuente; no se emuló la preferencia del sistema ni se usó un teléfono físico.

FEATURED V5: El usuario aclara que quiere movimiento continuo y elige Doble firma. Dos líneas altas y cercanas (line-height.9, gap0), alternancia sólido/contorno en cada línea, frase de marca más celebración localizada. Pistas opuestas a36/28px/s, duración por ancho real, sin depender del scroll ni detenerse al hover/foco. Se pausa fuera de pantalla, con pestaña oculta y con la preferencia compartida de movimiento reducido. Fondo estático sin JS. Galería `/galeria/#featured-background`; evidencia local en `featured-double-signature-v1`.

FINISH V5: Build y barreras pasan; recorrido Brave local10/10 registrado, ES1440/1024 y EN390. Se verificó el avance de ambas pistas con scrollY constante, gap0, duración por ancho real y pausa fuera de pantalla. En móvil sticky mantiene las mismas dos líneas a media pantalla durante la pila de tarjetas. Consulta por teclado/Escape y retorno de foco conservados; consola sin errores. Axe ES/EN conserva un aviso de contraste sobre relleno transparente del contorno: revisión manual del trazo real tinta2px al72% sobre marfil =5.784:1. Se guardan los resultados crudos y la justificación, sin afirmar cero avisos automáticos. Captura final inspeccionada; preferencia reducida/sin JS comprobados en fuente, no en configuración OS ni teléfono físico. No acredita despliegue en GitHub Pages.

BRAND/INTRO: Nueva identidad SVG entregada2026-10-31, incluida en todas las firmas e iconos. Preloader una vez/pestaña, entrega del logo a cabecera y cortina curva; entrada directa con anclas, repetición o movimiento reducido, cancelación inmediata por entrada de usuario. CTA inferior con imagen estática No_Anim, sin encabezado visual duplicado, texto220→20unidadesSVG y botón order recto distinto del círculo de hero. Evidencia `brand-intro-v1`.

HERO V2: Por petición del usuario2026-10-31, portada editorial basada en el pastel real de mariposas. Marfil con reflejo rosa y cinta coral externa al producto; el área izquierda queda tranquila para la tipografía. Fuente central en `src/data/hero.ts`, compartida con OG y alt bilingüe. Conserva movimiento, título y flujo de contacto. No cambia el catálogo ni constituye aprobación comercial de la recreación. Original y versión anterior conservados.

INTERACTIONS V2: Firma de crema con geometría vectorial original y pausa apreciable; menú circular800ms con contenido demorado600ms y cierre invertido; curva de crema en lugar de flecha de scroll; ampliación coral en fotografía. Usuario aprobó rellenos «Dentro del pastel», abiertos al pulsar Ask Yas. ProductDialog implementado y revisado: producto/foto/precios fuente, radios de relleno opcionales, consulta WA, navegación por teclado, foco y pila de diálogos. Recorrido `product-detail-v1`:11/11 comprobaciones registradas, axe0violaciones ES escritorio/EN390px, con resultados incompletos de contraste/atributos documentados; no emulación OS de reduced-motion ni teléfono físico. Hover navbar elegido: Sello artesanal700ms, isotipo activo y lettering estable. Registro `brand-interactions-final`:6/6comprobaciones, captura de hold y entrada normal4896ms. La publicación temporal se verifica por separado con verify-live y navegador.
