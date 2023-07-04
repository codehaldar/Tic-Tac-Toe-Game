import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calcwinner } from './winner';
function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [xturn, toggleturn] = useState(true);
  const wonby = calcwinner(squares);
  //console.log(wonby);
  const nextplayer = xturn ? 'X' : 'O';
  const status = wonby ? `Winner is ${wonby}` : `Next player is ${nextplayer}`;

  const eventHandler = pos => {
    if (squares[pos] || wonby) {
      return;
    }
    setsquares(currsq => {
      const newsq = currsq.map((val, i) => {
        if (pos === i && val === null) {
          return xturn ? 'X' : 'O';
        }
        return val;
      });
      return newsq;
    });
    toggleturn(curr => !curr);
  };
  return (
    <div className="app">
      <div>{status}</div>
      <Board squares={squares} eventHandler={eventHandler} />
    </div>
  );
}

export default App;
