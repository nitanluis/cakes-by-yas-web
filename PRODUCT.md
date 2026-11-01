---
status: draft
last-reviewed: 2026-11-01
owner: "Usuario: diseño y mantenimiento; Yas: negocio, pedidos y publicación"
revisit-trigger: "Respuestas del negocio; cambio de catálogo, pedidos, pagos, alcance o marca"
---

# Cakes by Yas — definición del producto

## Estado de inception

Se está recuperando el contexto de un intento anterior. Este documento distingue lo observado en el repositorio de su vigencia actual. Un dato presente en el código anterior no equivale a una decisión aprobada para la nueva web.

- [VERIFIED: conversación, 2026-10-30] El negocio pertenece a la esposa del usuario. Quieren trabajar en su web con Frontend OS.
- [VERIFIED: conversación, 2026-10-30] El usuario quiere recuperar el contexto del repositorio anterior y completar después las preguntas que falten.
- [VERIFIED: conversación, 2026-10-30] Al usuario le gusta el logo mostrado: es fiel a la identidad que busca. Se conserva su dirección y se mejora su calidad; no ha pedido cambiar de identidad.
- Fuente histórica: `nitanluis/cakes-by-yas`, rama `main`, commit `62004aeff556afc4ec3a5426fec5b4e5684ace96`.
- Copia local de consulta: `references/previous-site/`. Es la implementación histórica de referencia; no es una elección técnica para la nueva versión.
- Alcance, idiomas, público principal, objetivo inicial y responsables confirmados. Astro estático implementado; producción en https://cakesbyyas.com/ sobre Cloudflare Pages y preview de revisión en https://nitanluis.github.io/cakes-by-yas-web/. El dominio singular redirige301 al plural. Procedimiento de publicación en `docs/PRODUCTION.md`.

## Definición actual confirmada por el negocio

Fuente: respuestas del usuario del 2026-10-30. Estas respuestas prevalecen sobre el material histórico cuando hay discrepancias.

| Tema | Decisión o dato confirmado |
|---|---|
| Instagram oficial | `@cakes_byyas_`, https://www.instagram.com/cakes_byyas_/ |
| Público por zona | Spring, The Woodlands, Houston, Cypress y Tomball, Texas. Son zonas de captación de clientes; el servicio es exclusivamente con recogida. |
| Menú y precios | El usuario confirma que siguen vigentes. Se toma como base el menú activo transcrito abajo; las ambigüedades de nombres/tamaños se resolverán al preparar el contenido. |
| Versión inicial | Mostrar los productos con calidad, presentar el menú completo y conducir las consultas/pedidos a WhatsApp o Instagram. |
| Servicio principal | Pasteles de cumpleaños. Celebraciones grandes y mesas de postres también forman parte de la oferta, con una posición secundaria. |
| Idiomas | Inglés y español intercambiables manualmente; usar la preferencia del navegador/teléfono cuando corresponda e inglés como idioma por defecto. |
| Personalización | Sabor de la masa, relleno, número de personas, diseño o referencia y fecha se concretan conversando con Yas. |
| Recogida | Negocio en casa, exclusivamente con recogida. La ubicación exacta se comunica después de confirmar el pedido. |
| Pago | Cash o Zelle, coordinados con el negocio. No se ha solicitado cobro dentro de la web. |
| Anticipación | Al menos 48 horas para pedidos simples; normalmente una semana para pedidos grandes. Disponibilidad y confirmación final a cargo de Yas. |
| Organización | Se trabaja por orden de llegada y salida. No hay cifras de capacidad semanal confirmadas; no se ofrecerá disponibilidad automática. |
| Teléfono | +1 862-668-0038, confirmado por el usuario. |
| Dominio | El usuario compró `cakesbyyas.com` y `cakebyyas.com`. El plural es el principal; el singular y las variantes con `www` redirigen301 al principal en HTTPS, conservando ruta y parámetros. DNS Cloudflare; registro Namecheap. |
| Mantenimiento | El usuario trabajará conmigo en diseño y manejo. Yas se encargará de publicar la web; la acción técnica exacta de publicación se concretará al preparar la entrega. |
| Coste de la web | Se acepta un coste mensual si aporta una ventaja clara. No es una autorización para contratar un plan o incurrir en gastos. |
| Logo | Conservar la identidad del logo mostrado y mejorar su calidad. |
| Presentación | La versión anterior resultaba simple, poco fluida y genérica para el usuario. Fotos con tonos, fondos, estilos y calidad dispares perjudicaban la percepción premium. |
| Crédito web | Footer bilingüe con «Hecha por TheMonkeys» / «Made by TheMonkeys» y enlace a `https://themonkeys.do`, solicitado el 2026-11-01. |

### Recorrido actual de un pedido

1. El cliente contacta por Instagram o WhatsApp.
2. Yas pregunta para cuántas personas, sabor de la masa, relleno, diseño deseado y fecha.
3. Se concretan los detalles, la disponibilidad y el importe en la conversación.
4. El pedido se recoge; se paga por cash o Zelle. El momento de cobro, un posible anticipo y el criterio de reserva están pendientes de confirmar.

### Alcance de la versión inicial

- Catálogo visual de productos y creaciones.
- Menú completo con precios y opciones vigentes.
- Acceso claro a WhatsApp e Instagram para consultar y acordar pedidos.
- Información clara sobre recogida, anticipación orientativa y formas de pago.
- Identidad del logo actual conservada con mejor calidad.
- Dirección fotográfica coherente y presentación cuidada en móvil y escritorio.
- Inglés y español completos, selector de idioma y orientación por preferencia del navegador, con inglés como fallback.
- Jerarquía comercial centrada en cumpleaños, con celebraciones grandes y mesas de postres como servicios adicionales.

Carrito, checkout, cobro web, cuentas de cliente, reservas automáticas y gestión interna de pedidos quedan fuera del alcance actualmente descrito. Si más adelante aparece una necesidad real, se revisará el alcance.

## Contexto recuperado del proyecto anterior

Todo lo siguiente está verificado como contenido del repositorio y se conserva como antecedente. La definición actual de la sección anterior resuelve Instagram, zonas, menú, recorrido y dirección del logo. Los demás datos históricos siguen pendientes de confirmación.

| Tema | Lo que contiene la fuente | Fuente |
|---|---|---|
| Nombre comercial | Cakes by Yas; el menú gráfico usa Cakes by Yasleidy y el nombre Yasleidy Fernandez. | `README.md`; `MENU WEB PAGE.jpeg` |
| Actividad | Repostería artesanal, pasteles personalizados y temáticos, flanes y postres para celebraciones. | `README.md`; `src/components/PricingMenu.tsx` |
| Ubicación y servicio | Spring, The Woodlands y Houston, Texas; el menú gráfico muestra ZIP 77380. No se especifica un radio operativo ni condiciones de entrega. | `README.md`; `src/app/layout.tsx`; `MENU WEB PAGE.jpeg` |
| Diferenciación propuesta anteriormente | Elaboración artesanal, tradición dominicana, estética cálida, romántica y de repostería premium. La historia necesita validación del negocio. | `PROMPT_FOR_CHATGPT.md`; `src/components/About.tsx` |
| Contacto | WhatsApp y SMS al +1 862-668-0038. | `README.md`; `src/components/Contact.tsx` |
| Instagram | El código usa `@cakes_byyas_`; el menú gráfico usa `@cakesbyyasleidy_`. | `README.md`; `src/components/Contact.tsx`; `MENU WEB PAGE.jpeg` |
| Idioma | Interfaz anterior principalmente en inglés, con nombres de productos y algunos textos en español. No se encontró una implementación de selección de idiomas. | `src/app/layout.tsx`; componentes de menú |
| Recorrido anterior | Ver creaciones, consultar menú, elegir tamaño/relleno cuando corresponde y abrir WhatsApp o SMS con un mensaje preparado para consultar disponibilidad. | `src/app/page.tsx`; `src/components/PricingMenu.tsx`; `src/components/SignatureCreations.tsx` |
| Pedidos y cobros | El recorrido revisado termina en mensajería externa. No se encontró checkout, reserva de fecha confirmada, cuenta de cliente ni gestión de pedidos en el código revisado. El proceso real del negocio no está documentado. | Árbol del repositorio; componentes de pedidos |
| Edición de contenido | Parte del catálogo vive en `src/data/products.json`; precios, tamaños y rellenos viven en `PricingMenu.tsx`. No se encontró un panel editorial. | Árbol del repositorio; archivos citados |

## Catálogo base — vigencia confirmada por el usuario

El usuario confirma que menú y precios siguen vigentes. Esta transcripción corresponde a `PricingMenu.tsx`, importado por la home anterior. Se revisarán con el negocio los nombres o correspondencias ambiguas antes de publicar.

| Producto | Precio base vigente confirmado |
|---|---|
| Tres Leches Tradicional | $45 |
| Chocolate Tres Leches | $48 |
| House Flan | Pequeño $20, mediano $40, grande $60 |
| Chocoflan / Vainillaflan | Pequeño $55, mediano $75 |
| Dominican Cake | Cotización |
| Mini Tres Leches | $35 por docena |
| Mini Chocoflan | $40 por docena |
| Mini Jellies | $50 por docena |
| Chinola/Parcha Mousse | $20 por docena |
| Mini Flan | $20 por docena |
| Mini Pecca | Entrada errónea del intento anterior; excluida por indicación del usuario el 2026-10-30. No sustituye ni modifica Mini Flan/Mini Chocoflan. |

- Rellenos del menú base: dulce de leche, fresas con cream cheese, Oreo, crema pastelera, Nutella y piña.
- Flan: 4–6, 8–12 y 16–20 porciones según tamaño.
- Chocoflan/Vainillaflan: 4–6 y 8–12 porciones según tamaño.
- La galería usa 13 entradas en `src/data/products.json`. Sus nombres, descripciones y correspondencia con las fotos necesitan revisión comercial.
- El menú gráfico tiene ambigüedades en la alineación de tamaños/precios del flan. El código sirve como otra fuente histórica, sin resolver por sí solo cuál era el dato aprobado.
- `Menu.tsx` contiene otra lista de precios y diseños, pero la página principal importa `PricingMenu.tsx`. No se deben fusionar automáticamente las dos listas.

## Recursos y compromisos de marca

- [VERIFIED: conversación, 2026-10-30] Referencia elegida por el usuario: https://bernicebakery.com/. Dirección: reconstrucción detallada de su diseño e interacciones, manteniendo sus animaciones y personalizando para productos, imágenes, logo, menú e idiomas de Cakes by Yas. El usuario autoriza estudiarla desde su extensión de Brave.
- [VERIFIED: conversación, 2026-10-30] La fidelidad se pide para la ingeniería y composición observables; la adaptación comercial conserva pedidos por WhatsApp/Instagram, recogida y las demás reglas de Cakes by Yas. No se incorpora checkout, delivery o datos comerciales de Bernice por estar presentes en la referencia.
- [PROPOSAL] Dirección visual: conservar proporciones, ritmo y mecanismos de movimiento medidos donde encajen; traducir marca y producto, y comprobar fluidez/accesibilidad en varios viewports. Diferenciar datos medidos, observaciones y reconstrucciones inferidas.
- [VERIFIED: conversación, 2026-10-30] Coral #EA677D como único color de acción; rosa claro #F8A8B1 como apoyo. El coral es el rol funcional aprobado para botones/acciones.
- [VERIFIED: archivos e inspección visual] Existen varias versiones del logo completo, isotipo, menú gráfico y lámina de paleta.
- [VERIFIED: archivo] `public/logo.png`: PNG transparente de 1018 × 380. Incluye símbolo de pastel/crema y lettering de Cakes by Yas, con degradados rosados.
- [VERIFIED: archivo] `public/isotipo.png`: PNG transparente de 1024 × 1024. Hay otras variantes de 1024 × 1024 en la raíz.
- [VERIFIED: archivo] `public/isotipo.svg`: contiene trazados vectoriales y un trazado blanco de fondo. Su existencia no acredita que el dibujo sea un original limpio ni una versión aprobada.
- [VERIFIED: inspección visual] El logo usado y la lámina de marca presentan diferencias de acabado y tonos; se debe elegir una dirección coherente antes de reconstruirlos.
- [VERIFIED: código histórico] Coral `#EA677D`, rosa `#F8A8B1`, fondo `#FDF8F8`; Playfair Display en títulos e Inter en cuerpo. Son valores implementados anteriormente. [UNCONFIRMED] Su adopción como identidad actual.
- [VERIFIED: conversación, 2026-10-30] Conservar la identidad del logo mostrado y mejorar la calidad. La técnica de reconstrucción y los ajustes de trazado se resolverán en `design-foundations`.
- [UNCONFIRMED] Uso previsto de la marca además de la web: redes, stickers, cajas, tarjetas u otros soportes.
- [VERIFIED: conversación, 2026-10-30] Las fotografías de `real_cakes` muestran pasteles hechos por la esposa del usuario. No existen originales de mayor calidad disponibles. El usuario pide recreaciones fotográficas profesionales fieles a cada pastel, con fondo e iluminación uniformes, y autoriza consultar su Instagram oficial para obtener referencias adicionales.
- [VERIFIED: conversación, 2026-10-30] Fuente adicional de fotos/vídeos del negocio: https://www.instagram.com/cakes_byyas_/. Se revisará solo contenido accesible y autorizado; las recreaciones generadas se conservarán junto con su referencia y no se usarán para inferir detalles ocultos o distintos del producto.

El trabajo de marca se está concretando en `design-foundations`. Se conservaron seis originales de Instagram y se generaron seis candidatos de fotografía con fondo común, sin sustituir los originales. El usuario acepta el fondo marfil/rosa de la muestra con corona y exige textura/realismo natural; la aprobación individual y fidelidad de cada candidato siguen en revisión. Registros en `assets/photography/`; informe de referencia y traducción en `docs/design/referencia-bernice/`.

## Datos que no deben darse por confirmados

- El hero muestra «250+ Cakes Delivered» sin evidencia adicional encontrada en el repositorio.
- Un componente incluye una afirmación sobre registro/certificación; su veracidad y vigencia no están acreditadas por los archivos.
- El footer incluye un texto legal histórico sobre cocina doméstica/alérgenos. No se ha validado su aplicación ni su vigencia; no es una conclusión legal de esta revisión.
- Los documentos mencionan tanto `cakesbyyas.com` como `cakes-by-yas.vercel.app`. No se ha comprobado propiedad, disponibilidad ni estado actual de esos sitios.
- Las afirmaciones del README sobre rendimiento y fluidez son descripciones del intento anterior, no resultados medidos durante esta recuperación.

## Clasificación

L1 para el alcance confirmado: catálogo público bilingüe, menú y enlaces de consulta a mensajería externa, sin cuentas, checkout ni formulario propio. La edición la hará el usuario conmigo, por lo que no hay necesidad confirmada de un CMS. La exigencia de acabado premium se concreta en calidad de diseño, imágenes y recorrido.

Revisar la clasificación si la edición requiere CMS (L2), se incorporan formularios/cobro web, aparecen cuentas/permisos (L3), o se identifican dependencias de URLs impresas difíciles de sustituir. Ninguna dependencia física de ese tipo está confirmada hoy.

## Outcomes

- [VERIFIED: conversación, 2026-10-30] Problema: la presentación anterior no representaba la calidad premium deseada; faltaban coherencia y calidad fotográfica y una experiencia fluida.
- [VERIFIED: conversación, 2026-10-30] Resultado deseado para el visitante: apreciar los productos, conocer la oferta completa y poder conversar con Yas para concretar su pedido.
- [VERIFIED: conversación, 2026-10-30] Ocasión prioritaria: cumpleaños; otros eventos y mesas de postres siguen incluidos como servicios adicionales.
- [VERIFIED: conversación, 2026-10-30] Éxito inicial deseado: al menos 5 pedidos durante los primeros 30 días de la publicación comercial, combinando captación por web y publicidad de Instagram. No se atribuirán los cinco exclusivamente a la web si la fuente no lo demuestra.
- [VERIFIED: conversación, 2026-10-30] Inglés y español; inglés por defecto; selección manual y adaptación a la preferencia del navegador.
- [VERIFIED: conversación, 2026-10-30] El usuario se ocupará de diseño, contenido y manejo con mi ayuda. Frecuencia de cambios todavía no fijada.
- [UNCONFIRMED] Capacidad semanal y volumen previo. La inversión en materiales ya realizada no permite inferir esos datos.

[PROPOSAL] Medición inicial: Yas registra cada pedido confirmado y su origen declarado por el cliente (web, anuncio/Instagram, recomendación u origen desconocido). Un pedido cuenta una sola vez aunque el cliente visite varios canales. Revisar el total al día 30 desde la publicación comercial. El método manual evita prometer atribución automática y no requiere añadir tracking al sitio. La fecha de lanzamiento sigue pendiente.

## Responsables y contexto

| Actor | Papel confirmado | Pendiente |
|---|---|---|
| Yas | Atiende pedidos y confirma sus detalles; se encargará de publicar la web según lo indicado por el usuario. | Momento de cobro, mecanismo de publicación y aprobación final de contenido comercial. |
| Usuario | Responsable de diseño y manejo de la web conmigo; no tiene dominio comprado. | Cuenta/plan de alojamiento, compra futura de dominio y procedimiento final de publicación. |
| Cliente | Principalmente busca un pastel de cumpleaños; consulta productos, conversa para concretar y recoge. | Perfil más detallado y volumen por ocasión, si resultan útiles después de lanzar. |
| WhatsApp e Instagram | Canales externos de conversación, con teléfono e Instagram confirmados. | Comprobar apertura y alternativas en los dispositivos del recorrido. |

## Restricciones, supuestos y preferencias

| Tipo | Dato o decisión | Quién lo establece | Consecuencia para la web |
|---|---|---|---|
| Restricción de operación | Solo recogida. | Negocio, confirmado por el usuario. | Evitar ofertas de entrega y explicar claramente cómo se coordina la recogida. |
| Alcance confirmado | Catálogo/menú y contacto por WhatsApp o Instagram. | Usuario. | La primera versión conduce a conversación comercial; la disponibilidad se concreta con Yas. |
| Regla de operación | Pago por cash o Zelle. | Negocio, confirmado por el usuario. | Informar las opciones; un cobro integrado no responde al alcance actual. |
| Compromiso de marca | Conservar la identidad del logo y mejorar su calidad. | Usuario. | Reconstrucción fiel y revisión del resultado contra la referencia existente. |
| Objetivo de calidad | Presentación premium, fotografías coherentes y navegación fluida. | Usuario. | Preparación de recursos y criterios de revisión visual/rendimiento antes de construir. |
| Regla de anticipación | Mínimo 48 horas para simples; una semana habitual para grandes. | Negocio, confirmado por el usuario. | Publicar los plazos y que la disponibilidad se confirma conversando. |
| Regla de privacidad operativa | Ubicación exacta de recogida después de confirmar. | Negocio, confirmado por el usuario. | Publicar solo la zona general; no incorporar dirección doméstica precisa a contenido, mapas ni datos estructurados públicos. |
| Idiomas | Inglés y español; inglés como fallback. | Usuario. | Rutas/contenido bilingüe, selector y detección de preferencia con comprobaciones. |
| Preferencia de hosting | Vercel para las pruebas, sin dominio comprado. | Usuario. | Evaluar plan comercial y coste frente a alternativas; no asumir Hobby gratuito. |
| Preferencia económica | Coste mensual aceptable si aporta una ventaja clara. | Usuario. | Exponer el beneficio, el importe y los límites antes de cualquier contratación. |
| Pendiente | Fecha objetivo y techo de gasto concreto. | Por confirmar con el usuario. | No se inventa una fecha ni se contrata un servicio con coste. No bloquean la preparación del diseño. |
| Antecedente, no restricción | Next.js/React/Tailwind/GSAP en el proyecto anterior. | Repositorio histórico. | No obliga a reutilizar el stack. |

## Datos e integraciones de la primera versión

El catálogo y las imágenes se muestran públicamente. El alcance confirmado conduce a WhatsApp o Instagram para intercambiar fecha, porciones, sabores, relleno y diseño; no requiere por ahora recibir esa información mediante un formulario propio ni registrar clientes dentro de la web.

- Responsable del catálogo: usuario conmigo. [CONTEXTUAL] Contenido estructurado versionado con el código, sin panel editorial para v1; una actualización pasa por preview antes de publicarse.
- Instagram oficial y teléfono confirmados.
- [CONTEXTUAL] Medición comercial manual para v1. No se incorpora Meta Pixel, Google Analytics ni otro rastreador por el mero hecho de usar publicidad de Instagram. Cualquier incorporación futura tendrá decisión y revisión propias.
- Ubicación exacta doméstica solo después de confirmar. Publicar únicamente zona general y explicación de recogida.
- Si un canal no abre en el dispositivo del visitante, [PROPOSAL] dejar visible el otro canal y la información de contacto pertinente. Comprobar el comportamiento en el recorrido final.

## Requisitos verificables iniciales

Los siguientes requisitos se derivan de las respuestas actuales. Sus detalles de implementación no implican elegir tecnología.

| ID | Requisito | Verificación |
|---|---|---|
| R1 | Permitir apreciar los productos mediante un catálogo visual que represente el acabado premium del negocio. | Revisión con el negocio de la selección de productos, imágenes y páginas en móvil/escritorio. |
| R2 | Mostrar el menú completo con precios y las opciones de tamaño/relleno que correspondan a cada producto. | Comparar todas las entradas contra el catálogo base y las correcciones comerciales aprobadas. |
| R3 | Permitir iniciar consultas por WhatsApp (+1 862-668-0038) e Instagram (@cakes_byyas_) desde los lugares relevantes del recorrido. | Abrir los enlaces y comprobar su destino en los dispositivos acordados. |
| R4 | Explicar que los pedidos son con recogida y que el público incluye las cinco zonas confirmadas. | Revisar textos y recorrido: ninguna zona debe presentarse como cobertura de entrega. |
| R5 | Informar sobre cash o Zelle, mínimo 48 horas para simples y una semana habitual para grandes; disponibilidad a confirmar. | Revisión comercial de ambos idiomas, sin prometer reservas automáticas. |
| R6 | Conservar la identidad del logo mostrado al mejorar su calidad de reproducción. | Comparación visual con el original por el negocio, revisión de bordes, legibilidad y versiones de uso. |
| R7 | Presentar las fotografías con un criterio coherente de fondo, tono, luz y encuadre. | Revisar una selección conjunta de las imágenes contra una dirección fotográfica acordada en `design-foundations`. |
| R8 | Ofrecer contenido completo en inglés y español, cambio manual y elección inicial por preferencia del navegador con fallback inglés. | Casos de navegador en/es/otro idioma, elección manual, recarga, acceso directo a una URL de idioma y almacenamiento no disponible. |
| R9 | Dar protagonismo a cumpleaños y mantener visibles eventos grandes y mesas de postres. | Revisar la jerarquía del primer viewport, navegación, catálogo y servicios en ambos idiomas. |
| R10 | Comunicar recogida sin publicar la dirección exacta doméstica. | Revisar texto, imágenes del menú, metadatos, mapas y datos estructurados del sitio generado. |

## QUALITY — escenarios iniciales propuestos

| ID | Estímulo y entorno | Respuesta y comprobación | Prioridad / influencia |
|---|---|---|---|
| QA1 | Un visitante recorre el catálogo y abre el menú en móvil. | Puede ver fotos, leer precios y acceder a los contactos sin desplazamiento horizontal ni controles bloqueados. Comprobar el recorrido completo en los tamaños de pantalla acordados. | Alta; condiciona recorrido e imágenes. |
| QA2 | El visitante ve varios productos uno detrás de otro. | La serie mantiene el criterio aprobado de tono, fondo, luz y encuadre; comprobarlo en selección conjunta y pantallas finales. | Alta; condiciona preparación de recursos. |
| QA3 | El visitante abre y desplaza la web en móvil, también con preferencia de movimiento reducido. | Contenido visible y enlaces utilizables sin esperar animaciones; cero desbordes horizontales en 360/390/768/1440 px; comprobar teclado y movimiento reducido. Presupuesto de carga a fijar en foundations y comprobar en el build real. | Alta; D1. |
| QA4 | El usuario cambia una foto o un precio conmigo. | Una única fuente de catálogo alimenta ambos idiomas y superficies; el cambio se revisa en preview, sin editar el mismo precio en varios componentes. Verificación por cambio de muestra y comparación de ambas versiones. | Alta; D3. |
| QA5 | Una persona con navegador en español llega por la entrada neutral y después elige inglés. | Se ofrece español inicialmente; el cambio a inglés funciona y se respeta al volver, si el navegador permite guardar la preferencia. Una URL /es/ o /en/ explícita se respeta. Probar es-MX, en-US, otro idioma y almacenamiento bloqueado. | Alta; D2. |

QA1–QA5 se concretan en el recorrido antes de implementar. La dirección fotográfica y el presupuesto de carga necesitan los recursos seleccionados en foundations. No se presenta ninguna métrica de rendimiento como ya medida.

## Operación, datos y restricciones pendientes

- Cupos, pedido mínimo y horarios de respuesta. Las 48 horas mínimas y la semana orientativa no garantizan disponibilidad.
- Horario de recogida y procedimiento privado para comunicar la dirección después de confirmar.
- Momento del pago cash/Zelle, anticipos, confirmación de reserva y políticas de cambios/cancelación.
- La cotización requiere fecha, porciones, sabor de masa, relleno y diseño deseado. Queda pendiente decidir cómo orientar al cliente para preparar esa información antes de conversar.
- Alérgenos y restricciones alimentarias que realmente puede atender el negocio.
- Destino de los datos si se añade un formulario; acceso, conservación y responsable.
- Dominio futuro y cuenta/plan de alojamiento. Teléfono e Instagram confirmados.
- Techo de gasto concreto y fecha objetivo; el usuario acepta un coste mensual justificado.

## Drivers y comparación técnica

Los drivers se derivan del alcance confirmado:

1. **D1: catálogo visual fluido.** Servir contenido e imágenes sin una aplicación de cliente completa como requisito de lectura; reservar JavaScript para interacción útil. El acabado visual depende de foundations y de los recursos, no del nombre del framework.
2. **D2: bilingüe completo y encontrable.** Inglés y español con URLs estables, cambio manual y orientación por preferencia sin impedir el acceso a enlaces compartidos.
3. **D3: mantenimiento por el usuario conmigo.** Contenido estructurado versionado, previews y un precio definido una vez. No se necesita edición autónoma de Yas desde un CMS.
4. **D4: operación proporcional.** Pedidos y pagos se concretan fuera del sitio; alojamiento y dependencias deben justificarse por esta versión.

Escala de comparación: **directo** = satisface el driver con capacidades nativas y poca configuración; **requiere adaptación** = viable con trabajo adicional identificado; **capacidad sin demanda** = añade operación que hoy no tiene un requisito asociado.

| Candidato | D1: fluidez | D2: idiomas | D3: mantenimiento | D4: operación | Coste de adopción |
|---|---|---|---|---|---|
| A. Estático primero con Astro e interactividad localizada | Directo: HTML y CSS; JS solo donde se necesite. | Rutas preconstruidas por idioma; detección en la entrada neutral mediante navegador. | Catálogo y diccionarios versionados, preview por cambio. | Sin servidor de aplicación para el catálogo. | Reconstruir las vistas; reutilizar contenido y recursos aprobados. |
| B. Exportación estática de Next.js | Viable, controlando componentes de cliente y animaciones. | Rutas por idioma preconstruidas; adaptar la detección al hosting/cliente. | Reutiliza parte de React, aunque el diseño y las fotos se rehacen. | Sin Node en producción; adaptar imágenes y las funciones dinámicas del intento anterior. | Migrar metadata por query y evitar dependencias de servidor en exportación. |
| C. Next.js con renderizado de servidor | Viable con control de JS y recursos. | Permite negociar idioma en la petición. | Reutiliza patrones anteriores, con un runtime de servidor mantenido. | Capacidad sin demanda para contenido público que cambia al publicar. | Mantener despliegue, exposición de servidor y costes/actualizaciones asociados. |

**[CONTEXTUAL] Recomendación: candidato A.** Responde al catálogo bilingüe, a la lectura rápida y al mantenimiento por archivos. La ventaja sobre B es reducir el acoplamiento a los componentes animados y comportamientos dinámicos del intento anterior; B sigue siendo viable si se descubre una pieza de React cuyo valor justifique conservarla. C se reconsiderará si aparecen requisitos que necesiten datos por petición o sesiones.

Fuentes oficiales consultadas el 2026-10-30 en `docs/SOURCES.md`. Astro documenta HTML estático e interactividad selectiva; sus propiedades de idioma por cabecera requieren renderizado bajo demanda. Por ello no se promete detección de cabecera de servidor dentro de una exportación estática: la propuesta usa preferencia del navegador en la entrada neutral. Next.js documenta exportación estática y sus límites de funciones de servidor.

## Decisiones y plan técnico propuesto

Registro completo en `docs/adr/0001-catalogo-bilingue-estatico.md`.

- Rendering/framework: Astro estático, TypeScript; versión exacta y Node compatibles fijados en el lockfile al preparar la implementación, con la documentación vigente.
- Estilos: CSS con custom properties en tres capas; iconos Lucide o un módulo único; animación CSS/Web Animations primero, librerías adicionales solo con necesidad comprobada.
- Contenido: catálogo único con precios/opciones e información por idioma; sin CMS en v1.
- i18n: /en/ y /es/, selector visible. URL explícita conserva idioma; en la entrada neutral, preferencia manual guardada > primer idioma compatible del navegador > inglés. Si JavaScript o almacenamiento falla, inglés y enlaces manuales siguen disponibles. Canonical y hreflang por versión; no traducir automáticamente el contenido mediante un servicio externo en runtime.
- Contacto/formularios: enlaces a WhatsApp e Instagram. Mensaje orientativo por producto, si se usa, en el idioma de la página; no contiene dirección doméstica ni confirma una reserva.
- Medición: registro manual de pedidos y origen durante el primer mes; tracking adicional requiere una decisión propia.
- Hosting: Vercel es la preferencia del usuario para pruebas. Su política limita Hobby a uso personal no comercial, incluyendo como comercial anunciar productos/servicios. Vercel Pro aparece desde $20/mes más consumo aplicable en la página consultada. Plan/coste y cuenta se acuerdan antes de desplegar; no hay contratación autorizada.
- Alternativa de alojamiento: artefacto estático portable a otro proveedor. Cloudflare documenta peticiones gratuitas a assets estáticos en Workers y recomienda Workers para nuevos proyectos; deben contrastarse condiciones, previews y configuración concreta antes de elegirlo. No se trata Pages como recomendación automática por inercia.
- Dependencias: las herramientas de build no se presentan como código de servidor en producción estática; evaluar exposición `build_only` o `client` según el uso real. Lockfile, revisión de actualizaciones y ninguna carga externa de fuentes/scripts sin justificación.

## Entrega y barreras previstas

La preview ya instala build, tipos y barreras de tokens/contenido/documentación. El hosting y la publicación siguen pendientes; estas decisiones guían su entrega:

1. Desarrollo local y previews con `noindex`; las previews se revisan antes de publicar la versión comercial.
2. Antes de cada publicación: build, tipos/lint, verificación de catálogo e igualdad de claves de traducción, ausencia de dirección exacta pública, límites de recursos y comprobaciones de tokens/iconos/docs.
3. Recorrido de ambos idiomas en móvil/escritorio: menú, cambio de idioma, galería, contacto, errores y teclado; revisión visual humana de las imágenes y capturas.
4. Verificación de metadata, imagen social real, canonical/hreflang, sitemap y 404 de verdad. Comprobar también rutas inexistentes con punto.
5. Después de publicar: comprobar estado HTTP, enlaces de contacto y previsualización social; identificar la revisión publicada. Ante un fallo, restaurar el despliegue anterior y verificar de nuevo.
6. Repositorio y recursos originales como respaldo; dueño técnico: usuario. Contraseñas/tokens fuera del contenido y del repositorio. Renovación del dominio cuando se adquiera, a cargo del usuario.
7. Revisión comercial mensual de menú, precios y disponibilidad; revisión técnica antes de cambiar dependencias o servicios. El usuario gestiona los cambios conmigo; el procedimiento de publicación que usará Yas se documentará y probará antes de entregarlo.

## Revisión de simplificación

Se excluyen de v1: carrito/checkout, cuentas de cliente, base de datos de pedidos, calendario de disponibilidad, panel CMS, traducción externa en runtime y tracking publicitario no solicitado. Cada exclusión se apoya en que la operación confirmada se completa por conversación y la edición la lleva el usuario conmigo.

La calidad visual seguirá teniendo una revisión propia de logo, fotografías, composición y movimiento. No se promete que cambiar de framework produzca ese acabado por sí solo.

Se instalaron dependencias y se construyó la preview local. No se ejecutó la aplicación histórica ni se publicaron cambios. El menú vigente vive en `src/data/catalog.ts`; Mini Pecca se excluyó porque el usuario confirmó que era un error. Gasto, fecha, publicación operativa y aceptación de fotos se concretan antes del lanzamiento.

## Próximo paso

Revisar preview, fotografías candidatas y alternativas tipográficas de Fontshare. Ya existen estudio de Bernice, tokens y contratos; faltan la revisión comercial de fotos y el contraste final de efectos con la referencia; el usuario entregó e incorporó la nueva identidad vectorial el 2026-10-31. Anticipos/políticas, historia, fecha y alojamiento se concretan antes de publicar.

### Identidad entregada · 2026-10-31

El usuario sustituyó la dirección anterior por el ZIP local cakes-by-yas-svg.zip. Logo e isotipo curvos con lema «Make it a Yas day.», utilizando la variante de colores de marca incluida. Se incorpora en navegación, pie, separadores, galería, favicon e icono táctil. La reconstrucción del antiguo logo deja de ser trabajo pendiente.
