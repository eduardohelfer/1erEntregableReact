import React from 'react'

const Deco = ({ randomQuote, randomColor }) => {

  const decoColor = randomColor
  const decoObj = {
    color: '#000000'
  }

  return (
    <div style={decoObj} className='deco'>{randomQuote.author}</div>
  )
}

export default Deco