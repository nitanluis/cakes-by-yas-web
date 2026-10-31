# Bernice Bakery — sistema medido

Fuente: https://bernicebakery.com/, 2026-10-30. Once rutas visitadas mediante la extensión de Brave; valores de `getComputedStyle` y geometría DOM, contrastados con CSS y JavaScript públicos observados. Las capturas son respaldo para no depender de que el sitio siga igual; no son la fuente de las medidas.

## Alcance y límites

Rutas: `/`, `/collections/cakes`, `/collections/cookies`, `/products/rainbow-birthday-cake`, `/pages/about`, `/pages/contact`, `/pages/wholesale`, `/fr/`, `/search`, `/cart` y una ruta inexistente de prueba. Estados adicionales: búsqueda desplegada, carrito vacío, menú móvil, cambio de categoría y variante de 9 pulgadas del producto. No se enviaron formularios, añadieron productos al carrito ni realizaron compras.

Viewports: 360×800, 390×844, 768×1024, 769×1024, 1024×900, 1440×900 y 1920×1080. La home se muestreó en los siete; detalle y contacto en escritorio y móvil. No es una matriz completa de todas las rutas por todos los tamaños. Solo se observó un tema global claro: `Dark_Section` identifica secciones fotográficas oscuras, no un modo oscuro de usuario.

Evidencia: `raw/*.json` contiene medidas con URL y viewport; `raw/*ax.txt` contiene los estados accesibles; `source-styles/manifest.json` y `source-styles/extra/manifest.json` vinculan los CSS; `source-scripts/animation-excerpts.json` conserva extractos identificados del movimiento. Las capturas con sufijo `initial` pueden mostrar la transición de entrada en curso. `desktop-08-footer.png` muestra la región CTA/newsletter; no acredita una captura completa del final del footer.

## 1. Estructura, ritmo y composición

| Región | Medida / comportamiento | Evidencia |
|---|---|---|
| Ancho útil de home | 1428 px dentro de viewport de 1440; scrollbar de 12 px en esta sesión | `raw/home__1440x900.json` |
| Gutter general | 4vw: 57.6 px a 1440; contenido 1312.8125 px | Mismo raw; `style.css`, `.SectionPadded` |
| Separación de sección | 50 px verticales en `.SectionPadded` | `style.css` |
| Header | Fijo; 30 px de padding vertical + logo de 40 px = 100 px de altura | Raw principal; `menu.css` |
| Logo | 200×40 px en escritorio ancho | Raw principal |
| Hero | 100vh; padding 4vw; título al 85% del ancho, llamada circular en extremo inferior derecho | Raw principal; `hero.css` |
| Introducción | Dos columnas 60/40 menos 1rem, gap 2rem | `title-text.css` |
| Destacados | Tres tarjetas de 30% de base, sección con mínimo 132vh | `collection-display.css`, `raw/home__featured__1440.json` |
| Tarjeta destacada | 393.84 px de ancho a 1440, padding 24 px; imagen interior 337.84 px cuadrada | Mismo raw |
| Tarjeta a 1920 | Ancho aproximado 526.31 px, padding 64 px; umbral CSS en 1600 px | `raw/home__1920x1080.json`, CSS |
| Catálogo principal | Tres columnas de 26%; tarjeta central con margen lateral 11%; seis productos por página | `collections-browser.css` |
| Testimonio | 520 px de ancho, padding 3rem, gap 4vw | `testimonials.css` |
| Newsletter | 60% de ancho, mínimo 600 px; padding 2rem 4rem | `footer.css` |
| Footer | Padding 4rem 4vw 1rem; tres columnas; wordmark de 20cqw | `footer.css` |

Secuencia editorial de la home: hero → presentación → tres productos en arco con marquesinas detrás → cinta de imágenes en arcos → catálogo por categorías → testimonios → CTA fotográfico con texto curvado → newsletter → footer con marca enorme. El efecto surge del cambio de escala y ritmo; no de una cuadrícula uniforme de pequeñas tarjetas.

## 2. Tipografía

| Uso | Familia declarada / escala | Observación |
|---|---|---|
| Titulares | ApfelGrotezk | WOFF2 locales observados: Regular 300, Mittel 400, Fett 600, Satt 800 |
| Cuerpo | Balto, sans-serif; 17.6 px | Declarada vía Typekit; no se confirmó la descarga efectiva de Balto |
| Párrafos | Line-height 1.25 | Excepción sobre regla global de line-height .9 |
| Hero escritorio | 12vw = 172.8 px a 1440 | Título con palabras divididas en spans; altura observada aproximada 311 px para dos líneas |
| Hero móvil | 17vw = 66.3 px a 390 | Ancho 100% |
| Introducción | Título 4.2rem = 67.2 px; párrafo 1.6rem = 25.6 px | Móvil: 2rem y 1.5rem con raíz de 14 px |
| Navegación | 1.2rem = 19.2 px | Margen de ítem .4rem 2rem |
| Producto | Nombre uppercase 1.5rem; precio 1.2rem; formato 14 px | `product-item.css` |
| Marquesina | 8rem = 128 px, uppercase | `marquee.css` |
| Detalle | Título 38.4 px, precio 20.8 px | `raw/cake-detail__1440.json` |

La regla CSS del h1 declara line-height .6, pero sus spans usan .9. Copiar .6 a texto sin esos wrappers produce solapamiento: la geometría observada tiene prioridad sobre una declaración aislada. La fuente Apfel está disponible en su repositorio oficial con SIL OFL; se conservará la licencia al servirla localmente. No se presupone permiso para redistribuir Balto.

## 3. Color y contextos

| Variable original | Valor | Rol observado |
|---|---|---|
| `--pink` | #FFA7EE | Fondo intenso de tarjetas, botones y estados seleccionados |
| `--beige` | #F8F8F2 | Superficie general y texto sobre zonas oscuras |
| `--blue` | #147C98 | Tinta de marca, bordes, botones y grandes fondos |
| `--dark` | #112229 | Fondo profundo, texto/alternancia |

Hay cambio contextual de logo y navegación al atravesar zonas fotográficas. No se midió una segunda paleta global ni un selector de tema. La adaptación a Yas se define separadamente en la tabla de traducción.

## 4. Alfas, transparencias y capas

- Imagen de hero con opacidad .75 sobre un fondo oscuro (`hero.css`).
- Fondo de entrada del header: pseudo-elemento que llega desde translateY(-101%); evita superponer un bloque fijo opaco sobre toda la hero desde el primer frame.
- Imagen secundaria de producto: cambio de opacidad con transición .5s; conserva la caja del producto.
- Elementos revelados: `opacity: 0` al entrar desde desplazamiento 4rem; duración 1s, retardo .5s. El contenido depende de JS para ese estado animado en la referencia.
- Canvas decorativos transparentes: frontal con z-index 10000 y trasero con -1. No se debe traducir esa implementación literalmente sin evaluar coste.

## 5. Forma, borde, elevación y fotografía

| Elemento | Forma / tratamiento |
|---|---|
| Destacado | Borde 4 px; radio 500px 500px 5rem 5rem |
| Imagen normal | Relación 1:1; radio 1.5rem |
| Imagen destacada | Radio 50% 50% 1.5rem 1.5rem |
| Botones y tabs | Píldora; borde 2 px |
| Variante del detalle | Borde 1.5 px; radio 10 px; caja observada 115×66.6 px |
| Testimonios | Radio 3rem = 48 px |
| Newsletter | Radio 2rem |
| Campo de contacto | Píldora; textarea con radio 24 px |
| Cinta de arcos | Ancho 20vw; alturas 20vw/25vw; móvil 60vw/75vw |

La profundidad se obtiene mediante máscaras, imágenes, solapamientos y movimiento. Las sombras de tarjetas no son el mecanismo dominante. La serie de Yas necesita tratamiento de fondo y luz consistente antes de insertarse en estas máscaras; el encuadre debe conservar topper, velas y base.

## 6. Controles y estados

| Control | Especificación y estado observado |
|---|---|
| Botón principal | Padding 1.2rem 1rem 1rem, texto 1.5rem, borde 2 px; hover scale .9 |
| Onda interior | Círculo de 200% de ancho desde posición del puntero, scale 0→1.05, 1.2s |
| CTA circular hero | Rotación 30°, padding 3rem, texto 2rem; máscara con mordida rota 10° y escala .9 al hover, .4s |
| Tab | Padding 1rem 2rem, texto 1.5rem, borde 2 px; relleno activo animado .8s |
| Flecha catálogo | 48×48 px; margen 1rem; transición .6s |
| Cantidad | Botones circulares de 3rem; valor 2rem |
| Variante | Cambio de 7 a 9 pulgadas verificado: precio $60→$80 y actualización de `aria-pressed` |
| Búsqueda | Drawer con buscador; no se completó compra ni envío |
| Carrito | Drawer y página en estado vacío observados |
| Contacto | Input de 48.8 px de altura; textarea de aproximadamente 755.7×270 px en escritorio |

Los campos de contacto inspeccionados no mostraban `required` activo; los placeholders no sustituyen labels visibles. La reconstrucción debe resolver foco, nombres accesibles y validación en los controles que realmente necesite Yas. No hay necesidad actual de copiar formulario, buscador, cantidad o carrito.

## 7. Patrones de datos y superficies

El catálogo separa Cookies/Cakes, pagina grupos de seis y cambia productos con salida/entrada coreografiada. El detalle separa medios e información en columnas de unos 617 px a 1440, con inicio vertical a 150 px; tiene variantes y miniaturas. About añade línea temporal y rotación de imágenes. Wholesale y Contact son superficies distintas. Search, Cart y el error inexistente tienen estado propio y se visitaron expresamente.

En `/fr/` se observaron titulares en inglés al cargar; esto no demuestra traducción completa. La ruta inexistente mostró la pantalla genérica «404 Not Found» de Shopify; esa observación visual no verifica por sí sola el código HTTP. Los estados comerciales y textos pertenecen a Bernice y no son datos de Yas.

## 8. Iconografía e identidad

Iconos de búsqueda, bolsa, menú, cierre, flechas y cantidad dentro del sistema Shopify; logotipos claro/oscuro con intercambio vertical. Footer y wipe usan SVG: los paths observados se conservan en `raw/home-morph-paths.json`. El CTA emplea `textPath` curvado. Las partículas son migas irregulares dibujadas mediante curvas cuadráticas en canvas.

En Yas, iconos funcionales desde un módulo único/Lucide, logo existente conservado y partículas solo como detalle breve. Las formas distintivas no justifican reutilizar logotipo, imágenes o copy de Bernice.

## 9. Responsive: cambios de estrategia y defectos

| Rango / muestra | Comportamiento observado |
|---|---|
| >768 px | Header de escritorio, hero 100vh; parallax fuerte; catálogo 3 columnas |
| ≤768 px | Raíz 14 px; hero 75vh con padding inferior 6rem; título 17vw; CTA vuelve al flujo |
| ≤768 px | Introducción y catálogo a una columna; destacados con gap 2rem; tarjeta 346.81 px a 390 |
| ≤768 px | Cinta de imágenes 60vw/75vw; testimonios 320 px; newsletter 100%, sin mínimo 600 px; flotantes ocultos |
| >1600 px | Padding de destacado pasa de 1.5rem a 4rem |
| 769 y 1024 px | Header de escritorio no cabe: el logo llega a ancho 0; navegación y CTA sufren recorte |

El fallo de tablet está documentado en `raw/home__769x1024.json`, `raw/home__1024x900.json` y capturas correspondientes. La adaptación debe activar navegación compacta antes de que deje de caber, con umbral basado en contenido. No se medirá «fluidez en todos los dispositivos» solo estrechando el escritorio: hay que comprobar 360, 390, 768, umbral de navegación, 1440 y 1920, además de táctil y teclado.

## 10. Movimiento: catálogo reproducible

Fuente de tiempos: `source-scripts/script.js`, `custom.js`, `canvas.js` y CSS observados, sin ejecutar código descargado. La geometría DOM confirma estados; los tiempos son declaraciones de origen, no un benchmark de FPS.

| Efecto | Disparador / recorrido | Parámetros originales |
|---|---|---|
| Scroll suave | Rueda / scroll | Lenis 1.0.42, defaults; conectado a ticker GSAP y ScrollTrigger; `lagSmoothing(0)` |
| Fondo hero | Solo >768; top top→bottom top | Y 70%, imagen scale 1.4, scrub; wrapper termina con radio inferior 5rem y mínimo 90vh |
| Parallax trasero | top bottom→bottom top | Y 50% por defecto; `data-p-displace` puede sobrescribir |
| Parallax delantero | Mismo tramo | Y -75% por defecto |
| Ventana de imagen | top bottom→bottom center+=200 | Máscara 20%/40%→100%, power1.out, scrub; imagen 1.3→1 lineal |
| Ventana instantánea | Entrada de sección | Máscara .75s power2.out; imagen .8s power1.out; retardo incremental .15s |
| Palabras | Entrada de titular | Y 101% y rotación 12°→0; 1.5s expo.out; delay .3; stagger total .5 |
| Líneas | Entrada de párrafo | Y 101%, rotación 12°; 1.2s expo.out; delay .3; stagger .3 |
| Crecer | Entrada de elemento | Scale .6→1; 1s expo.out; delay .5 |
| Aparecer | Entrada de elemento | Opacity 0 y Y 4rem→0; 1s expo.out; delay .5; grupo stagger .4 |
| Marquesina | Continua | 20s lineal infinito; variante inversa 34s; contenedor rotado -10° |
| Cinta de arcos | Continua | 40s lineal, translateX(-50%); secuencia duplicada |
| Categoría: salida | Click tab, interacción temporalmente bloqueada | Y 101%, rotate 15°, .5s power3.in, stagger total .4 |
| Categoría: entrada | Sustitución a los 1.2s | Desde Y 101%, rotate -15°; .5s expo.out, delay 1.2, stagger .4 |
| Testimonios | Continua | 40s lineal |
| CTA inferior | Entrada | Scale .6→1.2, 1.5s expo.out; texto curvo modifica startOffset en 20 con scroll |
| Header | Cambio de contexto / scroll | Fondo .8s curva propia; header 1s; logo claro/oscuro .5s con translateY |
| Hover de producto | Puntero | Imagen secundaria .5s; chips de ingredientes salen de centro scale0 a posiciones CSS en .8s |
| Wipe de navegación | Entrada / salida entre páginas | Morph SVG 1.2s power2.inOut; navegación a 800ms; espera imagen hero o timeout 2s; oculto ≤768 |
| About timeline | Scroll | Altura de línea 0→100%, scrub; anclas cambian a Passed al atravesar umbral |
| Cola de imágenes About | Temporizador | Cada 8s; entrada con retrasos de 200+i×120ms y reciclado a 5s |
| Footer | Scroll | Morph de SVG entre paths observados; footer fijo detrás de main solo si su altura cabe en viewport |
| Migas | Mouseenter/click en botones concretos | Tres partículas; velocidad X 3 / Y 4, gravedad .249, vida ~1s; canvas en bucle a 60FPS |

Curva CSS principal: `cubic-bezier(.28,.71,0,.98)`. No intercambiarla por `ease` genérico si se busca el mismo tacto. El texto dividido conserva espacios y orden accesible; los duplicados visuales de marquesinas deben ocultarse del árbol accesible.

## 11. Ingeniería, accesibilidad y coste

La referencia sirve Shopify, GSAP core 3.12.5, ScrollTrigger 3.9.1 y Lenis 1.0.42. Esas versiones observadas explican el comportamiento; no constituyen una recomendación de dependencias actuales. No se necesita Shopify para reproducir la composición de un catálogo estático con pedidos por mensajería.

Hallazgos que deben corregirse al reconstruir:

- Menú móvil abierto: el foco permanece fuera; no se observó `aria-modal`, `role=dialog` ni `inert`; Escape no lo cierra. El cierre explícito sí funciona. Implementar foco inicial, ciclo Tab, Escape, retorno al disparador y bloqueo del fondo.
- No se encontró `prefers-reduced-motion` en los CSS y JS conservados. No equivale a inspeccionar todo Shopify; sí basta para exigir una política propia centralizada y contenido visible sin animación.
- Dos canvas de tamaño de página se limpian continuamente incluso sin migas. Inferencia de coste para el tamaño inicial 1428×7806: unos 89 MB para dos buffers RGBA, antes de otros costes. No es memoria medida del proceso. Preservar el detalle con un solo canvas de viewport, activo únicamente mientras existan partículas, suspendido al ocultar pestaña y con movimiento reducido.
- Mezcla de versiones core/plugin GSAP; en la nueva aplicación se fijarán versiones compatibles en lockfile.
- El efecto de footer fijo depende de geometría y puede fallar con traducciones largas: conservar la composición y limitar el fijado a los casos que realmente caben.
- Animar transform y opacity, reservar ancho/alto de imágenes, diferir las inferiores y evitar scripts/fuentes externos durante la navegación normal.

No se midieron FPS en un teléfono físico ni Core Web Vitals de la futura web. Las mejoras propuestas son decisiones de implementación pendientes de comprobar en el producto real.
