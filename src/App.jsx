import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calcwinner } from './winner';
import Statusmess from './components/Statusmess';
function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [xturn, toggleturn] = useState(true);
  const wonby = calcwinner(squares);

  //const status = wonby ? `Winner is ${wonby}` : `Next player is ${nextplayer}`;

  const eventHandler = pos => {
    if (squares[pos] || wonby) {
      return;
    }
    setsquares(currsq => {
      return currsq.map((val, i) => {
        if (pos === i && val === null) {
          return xturn ? 'X' : 'O';
        }
        return val;
      });
    });
    toggleturn(curr => !curr);
  };
  return (
    <div className="app">
      <Statusmess wonby={wonby} xturn={xturn} squares={squares} />
      <Board squares={squares} eventHandler={eventHandler} />
    </div>
  );
}

export default App;
