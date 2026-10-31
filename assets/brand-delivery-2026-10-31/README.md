# Cakes by Yas — SVG del logo elegido

Fuente: la lámina aprobada con isotipo curvo y eslogan «Make it a Yas day.».

## Archivos

- cakes-by-yas-logo.svg: logo principal completo con isotipo, lettering y eslogan. Colores planos muestreados de la imagen: coral #EA6272 y cacao #3C2222 (#3C2224 en el eslogan).
- cakes-by-yas-isotipo.svg: isotipo independiente.
- cakes-by-yas-logo-colores-marca.svg: misma geometría, con los colores declarados en la paleta de la propuesta (#EA677D y #352127).
- cakes-by-yas-logo-preview-ivory.png: vista previa sobre marfil.
- comparacion.png: referencia arriba y render vectorial abajo.
- verification.json: resultados de la comprobación geométrica.

Los SVG tienen fondo transparente. Isotipo, letras y eslogan son trazados Bézier: no hay PNG incrustado, elementos de texto, fuentes externas ni dependencias. Los tres elementos están identificados como isotipo, lettering y slogan.

## Fidelidad y límite

Se reconstruyeron los contornos directamente desde la parte superior de la lámina aprobada, sin sustituir la tipografía. Se estimó el alfa separando color del fondo, se trabajaron máscaras a 4× y se ajustaron curvas con Potrace; el SVG se optimizó con SVGO.

La comparación de la silueta del SVG renderizado a escala nativa con la silueta estimada del PNG da IoU 0.9979277664 (99,79 %). La distancia entre píxeles de borde es de 1 px en el percentil 95 y un máximo de 1,414 px, calculada sobre la cuadrícula nativa del PNG. Esta medida compara siluetas, no color o textura, y no demuestra una equivalencia exacta al arte vectorial original, que no está disponible.

La lámina generada contiene leves variaciones de color y textura raster. Este SVG usa rellenos planos para tener un logo limpio y escalable. Por tanto, es una reconstrucción vectorial de gran fidelidad; no se garantiza igualdad literal de cada píxel del PNG.

## Regeneración y verificación

Herramientas locales de esta entrega: audit/brand-vector-tools/prepare.py y vectorize.cjs. No se han modificado el logo público ni los componentes de la web.

