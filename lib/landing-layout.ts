/**
 * Ancho del reproductor del VSL en las landings de anuncios (modo `inline` de VslSection).
 *
 * Vive aquí y no dentro del componente porque la tira de logos tiene que medir EXACTAMENTE lo mismo que el
 * vídeo y quedar alineada con él: si el reproductor cambia de tamaño, la tira lo sigue sola. Si se toca este
 * valor, se tocan los dos a la vez.
 *
 * El alto de la ventana entra en la cuenta para que el vídeo siga asomando en la primera pantalla en móvil.
 */
export const VSL_INLINE_MAX_WIDTH = "min(64rem, max(22rem, calc((100svh - 23rem) * 16 / 9)))"
