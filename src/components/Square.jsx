const Square = ({ val, onClick, iswinsq }) => {
  return (
    <button
      type="button"
      className={`square ${val === 'X' ? 'text-green' : 'text-orange'} ${
        iswinsq ? 'winning' : ''
      }`}
      onClick={onClick}
    >
      {val}
    </button>
  );
};
export default Square;
