const sum = (a, b) => a + b;

export default sum;

class Ship {
  constructor(length, hitCounter = 0) {
    this.length = length;
    this.hitCounter = hitCounter;
  }

  hit() {
    this.hitCounter += 1;
  }

  isSunk() {
    return this.length === this.hitCounter ? true : false;
  }
}
