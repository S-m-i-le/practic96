//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

// function programShowTime(initialMinute) {
//     const hour = Math.floor(initialMinute / 60)
//     const modificateHour = String(hour).padStart(2, 0)
//     const minutes = initialMinute % 60
//     const modificateMinutes = String(minutes).padStart(2, 0)
//     return `${modificateHour}:${modificateMinutes}`
// }
// console.log(programShowTime(600))
function programShowTime(initialMinute) {
    const hour = Math.floor(initialMinute / 60);
    const modificateHour = String(hour).padStart(2);
    const minutes = initialMinute % 60;
    const modificateMinutes = String(minutes).padEnd(2, 0);
    console.log(`${modificateHour}:${modificateMinutes}`);
    
}