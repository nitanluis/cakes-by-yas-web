# Segunda pasada: composición y coreografía

Encargo del usuario: siete mejoras concretas sobre CTA inicial, entrada/scroll, destacados, cinta de arcos, menú visual, CTA inferior y proceso. Capturas aportadas conservadas en `user-notes/`. La octava captura repite el CTA inferior.

## Diferencias que explican el resultado anterior

| Zona | Referencia verificada | Corrección de la preview |
|---|---|---|
| Tipo | Hero computed weight 700; el font matching usa Apfel Satt 800. Marquesinas 800; títulos heredaban bold | Servir Satt local, recuperar títulos y etiquetas contundentes; conservar texto funcional legible |
| Entrada | Wipe SVG 1.2s power2.inOut; palabras y líneas en máscaras, Y101/rotate12, expo.out, stagger | Wipe propio, revelado real por palabra, contenido visible sin JS/movimiento reducido |
| Hero scroll | Fondo Y70%, escala 1→1.4, frente Y-75%, radio inferior 0→5rem | Misma arquitectura por capas y scrub; encuadre de Yas protegido y amplitud documentada por tamaño |
| Destacados | Tres columnas 30%, borde4, padding4rem (>1600)/1.5rem; fondo diagonal120% y múltiples bandas solid/outline | Recuperar metadatos, llamada contextual, fondos y parallax; no introducir cantidades/carrito ajenos al negocio |
| Hover producto | Crossfade .5s, chips centro scale0→posiciones rotadas .8s; botón onda desde puntero1.2s y texto escala.9 | Usar acercamiento de la misma fotografía y datos ciertos; mismo tratamiento con foco y alternativa táctil |
| Arcos | Ventana interna20%×40%→100% con scrub top bottom→bottom center+=200; imagen1.3→1; loop40s sin pausa al hover | Restituir máscaras separadas, alturas alternadas20/25vw, ancho20vw y60vw móvil; sin hover-pause |
| CTA inferior | Composición centrada; imagen en arco30vw, texto curvo110%, botón solapado que crece.6→1.2 expo.out | Sustituir dos columnas por composición centrada, texto alrededor del arco, CTA circular de consulta, sin aro ni flecha |
| Proceso | Adaptación propia necesaria para la operación de Yas | Secuencia de tres hitos con línea continua, números de gran escala y revelados; conservar lectura en orden |

## Datos y límites

El menú mantiene diez productos y una única fuente de precios. No se inventan imágenes de chocolate tres leches o mini postres que no tenemos identificadas: las entradas sin foto usan una composición tipográfica explícita. Las fotos disponibles ilustran las familias correspondientes; decoración y cotización se confirman con Yas. Los hovers no declaran un relleno específico dentro de una foto.

La entrada tiene fail-safe y se suspende para movimiento reducido. El contenido continuo solo se pausa mediante control explícito, visibilidad de pestaña o preferencia de movimiento; pasar el cursor no lo detiene, conforme al usuario. Cada sección conserva un enlace útil en dispositivos sin hover.

## Corrección tras comparación del usuario

Se retiraron el aro tipográfico y las flechas de botones, fotos y navegación interna. Las etiquetas de tarjeta se redujeron a una acción legible. El círculo ahora usa la geometría real medida del mordisco, sin borde, con una palabra, tipografía de mayor peso y el giro/escala de origen. Ver `CTA-MEDIDO.md` y evidencia `cta-bite-corrected.png`. La profundidad del resto de secciones no depende de multiplicar iconos.
