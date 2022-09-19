import React from 'react'


const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

  const colorObj = {
    color: randomColor
  }

  const backgroundObj = {
    backgroundColor: randomColor
  }


  return (
    <article style={colorObj} className='card'>
      <div className='quotation'>
        <div className='openQM'>“</div>
        <quote className='card__quote'>{randomQuote.quote}”</quote>
      </div>
      <h1 className='card__author'>{randomQuote.author}</h1>
      <button
        className='card__btn'
        style={backgroundObj}
        onClick={getRandomAll}
      >&#62;</button>
    </article >
  )
}

export default QuoteBox


