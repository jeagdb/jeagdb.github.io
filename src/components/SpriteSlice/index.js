import styled from 'styled-components'
import { get, isEqual } from 'lodash'
import { useState, useCallback, useRef, useEffect } from 'react'

const Box = styled.div`
  padding: 8px;;
  margin: 24px;
  border: 1px solid white;
  border-radius: 5px;
`
const SpriteSlices = styled(Box)`
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
  object-fit: contain;
`
const Inline = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const SpriteSlice = ({ sprites, updateSprites }) => {
  const [width, setWidth] = useState(80)
  const [height, setHeight] = useState(80)
  const [file, updateFile] = useState(get(sprites, 'file'))
  const [selected, updateSelected] = useState(false)
  const [selectedSprites, updateSelectedSprites] = useState(get(sprites, 'selectedSprites', []))

  const canvasRef = useRef()
  const contextRef = useRef()

  const handleFileChange = useCallback((e) => {
    if (e.target.files) {
      updateFile(URL.createObjectURL(e.target.files[0]))
    }
  }, [updateFile])

  const handleSizeChange = useCallback((func, val, op) =>
    isEqual(op, '+') ? func(val + 1) : func(val - 1), [])

  const handleCanvasClick = useCallback((e) => {
    if (selected && contextRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const scaleX = canvasRef.current.width / rect.width
      const scaleY = canvasRef.current.height / rect.height
      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY
      const spriteX = Math.floor(x / width)
      const spriteY = Math.floor(y / height)

      updateSelectedSprites((sprites) => [...sprites, { spriteX, spriteY }])
    }
  }, [selected, width, height, updateSelectedSprites])

  const drawSelection = useCallback(() => {
    if (selected && contextRef.current) {
      const context = contextRef.current
      context.lineWidth = 2
      context.strokeStyle = 'blue'

      for (let i = 0; i < selectedSprites.length; i++) {
        const { spriteX, spriteY } = selectedSprites[i]
        context.strokeRect(spriteX * width, spriteY * height, width, height)
      }
    }
  }, [selected, width, height, selectedSprites])


  useEffect(() => {
    if (canvasRef.current && file) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      contextRef.current = context

      // Création de la nouvelle image
      let img = new Image()
      img.src = file

      img.onload = () => {
        // Redimensionnement du canvas pour correspondre à l'image
        canvas.width = img.width
        canvas.height = img.height

        // Dessiner l'image sur le canvas
        context.drawImage(img, 0, 0, img.width, img.height)

        // Dessiner la grille sur l'image
        context.strokeStyle = 'red'
        for (let i = 0; i < img.width; i += width) {
          for (let j = 0; j < img.height; j += height) {
            context.strokeRect(i, j, width, height)
          }
        }

        // Dessiner la sélection sur l'image
        drawSelection()
      }
    }
  }, [file, width, height, drawSelection])

  useEffect(() => {
    updateSprites({
      file,
      width,
      height,
      selectedSprites
    })

  }, [updateSprites, selectedSprites, width, height, file])

  return (
    <SpriteSlices>
      <Title>Sprite slices</Title>
      <InputFile
        type="file"
        onChange={handleFileChange} />
      <Inline>
        <Inline>
          <div>x : {width}</div>
          <button onClick={() => handleSizeChange(setWidth, width, '+')}>+</button>
          <button onClick={() => handleSizeChange(setWidth, width, '-')}>-</button>
        </Inline>
        <Inline>
          <div>y : {height}</div>
          <button onClick={() => handleSizeChange(setHeight, height, '+')}>+</button>
          <button onClick={() => handleSizeChange(setHeight, height, '-')}>-</button>
        </Inline>
        <button onClick={() => updateSelected(true)}>selectionner une série de sprites</button>
        {selected && <div>MODE selection</div>}
      </Inline>
      <Canvas ref={canvasRef} onClick={handleCanvasClick} />
    </SpriteSlices>
  )
}

export default SpriteSlice