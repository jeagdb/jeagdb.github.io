import { map, size, range } from 'lodash'

import { BLUR, COLORS, MAX_RADIUS, MIN_RADIUS } from '../../config/background'

const randomSign = () => Math.round(Math.random()) * 2 - 1

const randomPosition = (base) => randomSign() * Math.random() * base

export const generate = (number, width, height) => {
  return map(range(0, number), () => ({
    x: randomPosition(width),
    y: randomPosition(height),
    vx: randomSign() * Math.random() * 4,
    vy: randomSign() * Math.random() * 4,
    sin: Math.random(),
    color: Math.floor(Math.random() * size(COLORS)),
    radius: (Math.random() * (MAX_RADIUS - MIN_RADIUS)) + MIN_RADIUS
  }))
}

const colored = (ctx, point) => {
  const { x, y, color, radius } = point

  const gradient = ctx.createRadialGradient(
    x,
    y,
    radius * 0.01,
    x,
    y,
    radius
  )

  gradient.addColorStop(0, COLORS[color])
  gradient.addColorStop(1, COLORS[(color + 1) % size(COLORS)])

  ctx.filter = 'saturate(100%)'
  ctx.fillStyle = gradient
  ctx.filter = `blur(${BLUR}px)`
}

export const animate = (p, ctx, points, width, height) => map(points, ({ x, y, vx, vy, sin, color, radius }) => {
  const point = {
    x: x + vx,
    y: y + vy,
    vx,
    vy,
    sin: sin + 0.01,
    color,
    radius: radius + Math.sin(sin + 0.01)
  }

  if (point.x < -width) {
    point.vx *= -1
    point.x += 10
  } else if (point.x > (width - 200)) {
    point.vx *= -1
    point.x -= 10
  }

  if (point.y < -height) {
    point.vy *= -1
    point.y += 10
  } else if (point.y > (height - 200)) {
    point.vy *= -1
    point.y -= 10
  }

  colored(ctx, point)
  p.square(point.x, point.y, point.radius, point.radius)

  return point
})
