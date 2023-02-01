import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  height: number;
  width: number;
  draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
}

const Canvas: React.FC<CanvasProps> = ({ height, width, draw }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId!);
    };
  }, [draw]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
