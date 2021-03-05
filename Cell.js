class Cell {
  /*
  attribute
  - i
  - j
  - realX
  - realY
  - nextPathCell
  - size
  - walls
  - visited
  - color
  - text

  method
  - constructor(i, j, size)
  - show()
  - connectLine(other)

  */
  constructor(i, j, size) {
    // point
    this.i = i;
    this.j = j;

    // size
    this.size = size;

    // real position
    this.realX = this.i * this.size;
    this.realY = this.j * this.size;

    // next path cell(linked list)
    this.nextPathCell = undefined;

    // walls (TOP, RIGHT, BOTTOM, LEFT)
    this.walls = [true, true, true, true];

    // visited
    this.visited = false;

    // color
    this.color = 0;

    // location
    this.text = undefined;
  }

  // setThisToOther(other) {
  //   // point
  //   this.i = other.i;
  //   this.j = other.j;
  //
  //   this.realX = this.i * size;
  //   this.realY = this.j * size;
  //
  //   // next path cell(linked list)
  //   this.nextPathCell = other.nextPathCell;
  //
  //   // size
  //   this.size = other.size;
  //
  //   // walls (TOP, RIGHT, BOTTOM, LEFT)
  //   this.walls = other.walls;
  //
  //   // visited
  //   this.visited = other.visited;
  //
  //   // color
  //   this.color = other.color;
  //
  //   // location
  //   this.text = other.text;
  // }

  show() {
    let x = this.realX;
    let y = this.realY;

    stroke(255);
    noFill();
    // rect(x, y, w, w);
    if (this.walls[maze.TOP])
      line(x, y, x + this.size, y); // top
    if (this.walls[maze.RIGHT])
      line(x + this.size, y, x + this.size, y + this.size); // right
    if (this.walls[maze.BOTTOM])
      line(x, y + this.size, x + this.size, y + this.size); // bottom
    if (this.walls[maze.LEFT])
      line(x, y, x, y + this.size); // left


    // paint color
    // if (this.visited) {
    noStroke();
    fill(this.color);
    rect(x, y, this.size, this.size);
    // }

    if(this.text) {
      textSize(this.size);
      fill(255);
      text(this.text,
           this.realX + (this.size * (1/6)),
           this.realY + (this.size * (5/6)));
    }

  }

  connectLine(other) {
    if( ! other)
      return;

    fill(255, 0, 0);
    stroke(255, 0, 0);
    let offset = this.size / 2;
    line(this.realX + offset,
         this.realY + offset,
         other.realX + offset,
         other.realY + offset);
  }
}
