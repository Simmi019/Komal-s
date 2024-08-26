import productOperations from "../services/product-operations";

function loadPizzas(){
    const pizza = await productOperations.loadProducts();
    console.log('Pizzas are ', pizza);
    for(let pizza of pizza){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/* 
*/

function addToCart() {
    console.log('Add to Cart Called...', this);
    const currentButton = this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('Pizza Id is', pizzaId);
    productOperations.search(pizzaId);
}

function printBasket(){
    const cartProducts = productOperations.getProductsInCart();
    const basket = document.querySelector('#basket');
    basket.innerHTML = '';
    for(let product of cartProducts) {
        const li = document.createElement('li');
        li.innerText = `${product.name} ${product.price}`;
        basket.appendChild(li);


    }

}


function preparePizzaCard(pizza) {
    const outputDIv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width:18rem;";
    cardDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createAttribute.ELement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click', addToCart); //event bind
    button.innerText = 'Add to Cart';
    button.className = 'btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDIv.appendChild(colDiv);
}
