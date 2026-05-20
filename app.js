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
    selectPiece: "Selecione uma peca para ver os movimentos disponiveis.",
    mustCapture: "Captura obrigatoria disponivel.",
    keepCapturing: "Continue capturando com a mesma peca.",
    redWins: "Vermelhas venceram.",
    blackWins: "Pretas venceram.",
    botThinking: "Bot pensando...",
    botTurn: "Vez do bot.",
    onlineOffline: "Entre e crie uma sala para convidar outro jogador.",
    onlineLogged: "Logado como {name}. Crie uma sala para jogar online.",
    onlineRoom: "Sala {room} criada. Multiplayer real exige servidor de sincronizacao antes de publicar.",
    onlineWaiting: "Aguardando adversario logado entrar na sala.",
    modeLabel: "Modo de jogo",
    modeLocal: "Local",
    modeBot: "Contra bot",
    modeOnline: "Online",
    botLevel: "Nivel do bot",
    botEasy: "Facil",
    botMedium: "Medio",
    botHard: "Velho da praca",
    playerName: "Seu nome",
    loginOnline: "Entrar",
    createRoom: "Criar sala",
    rulesTitle: "Pontos base",
    ruleMove: "Pecas comuns movem uma casa na diagonal.",
    ruleCapture: "Capturas sao obrigatorias quando disponiveis.",
    ruleKing: "Ao chegar ao final, a peca vira dama.",
    ruleWin: "Vence quem capturar ou bloquear todas as pecas rivais."
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
    botThinking: "Bot thinking...",
    botTurn: "Bot turn.",
    onlineOffline: "Sign in and create a room to invite another player.",
    onlineLogged: "Signed in as {name}. Create a room to play online.",
    onlineRoom: "Room {room} created. Real multiplayer needs a sync server before publishing.",
    onlineWaiting: "Waiting for a signed-in opponent to join the room.",
    modeLabel: "Game mode",
    modeLocal: "Local",
    modeBot: "Versus bot",
    modeOnline: "Online",
    botLevel: "Bot level",
    botEasy: "Easy",
    botMedium: "Medium",
    botHard: "Old-timer",
    playerName: "Your name",
    loginOnline: "Sign in",
    createRoom: "Create room",
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
    keepCapturing: "Continua capturando con la misma ficha.",
    redWins: "Ganan las rojas.",
    blackWins: "Ganan las negras.",
    botThinking: "El bot esta pensando...",
    botTurn: "Turno del bot.",
    onlineOffline: "Entra y crea una sala para invitar a otro jugador.",
    onlineLogged: "Conectado como {name}. Crea una sala para jugar online.",
    onlineRoom: "Sala {room} creada. El multijugador real necesita servidor de sincronizacion.",
    onlineWaiting: "Esperando que un rival conectado entre en la sala.",
    modeLabel: "Modo de juego",
    modeLocal: "Local",
    modeBot: "Contra bot",
    modeOnline: "Online",
    botLevel: "Nivel del bot",
    botEasy: "Facil",
    botMedium: "Medio",
    botHard: "Viejo de la plaza",
    playerName: "Tu nombre",
    loginOnline: "Entrar",
    createRoom: "Crear sala",
    rulesTitle: "Puntos base",
    ruleMove: "Las fichas comunes se mueven una casilla en diagonal.",
    ruleCapture: "Las capturas son obligatorias cuando estan disponibles.",
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
    botThinking: "Le bot reflechit...",
    botTurn: "Tour du bot.",
    onlineOffline: "Connectez-vous et creez une salle pour inviter un joueur.",
    onlineLogged: "Connecte en tant que {name}. Creez une salle pour jouer en ligne.",
    onlineRoom: "Salle {room} creee. Le vrai multijoueur exige un serveur de synchronisation.",
    onlineWaiting: "En attente d'un adversaire connecte.",
    modeLabel: "Mode de jeu",
    modeLocal: "Local",
    modeBot: "Contre bot",
    modeOnline: "En ligne",
    botLevel: "Niveau du bot",
    botEasy: "Facile",
    botMedium: "Moyen",
    botHard: "Vieux de la place",
    playerName: "Votre nom",
    loginOnline: "Entrer",
    createRoom: "Creer une salle",
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
const gameModeEl = document.querySelector("#game-mode");
const botLevelEl = document.querySelector("#bot-level");
const botOptionsEl = document.querySelector("#bot-options");
const onlineOptionsEl = document.querySelector("#online-options");
const playerNameEl = document.querySelector("#player-name");
const loginOnlineEl = document.querySelector("#login-online");
const createRoomEl = document.querySelector("#create-room");
const onlineStateEl = document.querySelector("#online-state");

const size = 8;
const botColor = "black";
const humanColor = "red";
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
let gameMode = "local";
let botLevel = "easy";
let botBusy = false;
let onlinePlayer = "";
let onlineRoom = "";

function t(key, replacements = {}) {
  const template = translations[language][key] || translations["pt-BR"][key] || key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, value),
    template
  );
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

function cloneBoard(source) {
  return source.map((row) => row.map((piece) => (piece ? { ...piece } : null)));
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

function getSimpleMovesOn(targetBoard, row, col, forcedChain = null) {
  const piece = targetBoard[row][col];
  if (!piece || forcedChain) return [];
  return moveDirections(piece)
    .map((direction) => ({
      from: { row, col },
      to: { row: row + direction.row, col: col + direction.col },
      captures: []
    }))
    .filter((move) => inside(move.to.row, move.to.col) && !targetBoard[move.to.row][move.to.col]);
}

function getCapturesOn(targetBoard, row, col) {
  const piece = targetBoard[row][col];
  if (!piece) return [];

  return directions
    .map((direction) => {
      const jumped = { row: row + direction.row, col: col + direction.col };
      const landed = { row: row + direction.row * 2, col: col + direction.col * 2 };
      if (!inside(jumped.row, jumped.col) || !inside(landed.row, landed.col)) return null;

      const target = targetBoard[jumped.row][jumped.col];
      if (!target || target.color === piece.color || targetBoard[landed.row][landed.col]) return null;

      return {
        from: { row, col },
        to: landed,
        captures: [jumped]
      };
    })
    .filter(Boolean);
}

function allCapturesForOn(targetBoard, color) {
  const captures = [];
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const piece = targetBoard[row][col];
      if (piece && piece.color === color) {
        captures.push(...getCapturesOn(targetBoard, row, col));
      }
    }
  }
  return captures;
}

function getMovesForOn(targetBoard, color, row, col, forcedChain = null) {
  const piece = targetBoard[row][col];
  if (!piece || piece.color !== color) return [];
  if (forcedChain && !samePosition(forcedChain, { row, col })) return [];

  const captures = forcedChain ? getCapturesOn(targetBoard, row, col) : allCapturesForOn(targetBoard, color);
  const ownCaptures = captures.filter((move) => move.from.row === row && move.from.col === col);
  if (captures.length > 0) return ownCaptures;

  return getSimpleMovesOn(targetBoard, row, col, forcedChain);
}

function getAllMovesForOn(targetBoard, color) {
  const captures = allCapturesForOn(targetBoard, color);
  if (captures.length) return captures;

  const moves = [];
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const piece = targetBoard[row][col];
      if (piece && piece.color === color) {
        moves.push(...getSimpleMovesOn(targetBoard, row, col));
      }
    }
  }
  return moves;
}

function getMovesFor(row, col) {
  if (winner) return [];
  return getMovesForOn(board, turn, row, col, chainPiece);
}

function getAllMovesFor(color) {
  return getAllMovesForOn(board, color);
}

function promoteIfNeeded(piece, row) {
  if ((piece.color === "red" && row === 0) || (piece.color === "black" && row === size - 1)) {
    piece.king = true;
  }
}

function applyMoveToBoard(targetBoard, move) {
  const piece = targetBoard[move.from.row][move.from.col];
  targetBoard[move.from.row][move.from.col] = null;
  targetBoard[move.to.row][move.to.col] = piece;

  move.captures.forEach((captured) => {
    targetBoard[captured.row][captured.col] = null;
  });

  promoteIfNeeded(piece, move.to.row);
  return piece;
}

function applyMove(move) {
  applyMoveToBoard(board, move);

  if (move.captures.length) {
    const nextCaptures = getCapturesOn(board, move.to.row, move.to.col);
    if (nextCaptures.length) {
      chainPiece = { row: move.to.row, col: move.to.col };
      selected = chainPiece;
      statusKey = "keepCapturing";
      render();
      if (isBotTurn()) queueBotMove();
      return;
    }
  }

  turn = opponentOf(turn);
  selected = null;
  chainPiece = null;
  statusKey = allCapturesForOn(board, turn).length ? "mustCapture" : "selectPiece";
  updateWinner();
  render();
  if (isBotTurn()) queueBotMove();
}

function updateWinner() {
  const redPieces = countPieces("red");
  const blackPieces = countPieces("black");

  if (redPieces === 0) winner = "black";
  if (blackPieces === 0) winner = "red";
  if (!winner && getAllMovesFor(turn).length === 0) winner = opponentOf(turn);
}

function countPieces(color, targetBoard = board) {
  return targetBoard.flat().filter((piece) => piece?.color === color).length;
}

function legalMovesForSelection() {
  if (!selected) return [];
  return getMovesFor(selected.row, selected.col);
}

function isBotTurn() {
  return gameMode === "bot" && turn === botColor && !winner;
}

function isBoardLockedForHuman() {
  return botBusy || isBotTurn() || (gameMode === "online" && !onlineRoom);
}

function handleSquareClick(row, col) {
  if (winner || isBoardLockedForHuman()) return;
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

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function evaluateMove(targetBoard, move, color) {
  const nextBoard = cloneBoard(targetBoard);
  const movingPiece = nextBoard[move.from.row][move.from.col];
  const wasKing = movingPiece?.king;
  applyMoveToBoard(nextBoard, move);
  const becameKing = movingPiece && !wasKing && movingPiece.king;
  const opponent = opponentOf(color);
  const exposed = allCapturesForOn(nextBoard, opponent).some(
    (candidate) => candidate.captures[0]?.row === move.to.row && candidate.captures[0]?.col === move.to.col
  );

  return (
    move.captures.length * 120 +
    (becameKing ? 80 : 0) +
    (movingPiece?.king ? 15 : 0) +
    (color === "black" ? move.to.row : size - 1 - move.to.row) * 4 -
    (exposed ? 55 : 0)
  );
}

function evaluateBoard(targetBoard) {
  let score = 0;
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const piece = targetBoard[row][col];
      if (!piece) continue;
      const value = (piece.king ? 175 : 100) + (piece.color === "black" ? row : size - 1 - row) * 3;
      score += piece.color === botColor ? value : -value;
    }
  }
  return score;
}

function minimax(targetBoard, color, depth, alpha, beta) {
  const moves = getAllMovesForOn(targetBoard, color);
  if (depth === 0 || moves.length === 0) {
    return { score: evaluateBoard(targetBoard) };
  }

  let bestMove = null;
  if (color === botColor) {
    let bestScore = -Infinity;
    for (const move of moves) {
      const nextBoard = cloneBoard(targetBoard);
      applyMoveToBoard(nextBoard, move);
      const score = minimax(nextBoard, opponentOf(color), depth - 1, alpha, beta).score;
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
      alpha = Math.max(alpha, bestScore);
      if (beta <= alpha) break;
    }
    return { score: bestScore, move: bestMove };
  }

  let bestScore = Infinity;
  for (const move of moves) {
    const nextBoard = cloneBoard(targetBoard);
    applyMoveToBoard(nextBoard, move);
    const score = minimax(nextBoard, opponentOf(color), depth - 1, alpha, beta).score;
    if (score < bestScore) {
      bestScore = score;
      bestMove = move;
    }
    beta = Math.min(beta, bestScore);
    if (beta <= alpha) break;
  }
  return { score: bestScore, move: bestMove };
}

function chooseBotMove() {
  const moves = chainPiece ? getMovesFor(chainPiece.row, chainPiece.col) : getAllMovesFor(botColor);
  if (!moves.length) return null;
  if (botLevel === "easy") return randomChoice(moves);

  if (botLevel === "medium") {
    const ranked = [...moves].sort((a, b) => evaluateMove(board, b, botColor) - evaluateMove(board, a, botColor));
    return ranked[0];
  }

  return minimax(board, botColor, 4, -Infinity, Infinity).move || randomChoice(moves);
}

function queueBotMove() {
  if (botBusy || !isBotTurn()) return;
  botBusy = true;
  statusKey = "botThinking";
  render();

  window.setTimeout(() => {
    const move = chooseBotMove();
    botBusy = false;
    if (move) applyMove(move);
  }, botLevel === "hard" ? 520 : 360);
}

function renderBoard() {
  boardEl.innerHTML = "";
  boardEl.classList.toggle("thinking", botBusy);
  const legalMoves = legalMovesForSelection();

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const square = document.createElement("button");
      square.type = "button";
      square.className = `square ${(row + col) % 2 ? "dark" : "light"}`;
      square.setAttribute("aria-label", `${row + 1}, ${col + 1}`);
      square.disabled = isBoardLockedForHuman();
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
  botOptionsEl.classList.toggle("hidden", gameMode !== "bot");
  onlineOptionsEl.classList.toggle("hidden", gameMode !== "online");

  if (winner) {
    statusEl.textContent = winner === "red" ? t("redWins") : t("blackWins");
  } else if (botBusy) {
    statusEl.textContent = t("botThinking");
  } else if (isBotTurn()) {
    statusEl.textContent = t("botTurn");
  } else {
    statusEl.textContent = t(statusKey);
  }

  renderOnlineState();
}

function renderOnlineState() {
  if (gameMode !== "online") return;
  if (!onlinePlayer) {
    onlineStateEl.textContent = t("onlineOffline");
    return;
  }
  if (!onlineRoom) {
    onlineStateEl.textContent = t("onlineLogged", { name: onlinePlayer });
    return;
  }
  onlineStateEl.textContent = `${t("onlineRoom", { room: onlineRoom })} ${t("onlineWaiting")}`;
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
  botBusy = false;
  statusKey = allCapturesForOn(board, turn).length ? "mustCapture" : "selectPiece";
  render();
  if (isBotTurn()) queueBotMove();
}

function setMode(nextMode) {
  gameMode = nextMode;
  selected = null;
  chainPiece = null;
  statusKey = gameMode === "online" && !onlineRoom ? "onlineOffline" : "selectPiece";
  restartGame();
}

function createRoomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

languageEl.addEventListener("change", (event) => {
  language = event.target.value;
  render();
});

restartEl.addEventListener("click", restartGame);

gameModeEl.addEventListener("change", (event) => {
  setMode(event.target.value);
});

botLevelEl.addEventListener("change", (event) => {
  botLevel = event.target.value;
  restartGame();
});

loginOnlineEl.addEventListener("click", () => {
  onlinePlayer = playerNameEl.value.trim() || "Jogador";
  render();
});

createRoomEl.addEventListener("click", () => {
  onlinePlayer = playerNameEl.value.trim() || onlinePlayer || "Jogador";
  onlineRoom = createRoomCode();
  render();
});

restartGame();
