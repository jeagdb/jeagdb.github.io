export const random = (n) => Math.random() * n

export const isMouseInsideText = (p, text, x, y) => {
  const top = y - p.textAscent()
  const width = p.textWidth(text)
  const bottom = y - p.textDescent()

  return p.winMouseX > x &&
    p.winMouseX < x + width &&
    p.winMouseY > top &&
    p.winMouseY < bottom
}
