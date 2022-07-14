import { forEach, reduce, range, map, get } from 'lodash'

import { random } from '..'

export const generateParticules = (p, particules, number) => {
  return [...particules, ...map(range(0, number), () => ({
    r: 24,
    acc: p.createVector(0, 0),
    pos: p.createVector(p.winMouseX, p.winMouseY),
    lifetime: 128,
    velocity: p.constructor.Vector.random2D(),
    velocityMult: p.random(0.5, 1)
  }))]
}

export const applyForce = (p, particules) => {
  const dir = p.map(p.mouseX, p.mouseY, -0.01, 0.01)
  const wind = p.createVector(dir, 0)
  const force = p.createVector(0, -0.0001)

  return map(particules, particule => {
    const acc = get(particule, 'acc')
    const updateAcc = acc.add(force)

    return {
      ...particule,
      acc: updateAcc.add(wind)
    }
  })
}

export const showParticules = (p, particules) => {
  forEach(particules, ({ r, pos, lifetime }) => {
    p.fill(255, 224, 181, lifetime)
    p.ellipse(pos.x, pos.y, r * 2)
  })
}

export const updateParticules = (particules) => {
  return reduce(particules, (res, particule) => {
    const { r, acc, pos, velocity, lifetime } = particule

    if (lifetime - 7 <= 0) {
      return res
    }

    const newVelocity = velocity.add(acc)

    return [...res, {
      ...particule,
      r: r - random(0, 20),
      pos: pos.add(newVelocity),
      acc: acc.set(0, 0),
      velocity: newVelocity,
      lifetime: lifetime - 7
    }]
  }, [])
}
