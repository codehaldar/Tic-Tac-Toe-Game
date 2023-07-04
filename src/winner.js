export const calcwinner = squares => {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < combos.length; i++) {
    const [a, b, c] = combos[i];
    if (squares[i] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
