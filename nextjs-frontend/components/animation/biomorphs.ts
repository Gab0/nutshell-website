/*
 * A trivial canvas-based implementation of the Biomorphs in Richard Dawkins' book The
 * Blind Watchmaker.
 *
 * This script assumes the presence of HTML elements with the following ids:
 *
 *   main                  - a canvas element in which to draw a controlled biomorph
 *   slider0 ... slider8   - a slider for each gene to control the main biomorph
 *   genes0 ... genes8     - elements in which to write the gene value for each slider
 *   randomize             - a button
 *   c0 ... c11            - canvases for the artificial selection section
 *   info1 ... info11      - elements in which to write the gene values
 *
 * This script is a hack.  Don't use it as an example of good JavaScript.
 * Stolen from <https://cs.lmu.edu/~ray/code/js/biomorphs.js>
 */
import random from 'random';

export default class Biomorph {
  width: Number;
  height: Number;
  position: Number;
  genes: Array<Number>;

  constructor(g: Array<Number>) {
    // Initialize from a gene array

    this.genes = g;

    // Spawn from a parent by tweaking one gene +/- 2
    // } else if (g instanceof Biomorph) {
    //   this.genes = g.genes.slice();
    //   var mutation;


    // // Make a completely random biomorph
    // } else {
    //   this.genes = [];

    // }

    this.width = 100;
    this.height = 100;
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
      this.genes[random.int(0, 9)] += random.int(-3, 3);
      if (this.genes[8] < 3) this.genes[8] = 3;
  }

  draw(ctx, info) {
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

  tree(ctx, x, y, dx, dy, len, dir) {
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


function j() {

  var canvases = [], height = 220, width = 220, GENES = 9;

  function random(low, high) {
    return low + Math.floor(Math.random() * (high - low));
  }

  /*
   * Constructor: accepts an array of genes, or a parent biomorph, or no arguments.
   */

  /*
   *The drawing function from Dawkins' book.
   */

  /*
   * Draws the biomorph to the given canvas context, and if an info element is passed
   * in, writes the gene data to its innerHTML content.
   */


  /*
   * Generate a bunch of children in each of the children canvases.
   */
  function reproduce (parent) {
    canvases.forEach(function (c) {
      c.biomorph = new Biomorph(parent);
      c.biomorph.draw(c.getContext("2d"), c.info);
    });
  }

  /*
   * Load and draw an example biomorph into the main canvas (the one with the sliders).
   */
  function loadMainExample(biomorph) {
    // var ctx = document.getElementById("main").getContext("2d");
    // for (var i = 0; i < GENES; i++) {
    //   document.getElementById("slider" + i).value = biomorph.genes[i];
    //   document.getElementById("gene" + i).innerHTML = biomorph.genes[i];
    //   biomorph.draw(ctx);
    // }
  }

  /*
   * Respond to a slider change by redrawing the main biomorph.
   */
  function updateExample() {
    // this.info.innerHTML = this.value;
    // var ctx = document.getElementById("main").getContext("2d");
    // var genes = [];
    // for (var i = 0; i < GENES; i++) {
    //   genes.push(document.getElementById("gene" + i).innerHTML);
    }
  }

  // Assign listeners to the sliders
  // for (var i = 0; i < GENES; i++) {
  //   // var slider = document.getElementById('slider' + i);
  //   // slider.info = document.getElementById('gene' + i);
  //   // slider.oninput = updateExample;
  // }

  // Assign listeners to the canvases in the selection section
  // for (var i = 0; i < 12; i++) {
  //   // canvases[i] = document.getElementById('c' + i);
  //   // canvases[i].onclick = function () {reproduce(this.biomorph);};
  //   // canvases[i].info = document.getElementById('info' + i);
  // }

  // Assign a listener to the randomizer button
  //document.getElementById('randomize').onclick = reproduce;

  // Load up the main canvas and the offspring canvases
  //loadMainExample(new Biomorph([1, -1, -3, -6, 4, 4, 1, -4, 7]));
  //reproduce(new Biomorph([2, -4, -2, -2, 5, 4, -3, 6, 4]));
