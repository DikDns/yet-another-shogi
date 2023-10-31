<script lang="ts">
  import Piece from "./lib/Piece";
  import Board from "./lib/Board";

  let board = new Board();

  let selectedPiece: Piece | null = null;

  const handleBoardClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const targetId = target.id.split("-");

    if (!selectedPiece && targetId[0] === "board") {
      return;
    }

    if (
      targetId[0] === "piece" &&
      selectedPiece?.color !== targetId[1] &&
      selectedPiece?.name !== targetId[2]
    ) {
      const pieceColor = targetId[1];
      const pieceName = targetId[2];

      selectedPiece = board.pieces.find(
        (piece) => piece.color === pieceColor && piece.name === pieceName
      )!;

      return;
    }

    const newPiecePosition = target.id
      .split("-")[1]
      .split(",")
      .map((coordinate) => +coordinate);

    if (
      newPiecePosition === selectedPiece?.position ||
      targetId[0] === "piece"
    ) {
      selectedPiece = null;
      return;
    }

    if (targetId[0] === "board") {
      board = new Board([
        ...board.pieces.filter(
          (piece) =>
            piece.color !== selectedPiece!.color ||
            piece.name !== selectedPiece!.name
        ),
        new Piece(
          selectedPiece!.name,
          selectedPiece!.color,
          newPiecePosition,
          selectedPiece!.abbreviation
        ),
      ]);

      selectedPiece = null;

      return;
    }
  };

  const handleBoardKeyDown = (event: KeyboardEvent) => {};
</script>

<main>
  {selectedPiece?.abbreviation}
  <div class="board-container">
    {#each board.coordinates as coordinate (coordinate)}
      <button
        class="board"
        id={`board-${coordinate[0]},${coordinate[1]}`}
        on:click={handleBoardClick}
        on:keydown={handleBoardKeyDown}
      >
        {#each board.pieces as piece (piece)}
          {#if piece.position[0] === coordinate[0] && piece.position[1] === coordinate[1]}
            <div class="piece" id={`piece-${piece.color}-${piece.name}`}>
              {piece.abbreviation}
            </div>
          {/if}
        {/each}
      </button>
    {/each}
  </div>
</main>

<style>
  .board-container {
    color: #010101;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 500px;
  }

  .board {
    padding: 0;
    background-color: burlywood;
    width: 11.1%;
    height: 11.1%;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .board:focus {
    outline: none;
  }

  .piece {
    width: 75%;
    height: 75%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background-color: #010101;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
