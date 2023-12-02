// <!-- ЗАДАЧА 2 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");
const swapButton = document.querySelector("#swapButton");
swapButton.addEventListener("click", () => {
  const leftInputValue = leftInput.value;
  const rightInputValue = rightInput.value;
  leftInput.value = rightInputValue;
  rightInput.value = leftInputValue;
});
