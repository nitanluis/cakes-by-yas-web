---
status: adopted-for-local-preview
last-reviewed: 2026-10-30
owner: "Usuario: responsable técnico; Yas: operación del negocio"
revisit-trigger: "Cambio de alcance, necesidad de CMS/cuentas/cobro web, nuevo requisito por petición o cambio de condiciones del hosting"
---

# ADR-0001 · Catálogo bilingüe estático y pedidos por conversación

## Contexto

La primera versión muestra productos, menú y opciones de Cakes by Yas. Cumpleaños es el servicio principal; celebraciones grandes y mesas de postres también se ofrecen. La operación se concreta por WhatsApp e Instagram, con recogida, pago por cash/Zelle y ubicación exacta comunicada después de confirmar.

La web necesita inglés y español, selector manual y orientación según preferencia del navegador con inglés como fallback. El usuario mantiene diseño y contenido conmigo. No hay necesidad confirmada de panel editorial, cuentas ni checkout.

Éxito comercial inicial: al menos 5 pedidos en 30 días combinando web y publicidad de Instagram. La inversión mensual se acepta si aporta una ventaja clara; no hay límite económico fijado ni autorización para contratar servicios.

## Drivers

1. D1: lectura y navegación fluidas, con imágenes de calidad y comportamiento móvil comprobado.
2. D2: contenido completo en ambos idiomas, URLs compartibles y encontrables.
3. D3: edición por el usuario conmigo, con fuente única de precios y revisión previa.
4. D4: operación y costes proporcionales a un catálogo sin gestión interna de pedidos.

## Alternativas

| Alternativa | Ventaja para este caso | Coste o límite |
|---|---|---|
| Astro estático e interactividad localizada | HTML por defecto y JS solo donde aporta interacción; catálogo portable entre alojamientos. | Reconstruir la composición visual y preparar la elección de idioma en la entrada neutral. |
| Next.js con exportación estática | Reutilizar parte del conocimiento/componentes React del intento anterior. | Adaptar funciones dependientes de servidor e imágenes; revisar cuánto JS y animación realmente se conserva. |
| Next.js con servidor | Negociación del idioma y contenido dinámico por petición. | Runtime y operación de servidor sin requisito actual que los necesite para catálogo/pedidos. |

La matriz por driver está en `PRODUCT.md`.

## Propuesta

**[CONTEXTUAL] Astro estático con TypeScript, CSS y contenido estructurado versionado.** Interactividad localizada para navegación, idioma o galería cuando el diseño la necesite. Sin imponer React o GSAP como base global.

El catálogo tiene precios/opciones compartidos y textos localizados. No se mantienen dos listas de precios ni se edita contenido dentro de varios componentes.

Idiomas propuestos: `/en/` y `/es/`. La URL explícita gana; la entrada neutral elige entre preferencia manual guardada, lista del navegador e inglés. El selector conserva la página/sección equivalente cuando exista. Sin JS o almacenamiento, los enlaces manuales y el contenido inglés siguen disponibles. Se comprueban claves, metadatos y navegación en ambas versiones.

Pedidos mediante enlaces a WhatsApp/Instagram. Un mensaje preparado puede incluir el producto y pedir fecha, porciones, masa, relleno y diseño. La web no confirma fecha ni recibe pagos. La dirección precisa doméstica no forma parte de los recursos públicos.

Medición inicial manual de pedidos confirmados y su origen declarado; un pedido se cuenta una vez. La publicidad en Instagram no implica incorporar automáticamente un píxel al sitio.

## Hosting y costes

Vercel es la preferencia del usuario para pruebas y permite publicar Astro estático. Su plan Hobby se restringe a uso personal no comercial; su política incluye promocionar productos/servicios como uso comercial. En la consulta del 2026-10-30, Pro aparece desde $20/mes, con consumo/condiciones aplicables. No se propone prometer alojamiento comercial gratuito en Hobby.

**Plan de Vercel y gasto pendientes de concreción antes de desplegar.** Aceptar un coste mensual justificado no autoriza activar un plan de pago.

El artefacto estático deja abierta la migración. Cloudflare Workers Static Assets entra como alternativa para estudiar si se prioriza reducir gastos: su documentación separa el servicio gratuito de assets de la ejecución de scripts facturable. Cloudflare recomienda Workers para proyectos nuevos; no se elige Pages por su nombre histórico. Se revisarían condiciones, cuenta, previews y headers antes de escoger ese despliegue.

## Evidencia consultada el 2026-10-30

- Astro: [arquitectura de islas](https://docs.astro.build/en/concepts/islands/), [i18n](https://docs.astro.build/en/guides/internationalization/) y [despliegue en Vercel](https://docs.astro.build/en/guides/deploy/vercel/). [CONTEXTUAL] Documentan capacidades; la elección deriva de D1–D4.
- Next.js: [exportación estática](https://nextjs.org/docs/app/guides/static-exports) e [internacionalización](https://nextjs.org/docs/app/guides/internationalization). [CONTEXTUAL] Alternativa real con adaptación de funciones dinámicas.
- Vercel: [uso comercial](https://vercel.com/docs/limits/fair-use-guidelines) y [precios](https://vercel.com/pricing). Condiciones a verificar otra vez antes de contratar.
- Cloudflare: [facturación de assets](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) y [orientación de Pages a Workers](https://developers.cloudflare.com/pages/).
- Las versiones exactas de paquetes, Node y herramientas se fijarán al preparar la implementación, tras contrastar compatibilidad y política de mantenimiento; todavía no hay lockfile nuevo.

## Consecuencias y comprobaciones

- Actualizar contenido requiere publicar una nueva versión; encaja con el responsable editorial confirmado.
- Fuentes e imágenes se preparan para servir desde el propio sitio. Nuevos orígenes/scripts de runtime requieren justificación.
- El build se bloqueará si faltan traducciones, se duplican/inconsisten datos de catálogo o fallan las comprobaciones de tokens, iconos y documentación que se instalen.
- La detección por cabecera de servidor de Astro requiere rendering bajo demanda; no se atribuye esa capacidad a una exportación estática. El mecanismo propuesto utiliza el navegador en la entrada neutral.
- Revisar manualmente fotos, logo y composición; comprobar carga, teclado, movimiento reducido, 404 y enlaces de contacto. El framework no acredita por sí solo el acabado premium.
- Exposición de dependencias: herramientas de generación `build_only`; JS que se sirve `client`. Reevaluar si se añade SSR o funciones.

## Pendientes que no se inventan

- Fecha objetivo, techo de gasto y cuenta/plan de hosting.
- Capacidad semanal, momento del cobro y reglas comerciales adicionales que se quieran publicar.
- Fotografías originales/procedencia y dirección visual de foundations.
- Procedimiento de publicación para Yas: concretar si comparte el enlace comercial o debe accionar la publicación técnica; el usuario mantiene diseño y manejo.
- Revisión final de simplificación del alcance antes de comenzar pantallas.
