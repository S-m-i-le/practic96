//  Використовуючи функцію if...else,
//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"
const NAME="ECMAScript"
const responce = prompt("Яка офіційна назва JavaScript?").trim()
if (responce === NAME) {
    alert("Вірно!")
}
else {
    alert("Не знаєте? ECMAScript!")
}
// console.log(responce)