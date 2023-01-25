import React, { Component } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Biomorph from './biomorphs';
import Canvas from './Canvas';
import useWindowSize from '@react-hook/window-size';

export default class Biomorphs extends Component {
  biomorphs: Array<Biomorph>;
  biomorphCount: number;
  width: number;
  height: number;

  constructor(props: {}) {
    super(props);

    this.biomorphs = [];
    this.width = 700;
    this.height = 200;
    this.biomorphCount = 5;

    for (var i = 0; i < this.biomorphCount; i++) {
      let biomorph = new Biomorph([], this.height);
      biomorph.randomize();
      this.biomorphs.push(biomorph);
    }
    console.log(this.biomorphs);
  }

  componentDidMount() {
  }

  drawBall(ctx: CanvasRenderingContext2D, frameCount: number) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc((50 + frameCount) % this.width, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  drawBiomorphs(ctx: CanvasRenderingContext2D, frameCount: number) {
    if (frameCount % 5 == 0) this.reset(ctx);

    for (let i=0; i < this.biomorphCount; i++) {
      const biomorph = this.biomorphs[i];
      biomorph.position = (250 * i + frameCount) % this.width;
      if (frameCount % 5 == 0) biomorph.mutate();
      biomorph.draw.bind(biomorph)(ctx)
    }

  }

  reset(ctx: CanvasRenderingContext2D) {

    ctx.clearRect(
      0,
      0,
      this.width,
      this.height
    );

  }

  render() {
    return (
      <center>
      <Canvas
        draw={this.drawBiomorphs.bind(this)}
        width={this.width}
        height={this.height}
      />
      </center>
    );
  }
}
