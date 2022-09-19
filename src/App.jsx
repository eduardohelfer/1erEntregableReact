import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Deco from './components/Deco'
import quotes from './json/quotes.json'

function App() {
  // Calcula un índice aleatorio de entre los posibles índices de un Array
  function getIndexRandom(arr) {
    return Math.floor(Math.random() * arr.length)
  }

  // Set initial values: a random quote and a random color
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = colorRandom()

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  // Chooses a new quote and a new color randomly 
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(colorRandom())
    console.log(randomColor)
  }
  //  firstElement < div className = "App" >
  //  secondElement Deco
  //  thirdElement QuoteBox
  return (
    <div style={backgroundObject} className="App">
      <Deco
        randomQuote={randomQuote}
        randomColor={randomColor}
      />
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

// Generate a random color in HSL model with constant saturation and lightness
// Converts from HSL to RGB
// returns the valuie as a hex color coded string.
function colorRandom() {
  const h = Math.floor(Math.random() * 255)
  const s = 0.5
  const l = 0.5
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return `#${parseInt(255 * f(0), 10).toString(16)}${parseInt(255 * f(8), 10).toString(16)}${parseInt(255 * f(4), 10).toString(16)}`
}

export default App
