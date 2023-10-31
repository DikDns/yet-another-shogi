import Piece from "./Piece";

class Board {
  coordinates: number[][];
  pieces: Piece[];

  constructor(pieces?: Piece[]) {
    this.coordinates = [];
    this.pieces = pieces || [
      new Piece("king", "sente", [1, "e".charCodeAt(0)]),
      new Piece("king", "gote", [9, "e".charCodeAt(0)]),
    ];

    for (let i = 9; i >= 1; i--) {
      for (let j = "a".charCodeAt(0); j <= "i".charCodeAt(0); j++) {
        this.coordinates.push([i, j]);
      }
    }
  }
}

export default Board;
