// ceviche, tacos al pastor, empanada chilena

var ceviche = false
var tacosAlPastor = false
var empanadaChilena = false

var orderFood = function (menu) {
	if (menu.indexOf('Ceviche') >= 0) {
		return 'Ceviche';
	}
	if (menu.indexOf('Tacos al Pastor') >= 0) {
		return 'Tacos al Pastor';
	}
	if (menu.indexOf('Empanada Chilena') >= 0) {
		return 'Empanada Chilena';
	}
}