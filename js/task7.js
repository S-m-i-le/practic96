///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

const discountFruits = fruits.map(e => ({
  ...e,
  price: e.price * 0.8,
  id: Math.random() * 100,
}));
console.log(discountFruits);
