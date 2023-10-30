<script lang="ts">
  // sente and gote
  class Piece {
    abbreviation: string;
    name: string;
    color: string;
    position: number[];

    constructor(
      name: string,
      color: string,
      position: number[],
      abbreviation?: string
    ) {
      this.abbreviation = abbreviation || name[0].toUpperCase();
      this.name = name;
      this.color = color;
      this.position = position;
    }
  }

  class Board {
    coordinates: number[][];
    pieces: Piece[];

    constructor() {
      this.coordinates = [];
      this.pieces = [new Piece("king", "sente", [5, "e".charCodeAt(0)])];

      for (let i = 9; i >= 1; i--) {
        for (let j = "a".charCodeAt(0); j <= "i".charCodeAt(0); j++) {
          this.coordinates.push([i, j]);
        }
      }
    }
  }

  const board = new Board();
</script>

<main>
  <div class="board-container">
    {#each board.coordinates as coordinate (coordinate)}
      <div
        class="board"
        id={`${coordinate[0]},${String.fromCharCode(coordinate[1])}`}
      >
        {#each board.pieces as piece (piece)}
          {#if piece.position[0] === coordinate[0] && piece.position[1] === coordinate[1]}
            <div class="piece" id={`${piece.color}-${piece.name}`}>
              {piece.abbreviation}
            </div>
          {/if}
        {/each}
      </div>
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
    background-color: burlywood;
    width: 11.1%;
    height: 11.1%;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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
