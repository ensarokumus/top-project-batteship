class GameBoard {
  constructor() {
    this.gameBoardArray = this.createGameBoard();
    this.missedAttacks = [];
  }

  createGameBoard() {
    let array,
      arrayItem = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem.push({ name: undefined, index: undefined });
      }
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }

  getGameBoard() {
    return this.gameBoardArray;
  }

  isPlacementValid(length, x, y) {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10) {
      return false;
    } else {
      for (let i = y; i < y + length; i++) {
        if (this.gameBoardArray[i][x].name != undefined) {
          return false;
        }
      }
      return true;
    }
  }
}

export default GameBoard;
