import React from 'react'

const ColorList = () => {

    let colorList: string[] = ['red', 'green', 'blue']


  return (
    
    <ul>
      {colorList.map((color, index) => (
        <li key={index}>{color}</li>))}
    </ul>
  )
}

export default ColorList
