class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCounter = [];
  }

  hit(index) {
    if (this.hitCounter.includes(index) || index < 0 || index >= this.length)
      return this.hitCounter.push(index);
  }

  isSunk() {
    return this.length === this.hitCounter ? true : false;
  }
}

export default Ship;
