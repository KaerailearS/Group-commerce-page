let cartQuantity = 0;
let addedCartQuantity = 0;
cartElement = document.querySelector('.js-cart-preview');
quantityElement = document.querySelector('.js-added-quantity');
addButton = document.querySelector('.js-add-btn');
reduceButton = document.querySelector('.js-reduce-btn');
addToCartButton = document.querySelector('.js-add-to-cart-btn');
deleteButton = document.querySelector('js-delete-btn');
addButton.addEventListener('click',()=> addQuantity(1));
reduceButton.addEventListener('click',()=> addQuantity(-1));
addToCartButton.addEventListener('click',()=> addToCart());
renderCart();


function addQuantity(n) {
  addedCartQuantity += n;
  quantityElement.textContent = `${addedCartQuantity}`;
}

function addToCart() {
  cartQuantity += addedCartQuantity;
  addedCartQuantity = 0;
  quantityElement.textContent = `${addedCartQuantity}`;
  renderCart();
}

function renderCart() {
  let totalPrice = cartQuantity * 125;
  if(cartQuantity <=0) {
    cartElement.innerHTML = 
    ` 
      <p class="cart-paragraph">
        Cart
      </p>
      <p class="cart-empty">
        Your cart is empty.
      </p>
    `;
  } else if (cartQuantity >= 1) {
    cartElement.innerHTML = 
    `<p class="cart-title">Cart</p>
    <div class="cart-info">
        <div class="cart-item">
          <img src="images/image-product-1-thumbnail.jpg" alt="Added product">
          <div class="cart-details">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${cartQuantity}</p> <span class="total-price">$${totalPrice.toFixed(2)}</span>
          </div>
            <img class="delete-btn js-delete-btn" src="images/icon-delete.svg" alt="delete-btn" onclick="deleteFromCart()">
        </div>
        <button>Checkout</button>
    </div>`
  }
}

function deleteFromCart() {
  cartQuantity = 0;
  renderCart();
}


