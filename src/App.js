import { useState, useEffect } from 'react'


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
  // setting the current color arrangement with set current color arrangement
  const [currColorArr, setCurrColorArr] = useState([])

  // checking of column 4 and 3
  const checkColumn3 = () => {
    // 47 = index of the column of 3 that get check
    // after index number 47 the column is 2 not 3 anymore
    for (let i = 0; i < 47; i++) {
      // i = 0
      // i + width(8) = 8
      // i + width(8) * 2 = 16
      // so it make 3 item verticaly
      // and the value of i will keep changing based on the index / box that we choose
      const column3 = [i, i + width, i + width * 2]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (column3.every(box => currColorArr[box] === decidedColor)) {
        column3.forEach(box => { currColorArr[box] = '' })
      }
    }
  }
  const checkColumn4 = () => {
    // 39 = index of the column of 3 that get check
    // after index number 47 the column is 3 not 4 anymore
    for (let i = 0; i < 39; i++) {
      // i = 0
      // i + width(8) = 8
      // i + width(8) * 2 = 16
      // i + width(8) * 3 = 24
      // so it make 4 item verticaly
      // and the value of i will keep changing based on the index / box that we choose
      const column4 = [i, i + width, i + width * 2, i + width * 3]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (column4.every(box => currColorArr[box] === decidedColor)) {
        column4.forEach(box => { currColorArr[box] = '' })
      }
    }
  }


  // create an array 64 item (8*8)
  const createBoard = () => {
    // make an empty list for randomColor to fillin
    const randomColorArrangement = []

    // board size = width(8) * width(8)
    for (let i = 0; i < width * width; i++) {

      // random color from 0 to candyColor length = 6 or 0 - 5
      const randomNumber0toN = Math.floor(Math.random() * candyColors.length)

      // get random color from the candyColor based on the randomNumber0ToN
      const randomColor = candyColors[randomNumber0toN]

      randomColorArrangement.push(randomColor)
    }
    console.log(randomColorArrangement)

    // set the current color arrangement with random color arrangement
    setCurrColorArr(randomColorArrangement)
  }

  // use the useEffect function and use empty array without depedency so the board only run / render one time
  useEffect(() => {
    createBoard()
  }, []) // with empty array so it only run once


  // render the box with checkColumns3 rule
  useEffect(() => {
    // the box color will change every 100 miliseconds
    const timer = setInterval(() => {
      checkColumn4()
      checkColumn3()
      // set the current color arrangement with the new color arrangement
      setCurrColorArr([...currColorArr])
    }, 100)

    return () => clearInterval(timer)
  }, [checkColumn4, checkColumn3, currColorArr])

  return (
    <div className="app">
      <div className="game">
        {/* mapping the current color arrangement array to img tag
      candyColor = value
      index = index of the value */}
        {currColorArr.map((candyColor, index) => (

          <img
            key={index}
            style={{ backgroundColor: candyColor }}
            alt={candyColor}
          />

        ))}
      </div>
    </div>
  )
}

export default App
