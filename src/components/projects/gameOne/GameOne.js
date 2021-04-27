import React, { useEffect, useRef } from 'react';
import "../../styles/GameOne.css";



const GameOne = ({staticContext, currentChildHref, parentState, ...rest}) => {

    const squareSize = 0.5;

    const draw = (ctx) => {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.fillStyle = '#000000'
        // ctx.beginPath()
        // ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.fill()
        const squareSize = 1/8*(ctx.canvas.width);
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 8; j++){
                ctx.fillStyle = ((i + j) % 2 == 0) ? "white" : "black";
                let xOffset = j * squareSize;
                let yOffset = i * squareSize;
                ctx.fillRect(xOffset, yOffset, squareSize, squareSize);

            }
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const heightRatio = 1;
        canvas.height = canvas.width * heightRatio;
        // let frameCount = 0
        // let animationFrameId
        
        draw(context)
        // const render = () => {
        //     frameCount++
        //     draw(context, frameCount)
        //     animationFrameId = window.requestAnimationFrame(render)
        // }
        // render()

        // return () => {
        //     window.cancelAnimationFrame(animationFrameId)
        // }
    }, [draw])

    useEffect(() => {
        parentState !== (window.location.href).substr(21) &&
    currentChildHref((window.location.href).substr(21));
    }, [currentChildHref, parentState])
    
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)

    return (
        <div>
            <canvas ref={canvasRef} {...rest} id="gameone" />
        </div>
        
    );
}

export default GameOne;
