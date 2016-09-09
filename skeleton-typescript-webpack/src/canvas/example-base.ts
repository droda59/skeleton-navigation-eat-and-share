import { Coordinates } from "./models/coordinates";

export class ExampleBase {
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;

    attached() {
        this._canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");
    }

    protected _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    protected _clearEvents() {
        this._canvas.onmousedown = null;
        this._canvas.onmousemove = null;
    }

    protected _windowToCanvas(x: number, y: number) {
        var bbox = this._canvas.getBoundingClientRect();

        return <Coordinates>{ 
            x: x - bbox.left * (this._canvas.width  / bbox.width),
            y: y - bbox.top  * (this._canvas.height / bbox.height)
        };
    }
}