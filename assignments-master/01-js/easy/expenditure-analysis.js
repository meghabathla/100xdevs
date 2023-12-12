/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const Transaction = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 100,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800022,
    price: 200,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 50,
    category: "Stationary",
    itemName: "Pen",
  },
];

function calculateTotalSpentByCategory(transactions) {
  const arr = [];

  transactions.forEach((element) => {
    return [
      console.log(
        `total amount spend: Rs ${element.price} on category: ${element.category}`
      ),
    ];
  });
}
calculateTotalSpentByCategory(Transaction);

module.exports = calculateTotalSpentByCategory;
// query answer is not coming in [{}] this format
// if(element.category== arr.category){
// totalSpend = totalSpend + element.price;
// })
