class Piece {
  abbreviation: string;
  name: string;
  color: "sente" | "gote";
  position: number[];

  constructor(
    name: string,
    color: "sente" | "gote",
    position: number[],
    abbreviation?: string
  ) {
    this.abbreviation = abbreviation || name[0].toUpperCase();
    this.name = name;
    this.color = color;
    this.position = position;
  }
}
export default Piece;
