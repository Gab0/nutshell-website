import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Biomorph from './biomorphs';
import Canvas from './Canvas';
import { useWindowSize } from '@react-hook/window-size';

const Biomorphs: React.FC<{height: number}> = ({height}) => {
  const [biomorphCount, setBiomorphCount] = useState<number>(5);
  const [width, setWidth] = useState<number>(700);
  //const [height, setHeight] = useState<number>(200);
  let frameStep = 1;

  const generateBiomorphs = () => {
    const newBiomorphs: Array<Biomorph> = [];

    for (let i = 0; i < biomorphCount; i++) {
      let biomorph = new Biomorph([], height);
      biomorph.randomize();
      newBiomorphs.push(biomorph);
    }
    return newBiomorphs;
  }

  useEffect( () => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)

  }, []);

  const biomorphs: Array<Biomorph> = generateBiomorphs();

  const drawBall = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc((50 + frameCount) % width, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawBiomorphs = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    if (frameCount % frameStep === 0) reset(ctx);
    if (frameCount % 300 === 0) frameStep = 1; //(1 + Math.floor(Math.random() * 0));

    for (let i = 0; i < biomorphCount; i++) {
      const biomorph = biomorphs[i];
      biomorph.position = (250 * i + frameCount) % width;
      if (frameCount % 5 === 0) biomorph.mutate();
      biomorph.draw.bind(biomorph)(ctx);
    }
  };

  const reset = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, width, height);
    //ctx.fillStyle = "#C9FFD950";
    //ctx.fillRect(0, 0, width, height);
  };

  return (
    <center>
      <Canvas draw={drawBiomorphs} width={width} height={height} />
    </center>
  );
};

export default Biomorphs;
