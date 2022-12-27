import React from 'react'
import {useState} from 'react'

export const Hex2Rgb = () => {
  const [hex, setHex] = useState('')
  const [rgb, setRgb] = useState(false)

  const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `rgb(${[1, 2, 3].map((ind) => parseInt(result[ind], 16)).join(', ')})`
      : false
  }

  const handleSetColor = ({target}) => {
    const {value} = target
    const rgb = hexToRgb(value)

    setHex(value)
    setRgb(rgb)
  }

  return (
    <div className="container" style={{backgroundColor: rgb}}>
      <form>
        <input name="name" value={hex} onChange={handleSetColor} autoFocus />
        <br />
        <input value={rgb ? rgb : 'Ошибка!'} disabled />
      </form>
    </div>
  )
}
