var geval = eval;
var x = y = "global";
function f() {
	var x = "local";
	eval('x += "changed"');
	return x;
}

function g() {
	var y = "local";
	geval('y += "changed"');
	return y;
}

console.info(f(),'----',x); // => localchanged ---- global
console.info(g(),'----',y); // => local ---- globalchanged