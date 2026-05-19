const translations = {
  "pt-BR": {
    eyebrow: "Jogo de tabuleiro",
    title: "Damas",
    restart: "Reiniciar",
    turn: "Turno",
    red: "Vermelhas",
    black: "Pretas",
    redTurn: "Vermelhas",
    blackTurn: "Pretas",
    selectPiece: "Selecione uma peça para ver os movimentos disponíveis.",
    mustCapture: "Captura obrigatória disponível.",
    keepCapturing: "Continue capturando com a mesma peça.",
    redWins: "Vermelhas venceram.",
    blackWins: "Pretas venceram.",
    rulesTitle: "Pontos base",
    ruleMove: "Peças comuns movem uma casa na diagonal.",
    ruleCapture: "Capturas são obrigatórias quando disponíveis.",
    ruleKing: "Ao chegar ao final, a peça vira dama.",
    ruleWin: "Vence quem capturar ou bloquear todas as peças rivais."
  },
  en: {
    eyebrow: "Board game",
    title: "Checkers",
    restart: "Restart",
    turn: "Turn",
    red: "Red",
    black: "Black",
    redTurn: "Red",
    blackTurn: "Black",
    selectPiece: "Select a piece to see available moves.",
    mustCapture: "A capture is mandatory.",
    keepCapturing: "Keep capturing with the same piece.",
    redWins: "Red wins.",
    blackWins: "Black wins.",
    rulesTitle: "Base points",
    ruleMove: "Regular pieces move one diagonal square.",
    ruleCapture: "Captures are mandatory when available.",
    ruleKing: "A piece becomes a king on the far row.",
    ruleWin: "Win by capturing or blocking every rival piece."
  },
  es: {
    eyebrow: "Juego de mesa",
    title: "Damas",
    restart: "Reiniciar",
    turn: "Turno",
    red: "Rojas",
    black: "Negras",
    redTurn: "Rojas",
    blackTurn: "Negras",
    selectPiece: "Selecciona una ficha para ver los movimientos disponibles.",
    mustCapture: "Hay una captura obligatoria.",
    keepCapturing: "Continúa capturando con la misma ficha.",
    redWins: "Ganan las rojas.",
    blackWins: "Ganan las negras.",
    rulesTitle: "Puntos base",
    ruleMove: "Las fichas comunes se mueven una casilla en diagonal.",
    ruleCapture: "Las capturas son obligatorias cuando están disponibles.",
    ruleKing: "Al llegar al final, la ficha se convierte en dama.",
    ruleWin: "Gana quien capture o bloquee todas las fichas rivales."
  },
  fr: {
    eyebrow: "Jeu de plateau",
    title: "Dames",
    restart: "Recommencer",
    turn: "Tour",
    red: "Rouges",
    black: "Noires",
    redTurn: "Rouges",
    blackTurn: "Noires",
    selectPiece: "Selectionnez une piece pour voir les coups possibles.",
    mustCapture: "Une capture est obligatoire.",
    keepCapturing: "Continuez la capture avec la meme piece.",
    redWins: "Les rouges gagnent.",
    blackWins: "Les noires gagnent.",
    rulesTitle: "Points de base",
    ruleMove: "Les pieces simples avancent d'une case en diagonale.",
    ruleCapture: "Les captures sont obligatoires quand elles existent.",
    ruleKing: "Une piece devient dame sur la derniere rangee.",
    ruleWin: "Gagnez en capturant ou bloquant toutes les pieces adverses."
  }
};

const boardEl = document.querySelector("#board");
const languageEl = document.querySelector("#language");
const restartEl = document.querySelector("#restart");
const statusEl = document.querySelector("#status");
const turnLabelEl = document.querySelector("#turn-label");
const redCountEl = document.querySelector("#red-count");
const blackCountEl = document.querySelector("#black-count");

const size = 8;
const directions = [
  { row: -1, col: -1 },
  { row: -1, col: 1 },
  { row: 1, col: -1 },
  { row: 1, col: 1 }
];

let language = "pt-BR";
let board = [];
let turn = "red";
let selected = null;
let chainPiece = null;
let statusKey = "selectPiece";
let winner = null;

function t(key) {
  return translations[language][key] || translations["pt-BR"][key] || key;
}

function createInitialBoard() {
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => {
      if ((row + col) % 2 === 0) return null;
      if (row < 3) return { color: "black", king: false };
      if (row > 4) return { color: "red", king: false };
      return null;
    })
  );
}

function inside(row, col) {
  return row >= 0 && row < size && col >= 0 && col < size;
}

function samePosition(a, b) {
  return a && b && a.row === b.row && a.col === b.col;
}

function opponentOf(color) {
  return color === "red" ? "black" : "red";
}

function moveDirections(piece) {
  if (piece.king) return directions;
  return piece.color === "red"
    ? [{ row: -1, col: -1 }, { row: -1, col: 1 }]
    : [{ row: 1, col: -1 }, { row: 1, col: 1 }];
}

function captureDirections() {
  return directions;
}

function getSimpleMoves(row, col) {
  const piece = board[row][col];
  if (!piece || chainPiece) return [];
  return moveDirections(piece)
    .map((direction) => ({
      from: { row, col },
      to: { row: row + direction.row, col: col + direction.col },
      captures: []
    }))
    .filter((move) => inside(move.to.row, move.to.col) && !board[move.to.row][move.to.col]);
}

function getCaptures(row, col) {
  const piece = board[row][col];
  if (!piece) return [];

  return captureDirections()
    .map((direction) => {
      const jumped = { row: row + direction.row, col: col + direction.col };
      const landed = { row: row + direction.row * 2, col: col + direction.col * 2 };
      if (!inside(jumped.row, jumped.col) || !inside(landed.row, landed.col)) return null;

      const target = board[jumped.row][jumped.col];
      if (!target || target.color === piece.color || board[landed.row][landed.col]) return null;

      return {
        from: { row, col },
        to: landed,
        captures: [jumped]
      };
    })
    .filter(Boolean);
}

function allCapturesFor(color) {
  const captures = [];
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const piece = board[row][col];
      if (piece && piece.color === color) {
        captures.push(...getCaptures(row, col));
      }
    }
  }
  return captures;
}

function getMovesFor(row, col) {
  const piece = board[row][col];
  if (!piece || piece.color !== turn || winner) return [];
  if (chainPiece && !samePosition(chainPiece, { row, col })) return [];

  const captures = chainPiece ? getCaptures(row, col) : allCapturesFor(turn);
  const ownCaptures = captures.filter((move) => move.from.row === row && move.from.col === col);
  if (captures.length > 0) return ownCaptures;

  return getSimpleMoves(row, col);
}

function getAllMovesFor(color) {
  const captures = allCapturesFor(color);
  if (captures.length) return captures;

  const moves = [];
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const piece = board[row][col];
      if (piece && piece.color === color) {
        moves.push(...getSimpleMoves(row, col));
      }
    }
  }
  return moves;
}

function promoteIfNeeded(piece, row) {
  if ((piece.color === "red" && row === 0) || (piece.color === "black" && row === size - 1)) {
    piece.king = true;
  }
}

function applyMove(move) {
  const piece = board[move.from.row][move.from.col];
  board[move.from.row][move.from.col] = null;
  board[move.to.row][move.to.col] = piece;

  move.captures.forEach((captured) => {
    board[captured.row][captured.col] = null;
  });

  promoteIfNeeded(piece, move.to.row);

  if (move.captures.length) {
    const nextCaptures = getCaptures(move.to.row, move.to.col);
    if (nextCaptures.length) {
      chainPiece = { row: move.to.row, col: move.to.col };
      selected = chainPiece;
      statusKey = "keepCapturing";
      render();
      return;
    }
  }

  turn = opponentOf(turn);
  selected = null;
  chainPiece = null;
  statusKey = allCapturesFor(turn).length ? "mustCapture" : "selectPiece";
  updateWinner();
  render();
}

function updateWinner() {
  const redPieces = countPieces("red");
  const blackPieces = countPieces("black");

  if (redPieces === 0) winner = "black";
  if (blackPieces === 0) winner = "red";
  if (!winner && getAllMovesFor(turn).length === 0) winner = opponentOf(turn);
}

function countPieces(color) {
  return board.flat().filter((piece) => piece?.color === color).length;
}

function legalMovesForSelection() {
  if (!selected) return [];
  return getMovesFor(selected.row, selected.col);
}

function handleSquareClick(row, col) {
  if (winner) return;
  const piece = board[row][col];
  const legalMoves = legalMovesForSelection();
  const chosenMove = legalMoves.find((move) => move.to.row === row && move.to.col === col);

  if (chosenMove) {
    applyMove(chosenMove);
    return;
  }

  if (piece && piece.color === turn) {
    const moves = getMovesFor(row, col);
    if (moves.length) selected = { row, col };
    render();
  }
}

function renderBoard() {
  boardEl.innerHTML = "";
  const legalMoves = legalMovesForSelection();

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const square = document.createElement("button");
      square.type = "button";
      square.className = `square ${(row + col) % 2 ? "dark" : "light"}`;
      square.setAttribute("aria-label", `${row + 1}, ${col + 1}`);
      square.addEventListener("click", () => handleSquareClick(row, col));

      if (samePosition(selected, { row, col })) square.classList.add("selected");
      if (legalMoves.some((move) => move.to.row === row && move.to.col === col)) {
        square.classList.add("legal");
      }

      const piece = board[row][col];
      if (piece) {
        const pieceEl = document.createElement("span");
        pieceEl.className = `piece ${piece.color} ${piece.king ? "king" : ""}`;
        square.appendChild(pieceEl);
      }

      boardEl.appendChild(square);
    }
  }
}

function renderText() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  turnLabelEl.textContent = turn === "red" ? t("redTurn") : t("blackTurn");
  redCountEl.textContent = countPieces("red");
  blackCountEl.textContent = countPieces("black");

  if (winner) {
    statusEl.textContent = winner === "red" ? t("redWins") : t("blackWins");
  } else {
    statusEl.textContent = t(statusKey);
  }
}

function render() {
  renderBoard();
  renderText();
}

function restartGame() {
  board = createInitialBoard();
  turn = "red";
  selected = null;
  chainPiece = null;
  winner = null;
  statusKey = "selectPiece";
  render();
}

languageEl.addEventListener("change", (event) => {
  language = event.target.value;
  render();
});

restartEl.addEventListener("click", restartGame);

restartGame();
