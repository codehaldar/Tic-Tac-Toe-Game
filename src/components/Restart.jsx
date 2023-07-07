const Restart = ({ reset, wonby }) => {
  return (
    <button
      type="button"
      className={`btn-reset ${wonby ? 'active' : ''}`}
      onClick={() => reset()}
    >
      Restart The Game
    </button>
  );
};
export default Restart;
