const Square = ({ val, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {val}
    </button>
  );
};
export default Square;
