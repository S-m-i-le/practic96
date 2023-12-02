// <!-- ЗАДАЧА 4 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 4</p>
//       <div id="box"></div>
//       <button id="decrease">Зменшити</button>
//       <button id="increase">Збільшити</button>
//     </div>
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const butDecr = document.querySelector('#decrease');
const butIncr = document.querySelector('#increase');
const box = document.querySelector('#box');
let boxwidht = parseInt(getComputedStyle(box).width);
let boxHeigth = parseInt(getComputedStyle(box).height);
// console.log(boxwidht);
// console.log(boxHeigth);
butDecr.addEventListener('click', decrFoo);
function decrFoo() {
    boxHeigth -= 10;
    boxwidht -= 10;
    box.style.width = `${boxwidht}px`;
    box.style.height = `${boxHeigth}px`;
};
butIncr.addEventListener('click', incFoo);
function incFoo() {
     boxHeigth += 10;
    boxwidht += 10;
    box.style.width = `${boxwidht}px`;
    box.style.height = `${boxHeigth}px`
    
};