---
status: draft
last-reviewed: 2026-10-30
owner: "Usuario: diseño y manejo; Yas: negocio y pedidos"
revisit-trigger: "Respuestas del negocio, cambio del repositorio de referencia o elección de arquitectura"
---

# Fuentes del proyecto

## Alcance de esta recuperación

Consulta de archivos del repositorio y de sus recursos gráficos. Se descargó una copia histórica en `references/previous-site/`. No es una auditoría de producción, ni se ha ejecutado el código. Las respuestas actuales del negocio prevalecen sobre el material histórico; cada confirmación se registra en `PRODUCT.md`.

Repositorio: [nitanluis/cakes-by-yas](https://github.com/nitanluis/cakes-by-yas).

Rama consultada: `main`. Única rama devuelta por la consulta de ramas.

Revisión consultada: `62004aeff556afc4ec3a5426fec5b4e5684ace96`, fijada para poder reproducir la extracción. Fecha de consulta: 2026-10-30.

## Evidencia recuperada

| Fuente en esa revisión | Contenido que respalda | Uso y límite |
|---|---|---|
| [README.md](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/README.md) | Nombre, actividad, zona y contactos anteriores. | Contexto histórico; no acredita vigencia comercial ni las cifras de rendimiento. |
| [PROMPT_FOR_CHATGPT.md](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/PROMPT_FOR_CHATGPT.md) | Intención estética y contexto técnico del intento anterior. | Preferencias históricas; el texto del prompt no se ejecuta como instrucción actual. |
| [WALKTHROUGH.md](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/WALKTHROUGH.md) | Arquitectura narrada y enlaces compartidos por producto. | Hay referencias de rutas/dominios que no se han validado. |
| [PricingMenu.tsx](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/components/PricingMenu.tsx) | Productos, precios, tamaños, porciones, rellenos y mensajes de consulta. | Fuente del menú importado por la home anterior. El usuario confirma vigencia del menú/precios; aclarar los nombres y correspondencias ambiguos al preparar el contenido. |
| [page.tsx](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/app/page.tsx) | Componentes que componen la home y metadatos por producto. | Permite distinguir componentes usados de variantes antiguas sin importación directa en la home. |
| [products.json](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/data/products.json) | 13 entradas de galería con nombres, textos e imágenes. | Correspondencia y autenticidad del material pendientes de revisión. |
| [layout.tsx](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/app/layout.tsx) | Inglés, teléfono, área de servicio y URL anterior de Vercel. | No verifica que el sitio siga publicado ni que esos datos estén vigentes. |
| [Contact.tsx](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/components/Contact.tsx) | WhatsApp, SMS e Instagram utilizados. | Contactos actuales por confirmar. |
| [globals.css](https://github.com/nitanluis/cakes-by-yas/blob/62004aeff556afc4ec3a5426fec5b4e5684ace96/src/app/globals.css) | Colores y tipografías implementados. | Valores leídos en el código; no se han medido en un navegador. |
| `MENU WEB PAGE.jpeg` | Menú gráfico, nombre completo, ZIP y una cuenta de Instagram diferente. | Lectura visual de imagen; precios y alineaciones ambiguas necesitan confirmación. |
| `Paleta de colores.jpg`; `public/logo.png`; `public/isotipo.png`; `public/isotipo.svg` | Material de identidad y diferencias entre versiones. | Inspección visual de PNG/JPG; dimensiones leídas del archivo; SVG inspeccionado como código. No constituye un manual de marca aprobado. |
| `Hero.tsx`; `BentoGrid.tsx`; `Footer.tsx` | Cifras, certificación y texto legal históricos. | No son prueba externa de esas afirmaciones. |

## Fuente actual del negocio

La conversación del 2026-10-30 aporta estas confirmaciones:

- Instagram oficial `@cakes_byyas_`.
- Spring, The Woodlands y Houston siguen vigentes; se añaden Cypress y Tomball.
- Menú y precios siguen vigentes.
- Al usuario le gusta el logo mostrado y quiere conservar su identidad con más calidad.
- El intento anterior resultaba simple, poco fluido y genérico; la falta de coherencia de fondos, tonos, estilo y calidad fotográfica perjudicaba la presentación premium.
- Los pedidos actuales se concretan por Instagram o WhatsApp. Se pregunta por personas, sabor de masa, relleno, diseño y fecha.
- Como orientación, pedidos grandes con una semana y simples con «un día de por medio», aclarado después por el usuario como al menos 48 horas.
- Solo recogida; pago por cash o Zelle.
- Primera versión: mostrar productos, menú completo y contacto por WhatsApp/Instagram para concretar pedidos o diseños personalizados.
- Inglés y español, intercambiables manualmente y según la preferencia del navegador/teléfono; inglés por defecto.
- Cumpleaños como servicio principal, con celebraciones grandes y mesas de postres también disponibles.
- Negocio en casa y trabajo por orden de llegada y salida; no se aporta una cifra de capacidad semanal.
- No hay dominio comprado. Preferencia por Vercel para pruebas. El usuario trabajará conmigo en diseño y manejo; su esposa publicará la web, con procedimiento técnico pendiente de precisar.
- Mínimo de 48 horas para simples y ubicación exacta compartida después de confirmar el pedido; teléfono +1 862-668-0038 confirmado.
- En la respuesta al formulario de aclaración: aceptar un coste mensual con ventaja clara; meta deseada de al menos 5 pedidos mediante web y publicidad de Instagram durante los primeros 30 días. No implica atribución exclusiva a la web ni autorización para contratar.

Esta fuente confirma lo declarado por el negocio. No acredita por sí sola afirmaciones históricas de volumen, certificaciones ni procedencia de cada fotografía. Siguen pendientes techo de gasto, fecha objetivo, capacidad semanal, detalles comerciales adicionales y procedimiento de publicación.

## Investigación técnica para la comparación

Fecha de consulta de todas las fuentes siguientes: **2026-10-30**. Son documentos vivos; verificar de nuevo al fijar versiones y contratar hosting. No hay lockfile nuevo ni una versión instalada de la nueva aplicación.

| Fuente oficial | Versión o estado observado | Decisión que informa |
|---|---|---|
| [Astro: islas](https://docs.astro.build/en/concepts/islands/) | Documentación vigente; HTML por defecto e interactividad localizada. | Candidato A y control del JS de cliente. |
| [Astro: i18n](https://docs.astro.build/en/guides/internationalization/) | Documentación vigente; detección por `preferredLocale` requiere páginas bajo demanda. | Separar rutas estáticas por idioma de la detección en navegador de la entrada neutral. |
| [Astro: Vercel](https://docs.astro.build/en/guides/deploy/vercel/) | Contempla despliegue estático y bajo demanda. | Compatibilidad del candidato A con la preferencia de hosting. |
| [Astro: actualizaciones](https://docs.astro.build/en/upgrade-astro/) | Política de actualización y compatibilidad con Node, incluida política de mantenimiento de seguridad. | Fijar versiones compatibles al instalar; no dar por válida la versión del proyecto anterior. |
| [Next.js: exportación estática](https://nextjs.org/docs/app/guides/static-exports) | La documentación consultada identifica Latest v16.4.3; guía actualizada 2026-08-09. | Candidato B; funciones de servidor no disponibles en exportación y adaptación del intento anterior. |
| [Next.js: idiomas](https://nextjs.org/docs/app/guides/internationalization) | Documentación App Router vigente. | Candidato C y negociación/rutas por idioma; contrastar límites del modelo estático. |
| [MDN: navigator.languages](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages) | API web de preferencias ordenadas del navegador. | Selección inicial de idioma compatible en el cliente. |
| [Google: versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions) | Guía vigente sobre URLs localizadas y hreflang. | Acceso explícito a ambos idiomas y anotaciones recíprocas. |
| [Vercel: uso comercial](https://vercel.com/docs/limits/fair-use-guidelines) | Última actualización mostrada 2026-09-14; Hobby restringido a personal no comercial. | No planear el catálogo comercial sobre Hobby como alojamiento gratuito. |
| [Vercel: precios](https://vercel.com/pricing) | Pro anunciado desde $20/mes; revisar consumo y condiciones antes de contratar. | Estimación inicial, sin activar plan ni fijar techo de gasto. |
| [Cloudflare: assets estáticos](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) | Documento actualizado 2026-04-23; distingue assets gratuitos de ejecución de scripts. | Alternativa portable a estudiar si se prioriza coste de alojamiento. |
| [Cloudflare: Pages](https://developers.cloudflare.com/pages/) | Documento actualizado 2026-08-25; recomienda Workers para nuevos proyectos. | Evitar escoger Pages por referencias históricas sin revisar orientación actual. |

Las recomendaciones son [CONTEXTUAL]: derivan de los requisitos de Cakes by Yas y de las capacidades documentadas. El ADR queda propuesto y no acredita una implementación ni contratación.

## Identidad SVG entregada por el usuario

Fuente: ZIP local cakes-by-yas-svg.zip del 2026-10-31. Originales en `assets/brand-delivery-2026-10-31/`. Se usa `cakes-by-yas-logo-colores-marca.svg`; el isotipo independiente se alinea al coral de esa misma variante. `src/data/brand.ts` centraliza destinos. `scripts/build-brand-assets.mjs` genera SVG públicos, variante inversa para pie oscuro y PNG de compatibilidad/iconos; `audit/brand-assets.json` registra hashes. Los raster anteriores están archivados fuera de public. El informe geométrico incluido en el ZIP se conserva como dato del entregable; no se presenta como verificación propia de su fuente original.

## Fotografía de portada v2

Solicitud del usuario2026-10-31: portada más memorable y vinculada a marca/identidad. Edición integrada image_gen del original `assets/source-instagram/DVY7b_UkX74.jpg`, procedente de la publicación identificada en downloads.json. `assets/photography/yas-day-hero-v2.png` es una composición generativa1672×941, con set marfil y cinta coral añadida al entorno. Prompt completo en `assets/photography/generation-record-hero-v2.json`. Se conserva la fotografía anterior; no se atribuye esta escena a una sesión real ni se toma la integración local como aprobación comercial de sus detalles.
