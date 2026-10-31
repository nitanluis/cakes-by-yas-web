# CTA de pedidos y entrada de marca — 2026-10-31

La sección inferior de Bernice se midió en Brave mediante la extensión. Su imagen lleva `No_Anim`: no abre una máscara al hacer scroll. El encabezado duplicado está oculto. Se corrigieron ambas diferencias en Cakes by Yas, además de la geometría y el movimiento del botón.

- Ventana 30vw en escritorio y 65vw en móvil, proporción 3:4, imagen fija a escala 1.3 y margen vertical de 8rem.
- SVG 110%, viewBox 0 0 221.66 283.6, peso 600 y tamaño 40 unidades. El texto recorre el arco de startOffset 220 a 20, sin porcentajes, con scrub lineal desde `top bottom+=40` hasta `bottom top`.
- Botón recto, sin máscara de mordisco ni giro; borde 5px y contorno marfil 8px. Entrada de escala .6 a 1.2, expo.out de 1.5s. Hover con relleno desde el cursor y contracción de la etiqueta. La tinta oscura conserva el contraste de la marca sobre coral.
- La referencia carga Lenis 1.0.42 con lerp .1 y sin duración explícita. La versión instalada 1.3.27 conserva la misma ley de amortiguación cuando se elimina nuestra duración de 1.2s. Se usa el token --scroll-lerp; no se cambió la dependencia.

Las muestras reales de scroll están en `.impeccable/review/brand-intro-v1/checks.json`. Tanto en la fuente como en la implementación, el desfase respecto de `220 - 200 * progreso` fue menor a .06 unidades en las muestras registradas. La foto mantuvo escala 1.3. Esto comprueba dirección y recorrido; no mide FPS ni equivale a aprobar visualmente toda la web.

La nueva identidad procede del ZIP del usuario, conservado extraído en `assets/brand-delivery-2026-10-31/`. El preloader revela ese logo, lo desplaza a su posición real en la cabecera y retira una cortina curva coordinada con la entrada del hero. Se reproduce una vez por sesión, se omite al entrar por ancla y se puede interrumpir mediante teclado, toque o rueda. El parámetro local `?intro` permite revisarlo en desarrollo; no fuerza repeticiones en el build publicado.

Se inspeccionaron capturas de escritorio y móvil. El recorrido guardado lo operó CUA; `scripts/flujos.mjs` solo valida el registro. La preferencia de movimiento reducido se revisó en código, sin emular ajustes del sistema. Axe registró cero violaciones en las vistas probadas y contraste incompleto sobre algunas imágenes.
