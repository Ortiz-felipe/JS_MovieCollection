let task1 = document.querySelector('#task-1');
let selectTask1 = document.getElementById("task-1");

selectTask1.style.color = "white";
task1.style.backgroundColor = "black";

console.dir(task1);
console.dir(selectTask1);

let headSelector = document.querySelector("head");
let titleSelector = headSelector.querySelector("title");
titleSelector.textContent = "Assignment - Solved!!"

let h1 = document.querySelector("h1").innerText = "Assignment - Solved!!";