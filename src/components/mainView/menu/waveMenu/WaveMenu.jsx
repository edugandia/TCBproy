import React, { Component } from 'react';
import Point from "./Point"

export default class WaveMenu extends Component {
    constructor() {
        super();
        this.state = {
            tick: 10,
            opt: {
                count: 8,
                range: {
                    x: 20,
                    y: 50
                },
                duration: {
                    min: 100,
                    max: 400
                },
                thickness: 3,
                level: .5,
                curved: true
            },
            cw: window.innerWidth,
            ch: 200
        }

        this.points = [
            
        ];
    }

    componentDidMount() {
        let i = this.state.opt.count + 2;
        let spacing = (this.state.cw + (this.state.opt.range.x * 2)) / (this.state.opt.count - 1);
        let objPoint = {
            x: (spacing * (i - 1)) - this.state.opt.range.x,
            y: this.state.ch - (this.state.ch * this.state.opt.level)
        }
        while (i--) {
            this.points.push(new Point(objPoint.x, objPoint.y));
        }
        console.log(this.points)
        this.updateCanvas()
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.strokeStyle = 'cyan';
        ctx.beginPath();
        let pointCount = this.points.length;
        ctx.moveTo(this.points[0].x, this.points[0].y);
        let i;
        for (i = 0; i < pointCount - 1; i++) {
            let c = (this.points[i].x + this.points[i + 1].x) / 2;
            let d = (this.points[i].y + this.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, c, d);
        }
        ctx.lineTo(-this.state.opt.range.x - this.state.opt.thickness, this.state.ch + this.state.opt.thickness);
        ctx.lineTo(this.state.cw + this.state.opt.range.x + this.state.opt.thickness, this.state.ch + this.state.opt.thickness);
        ctx.closePath();
        ctx.stroke();
    }

    render() {
        return (
            <div className="wave-menu">
                <canvas ref="canvas" width={window.innerWidth} height={200}></canvas>
            </div>
        )
    }
}
