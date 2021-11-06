import { useState, useEffect } from 'react'

// components
import ScoreBoard from './components/ScoreBoard'

// images
import Blue from './img/blue.png'
import Green from './img/green.png'
import Orange from './img/orange.png'
import Purple from './img/purple.png'
import Red from './img/red.png'
import Yellow from './img/yellow.png'
import Blank from './img/blank.png'

const width = 8
const candyColors = [
  Blue,
  Green,
  Orange,
  Purple,
  Red,
  Yellow,
]


const App = () => {
  // setting the current color arrangement with set current color arrangement
  const [currColorArr, setCurrColorArr] = useState([])

  const [boxBeingDragged, setBoxBeingDragged] = useState(null)
  const [boxBeingReplaced, setBoxBeingReplaced] = useState()

  const [scoreDisplay, setScoreDisplay] = useState(0)

  // checking of column 4 and 3
  const checkColumn3 = () => {
    // 47 = index of the column of 3 that get check
    // after index number 47 the column is 2 not 3 anymore
    for (let i = 0; i <= 47; i++) {
      // i = 0
      // i + width(8) = 8
      // i + width(8) * 2 = 16
      // so it make 3 items verticaly
      // and the value of i will keep changing based on the index / box that we choose
      const column3 = [i, i + width, i + width * 2]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // check if the box is blank
      const isBlank = currColorArr[i] === Blank

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (column3.every(box => currColorArr[box] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        column3.forEach(box => { currColorArr[box] = Blank })
        return true
      }
    }
  }

  const checkColumn4 = () => {
    // 39 = index of the column of 3 that get check
    // after index number 47 the column is 3 not 4 anymore
    for (let i = 0; i <= 39; i++) {
      // i = 0
      // i + width(8) = 8
      // i + width(8) * 2 = 16
      // i + width(8) * 3 = 24
      // so it make 4 items verticaly
      // and the value of i will keep changing based on the index / box that we choose
      const column4 = [i, i + width, i + width * 2, i + width * 3]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // check if the box is blank
      const isBlank = currColorArr[i] === Blank

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (column4.every(box => currColorArr[box] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        column4.forEach(box => { currColorArr[box] = Blank })
        return true
      }
    }
  }

  // checking of row 4 and 3
  const checkRow3 = () => {
    // 64 = index of the row of 3 that get check
    // after index number 64 the row is 2 not 3 anymore
    for (let i = 0; i < 64; i++) {
      // i = 0
      // i + 1
      // i + 2
      // so it make 3 items horizontaly
      // and the value of i will keep changing based on the index / box that we choose
      const row4 = [i, i + 1, i + 2]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // check if the box is blank
      const isBlank = currColorArr[i] === Blank

      // no valid box / index
      // this box / index will not be check because is 2 not 3 anymore
      const notValidBox = [
        6, 7,
        14, 15,
        22, 23,
        30, 31,
        38, 39,
        46, 47,
        54, 55,
        63, 64
      ]

      // if value of i is matching the value of notValidBox then
      // continue the code
      if (notValidBox.includes(i)) continue

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (row4.every(box => currColorArr[box] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 3)
        row4.forEach(box => { currColorArr[box] = Blank })
        return true
      }
    }
  }

  const checkRow4 = () => {
    // 39 = index of the column of 3 that get check
    // after index number 64 the column is 2 not 3 anymore
    for (let i = 0; i < 64; i++) {
      // i = 0
      // i + 1
      // i + 2
      // i + 3
      // so it make 4 item horizontaly
      // and the value of i will keep changing based on the index / box that we choose
      const row4 = [i, i + 1, i + 2, i + 3]

      // getting the first value of the column
      const decidedColor = currColorArr[i]

      // check if the box is blank
      const isBlank = currColorArr[i] === Blank

      // no valid box / index
      // this box / index will not be check because is 3 not 4 anymore
      const notValidBox = [
        5, 6, 7,
        13, 14, 15,
        21, 22, 23,
        29, 30, 31,
        3738, 39,
        45, 46, 47,
        53, 54, 55,
        62, 63, 64
      ]

      // if value of i is matching the value of notValidBox then
      // continue the code
      if (notValidBox.includes(i)) continue

      // match checking
      // if every box if match with decidedColor(first color) then
      // replace it with blank box
      if (row4.every(box => currColorArr[box] === decidedColor && !isBlank)) {
        setScoreDisplay((score) => score + 4)
        row4.forEach(box => { currColorArr[box] = Blank })
        return true
      }
    }
  }

  // TODO: check row and column 3 and 4
  // run 2 dependencies useEffect

  // move and replace the box
  const moveBoxBelow = () => {
    // looping the box before 55
    // after 55 will be the bottom box
    for (let i = 0; i <= 55; i++) {
      // top box
      const topBox = [0, 1, 2, 3, 4, 5, 6, 7]
      // 
      const isTopBox = topBox.includes(i)

      // if topbox is blank
      if (isTopBox && currColorArr[i] === Blank) {
        // fillin blank box with random color
        const randomNum = Math.floor(Math.random() * candyColors.length)
        currColorArr[i] = candyColors[randomNum]

      }

      // if the box below is empty
      // then move it down to the blank box
      if ((currColorArr[i + width]) === Blank) {
        // replace blank box with colored box above it
        // move blank up
        currColorArr[i + width] = currColorArr[i]
        // replace the colored box with blank box below it
        // move color down
        currColorArr[i] = Blank
      }
    }
  }


  const dragStart = (e) => {
    // console.log('dragStart', e.target)
    // get the data of the box being dragged
    setBoxBeingDragged(e.target)
  }
  const dragDrop = (e) => {
    // console.log('dragDrop', e.target)
    // get the data of the box being replaced
    setBoxBeingReplaced(e.target)
  }
  const dragEnd = (e) => {
    // console.log('dragEnd', e.target)


    // get the data-id (int) of the box being replace on drag end
    const boxBeingReplacedId = parseInt(boxBeingReplaced.getAttribute('data-id'))
    // get the data-id (int) of the box being dragged on drag end
    const boxBeingDraggedId = parseInt(boxBeingDragged.getAttribute('data-id'))

    // replace the box color
    // replaceBox with draggedBox
    currColorArr[boxBeingReplacedId] = boxBeingDragged.getAttribute('src')
    // draggedBox with replaceBox
    currColorArr[boxBeingDraggedId] = boxBeingReplaced.getAttribute('src')

    // valid box moves
    // return number
    const validMoves = [
      // move left 1
      boxBeingDraggedId - 1,
      // move up 1
      boxBeingDraggedId - width,
      // move right 1
      boxBeingDraggedId + 1,
      // move down 1
      boxBeingDraggedId + width,
    ]

    // check if the move is valid
    // if the boxReplaceId(number) is inside validMoves the is valid move
    const validMove = validMoves.includes(boxBeingReplacedId)

    const isColumn4 = checkColumn4()
    const isRow4 = checkRow4()
    const isColumn3 = checkColumn3()
    const isRow3 = checkRow3()

    // if true then set box color is replace with the dragged
    // else is not replace
    if (boxBeingDraggedId &&
      validMove &&
      (isColumn4 || isRow4 || isColumn3 || isRow3)) {
      setBoxBeingDragged(null)
      setBoxBeingReplaced(null)
      console.log('POINT')
    } else {
      currColorArr[boxBeingReplacedId] = boxBeingReplaced.getAttribute('src')
      currColorArr[boxBeingDraggedId] = boxBeingDragged.getAttribute('src')
      setCurrColorArr([...currColorArr])
      console.log("NOT POINT")
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
      checkRow4()
      checkRow3()
      moveBoxBelow()
      // set the current color arrangement with the new color arrangement
      setCurrColorArr([...currColorArr])
    }, 100)

    return () => clearInterval(timer)
  }, [
    checkColumn4, checkRow4,
    checkColumn3, checkRow3,
    moveBoxBelow,
    currColorArr])

  return (
    <>
      <ScoreBoard score={scoreDisplay} />
      <div className="app">
        <div className="game">
          {/* mapping the current color arrangement array to img tag
      candyColor = value
      index = index of the value */}
          {currColorArr.map((candyColor, index) => (

            <img
              key={index}
              src={candyColor}
              data-id={index}
              alt={candyColor}
              draggable={true}
              onDragStart={dragStart}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
