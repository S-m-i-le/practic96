/**
 *? Напишіть ф-цію (stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];
function calcTotalPrice(stones, stonesName) {
  for (const item of stones) {
    if (item.name === stonesName) {
      return item.price * item.quantity;
    }
  }
}
console.log(calcTotalPrice(stones, "Діамант"));
