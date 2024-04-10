console.log('JavaScript file loaded successfully.');

// JavaScript for managing the cart

// Initialize cart items
let cartItems = [];

// Function to add item to cart
function addToCart(name) {
    console.log('Adding', name, 'to cart.');
    cartItems.push(name);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Add event listeners for 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        addToCart(productName);
    });
});

console.log('Cart JavaScript initialized.');
