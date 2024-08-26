import productOperations from "../services/product-operations";

function loadPizzas(){
    const pizza = await productOperations.loadProducts();
    console.log('Pizzas are ', pizza);
}
loadPizzas();