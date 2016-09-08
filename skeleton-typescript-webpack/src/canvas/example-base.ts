export class ExampleBase {
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;

    attached() {
        this._canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");
    }
}