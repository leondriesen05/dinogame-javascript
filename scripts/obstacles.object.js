export class Obstacles {

	constructor(width, height, color, x, y, context) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.width = width;
		this.height = height;
		this.context = context;
	}

	refresh() {
		this.context.fillRect(this.x, this.y, this.width, this.height)
	}

	everyinterval(n) {
		return (this.stage.frames / n) % 1 == 0 ? true : false;
	}

	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}