const width = 8
const candyColors = [
'blue',
'green',
'orange',
'purple',
'red',
'yellow',
]


const App = () => {

  // make a board for colors
  const createBoard = () => {
    // make an empty list for randomColor to fillin
    const randomColorArrangement = []

    // board size = width(8) * width(8)
    for (let i = 0; i < width * width; i++){
      
      // random color from 0 to candyColor length = 6 or 0 - 5
      const randomNumber0toN = Math.floor(Math.random() * candyColors.length)
      
      // get random color from the candyColor based on the randomNumber0ToN
      const randomColor = candyColors[randomNumber0toN]

      randomColorArrangement.push(randomColor)
    }
    console.log(randomColorArrangement)
  }

  createBoard()

  return (
    <div>
    
    </div>
  )
}

export default App
