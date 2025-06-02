


const products = [
    { name: "Hp Laptop", category: "Electronics" },
    { name: "Smartphone", category: "Electronics" },
    { name: "Sneakers", category: "Shoes" },
    { name: "Watch", category: "Accessories" }
];

function searchProducts() {
    let query = document.getElementById("search-box").value.toLowerCase();
    let resultsDiv = document.getElementById("results");

    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    resultsDiv.innerHTML = filteredProducts.length
        ? filteredProducts.map(p => `<p>${p.name} - ${p.category}</p>`).join("")
        : "<p>No results found</p>";
}



