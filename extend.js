Array.prototype.last = function() {
	return this[this.length-1];
}

Array.prototype.first = function() {
	return this[0];
}

String.prototype.toNumber = function() {
	return Number(this);
}