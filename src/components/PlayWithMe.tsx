import { useEffect, useState, useCallback } from "react";

type Cell = "X" | "O" | null;
type Board = Cell[];

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Board): { winner: Cell; line: number[] | null } {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return { winner: null, line: null };
}

function isDraw(board: Board) {
  return board.every((c) => c !== null) && !getWinner(board).winner;
}

// Minimax so "Waithaka" (O) plays well, with a little randomness so it's
// beatable and not a wall.
function minimax(board: Board, player: "X" | "O"): number {
  const { winner } = getWinner(board);
  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (isDraw(board)) return 0;

  const scores: number[] = [];
  board.forEach((cell, i) => {
    if (cell === null) {
      const next = [...board];
      next[i] = player;
      scores.push(minimax(next, player === "O" ? "X" : "O"));
    }
  });

  return player === "O" ? Math.max(...scores) : Math.min(...scores);
}

function bestMove(board: Board): number {
  const empties = board
    .map((c, i) => (c === null ? i : -1))
    .filter((i) => i !== -1);

  // 18% of the time, just play a reasonable-ish but not perfect move
  if (Math.random() < 0.18) {
    return empties[Math.floor(Math.random() * empties.length)];
  }

  let best = -Infinity;
  let move = empties[0];
  for (const i of empties) {
    const next = [...board];
    next[i] = "O";
    const score = minimax(next, "X");
    if (score > best) {
      best = score;
      move = i;
    }
  }
  return move;
}

export function PlayWithMe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [thinking, setThinking] = useState(false);
  const { winner, line } = getWinner(board);
  const draw = isDraw(board);
  const gameOver = !!winner || draw;

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setThinking(false);
  }, []);

  // Waithaka's (O) turn
  useEffect(() => {
    const xCount = board.filter((c) => c === "X").length;
    const oCount = board.filter((c) => c === "O").length;
    if (gameOver || xCount === oCount) return;

    setThinking(true);
    const t = setTimeout(() => {
      const move = bestMove(board);
      setBoard((prev) => {
        const next = [...prev];
        next[move] = "O";
        return next;
      });
      setThinking(false);
    }, 500);
    return () => clearTimeout(t);
  }, [board, gameOver]);

  const handleClick = (i: number) => {
    if (board[i] || gameOver || thinking) return;
    const xCount = board.filter((c) => c === "X").length;
    const oCount = board.filter((c) => c === "O").length;
    if (xCount !== oCount) return; // not X's turn
    const next = [...board];
    next[i] = "X";
    setBoard(next);
  };

  let status = "Your turn — you're X.";
  if (winner === "X") status = "You win. Nicely done. 🎉";
  else if (winner === "O") status = "Waithaka wins this one.";
  else if (draw) status = "It's a draw.";
  else if (thinking) status = "Waithaka is thinking…";

  return (
    <section
      id="play"
      className="relative px-6 sm:px-10 lg:px-24 py-28 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
        {/* ── Left: copy ── */}
        <div>
          <div
            className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: "var(--text-sub)" }}
          >
            Let's Play With Me
          </div>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Tic-tac-toe,
            <br />
            on the house.
          </h2>
          <p
            className="mt-5 max-w-md text-base leading-relaxed"
            style={{ color: "var(--text-sub)" }}
          >
            A short break from case studies. You're X, Waithaka is playing O
            &mdash; take turns and see who removes the last bit of friction.
          </p>

          <div
            className="mt-8 font-mono-brand text-sm font-bold"
            style={{ color: "var(--text)" }}
          >
            {status}
          </div>

          {gameOver && (
            <button
              onClick={reset}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Play again
            </button>
          )}
        </div>

        {/* ── Right: board ── */}
        <div
          className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden mx-auto"
          style={{
            border: "2px solid var(--text)",
            boxShadow: "var(--shadow-h)",
            width: "min(90vw, 320px)",
            aspectRatio: "1 / 1",
            background: "var(--surface)",
          }}
        >
          {board.map((cell, i) => {
            const isWinning = line?.includes(i);
            return (
              <button
                key={i}
                onClick={() => handleClick(i)}
                disabled={!!cell || gameOver || thinking}
                className="flex items-center justify-center font-display font-bold transition-colors"
                style={{
                  fontSize: "clamp(28px, 6vw, 44px)",
                  borderRight:
                    i % 3 !== 2 ? "1px solid var(--border-lt)" : "none",
                  borderBottom: i < 6 ? "1px solid var(--border-lt)" : "none",
                  color:
                    cell === "X"
                      ? "#e5484d"
                      : cell === "O"
                        ? "var(--accent)"
                        : "transparent",
                  background: isWinning ? "var(--accent-soft)" : "transparent",
                  cursor: cell || gameOver || thinking ? "default" : "pointer",
                }}
              >
                {cell ?? "·"}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
