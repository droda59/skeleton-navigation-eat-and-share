export class ExampleSimple {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    attached() {
        this._canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");
    }

    drawLine() {
        this._clearCanvas();
        
        this._ctx.moveTo(0,0);
        this._ctx.lineTo(200,100);
        this._ctx.stroke();
    }

    drawRect() {
        this._clearCanvas();
        
        this._ctx.fillStyle = "green";
        this._ctx.fillRect(10, 10, 100, 100);
    }

    drawCircle() {
        this._clearCanvas();

        this._ctx.beginPath();
        this._ctx.arc(95,50,40,0,2*Math.PI);
        this._ctx.stroke();
    }

    private _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}