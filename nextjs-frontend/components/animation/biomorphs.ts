/*
 * A trivial canvas-based implementation of the Biomorphs in Richard Dawkins' book The
 * Blind Watchmaker.

 * Adapted from <https://cs.lmu.edu/~ray/code/js/biomorphs.js>
 */
import random from 'random';

export default class Biomorph {
  width: number;
  height: number;
  position: number;
  genes: Array<number>;

  constructor(g: Array<number>, canvasHeight: number) {
    this.genes = g;

    this.width = 100;
    this.height = canvasHeight;
    this.position = 0;
  }

  randomize() {
    this.genes = []
    for (var i = 0; i < 9; i++) {
      this.genes[i] = random.int(-8, 8);
    }
    this.genes[8] = random.int(3, 9);
  }

  mutate() {
    const idx = random.int(0, 9);
    this.genes[idx] += random.int(-3, 3);
    if (this.genes[idx] < -8) this.genes[idx] = -8;
    if (this.genes[idx] > 8) this.genes[idx] = 8;
    if (this.genes[8] < 3) this.genes[8] = 3;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(
      this.position - this.width * 2,
      0,
      this.position + this.width * 2,
      300
    );

    const g = this.genes;

    var dx = [-g[1],-g[0],0,g[0],g[1],g[2],0,-g[2]];
    var dy = [g[5],g[4],g[3],g[4],g[5],g[6],g[7],g[6]];

    this.tree(ctx, this.position + (this.width/2), this.height/2, dx, dy, g[8], 2);
  }

  tree(ctx: CanvasRenderingContext2D,
       x: number, y: number,
       dx: Array<number>, dy: Array<number>,
       len: number, dir: number) {
    const x2 = x + (len * dx[dir]);
    const y2 = y + (len * dy[dir]);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (len > 0) {
      this.tree(ctx, x2, y2, dx, dy, len - 1, (dir + 7) % 8);
      this.tree(ctx, x2, y2, dx, dy, len - 1, (dir + 1) % 8);
    }
  }

  }
