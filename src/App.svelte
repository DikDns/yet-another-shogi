<script lang="ts">
  class Board {
    coordinates: number[][];

    constructor() {
      this.coordinates = [];

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
      <div class="board" />
    {/each}
  </div>
</main>

<style>
  .board-container {
    color: darkslategrey;
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
</style>
