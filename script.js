
let cartCount = 0;

const addToCart = document.querySelectorAll('.add-to-cart');
let cart_Count = document.getElementById('cart-count');

addToCart.forEach(element => {
    element.addEventListener("click", () => {
        cartCount++;
        alert("Your Item is Added to Cart");
cart_Count.textContent = `Cart: ${cartCount} items`
    })
})





// document.querySelectorAll('.add-to-cart').forEach(element => {
//     addEventListener('click', () => {
//         // cartCount++;
//         document.getElementById('cart-count').textContent = `Cart: ${cartCount + 1} items`;
// });             
// });

