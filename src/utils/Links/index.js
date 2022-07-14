export const animateLink = (p, label) => {
  const hOffset = 4
  const shadow = 2

  const { width, height } = p

  const x = p.winMouseX
  const y = p.winMouseY

  const centerX = (width - p.textWidth(label)) / 2
  const centerY = height / 2

  const hX = p.map(x, 0, width, -hOffset, hOffset)
  const hY = p.map(y, 0, height, -hOffset, hOffset)

  const sX = p.map(x, 0, width, hOffset * shadow, -hOffset * shadow)
  const sY = p.map(y, 0, height, hOffset * shadow, -hOffset * shadow)

  p.textSize(100)

  p.push()
  p.noStroke()
  p.fill('#9E6240')
  p.text(label, centerX + sX, centerY + sY)
  p.fill('#B87D48')
  p.text(label, centerX + hX, centerY + hY)
  p.fill('#fff')
  p.text(label, centerX, centerY)
  p.pop()

  p.fill(255, 25)
}
