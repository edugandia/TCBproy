import opt from './configWave';
import UtilsWaves from './utilsWave';

export default class Point {
    anchorX;
    anchorY;
    x;
    y;
    constructor(coordX, coordY) {
        this.anchorX = coordX;
        this.anchorY = coordY;
        this.x = coordX;
        this.y = coordY;
        this.setTarget();
    }

    setTarget() {
        this.initialX = this.x;
        this.initialY = this.y;
        this.targetX = this.anchorX + UtilsWaves.rand(0, opt.range.x * 2) - opt.range.x;
        this.targetY = this.anchorY + UtilsWaves.rand(0, opt.range.y * 2) - opt.range.y;
        this.tick = 0;
        this.duration = UtilsWaves.rand(opt.duration.min, opt.duration.max);
    }

    update() {
        var dx = this.targetX - this.x;
        var dy = this.targetY - this.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (Math.abs(dist) <= 0) {
            this.setTarget();
        } else {
            var t = this.tick;
            var b = this.initialY;
            var c = this.targetY - this.initialY;
            var d = this.duration;
            this.y = this.ease(t, b, c, d);

            b = this.initialX;
            c = this.targetX - this.initialX;
            d = this.duration;
            this.x = this.ease(t, b, c, d);

            this.tick++;
        }
    };

};

