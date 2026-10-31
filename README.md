# Cakes by Yas

Catálogo bilingüe por encargo en Astro. Inglés `/en/`, español `/es/`; entrada `/` con preferencia manual/navegador e inglés de respaldo.

Repositorio: https://github.com/nitanluis/cakes-by-yas-web. Preview de revisión publicada y comprobada el2026-10-31: https://nitanluis.github.io/cakes-by-yas-web/. GitHub Actions publica cada cambio en main que termina correctamente. No es el alojamiento definitivo del negocio; Cloudflare y el dominio quedan para una fase posterior.

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

Desarrollo: `http://127.0.0.1:4321/`. Mesa interna: `/galeria/`, excluida del build de producción. Servidor limitado a loopback.

Contenido: `src/data/catalog.ts` y `src/data/copy.ts`. Requisitos: `PRODUCT.md`. Diseño: `DESIGN.md`; estudio de Bernice: `docs/design/referencia-bernice/`. Fotos: `assets/photography/REVIEW.md`. Fuentes: `docs/design/typography/README.md`.

`npm run build` comprueba barreras, documentación, tipos y artefacto. `npm run flujos` valida la evidencia guardada por CUA; no abre un navegador ni sustituye una nueva revisión. Las capturas deben mirarse: geometría y axe no juzgan el acabado.

`node scripts/verify-live.mjs https://nitanluis.github.io/cakes-by-yas-web/` comprueba la URL publicada, idiomas, errores404, exclusión de la galería, metadata, imagen social y recursos. Guarda el resultado en audit, excluido de Git. Primera comprobación:15/15 correctas.

GitHub Pages usa `SITE_URL=https://nitanluis.github.io` y `BASE_PATH=/cakes-by-yas-web/`. Las rutas internas pasan por `src/shared/site-path.ts`; los assets procesados usan el base de Astro. El workflow `.github/workflows/pages.yml` verifica y publica cada push a `main`. La preview conserva `PUBLIC_INDEXABLE=false`; no se conecta dominio ni se añade CNAME. La galería y el comparador de propuestas son solo de desarrollo.

Para otro hosting, usar `BASE_PATH=/` y configurar el dominio real en `SITE_URL`. Antes de indexar, cerrar fotos/tipografía y revisar404, headers y metadata en el host final. Vercel también conserva una configuración de referencia. Las claims actuales se ejecutan con PowerShell; el workflow de build usa Windows. Revisar portabilidad de esa comprobación antes de activar un build Linux en Cloudflare.

La dirección doméstica no se publica. Pedidos/pagos se concretan con Yas por mensajería. Las imágenes conceptuales se identifican como propuestas y no se atribuyen a encargos reales. Cambiar la imagen seleccionada en `src/data/hero.ts`; las propuestas están en `src/dev/hero-concepts.ts`.

No se versionan dependencias, dist, archivos .env, cachés, capturas de la sesión, herramientas temporales de auditoría ni la copia del repositorio histórico. Los originales fotográficos necesarios para la mesa de revisión y los prompts sí se conservan. El repositorio es público por decisión del propietario; no se concede una licencia general sobre marca o fotografías.

Apfel Grotezk: Luigi Gorlero & Collletttivo, SIL OFL; licencia en `public/fonts/LICENSE.txt`.
