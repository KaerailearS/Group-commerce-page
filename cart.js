// javascript elements, buttons etc. on top
let cartQuantity = 0;
let addedCartQuantity = 0;
cartElement = document.querySelector(".cart-preview");
quantityElement = document.querySelector(".js-added-quantity");
reduceButton = document.querySelector(".js-reduce-btn");
addButton = document.querySelector(".js-add-btn");
addToCartButton = document.querySelector(".js-add-to-cart-btn");
deleteButton = document.querySelector(".js-delete-btn");
reduceButton.addEventListener("click", () => addQuantity(-1));
addButton.addEventListener("click", () => addQuantity(1));
addToCartButton.addEventListener("click", () => addToCart());

// calling for cart to render on loading - shows empty cart (localstorage added later?)
renderCart();
// function to add quantity to queue and change chosen quantity on webpage (currently allows negative values, change later?)
function addQuantity(n) {
  addedCartQuantity += n;
  quantityElement.textContent = `${addedCartQuantity}`;
}
// function to add queued quantity to main cart quantity, reset queue'd quantity, and then render cart with new quantity
function addToCart(n) {
  cartQuantity += addedCartQuantity;
  //  addedCartQuantity = 0; // remove comment if you want to empty queue after adding to cart
  quantityElement.textContent = `${addedCartQuantity}`;
  renderCart();
  showQuantityNotification();
}
// function that renders the cart information - using very basic "semi-hardcoded" methods for information since we've only got one product, price, image etc. - totalprice also using basic methods, quantity*price, with a toFixed(2) to add two decimals.
// if cartQuantity is zero or below, renders the empty cart visual. If cartQuantity is 1 or more, renders the image, item name, item price, item quantity and total price, with a delete button next to them.
function renderCart() {
  let totalPrice = cartQuantity * 125;
  if (cartQuantity === 0) {
    cartElement.innerHTML = `
      <p class="cart-paragraph">
        Cart
      </p>
      <p class="cart-empty">
        Your cart is empty.
      </p>
    `;
  } else if (cartQuantity >= 1) {
    cartElement.innerHTML = `
      <p class="cart-paragraph">
        Cart
      </p>
        <div class="cart-info">
          <img src="images/image-product-1-thumbnail.jpg" alt="Added product"/>
          <p class="cart-item-name">
            Fall Limited Edition Sneakers
          </p>
          <p class="cart-item-price">
            $125.00 x ${cartQuantity} <span class="cart-total-price">$${totalPrice.toFixed(
      2
    )}</span>
          </p>
          <button class="delete-btn js-delete-btn" onclick="deleteCartItem()">
            <img class="delete-img" src="images/icon-delete.svg" alt="delete-image"/>
          </button>
        <button class="checkout-btn js-checkout-btn">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Checkout</a>
        </button>
    `;
  }
  showQuantityNotification();
}
// deletes the item from the cart - unsure why my addEventListener for delete button didnt work, so added it as onclick to the button itself.
// very basic idea; resets cartQuantity, then renders the page, and since cartQuantity is 0, the empty cart is rendered.
function deleteCartItem() {
  cartQuantity = 0;
  renderCart();
  showQuantityNotification();
}

function showQuantityNotification() {
  const quantityNotification = document.getElementById("quantityNotification");

  if (cartQuantity > 0) {
    quantityNotification.classList.remove("notification-hidden");
    quantityNotification.textContent = cartQuantity;
  } else {
    quantityNotification.classList.add("notification-hidden");
  }
}

