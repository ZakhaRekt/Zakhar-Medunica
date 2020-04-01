let b = 0;
function celce (a) {
	if (a>=-300 && a<=300) {
		b += (a-32)*5/9;
	}
}
celce(-5);
console.log(b.toFixed(4));