---
status: proposal-in-local-preview
last-reviewed: 2026-10-30
owner: Usuario y Yas
revisit-trigger: Revisión de composición o fidelidad de fotos
tokens: src/shared/tokens/primitives.css, src/shared/tokens/semantic.css
sidecar: .impeccable/design.json
---

## Overview

Celebraciones personales y repostería artesanal: fotografías grandes, títulos con personalidad, arcos y movimiento con el ritmo medido de Bernice. Referencia y traducción en `docs/design/referencia-bernice/`. El usuario fijó esta dirección y el coral de acción el 2026-10-30. La edición fotográfica queda visible como candidata hasta revisar fidelidad.

**The Real Cake Rule**: el diseño debe mostrar el trabajo de Yas con textura real; no inventar productos, testimonios ni acabados que cambien el pastel.

## Colors

Acción coral y apoyo rosa confirmados. Marfil cálido y tinta oscura son propuestas derivadas de las fotografías. Tinta oscura sobre coral para evitar asumir contraste con blanco pequeño. Tema público claro por dirección editorial; tokens soportan claro/oscuro explícito y sistema para la galería, sin añadir un selector innecesario al producto.

**The Coral Rule**: toda acción principal usa la misma familia coral; el rosa sostiene la composición.

## Typography

Apfel Grotezk local, Luigi Gorlero y Collletttivo, SIL OFL. Peso 800 Satt para hero, titulares editoriales, productos y bandas; 600 para subtítulos y 400 para texto funcional; cuerpo Arial local. Hero 12vw en escritorio, 17vw en móvil; titulares de sección 6rem (3rem en móvil), intro 4.2rem; copy de apoyo 1.5rem. Line-height de titulares .96 para texto sin wrappers de Bernice; el revelado conserva el orden accesible.

La tipografía sigue propuesta: Apfel conserva la referencia; Rosaline, revisada en Fontshare, es candidata solo para acentos y no está instalada. Comparación y criterio en `/galeria/`. El lettering del nuevo logo está trazado en los SVG entregados; no depende de una fuente web.

**The Scale Rule**: conservar el contraste de escala entre titular, fotografía y detalle; no sustituirlo por tarjetas uniformes.

## Layout

Gutter 4vw, header 100 px. Hero de viewport completo en escritorio, con fotografía de composición horizontal y CTA circular. Móvil cambia a una composición apilada para mostrar el pastel completo. Navegación compacta a 1120 px [PROPUESTA a verificar]; cambio a una columna a 768 px; muestras 360/390/768/1120/1440/1920.

**The Fit Rule**: el menú cambia de estrategia antes de comprimir el logo o cortar acciones.

## Elevation & Depth

Planos de color, bordes y máscaras fotográficas. No se usan sombras genéricas de tarjeta. Las sombras de contacto pertenecen a las fotos.

**The Surface Rule**: obtener profundidad con fotografía y composición antes que con sombras.

## Shapes

Arcos de radio 500 px con base de 5rem, imágenes de 1.5rem, paneles de 3rem y controles píldora. Bordes de 2 px también en destacados. Nunca recortar velas o topper para satisfacer una máscara.

## Components

### Button

Enlace real para navegar/contactar, botón nativo para cambiar estado. Variantes primary, outline, circle (hero) y order (consulta inferior). Estados hover, focus-visible y disabled únicamente cuando corresponda. Caso límite: etiqueta extensa en español. Archivo `src/components/Button.astro`.

### CakeCard

Imagen con dimensiones, nombre y categoría comprobables; enlace/botón para ampliar y consultar. Variantes arch y regular; sin precio asociado a una foto de diseño personalizado cuando no existe cotización. Galería con ambas variantes y velas/topper completos; fallback propio de imagen ausente pendiente. Archivo `src/components/CakeCard.astro`.

### Navigation

Menú de escritorio y diálogo compacto con foco inicial, Escape, retorno al disparador, bloqueo del fondo y enlaces reales. Selector de idioma conserva ruta cuando existe. Archivo `src/components/Navigation.astro`.

### Catalog

Menú completo y precios en fuente única; filtros mejorados con JS, todo disponible sin JS. Estado de categoría seleccionado y anuncio de cambio; precios por tamaño no se duplican entre idiomas. Archivo `src/components/Catalog.astro`.

## Motion

GSAP y ScrollTrigger de la misma versión, Lenis solo en escritorio con movimiento permitido. Tiempos de origen: palabras 1.5s expo.out, líneas y wipe 1.2s; imágenes .5s; marquesinas 20/34s y arcos 40s; curva CSS (.28,.71,0,.98). El revelado nunca oculta contenido antes de que el módulo haya inicializado. Las cintas y bandas continúan al hover/foco, por petición explícita del usuario; se pausan con pestaña oculta o preferencia de movimiento reducido. El usuario pidió retirar el control visible. Sin parallax ni loops con movimiento reducido. La primera preview puede implementar progresivamente el catálogo de efectos; el informe de origen no acredita que todos estén ya construidos.

**The Motion Access Rule**: sin animación o sin JavaScript se puede leer y consultar todo el catálogo.

La preferencia de movimiento reducido suspende las mejoras GSAP/Lenis y conserva el desplazamiento nativo. Las siete parejas de fotos y las variantes de componentes se revisan en `/galeria/`, solo en desarrollo.

## Barreras y evidencia

`check:tokens` cubre CSS, estilos Astro, colores inline/clases arbitrarias y ubicación de SVG; excepción documentada para umbrales media. La comprobación de dimensiones se limita a px/ms y pesos, no garantiza detectar todos los literales en JS ni unidades relativas: barrera parcial declarada. `check:design` sincroniza reglas y archivos. La galería se excluye del artefacto de producción. Capturas y resumen del recorrido en `.impeccable/review/flujos/`; el verde del script no sustituye la inspección visual humana.

`check:colors` calcula luminancia relativa sRGB y compone alfas contra el fondo declarado. Exige 4.5:1 a cinco pares de texto en claro y en los tokens oscuros internos. Texto oscuro/coral: 4.82:1. No valida automáticamente contraste sobre fotografías, estados de foco, raster del logo ni todos los componentes del tema oscuro.

## Do's and Don'ts

- Conservar proporciones y detalles de los pasteles al mejorar el contexto fotográfico.
- Mostrar precios y condiciones en ambos idiomas desde la misma fuente.
- Usar el coral para la siguiente acción útil.
- Mantener el contacto disponible sin esperar una animación.
- No inventar historia, reseñas, certificaciones o disponibilidad.
- No publicar la dirección doméstica.
- No convertir la galería de desarrollo en una página pública.

## Segunda pasada de composición

Los siete ajustes indicados por el usuario se ejecutan en `src/styles/reference-motion.css` y componentes reales. CTA circular de una palabra, máscara de mordisco medida y giro 30→10 grados; onda de cursor en píldoras; entrada SVG curva; revelado de palabras y líneas mediante SplitText; hero con planos de scroll; destacados con cuatro bandas diagonales; cinta continua con dos secuencias y máscaras que crecen desde 20% × 40%; catálogo fotográfico con filtros; CTA central con texto en arco y proceso de tres pasos con numeración editorial.

El catálogo tiene cuatro familias con fotografía identificada y seis paneles tipográficos mientras faltan fotos específicas. Los acercamientos de hover usan la misma fotografía: no se inventa una vista interior. El chocoflan es edición candidata de una imagen del repositorio histórico y necesita revisión de fidelidad. No se añaden carrito ni cantidades: el flujo real continúa en WhatsApp/Instagram.

Corrección óptica posterior: botones sin flechas repetidas; círculo sin aro ni borde, etiqueta única en mayúsculas, máscara de tres entrantes de Bernice. Tarjetas sin flechas permanentes ni estrellas de metadatos; acciones alineadas y fotos 4:5 para conservar proporciones. Texto en tinta sobre coral (4.82:1).

## Ajuste de ritmo y separadores

Se retiró la altura mínima 132vh y el centrado vertical de destacados. La introducción termina con 3rem de padding y las tarjetas ocupan el ancho disponible con gutter 4vw, sin el límite 1800px. Fondo: velocidad real medida 168px/s y 98.823529px/s en sentido inverso; la duración se calcula desde media tira, también al cambiar idioma, fuente o tamaño. No confundir duración igual con velocidad igual.

Por instrucción del usuario, no hay botón de pausa ni estrellas de cuatro puntas. La cinta utiliza el isotipo de Cakes by Yas como separador; los pasos, nodos circulares. La preferencia de movimiento reducido y la pausa por pestaña oculta siguen activas. Evidencia nueva en `.impeccable/review/featured-v3/`.

## Identidad SVG y entrada · 2026-10-31

La fuente es el ZIP entregado por el usuario, conservado en `assets/brand-delivery-2026-10-31/`. Se elige la variante incluida de coral/tinta ya acordados; el isotipo usa ese mismo coral. Navegación, diálogo, pie, cinta, galería, errores e iconos usan `src/data/brand.ts`. El pie utiliza lettering en marfil sobre fondo oscuro. Los PNG de compatibilidad se renderizan de estos vectores, sin reutilizar la imagen anterior.

### Preloader

`src/components/Preloader.astro`: logo vectorial revelado con expo.out, gesto mínimo de puntero y entrega a su ubicación real en la cabecera durante una cortina curva de 1.2s. Aparece una vez por pestaña; los enlaces con ancla y visitas posteriores entran directamente. Cualquier teclado, rueda o pointerdown lo despacha sin impedir la acción. Sin porcentaje falso ni esperas de red ilimitadas: espera de recursos acotada a1.8s, watchdog3.6s y fail-safe CSS. JS ausente deja la página visible; movimiento reducido oculta la capa. Bootstrap externo pequeño, mismo origen, necesario antes del primer pintado para evitar destellos; CSP no necesita script inline. Galería enlaza la repetición de desarrollo con `?intro`.

### CTA inferior medido de nuevo

La foto de Bernice tiene `No_Anim`; no se abre con una máscara al scroll. Se preservan proporción3:4, ancho30vw/65vw, zoom estático1.3 y radio inferior5rem. El encabezado duplicado está oculto en origen; aquí queda accesible con sr-only. Se utiliza el trazado221.66×283.6 y startOffset220→20 en unidadesSVG con scrub lineal, no porcentajes. El botón order permanece recto, con contorno8px/borde5px, onda desde el cursor y crecimiento.6→1.2 expo.out1.5s. Circle con mordisco queda reservado al hero. El texto oscuro sobre coral conserva el contraste de la marca.

Scroll de escritorio: se verificó la librería pública Lenis1.0.42 de Bernice: duration sin fijar y lerp0.1. En Lenis1.3.27 se retira duration1.2 para usar el mismo amortiguamiento exponencial, con tickerGSAP/lagSmoothing0. Touch permanece nativo; enlaces internos mantienen navegación suave. La equivalencia se refiere a la ley de amortiguación, no a FPS físicos medidos.

## Hero editorial de marca · 2026-10-31

El usuario pidió sustituir la imagen por una escena más memorable y coherente con la nueva identidad. `yas-day-hero-v2.png` parte directamente de la fotografía real del pastel de mariposas (DVY7b_UkX74), con marfil, reflejo rosa y una cinta coral externa al producto. Es una composición generativa para portada, separada de las fotos de catálogo sin accesorios. El pastel conserva corona, mariposas y grupos rosa/blanco/dorado; la geometría fina y la textura requieren revisión comercial junto al original. No es una nueva captura de cámara.

`src/data/hero.ts` centraliza la imagen y su texto alternativo bilingüe para Home y la imagen social. Se conserva el encuadre de ancho completo y el movimiento existente. Archivo nativo1672×941; variantes WebP800/1200/1672 e imagen social JPEG1200×630. Prompt y procedencia en `assets/photography/generation-record-hero-v2.json`. El hero anterior se conserva como versión histórica.

### Exploración de alternativas · 2026-10-31

El usuario no eligió el hero v2 y autorizó propuestas conceptuales sin limitarse a pasteles hechos por Yas. Tres direcciones, todavía sin selección: La firma (pastel coral), El primer corte (porción y dulce de leche) y El gesto (macro de crema coral). Recursos y prompts separados en `assets/photography/hero-concepts-2026-10-31/`; se identifican como conceptos generados, no como encargos reales ni contenido de catálogo.

Comparación solo en desarrollo `/galeria/hero/signature/`, `/galeria/hero/first-slice/` y `/galeria/hero/cream-gesture/`. Importa Home real con una fuente fotográfica opcional, conserva el movimiento y omite el preloader para facilitar la comparación. El selector no publica ni cambia la portada; la fuente predeterminada en `src/data/hero.ts` sigue intacta. Ninguna ruta de galería se genera en producción.

### Paridad de tiempos en producción

La minificación puede reescribir1200ms como1.2s sin cambiar el significado CSS. La lectura JS debe conservar la unidad: `src/shared/css-time.ts` interpreta ms y s; `motion.ts` usa esa única conversión para GSAP, delays y timers del preloader. `npm run check:motion` comprueba equivalencia en todos los tokens de duración y retraso, además de casos decimales/espacios y rechazo de valores sin unidad. No dividir siempre por1000: en el primer build publicado esto aceleraba las transiciones JS y activaba prematuramente el watchdog del preloader.

El crecimiento del CTA inferior declara xPercent−50/yPercent50 y x/y0 explícitos en GSAP. Así conserva el centrado en porcentajes al cambiar de ancho, sin reutilizar una traslación calculada en píxeles con el tamaño anterior del botón. El recorrido de escala sigue siendo.6→1.2 con expo.out.
