import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelecteSquare() {
    setActivePlayer(curActvePlayer => curActvePlayer === 'X' ? 'O' : 'X')
  }
  console.warn(`the current active player is ${activePlayer}`)

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelecteSquare} activePlayerSymbol={activePlayer }/>
      </div>
      <Log />
    </main>
  )
}

export default App
