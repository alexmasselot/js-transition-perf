import {Ball} from "./ball";
export class BallSet {
  balls: Array<Ball> = new Array();

  constructor(n) {
    for (var i = 0; i < n; i++) {
      this.balls.push(new Ball(i, Math.random(), Math.random()))
    }
  }

  size() {
    return this.balls.length;
  }

  get(i: number) {
    return this.balls[i];
  }

  /**
   * return a new ball set with update positions random
   * factor is a floating point value. The leap among the two directions is on average factor * width or height.
   * a ball cannot get out of the box
   */
  walk(factor) {
    var bs = new BallSet(0);

    this.balls.forEach(function (b) {
      var dx = (Math.random() - 0.5) * 4 * factor;
      var dy = (Math.random() - 0.5) * 4 * factor;
      var x1 = ((b.x + dx) <= 1 && b.x + dx >= 0) ? (b.x + dx) : (b.x - dx)
      var y1 = ((b.y + dy) <= 1 && b.y + dy >= 0) ? (b.y + dy) : (b.y - dy)
      bs.balls.push(new Ball(b.id, x1, y1))
    });
    return bs;
  }
}
