const products = [
    { name: "T-shirt", price: 800, stock: 12, category: "clothing" },
    { name: "Headphones", price: 2500, stock: 0, category: "electronics" },
    { name: "Notebook", price: 150, stock: 45, category: "stationery" },
    { name: "Sneakers", price: 3200, stock: 5, category: "clothing" },
    { name: "Pen", price: 50, stock: 200, category: "stationery" }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].category === "clothing") {
        console.log(products[i].name);
    }
}
