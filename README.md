# Cakes by Yas

Catálogo bilingüe por encargo en Astro. Inglés `/en/`, español `/es/`; entrada `/` con preferencia manual/navegador e inglés de respaldo.

Producción: https://cakesbyyas.com/, alojada en Cloudflare Pages desde el 2026-11-01. `cakebyyas.com` y las variantes con `www` redirigen mediante301 al dominio principal en HTTPS, conservando ruta y parámetros. Registro y procedimiento en `docs/PRODUCTION.md`.

Repositorio: https://github.com/nitanluis/cakes-by-yas-web. GitHub Actions publica la preview de revisión en https://nitanluis.github.io/cakes-by-yas-web/ después de cada push correcto a main. Esta preview conserva noindex. El proyecto de Cloudflare usa Direct Upload: un push a GitHub no actualiza automáticamente producción.

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

Desarrollo: `http://127.0.0.1:4321/`. Mesa interna: `/galeria/`, excluida del build de producción. Servidor limitado a loopback.

Contenido: `src/data/catalog.ts` y `src/data/copy.ts`. Requisitos: `PRODUCT.md`. Diseño: `DESIGN.md`; estudio de Bernice: `docs/design/referencia-bernice/`. Fotos: `assets/photography/REVIEW.md`. Fuentes: `docs/design/typography/README.md`.

«Ask Yas» abre el detalle del producto antes de continuar por WhatsApp. Las vistas se derivan de creaciones y catálogo en `src/data/product-details.ts`; la selección de relleno es opcional y solo se ofrece en los pasteles correspondientes. Sin JavaScript, los botones conservan el enlace directo de consulta. El contacto no confirma un pedido ni procesa pagos.

El navbar usa el gesto «Sello artesanal» sobre el isotipo original. La entrada «Firma de crema» aparece una vez por pestaña; `?intro=signature` permite repetirla durante la revisión. Ambos respetan el movimiento reducido.

El fondo de destacados usa «Doble firma»: dos líneas próximas con frases sólidas y de contorno, desplazamiento continuo en sentidos contrarios y adaptación al idioma. Continúa sin scroll y durante hover/foco; se pausa fuera de pantalla, con pestaña oculta o movimiento reducido. Sin JavaScript queda estático.

`npm run build` comprueba barreras, documentación, tipos y artefacto. `npm run flujos` valida la evidencia guardada por CUA; no abre un navegador ni sustituye una nueva revisión. Las capturas deben mirarse: geometría y axe no juzgan el acabado.

`node scripts/verify-live.mjs https://nitanluis.github.io/cakes-by-yas-web/` comprueba la URL publicada, idiomas, errores404, exclusión de la galería, metadata, imagen social y recursos. Guarda el resultado en audit, excluido de Git. Primera comprobación:15/15 correctas.

GitHub Pages usa `SITE_URL=https://nitanluis.github.io` y `BASE_PATH=/cakes-by-yas-web/`. Las rutas internas pasan por `src/shared/site-path.ts`; los assets procesados usan el base de Astro. El workflow `.github/workflows/pages.yml` verifica y publica cada push a `main`. La preview conserva `PUBLIC_INDEXABLE=false`; no se conecta dominio ni se añade CNAME. La galería y el comparador de propuestas son solo de desarrollo.

Producción se construye con `SITE_URL=https://cakesbyyas.com`, `BASE_PATH=/` y `PUBLIC_INDEXABLE=true`. `public/_headers` configura la seguridad y mantiene las direcciones temporales de Pages fuera del índice. El pie incluye el crédito de TheMonkeys. `node scripts/verify-production.mjs` comprueba el host comercial y sus redirecciones; `--public-dns` permite medir la resolución pública actual durante propagación, sin cambiar el DNS del equipo ni omitir validaciones TLS. Vercel conserva solo una configuración de referencia. Las claims se ejecutan con PowerShell; el build de CI usa Windows y Cloudflare recibe el artefacto estático ya construido.

La dirección doméstica no se publica. Pedidos/pagos se concretan con Yas por mensajería. Las imágenes conceptuales se identifican como propuestas y no se atribuyen a encargos reales. Cambiar la imagen seleccionada en `src/data/hero.ts`; las propuestas están en `src/dev/hero-concepts.ts`.

No se versionan dependencias, dist, archivos .env, cachés, capturas de la sesión, herramientas temporales de auditoría ni la copia del repositorio histórico. Los originales fotográficos necesarios para la mesa de revisión y los prompts sí se conservan. El repositorio es público por decisión del propietario; no se concede una licencia general sobre marca o fotografías.

Apfel Grotezk: Luigi Gorlero & Collletttivo, SIL OFL; licencia en `public/fonts/LICENSE.txt`.
