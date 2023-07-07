const History = ({ history, moveTo, currmove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((val, ind) => (
          <li key={ind}>
            <button
              type="button"
              className={`btn-move ${currmove === ind ? 'active' : ''}`}
              onClick={() => moveTo(ind)}
            >
              {ind === 0 ? 'Start the Game' : `Go to move #${ind}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
