function add (n1,n2) {
	return n1+n2;	
}

function subtract (n1,n2) {
	return n1-n2;
}

function sum (list) {
	// const numbers = Array.from(arguments)
	// console.log(numbers)
	// const res = list.reduce(function(sum,num) {
	// 	return sum + num
	// },0);
	let total = 0;
	for (let i = 0; i < list.length; i++){
		total += list[i]
	}

	return total
}

function multiply (arr) {
	let total = 1;
	for (let i = 0; i < arr.length; i++){
		total *= arr[i]
	}

	return total
}

function power(n1,n2) {
	return n1 ** n2
}

function factorial(n) {
	let total = 1;
	for (let i = n; i > 0; i--){
		total *= i
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}