# Revisión de bases — 2026-10-30

El usuario autoriza afinar design-foundations antes de incorporar las mejoras que tiene en mente. Es una revisión sobre la composición existente, conservando la referencia Bernice y las decisiones de marca ya confirmadas.

## Mesa de trabajo

`http://127.0.0.1:4321/galeria/`, solo en desarrollo. La ruta anterior bajo `_gallery` era ignorada por Astro; se corrigió, junto con las referencias de documentación. Ahora se comprobó la mesa real en el navegador y se confirmó 404 para `/galeria/` en preview del build.

- Roles de paleta y diez contrastes calculados: cinco combinaciones en claro y en tokens oscuros internos. Todos ≥4.5:1. Resultado reproducible: `npm run check:colors`, `audit/design-contrast.json`.
- Logo actual y muestra tipográfica de Apfel; Rosaline enlazada como candidata de acento, sin instalar ni sustituir la identidad.
- Seis parejas original/edición con diferencias específicas y estado de revisión. El pastel de dos pisos permanece en reserva.
- Componentes reales: botones primary/outline/circle/disabled y etiqueta extensa; tarjetas arch/regular; navegación y catálogo vigentes.

## Correcciones verificadas

Pausar movimiento ya no detiene Lenis dejando el desplazamiento bloqueado: revierte las mejoras y restaura scroll nativo. Se comprobó pausa → navegación a `#order` → reanudación. Texto sobre rosa tiene rol propio, estable aunque los tokens globales de tinta cambien. Tamaño del wordmark queda centralizado en primitivos. Las animaciones de hero/CTA/footer solo se registran cuando sus elementos existen.

Build completo: cero errores, advertencias o hints de tipos; barreras de tokens, diseño, contrastes, contenido, claims y artefacto pasan. HTTP del build: inglés/español 200; rutas inexistentes y mesa interna 404. Capturas, prueba de pausa y límites en `.impeccable/review/foundations/`. La mesa se revisó a 2560×1255 sin desborde; el control de viewport se interrumpió al intentar las muestras nuevas, por lo que la revisión móvil específica de la mesa sigue pendiente. No se presenta la evidencia de la home de la iteración anterior como prueba móvil de esta nueva mesa.

## Decisiones abiertas

1. El usuario entregó siete mejoras concretas, implementadas en la segunda pasada. Evidencia nueva separada en `.impeccable/review/reference-v2/`.
2. Aceptación individual de fotos: fondo aceptado no equivale a fidelidad aprobada de todos los productos.
3. Acabado limpio del logo y cierre de tipografía/cuerpo; Apfel/Arial siguen siendo la propuesta actual.
4. Afinar composición y parámetros de movimiento frente a Bernice y a la respuesta visual del usuario.

La automatización verifica contraste de tokens, geometría y comportamiento; no decide si el pastel parece natural ni si el acabado representa al negocio. Las capturas se miraron en escritorio. La aceptación visual y comercial continúa abierta.
