const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('Timer is completed');
	}
});

//  ******************************Ignore this Code********************************
//timer.start();

// const printThis = function() {
// 	console.log(this);
// };
// console.log(this);

// printThis.call({ color: 'red' });

// const colors = {
// 	printColor() {
// 		console.log(this);
// 		const printThis = function() {
// 			console.log(this);
// 		};
// 		printThis();
// 	}
// };

// colors.printColor();

// const randomObject = {
// 	a: 1
// };
// randomObject.printColor = colors.printColor;
// randomObject.printColor();

// function solve(meal_cost, tip_percent, tax_percent) {
// 	let tipPercent = meal_cost * (tip_percent / 100);
// 	let taxPercent = meal_cost * (tax_percent / 100);
// 	return Math.round(meal_cost + tipPercent + taxPercent);
// }

// if(N % 2 === 0 && N >= 2 & N <= 5 ){
//     console.log("Not Weird");
// }else if(N % 2 === 0 && N >= 6 & N <= 20 ){
//     console.log("Weird");
// }else if(N % 2 === 0 && N > 20){
//     console.log("Not Weird");
// }else{
//     console.log("Weird");
// }
