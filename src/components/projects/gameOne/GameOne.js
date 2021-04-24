import React, { useState, useEffect, useRef } from 'react';
import "../../styles/GameOne.css";



const GameOne = (props) => {

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc((ctx.canvas.width)/2, (ctx.canvas.height)/2, 200*Math.sin(frameCount*0.0114)**2, 0 , 2*Math.PI)
        ctx.fill()
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    useEffect(() => {
        props.parentState !== (window.location.href).substr(21) &&
    props.currentChildHref((window.location.href).substr(21));
    }, [props.currentChildHref, props.parentState])
    
    const canvasRef = useRef(null)

    return (
        <div>
            <canvas ref={canvasRef} {...props} id="gameone" width="400" height="400" />
        </div>
    );
}

export default GameOne;
