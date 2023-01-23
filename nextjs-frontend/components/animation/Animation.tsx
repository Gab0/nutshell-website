import React, { Component } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Biomorph from './biomorphs';
import Canvas from './Canvas';
import useWindowSize from '@react-hook/window-size';

export default class Biomorphs extends Component {
  biomorph: Biomorph;
  width: number;
  constructor(props: {}) {
    super(props);

    this.width = 700;
    this.biomorph = new Biomorph([]);
    this.biomorph.randomize();
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
    this.biomorph.position = (50 + frameCount) % this.width;
    if (frameCount % 20 == 0) this.biomorph.mutate();
    this.biomorph.draw.bind(this.biomorph)(ctx)
  }

  render() {

    return (
      <Canvas
        draw={this.drawBiomorphs.bind(this)}
        width={this.width}
        height={300}
      />
    );
  }
}
