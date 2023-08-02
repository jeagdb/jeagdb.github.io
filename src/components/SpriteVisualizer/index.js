import styled from 'styled-components'
import { get, map, isEmpty } from 'lodash'
import { useState, useCallback, useRef, useEffect } from 'react'

const Box = styled.div`
  padding: 8px;;
  margin: 24px;
  border: 1px solid white;
  border-radius: 5px;
`
const SpriteSlices = styled(Box)`
  width: 100%;
`
const Title = styled.h2`
  font-size: 24px;
  padding: 0 16px;
`
const InputFile = styled.input`
  padding: 0 8px;
  border-radius: 5px;
`
const Canvas = styled.canvas`
  width: 100%;
`
const Inline = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const SpriteVisualizer = ({ sprites: infos }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const file = get(infos, 'file')
  const width = get(infos, 'width')
  const height = get(infos, 'height')
  const sprites = get(infos, 'selectedSprites', [])

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval

    if (isPlaying && sprites.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % sprites.length)
      }, 150)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isPlaying, sprites])


  return (
    <div>
      {!isEmpty(sprites) && map(sprites, (sprite, index) => {
        return (
          <canvas
            key={index}
            width={width}
            height={height}
            ref={canvasRef => {
              if (canvasRef != null) {
                const ctx = canvasRef.getContext('2d')
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
              }
            }}
          />
        )
      })}
      <button onClick={handlePlayPauseClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
     {!isEmpty(sprites) && <div>
        <canvas
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
      </div>}
    </div >
  )
}

export default SpriteVisualizer