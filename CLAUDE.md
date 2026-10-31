---
status: local-preview
last-reviewed: 2026-10-30
owner: "Usuario: diseño y manejo; Yas: negocio y pedidos"
revisit-trigger: "Cierre de inception, preparación de la aplicación o cambio de alcance/hosting"
---

# Cakes by Yas — contexto de trabajo

## Estado y fuentes de verdad

- La aplicación nueva usa Astro estático 7.4.4, TypeScript, GSAP 3.15.0 y Lenis 1.3.27, con lockfile.
- Existe `vercel.json` preparado. No se ha desplegado ni contratado un plan.
- La referencia histórica usa Next.js `16.2.4` según `references/previous-site/package.json`. No es una elección de stack para la nueva implementación.
- Catálogo vigente: `src/data/catalog.ts`; traducciones: `src/data/copy.ts`. `references/previous-site` es consulta histórica.
- Instagram oficial: `@cakes_byyas_`; WhatsApp: `+1 862-668-0038`. El negocio confirma recogida, cash/Zelle y mínimo 48 horas para pedidos simples.
- Producto y requisitos actuales: `PRODUCT.md`.
- Fuentes y límites de la evidencia: `docs/SOURCES.md`.
- Decisión técnica: `docs/adr/0001-catalogo-bilingue-estatico.md`, adoptada para preview local.
- Diseño: `DESIGN.md`, `.impeccable/design.json` y `docs/design/referencia-bernice/`. Fotos candidatas: `assets/photography/REVIEW.md`.

## Alcance y responsables

L1: catálogo público bilingüe, menú y contacto externo. Cumpleaños es la prioridad; eventos grandes y mesas de postres son servicios adicionales. Inglés por defecto, español disponible y selector manual con preferencia de navegador.

Usuario: diseño, contenido y manejo conmigo. Yas: negocio, pedidos y publicación; concretar el procedimiento de publicación antes de entregar.

La identidad pública usa los SVG entregados por el usuario el 2026-10-31, con una fuente única en src/data/brand.ts. El fondo de las fotos está aceptado, su fidelidad individual sigue en revisión. Mini Pecca se excluyó: el usuario confirmó que era un error.

## Convenciones

- Documentación en español; identificadores, comentarios técnicos y código en inglés.
- Tokens en tres capas; un solo color de acción. Iconos con Lucide o módulo único.
- Marcar datos sin confirmar y propuestas; no convertir cifras/certificaciones del repositorio anterior en hechos actuales.
- La dirección doméstica exacta se comparte solo después de confirmar el pedido; no publicarla en textos, imágenes, mapas ni metadatos.
- Pedidos por WhatsApp/Instagram y pagos externos. No añadir CMS, checkout, cuentas o tracking sin una necesidad identificada.
- Versionar catálogo/traducciones juntos y comprobar ambos idiomas antes de publicar.
- Ningún origen externo de fuentes/scripts en runtime sin justificación escrita.

## Comprobaciones por fase

- `npm run dev`: desarrollo local; `/galeria/` solo en desarrollo.
- `npm run build`: tokens/iconos, diseño, contrastes de tokens, contenido, claims, tipos, build y artefacto.
- `npm run flujos`: valida la evidencia del recorrido CUA guardado; no abre un navegador.
- Movimiento reducido implementado; emulación de esa preferencia pendiente de prueba manual adicional.
- Preview en noindex; canonical/hreflang absolutos se emiten al configurar `SITE_URL`. Indexar requiere también `PUBLIC_INDEXABLE=true`.

## Coste y publicación

Actualización2026-10-31: repositorio público `nitanluis/cakes-by-yas-web`; invitación enviada a `Oscarmp7`, pendiente de aceptación al cerrar esta sesión. Preview temporal publicada y verificada en https://nitanluis.github.io/cakes-by-yas-web/:15/15 comprobaciones HTTP/recursos correctas. Cloudflare será el alojamiento final en otra fase. El despliegue se define en `.github/workflows/pages.yml`; build y publicación inicial completados en GitHub Actions. `BASE_PATH` permite subcarpeta en Pages y raíz en otro host; `PUBLIC_INDEXABLE=false` durante revisión. Scripts y resultados de auditoría local no deben confundirse con otra publicación posterior.

Vercel es la preferencia para las pruebas. Hobby restringe el uso comercial; el plan y su gasto deben concretarse antes de desplegar. No hay dominio comprado ni servicios nuevos contratados.
