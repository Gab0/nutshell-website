/*
 * A trivial canvas-based implementation of the Biomorphs in Richard Dawkins' book The
 * Blind Watchmaker.

 * Adapted from <https://cs.lmu.edu/~ray/code/js/biomorphs.js>
 */
import random from 'random';

type strokeT = {x1: number, x2: number, y1: number, y2: number};
type strokesT = Array<strokeT>;

export default class Biomorph {
  width: number;
  height: number;
  position: number;
  genes: Array<number>;
  strokes: strokesT;

  constructor(g: Array<number>, canvasHeight: number) {
    this.genes = g;

    this.width = 100;
    this.height = canvasHeight;
    this.position = 0;
    this.strokes = [];
  }

  randomize() {
    this.genes = []
    for (var i = 0; i < 9; i++) {
      this.genes[i] = random.int(-8, 8);
    }
    this.genes[8] = random.int(3, 9);

    this.genes[9] = random.int(1, 5);
    this.genes[10] = random.int(1, 5);
  }

  mutate() {
    const idx = random.int(0, 11);
    this.genes[idx] += random.int(-3, 3);
    if (this.genes[idx] < -8) this.genes[idx] = -8;
    if (this.genes[idx] > 8) this.genes[idx] = 8;
    if (this.genes[8] < 3) this.genes[8] = 3;
    if (this.genes[9] > 4) this.genes[9] = 4;
    if (this.genes[10] > 4) this.genes[10] = 4;
  }

  draw(ctx: CanvasRenderingContext2D) {

    const g = this.genes;

    var dx = [-g[1],-g[0],0,g[0],g[1],g[2],0,-g[2]];
    var dy = [g[5],g[4],g[3],g[4],g[5],g[6],g[7],g[6]];

    const strokes: strokesT = this.tree(this.position + (this.width / 2), this.height / 2, dx, dy, g[8], 2);

    ctx.lineWidth = this.genes[9];

    ctx.strokeStyle = 'white';
    this.drawStrokes(ctx, this.strokes);

    this.strokes = strokes;

    ctx.lineWidth = this.genes[10];
    ctx.strokeStyle = 'black';
    this.drawStrokes(ctx, this.strokes);


  }

  drawStrokes(ctx: CanvasRenderingContext2D, strokes: strokesT) {
    for (const s in strokes) {
      const stroke = strokes[s];

      ctx.beginPath();

      ctx.moveTo(stroke.x1, stroke.y1);
      ctx.lineTo(stroke.x2, stroke.y2);

      ctx.stroke();

    }

  }

  tree(x: number, y: number,
       dx: Array<number>, dy: Array<number>,
       len: number, dir: number): strokesT {
    const x2 = x + (len * dx[dir]);
    const y2 = y + (len * dy[dir]);

    let strokes: strokesT = [{
      x1: x,
      y1: y,
      x2: x2,
      y2: y2
    }];

    if (len > 0) {
      strokes = strokes.concat(this.tree(x2, y2, dx, dy, len - 1, (dir + 7) % 8));
      strokes = strokes.concat(this.tree(x2, y2, dx, dy, len - 1, (dir + 1) % 8));
    }

    return strokes;
  }

  check_bounds(strokes: strokesT) {
    const minX = 0;

    for (let s in strokes) {
      const stroke = strokes[s];

      if (stroke.x1) {

      }

    }
  }

}

