# Destacados: ancho, espacio y ritmo

Revisión solicitada por el usuario el 2026-10-30, incorporando la retirada de todas las estrellas de cuatro puntas.

Medición viva con la extensión de Brave a 2560×1255: tarjetas 479→702px; distancia entre el final del enlace de introducción y la primera tarjeta 579.97→120.80px. La altura mínima 132vh y el centrado vertical añadían espacio; el máximo 1800px estrechaba la cuadrícula. Se retiraron ambas restricciones, conservando el gutter4vw y las tres columnas de la referencia.

Bernice: tira6720px, recorrido de media tira, duraciones20/34s: 168px/s y 98.823529px/s. Cakes by Yas recorría481.175/283.044px/s porque su texto es más largo. Ahora la duración sale de media tira dividida por la velocidad objetivo; se recalcula tras cargar las fuentes y cambiar de tamaño. Se verificó también en español.

Se retiraron el botón de pausa, sus etiquetas, manejadores y clases. Se conserva la preferencia del sistema de movimiento reducido y la suspensión por pestaña oculta. Las estrellas se sustituyeron por el isotipo propio en la cinta y nodos circulares en los pasos. El isotipo se usa sin alterar el archivo original.

Evidencia: `.impeccable/review/featured-v3/`. El resumen contiene ocho comprobaciones derivadas del navegador y sus datos, no una simulación. El runner valida ese registro sin volver a manejar el navegador. Capturas de escritorio, tableta y móvil inspeccionadas; axe0 en las vistas registradas, con contraste sobre imágenes marcado como incompleto.
