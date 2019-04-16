const UtilsWaves = {
    rand: (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    },

    ease: (t, b, c, d) => {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}

export default UtilsWaves