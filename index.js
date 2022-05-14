var toRgb = require('hsl-to-rgb-for-reals')

function cycle(val){
	return val >= 0 ? val % 360 : 360 + (val % 360)
}

function minmax(val, min, max){
	return Math.min(Math.max(val, min), max)
}

function hsl(hue, saturation, luminosity){
	hue = cycle(hue)
	saturation = minmax(saturation, 0, 100)/100
	luminosity = minmax(luminosity, 0, 100)/100
	return ("#" + toRgb(hue, saturation, luminosity)
					.map(n => n.toString(16).padStart(2, 0)).join(""))
}

module.exports = hsl