import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calcwinner } from './winner';
import Statusmess from './components/Statusmess';
import History from './components/History';
import Restart from './components/Restart';
const NEW_GAME = [{ squares: Array(9).fill(null), xturn: true }];
function App() {
  const [history, sethistory] = useState(NEW_GAME);
  const [currmove, setcurrmove] = useState(0);
  const gamingBoard = history[currmove];
  const wonby = calcwinner(gamingBoard.squares);

  const eventHandler = pos => {
    if (gamingBoard.squares[pos] || wonby) {
      return;
    }
    sethistory(currhistory => {
      const isTraversing = currmove + 1 !== currhistory.length;

      const lastGamingstate = isTraversing
        ? history[currmove]
        : history[history.length - 1];
      const nextSquarState = lastGamingstate.squares.map((val, i) => {
        if (pos === i && val === null) {
          return lastGamingstate.xturn ? 'X' : 'O';
        }
        return val;
      });
      const base = isTraversing
        ? currhistory.slice(0, currhistory.indexOf(lastGamingstate) + 1)
        : currhistory;
      return base.concat({
        squares: nextSquarState,
        xturn: !lastGamingstate.xturn,
      });
    });
    setcurrmove(move => move + 1);
  };
  const moveTo = move => {
    setcurrmove(move);
  };
  const reset = () => {
    sethistory(NEW_GAME);
    setcurrmove(0);
  };
  return (
    <div className="app">
      <Statusmess wonby={wonby} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} eventHandler={eventHandler} />
      <Restart reset={reset} wonby={wonby} />
      <h3>Current Game History</h3>
      <History history={history} moveTo={moveTo} currmove={currmove} />
    </div>
  );
}

export default App;
