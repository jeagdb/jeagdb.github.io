/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { get, map, isEqual, isEmpty, isUndefined } from 'lodash'
import { useRef, useState, useEffect, useCallback } from 'react'

import media from '@/services/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`
const Tiles = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`
const Button = styled.div`
  width: fit-content;
  border: 1px solid white;
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
`
const Visualizer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const Settings = styled.div`
  display: flex;
`
const Inline = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
const Count = styled.div`
  min-width: 50px;
`
const Slider = styled.input`
  min-width: 200px;
  width: 200px;
`
const SettingsButton = styled.div`
  padding: 2px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
`
const CanvasWrapper = styled.div`
  overflow: auto;
`
const Test = styled.canvas`
  width: 200px;

  ${media.lessThan('m')`
    width: 100%;
  `}
`

const Tile = ({ sprite, index, moveTile, width, height, file }) => {
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: 'TILE',
    hover: (item) => {
      if (item.index !== index) {
        moveTile(item.index, index)
        item.index = index
      }
    },
  })

  const [, drag] = useDrag({
    type: 'TILE',
    item: { index },
  })

  drag(drop(ref))

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, width, height)

    const img = new Image()
    img.onload = () => {
      ctx.drawImage(
        img,
        sprite.spriteX * width, sprite.spriteY * height,
        width, height,
        0, 0,
        width, height
      )
    }
    img.src = file
  }, [sprite, file, width, height])

  return (
    <canvas
      ref={ref}
      width={width}
      height={height}
    />
  )
}

const SpriteVisualizer = ({ sprites: infos }) => {
  const [speed, updateSpeed] = useState(150)
  const [isPlaying, updateIsPlaying] = useState(false)
  const [currentIndex, updateCurrentIndex] = useState(0)
  const [sprites, updatedSprites] = useState(get(infos, 'selectedSprites', []))

  const file = get(infos, 'file')
  const width = get(infos, 'width')
  const height = get(infos, 'height')

  const handlePlayPauseClick = () => {
    updateIsPlaying(!isPlaying)
  }

  const handleSpeedChange = useCallback((e) =>
    updateSpeed(parseInt(get(e, 'target.value', speed))), [speed, updateSpeed])

  const handleClickSpeedChange = useCallback((func, val, op) =>
    isEqual(op, '+') ? func(val + 1) : func(val - 1), [])

  const moveTile = useCallback((fromIndex, toIndex) => {
    const sortedSprites = [...sprites]
    const [movedItem] = sortedSprites.splice(fromIndex, 1)
    sortedSprites.splice(toIndex, 0, movedItem)
    updatedSprites(sortedSprites)
  }, [sprites, updatedSprites])

  useEffect(() => {
    let interval

    if (isPlaying && sprites.length > 0) {
      interval = setInterval(() => {
        updateCurrentIndex(prevIndex => (prevIndex + 1) % sprites.length)
      }, speed)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [speed, isPlaying, sprites])

  useEffect(() => {
    updatedSprites(get(infos, 'selectedSprites', []))
  }, [infos])

  if (isUndefined(file)) {
    return (
      <Container>
        <span>Veuillez charger une spritesheet dans l'onglet "Sélection"</span>
      </Container>
    )
  }

  if (isEmpty(sprites)) {
    return (
      <Container>
        <span>Veuillez sélectionner des sprites dans l'onglet "Sélection"</span>
      </Container>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Tiles>
          {map(sprites, (sprite, index) => {
            return (
              <Tile
                key={index}
                sprite={sprite}
                index={index}
                moveTile={moveTile}
                width={width}
                height={height}
                file={file}
              />)
          })}
        </Tiles>
        <Button onClick={handlePlayPauseClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Visualizer>
          <Settings>
            <Inline>
              <Count>{speed} ms/image</Count>
              <Slider type='range' min='50' max='300' value={speed} onChange={handleSpeedChange} />
              <SettingsButton width={20} height={20} onClick={() => handleClickSpeedChange(updateSpeed, speed, '+')}>
                <FontAwesomeIcon icon={faPlus} />
              </SettingsButton>
              <SettingsButton width={20} height={20} onClick={() => handleClickSpeedChange(updateSpeed, speed, '-')}>
                <FontAwesomeIcon icon={faMinus} />
              </SettingsButton>
            </Inline>
          </Settings>
          <CanvasWrapper>
            <Test
              width={width}
              height={height}
              ref={canvasRef => {
                if (canvasRef != null) {
                  const ctx = canvasRef.getContext('2d')
                  const img = new Image()
                  img.onload = () => {
                    ctx.drawImage(
                      img,
                      sprites[currentIndex].spriteX * width, sprites[currentIndex].spriteY * height,
                      width, height,
                      0, 0,
                      width, height
                    )
                  }
                  img.src = file
                }
              }}
            />
          </CanvasWrapper>
        </Visualizer>
      </Container >
    </DndProvider>
  )
}

export default SpriteVisualizer