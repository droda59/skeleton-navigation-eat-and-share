import { ExampleBase } from "../example-base";
import { Coordinates } from "../models/coordinates";

export class ExamplePaths extends ExampleBase {
    private _points: Array<Coordinates> = [];

    setupLiveStroke() {
        this._clearEvents();
        this._clearCanvas();
        
        this._ctx.beginPath();
        this._ctx.strokeStyle = "blue";

        this._canvas.onmousemove = e => {
            var location = this._windowToCanvas(e.clientX, e.clientY);

            this._ctx.lineTo(location.x, location.y);
            this._ctx.stroke();
        };
    }

    setupDeferredStroke() {
        this._clearEvents();
        this._clearCanvas();
        
        this._ctx.beginPath();
        this._ctx.strokeStyle = "red";

        this._canvas.onmousemove = e => {
            var location = this._windowToCanvas(e.clientX, e.clientY);

            this._ctx.lineTo(location.x, location.y);
        };
        
        this._canvas.onmousedown = e => {
            this._ctx.stroke();
        };
    }

    setupBezier() {
        var that = this;
        this._canvas.onmousedown = e => {
            var location = this._windowToCanvas(e.clientX, e.clientY);
            this._ctx.moveTo(location.x, location.y);

            this._ctx.fillStyle = "green";
            this._ctx.fillRect(location.x - 2, location.y - 2, 4, 4);

            that._points.push(location);

            if (that._points.length >= 3) {
                var p1 = that._points[that._points.length - 3];
                var p2 = that._points[that._points.length - 2];
                var p3 = that._points[that._points.length - 1];

                this._ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                this._ctx.stroke();
            }
        };
    }
}