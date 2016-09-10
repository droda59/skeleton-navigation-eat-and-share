import { ExampleBase } from "../example-base";
import { Coordinates } from "../models/coordinates";

export class ExampleEvents extends ExampleBase {
    setupMouseMove() {
        this._clearEvents();

        this._canvas.onmousemove = e => {
            var location = this._windowToCanvas(e.clientX, e.clientY);

            this._clearCanvas();
            this._drawGuidelines(location);
        };
    }

    private _drawGuidelines(coordinates: Coordinates) {
        this._ctx.strokeStyle = "rgba(0, 0, 230, 0.8)";
        this._ctx.lineWidth = 0.5;
        
        this._drawVerticalLine(coordinates.x);
        this._drawHorizontalLine(coordinates.y);
    }

    private _drawVerticalLine (x: number) {
        this._ctx.beginPath();
        this._ctx.moveTo(x + 0.5, 0);
        this._ctx.lineTo(x + 0.5, this._canvas.height);
        this._ctx.stroke();
    }

    private _drawHorizontalLine (y: number) {
        this._ctx.beginPath();
        this._ctx.moveTo(0, y + 0.5);
        this._ctx.lineTo(this._canvas.width, y + 0.5);
        this._ctx.stroke();
    }
}