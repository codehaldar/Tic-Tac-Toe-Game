import { useState } from 'react';
import Square from './Square';

const Board = ({ squares, eventHandler }) => {
  //const [success, back] = useState(false);

  const render = pos => {
    return <Square val={squares[pos]} onClick={() => eventHandler(pos)} />;
  };
  return (
    <div className="board">
      <div className="board-row">
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
      </div>
      <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
    </div>
  );
};
export default Board;
