let elementList = document.querySelectorAll(".wrapper__test");
let elementList1 = document.querySelectorAll(".wrapper__task1");
let elementList2 = document.querySelectorAll(".wrapper__task2");
let elementList3 = document.querySelectorAll(".wrapper__task3");

showTest();
showTask1();
showTask2();
showTask3();

function removeTest() {
	elementList[0].classList.remove("active");
}
function removeFirst() {
	elementList1[0].classList.remove("active");
}
function removeSecond() {
	elementList2[0].classList.remove("active");
}
function removeThird() {
	elementList3[0].classList.remove("active");
}

function removeActive(){
	removeTest();
	removeFirst();
	removeSecond();
	removeThird();
}


function showTest() {
	removeActive();
	elementList[0].classList.add("active");
}
function showTask1() {
	removeActive();
	elementList1[0].classList.add("active");
}
function showTask2() {
	removeActive();
	elementList2[0].classList.add("active");
}
function showTask3() {
	removeActive();
	elementList3[0].classList.add("active");
}

