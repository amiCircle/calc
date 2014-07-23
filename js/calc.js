var y = 0;
function input(op) {
	var x = document.getElementByID('input').value;
	console.log('success half input');
	operation(x,op);
	console.log('full input');
}

function operation(x,op) {
	document.getElementByID('input').value = '';
	if(op == '+')
	{
		y = y + x;
		console.log(y);
		alert('done');
		result(y);
	}
	console.log('success full operation');
}

function result(y) {
	document.getElementByID('input').value = y;
	console.log('success full result');
}