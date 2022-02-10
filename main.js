function removeTest() {
	let elementList = document.querySelectorAll(".wrapper__test");
	elementList[0].classList.remove("active");
}
function removeFirst() {
	let elementList = document.querySelectorAll(".wrapper__task1");
	elementList[0].classList.remove("active");
}
function removeSecond() {
	let elementList = document.querySelectorAll(".wrapper__task2");
	elementList[0].classList.remove("active");
}
function removeThird() {
	let elementList = document.querySelectorAll(".wrapper__task3");
	elementList[0].classList.remove("active");
}
function removeActive(){
	removeTest();
	removeFirst();
	removeSecond();
	removeThird();
}


function showTest() {
	let elementList = document.querySelectorAll(".wrapper__test");
	elementList[0].classList.add("active");
	removeActive();
	showTest();
}

function showTask1() {
	let elementList = document.querySelectorAll(".wrapper__task1");
	elementList[0].classList.add("active");
	removeActive()
	showTask1();
}

function showTask2() {
	let elementList = document.querySelectorAll(".wrapper__task2");
	elementList[0].classList.add("active");

	removeActive()
	showTask2();
}

function showTask3() {
	let elementList = document.querySelectorAll(".wrapper__task3");
	elementList[0].classList.add("active");
	removeActive();
	showTask3();
}