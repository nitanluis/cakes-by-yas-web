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

### FeaturedBackdrop

«Doble firma», primera dirección elegida por el usuario tras revisar el monograma. Dos líneas altas y próximas, con frases sólidas y en contorno dentro de cada línea. Lema oficial y frase de celebración localizada, detrás de tarjetas opacas. Movimiento continuo en sentidos contrarios, también sin scroll y durante hover/foco. Estados estáticos sin JS o con movimiento reducido. Archivo `src/components/FeaturedBackdrop.astro`; muestra en `/galeria/#featured-background`.

### Navigation

Menú de escritorio y diálogo compacto con foco inicial, Escape, retorno al disparador, bloqueo del fondo y enlaces reales. Selector de idioma conserva ruta cuando existe. Archivo `src/components/Navigation.astro`.

### Catalog

Menú completo y precios en fuente única; filtros mejorados con JS, todo disponible sin JS. Estado de categoría seleccionado y anuncio de cambio; precios por tamaño no se duplican entre idiomas. Archivo `src/components/Catalog.astro`.

## Motion

GSAP y ScrollTrigger de la misma versión, Lenis solo en escritorio con movimiento permitido. Tiempos de origen: palabras1.5s expo.out, líneas y wipe1.2s; imágenes.5s; cinta de arcos40s; curva CSS(.28,.71,0,.98). El fondo de destacados «Doble firma» se mueve continuamente en sentidos opuestos a36/28px/s; no depende del scroll ni se detiene al hover/foco. El revelado nunca oculta contenido antes de que el módulo haya inicializado. La cinta continúa al hover/foco por petición explícita del usuario; se pausa con pestaña oculta o preferencia de movimiento reducido. El usuario pidió retirar el control visible. Sin parallax ni loops con movimiento reducido. El informe de origen documenta la referencia, no la implementación actual de cada detalle.

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

Se retiró la altura mínima132vh y el centrado vertical de destacados. La introducción termina con3rem de padding y las tarjetas ocupan el ancho disponible con gutter4vw, sin el límite1800px. Las cuatro bandas originales usaban168/98.823529px/s, medidas en Bernice. Tras probar «Y monumental», el usuario eligió «Doble firma»: dos líneas más altas y cercanas, con sólido/contorno dentro de cada una y desplazamiento continuo36/28px/s.

Por instrucción del usuario, no hay botón de pausa ni estrellas de cuatro puntas. La cinta utiliza el isotipo de Cakes by Yas como separador; los pasos, nodos circulares. La preferencia de movimiento reducido y la pausa por pestaña oculta siguen activas. Evidencia nueva en `.impeccable/review/featured-v3/`.

## Identidad SVG y entrada · 2026-10-31

La fuente es el ZIP entregado por el usuario, conservado en `assets/brand-delivery-2026-10-31/`. Se elige la variante incluida de coral/tinta ya acordados; el isotipo usa ese mismo coral. Navegación, diálogo, pie, cinta, galería, errores e iconos usan `src/data/brand.ts`. El pie utiliza lettering en marfil sobre fondo oscuro. Los PNG de compatibilidad se renderizan de estos vectores, sin reutilizar la imagen anterior.

### Preloader

`src/components/Preloader.astro`: «Firma de crema», tres máscaras de trazo revelan el contorno exacto del isotipo entregado; después aparece el lettering original en dos filas y el lema. La firma completa se sostiene antes de viajar a la cabecera durante la cortina curva. Mínimo3.6s antes del handoff, recursos acotados a1.8s en paralelo, watchdog/fail-safe6.5s. Sin movimiento de puntero ni progreso ficticio. Aparece una vez por pestaña (clavev2); anclas y visitas posteriores entran directamente. Cualquier teclado, rueda o pointerdown lo despacha sin impedir la acción. JS ausente deja la página visible; movimiento reducido omite la capa. Bootstrap externo versionado evita reutilizar la decisión de la versión anterior desde caché. `?intro=signature` permite repetirlo también en la prueba publicada.

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

La política de reloj GSAP (lagSmoothing0) se aplica a todos los viewports, no solo dentro de la inicialización de Lenis en escritorio. Los timers reales de seguridad del preloader y su timeline deben avanzar con el mismo tiempo transcurrido tras un fotograma largo; en móvil se observó handoff seguido de timeout cuando el ticker conservaba la amortiguación predeterminada. El watchdog y el fail-safe se mantienen.

### Interacciones de marca · 2026-10-31

ProductDialog: el usuario eligió «Dentro del pastel» y pidió abrirlo al pulsar Ask Yas/Ask Yas about this. Los botones de creación y catálogo abren una vista del producto con foto o lettering existente, precio/tamaños del catálogo y rellenos solo donde corresponde. Selección inicial «Prefiero decidirlo con Yas»; no elegir un sabor por el visitante. Continuar por WhatsApp conserva producto y relleno elegidos sin enviar mensajes automáticamente. Combinación, disponibilidad y cotización pendientes de confirmar con Yas. No es checkout. La lista separada de rellenos queda solo como fallback sin JS. Referencia investigada: `/products/celebration-cake` de Bernice utiliza opciones compactas de tamaño, no un selector equivalente de rellenos.

La vista usa dialog nativo, título accesible del producto, foco inicial en cerrar, radios de teclado, Escape, retorno al disparador y scroll del fondo bloqueado. Si se abre desde la ampliación de foto, mantiene la pila de diálogos y vuelve a esa foto al cerrar. Mobile: pantalla completa con cabecera de cierre persistente y foto contenida; escritorio: foto y opciones en dos columnas. ProductDialog entra con transición breve y respeta la preferencia compartida de movimiento reducido. Los enlaces siguen llevando a WhatsApp sin JS o con modificadores.

Hover de navbar: el usuario delegó la elección entre los tres bocetos y se aplica «Sello artesanal». El isotipo conserva su contorno original y realiza una presión700ms de hasta3px, seguida de asentamiento; el lettering permanece estable. Una vez por entrada del cursor o foco visible, sin bucle. Completa el gesto aunque salga el puntero; no se reinicia mientras esté en curso. Touch conserva el enlace directo. La preferencia compartida de movimiento reducido desactiva el gesto y limpia su estado. La galería contiene la variante elegida.

Navigation usa la mecánica medida en Bernice: círculo desde la esquina inferior derecha, superficie800ms con curva de marca; contenido400ms después de600ms. Cierre: contenido400ms, después contracción800ms. Dialog nativo mantiene el fondo inerte y el foco contenido hasta terminar; Escape y enlaces ejecutan el cierre, después se devuelve el foco o se lleva a la sección elegida. En movimiento reducido el cierre es inmediato.

La cortina se dimensiona para cubrir la diagonal en formatos próximos al cuadrado; la proporción120% del lado mayor dejaba esquinas visibles en1120×900. El círculo queda contenido sin crear scrollbar, y solo la lista de navegación puede desplazarse si falta altura. Al recrear Lenis por cambio de breakpoint, un diálogo abierto conserva detenido el scroll del fondo.

BrandArtwork reutiliza los tres paths entregados, sin sustituir el lettering por una fuente. El hover elegido se revisa en `/galeria/#logo-gestures`; el trazo de crema queda reservado a la entrada. La indicación de scroll usa una curva de crema y texto breve; tres ciclos y reposo. CakeCard sustituye la pastilla «View photo» por una esquina coral de ampliación: cuatro esquinas de encuadre y texto que se descubre en hover/foco; visible con tacto. Ninguna flecha adicional.

### Fondo anterior de destacados · Y monumental · histórico

Se elige la cuarta dirección de la comparación, por delegación del usuario. El fondo utiliza una sola copia del isotipo entregado, sin lettering ni lema. Opacidad28% del coral original, tamaño88vw con máximo1120px en escritorio y160vw en móvil, recortado dentro de la sección. No cambia la geometría ni los CTA de CakeCard. El fondo no recibe eventos ni participa en el árbol accesible.

GSAP utiliza la preferencia compartida y su contexto existente: giro−6→2grados, xPercent−3→3 y traslación vertical calculada con las dimensiones reales de sección/isotipo. La distancia incluye la pila móvil; ScrollTrigger recalcula al refrescar o cambiar de breakpoint. El único control temporal es el scroll, sin ticker propio, bucles de CSS ni respuesta al hover. Sin JS se muestra estático; movimiento reducido revierte la animación y conserva la firma sin giro. Recursos y rutas se resuelven desde `src/data/brand.ts` para funcionar también bajo el prefijo de GitHub Pages.

### Fondo vigente de destacados · Doble firma

El usuario pidió movimiento visible incluso sin scroll y eligió la primera dirección. FeaturedBackdrop muestra dos líneas con altura tipográfica clamp(7rem,16vw,20rem), line-height.9 y gap0, inclinadas−6grados. En cada línea se intercalan frases sólidas y de contorno2px; opacidad72% sobre el marfil, tarjetas opacas por delante. Primera línea: «MAKE IT / A YAS DAY.»; segunda: «CELEBRA / CON YAS.» o «CELEBRATE / WITH YAS.» según idioma. No hay isotipo de fondo.

Cada pista duplica dos secuencias idénticas, con tres frases por secuencia y el mismo espacio final. La animación lineal recorre exactamente media pista, en sentidos opuestos. Su duración se calcula como ancho de secuencia/velocidad36 o28px/s; ResizeObserver y fonts.ready recalculan sin asumir que traducir conserva longitud. IntersectionObserver pausa fuera de pantalla; la clase compartida page-hidden pausa con pestaña oculta y motionPreference se conserva como fuente única de preferencia. Hover/foco no cambian el estado. En móvil, las mismas dos líneas se mantienen a media pantalla dentro de su sección mediante sticky y overflow:clip, para acompañar las tres tarjetas sin duplicar bandas. Sin JS queda estático y sin preferencia de movimiento se inicializa el bucle. No hay control visible de pausa por petición previa del usuario.
