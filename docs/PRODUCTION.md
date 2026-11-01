# Publicación comercial — 2026-11-01

Producción: https://cakesbyyas.com/. Cloudflare Pages, proyecto `cakes-by-yas-web`, Direct Upload en plan Free. Namecheap conserva el registro de los dos dominios; Cloudflare sirve el DNS mediante `seth.ns.cloudflare.com` y `shubhi.ns.cloudflare.com`. No hay servidor, base de datos, cuentas ni pagos dentro de la web. La preview de GitHub permanece separada y en noindex.

## Construir y publicar

En PowerShell, con Node24 y las dependencias del lockfile:

```powershell
npm ci
$env:SITE_URL='https://cakesbyyas.com'
$env:BASE_PATH='/'
$env:PUBLIC_INDEXABLE='true'
npm run build
Compress-Archive -Path 'dist\*' -DestinationPath 'cakes-by-yas-production.zip' -Force
```

En Cloudflare → Workers & Pages → cakes-by-yas-web → Create deployment, subir ese ZIP a Production y confirmar el resultado. El ZIP contiene los archivos de `dist` en su raíz. No subir el repositorio, `.env`, auditorías, originales ni material de imprenta. El despliegue inicial contenía67 archivos. `_headers` se incluye en el artefacto y no es una ruta descargable.

Direct Upload se eligió para publicar el build ya verificado sin conceder nuevas credenciales de GitHub a Cloudflare. Un push publica la preview de GitHub; no actualiza Cloudflare. Una automatización futura puede usar Wrangler en CI con credenciales de alcance limitado, después de autorizar y verificar ese acceso. No cambiar DNS para actualizar contenido.

## DNS y redirecciones

`cakesbyyas.com` está asociado en Custom domains de Pages y tiene CNAME al proyecto. `www.cakesbyyas.com` tiene CNAME al apex con proxy. La regla `Canonical HTTPS - cakesbyyas.com` captura www o HTTP del apex y aplica301 a `concat("https://cakesbyyas.com", http.request.uri.path)`, con Preserve query string activado.

En `cakebyyas.com`, los registros A de `@` y `www` apuntan a `192.0.2.1` con proxy. Es el destino de documentación de Cloudflare para dominios que solo redirigen; no hay un servidor en esa dirección. La regla `Cake by Yas to Cakes by Yas - 301` aplica a todas las solicitudes y usa el mismo destino dinámico, status301 y conservación de consulta. Los cinco MX y el SPF existentes se importaron en ambas zonas; no se creó ni probó un buzón o servicio de reenvío de correo.

Se conservaron las preferencias de bots existentes. DNSSEC no tenía registros DS antes del cambio. El estado activo/SSL de Pages y las respuestas reales se comprobaron; la disponibilidad universal durante propagación depende de las cachés de cada proveedor.

## Comprobar después de cada publicación

```powershell
node scripts/verify-production.mjs https://cakesbyyas.com/
```

El comando verifica superficies,404 con y sin punto, galería excluida, idiomas, canonical/hreflang, imagen social real, recursos, headers, crédito de TheMonkeys y siete casos301. Guarda `audit/production-live.json`. Si el DNS del equipo conserva respuestas antiguas durante la migración:

```powershell
node scripts/verify-production.mjs https://cakesbyyas.com/ --public-dns
```

Esta variante guarda `audit/production-live-public-dns.json`, consulta DNS-over-HTTPS público y conserva la validación del certificado y del hostname. No cambia el sistema. La primera revisión dio16/16 con esa resolución; el DNS del equipo aún devolvía el aparcamiento anterior. Los instrumentos de production-readiness también se ejecutaron con un adaptador de resolución de auditoría, sin modificar sus comprobaciones: cero fallos de superficies/social; manifest y theme-color son avisos pendientes, sin PWA instalada en el alcance L1.

El workflow manual `.github/workflows/production-check.yml` ejecuta el mismo verificador desde GitHub Actions con DNS normal y guarda su JSON. Lanzarlo desde Actions → Verify live production → Run workflow después de actualizar Cloudflare. Solo lee la web pública; no despliega ni necesita credenciales de Cloudflare.

Revisar en Brave portada, destacados en movimiento, filtros, diálogos, relleno opcional, menú, idiomas y footer a320/360/390/768/1120/1440/1920px. La revisión de esta publicación usó también el hostname temporal del mismo artefacto mientras el dominio se propagaba. No equivale a probar teléfonos físicos, Safari o métricas de campo. Los mensajes de WhatsApp se comprueban como enlaces preparados; no se envía una consulta real.

## Volver a una versión anterior

En Deployments de Pages, seleccionar un despliegue previo verificado y usar su acción de rollback cuando esté disponible. Para la primera publicación, o si no está disponible esa acción, construir el commit anterior conocido con las variables de producción y subirlo como nuevo despliegue de Production. Mantener las asociaciones de dominio y las reglas301. Confirmar con el verificador y el recorrido de interfaz; no dar por correcto un rollback solo por la notificación del panel.

Documentación oficial: [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/), [dominios personalizados](https://developers.cloudflare.com/pages/configuration/custom-domains/), [redirección de dominios](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/), [headers de Pages](https://developers.cloudflare.com/pages/configuration/headers/).
