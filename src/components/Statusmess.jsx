const Statusmess = ({ wonby, gamingBoard }) => {
  const { squares, xturn } = gamingBoard;
  const nomovesleft = squares.every(val => val !== null);
  const nextplayer = xturn ? (
    <span className="text-green">X</span>
  ) : (
    <span className="text-orange">O</span>
  );
  const renderstatus = () => {
    if (wonby !== null) {
      return (
        <>
          WINNER IS{' '}
          <span className={wonby === 'X' ? 'text-green' : 'text-orange'}>
            {wonby}
          </span>{' '}
        </>
      );
    }
    if (!wonby && nomovesleft) {
      return <>DRAW</>;
    }
    return <>NEXT PLAYER IS {nextplayer} </>;
  };
  return <div className="status-message">{renderstatus()}</div>;
};
export default Statusmess;
