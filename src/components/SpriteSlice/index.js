import styled from 'styled-components'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useCallback, useRef, useEffect } from 'react'
import { get, size, isEqual, isUndefined, some, filter, isEmpty } from 'lodash'

const Container = styled.div`
  width: 100%;
`
const FileWrapper = styled.div`
  border: 1px solid white;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  color: ${({ selected }) => selected ? 'grey' : 'white'};
  background-color: ${({ selected }) => selected ? 'white' : 'transparent'};
`
const FileButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const InputFile = styled.input`
`
const Canvas = styled.canvas`
  object-fit: contain;
`
const Settings = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
`
const SpriteSettings = styled.div`
  display: flex;
  gap: 8px;
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
const Button = styled.div`
  padding: 2px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
`
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const CanvasWrapper = styled.div`
  max-width: 70%;
  height: 80%;
  overflow: auto;
`

const SpriteSlice = ({ sprites, updateSprites }) => {
  const [width, setWidth] = useState(80)
  const [height, setHeight] = useState(80)
  const [file, updateFile] = useState(get(sprites, 'file'))
  const [selected, updateSelected] = useState(false)
  const [selectedSprites, updateSelectedSprites] = useState(get(sprites, 'selectedSprites', []))

  const canvasRef = useRef()
  const contextRef = useRef()
  const hiddenFileInput = useRef(null)

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      updateFile(URL.createObjectURL(e.target.files[0]))
    }
  }, [updateFile])

  const handleFileClick = useCallback(() => {
    hiddenFileInput.current.click()
  }, [])

  const handleWidthChange = useCallback((e) =>
    setWidth(parseInt(get(e, 'target.value', width))), [width, setWidth])

  const handleHeightChange = useCallback((e) =>
    setHeight(parseInt(get(e, 'target.value', height))), [height, setHeight])

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

      const newSprite = { spriteX, spriteY }
      const isPresent = some(selectedSprites,
        sprite => isEqual(sprite.spriteX, spriteX) && isEqual(sprite.spriteY, spriteY)
      )

      updateSelectedSprites((currSprites) => {
        return isPresent ?
          filter(currSprites, sprite => !isEqual(sprite.spriteX, spriteX) || !isEqual(sprite.spriteY,spriteY))
          : [...currSprites, newSprite]
      })
    }
  }, [selected, selectedSprites, width, height, updateSelectedSprites])

  const drawSelection = useCallback(() => {
    if (selected && contextRef.current && !isEmpty(selectedSprites)) {
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

      let img = new Image()
      img.src = file

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height

        context.drawImage(img, 0, 0, img.width, img.height)

        context.strokeStyle = 'red'
        for (let i = 0; i < img.width; i += width) {
          for (let j = 0; j < img.height; j += height) {
            context.strokeRect(i, j, width, height)
          }
        }

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
    <Container>
      <Settings>
        <FileWrapper onClick={handleFileClick}>
          <InputFile
            ref={hiddenFileInput}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange} />
          <FileButton>
            <span>Choisir une spritesheet</span>
            <FontAwesomeIcon icon={faPlus} size='sm' />
          </FileButton>
        </FileWrapper>
        {!isUndefined(file) && <SpriteSettings>
          <Block>
            <Inline>
              <Count>x : {width}</Count>
              <Slider type="range" min="1" max="200" value={width} onChange={handleWidthChange} />
              <Button width={20} height={20} onClick={() => handleSizeChange(setWidth, width, '+')}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <Button width={20} height={20} onClick={() => handleSizeChange(setWidth, width, '-')}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Inline>
            <Inline>
              <Count>y : {height}</Count>
              <Slider type="range" min="1" max="200" value={height} onChange={handleHeightChange} />
              <Button width={20} height={20} onClick={() => handleSizeChange(setHeight, height, '+')}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <Button width={20} height={20} onClick={() => handleSizeChange(setHeight, height, '-')}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Inline>
          </Block>
          <FileWrapper selected={selected} onClick={() => updateSelected(!selected)}>selectionner une série de sprites {selected ? `(${size(selectedSprites)})` : ''}</FileWrapper>
        </SpriteSettings>}
      </Settings>
      <CanvasWrapper>
        <Canvas ref={canvasRef} onClick={handleCanvasClick} />
      </CanvasWrapper>
    </Container>
  )
}

export default SpriteSlice