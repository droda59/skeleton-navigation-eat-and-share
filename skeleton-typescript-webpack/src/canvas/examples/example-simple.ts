import { ExampleBase } from "../example-base";

export class ExampleSimple extends ExampleBase {
    drawLine() {
        this._clearCanvas();
        
        this._ctx.moveTo(10, 10);
        this._ctx.lineTo(this._canvas.width - 20, this._canvas.height - 20);
        this._ctx.stroke();
    }

    drawRect() {
        this._clearCanvas();
        
        this._ctx.fillStyle = "green";
        this._ctx.fillRect(10, 10, this._canvas.width - 20, this._canvas.height - 20);
    }

    drawCircle() {
        this._clearCanvas();

        this._ctx.beginPath();
        this._ctx.arc(90, 90, 40, 0, 2 * Math.PI);
        this._ctx.stroke();
    }

    drawText() {
        this._clearCanvas();

        this._ctx.fillStyle = "green";
        this._ctx.font = "30px Arial";
        this._ctx.fillText("Hello World", 10, 50);
    }

    drawGradient() {
        this._clearCanvas();

        var grd = this._ctx.createLinearGradient(0, 0, this._canvas.width, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        this._ctx.fillStyle = grd;
        this._ctx.fillRect(10, 10, this._canvas.width - 20, this._canvas.height - 20);
    }

    drawImage() {
        this._clearCanvas();

        var imageObj = new Image();
        imageObj.src = "http://placekitten.com/" + (this._canvas.width - 20) + "/" + (this._canvas.height - 20);
        imageObj.onload = () => {
            this._ctx.drawImage(imageObj, 10, 10);
        };
    }
}