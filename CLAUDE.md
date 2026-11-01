---
status: production-published
last-reviewed: 2026-11-01
owner: "Usuario: diseño y manejo; Yas: negocio y pedidos"
revisit-trigger: "Cierre de inception, preparación de la aplicación o cambio de alcance/hosting"
---

# Cakes by Yas — contexto de trabajo

## Estado y fuentes de verdad

- La aplicación nueva usa Astro estático 7.4.4, TypeScript, GSAP 3.15.0 y Lenis 1.3.27, con lockfile.
- Existe `vercel.json` como referencia. Producción usa Cloudflare Pages, proyecto `cakes-by-yas-web`, mediante Direct Upload; DNS en Cloudflare y registro en Namecheap.
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
- Preview de GitHub en noindex; producción usa `SITE_URL=https://cakesbyyas.com`, raíz y `PUBLIC_INDEXABLE=true`. Canonical y hreflang absolutos; los hostnames temporales de Pages conservan un encabezado noindex.
- `node scripts/verify-production.mjs` mide producción y los301. La opción `--public-dns` selecciona resolución pública actual y mantiene la validación HTTPS.

## Coste y publicación

Actualización2026-11-01: producción publicada en https://cakesbyyas.com/. Cloudflare muestra el dominio activo con SSL. Los16 casos del verificador público pasaron usando DNS público actualizado: superficies, metadata/recursos en ambos idiomas y siete variantes301. El DNS de este equipo conservaba una respuesta antigua de Namecheap durante la medición; no confundir la propagación local con un fallo del artefacto. Procedimiento, límites y rollback en `docs/PRODUCTION.md`.

Repositorio público `nitanluis/cakes-by-yas-web`; invitación enviada previamente a `Oscarmp7`, aceptación no comprobada de nuevo. `.github/workflows/pages.yml` mantiene la preview de GitHub en subcarpeta y noindex. Direct Upload no tiene publicación automática desde Git; no prometerla sin configurar y verificar un flujo específico. Dominios comprados por el usuario: `cakesbyyas.com` y `cakebyyas.com`. Se seleccionó el plan Free de Cloudflare; no se contrataron planes de pago.
