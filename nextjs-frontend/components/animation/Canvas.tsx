import React, { useRef, useEffect } from 'react'

const Canvas = (props: {height: number, width: number, draw: Function}) => {

  const { draw, ...rest } = props
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas: null | any = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId!);
    }
  }, [draw])

  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas
