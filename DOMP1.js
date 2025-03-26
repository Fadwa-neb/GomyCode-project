// Items in the cart
const items = [
  {
      id: 1,
      name: 'Baskets',
      price: 100,
      quantity: 0,
      image: '/assets/baskets.png'
  },
  {
      id: 2,
      name: 'Socks',
      price: 20,
      quantity: 0,
      image: '/assets/socks.png'
  },
  {
      id: 3,
      name: 'Bag',
      price: 50,
      quantity: 0,
      image: '/assets/bag.png'
  }
];

// DOM Elements
const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card-body');  // We will use this to target the products

// Function to update the total price
function updateTotalPrice() {
  let total = 0;
  items.forEach(item => {
      total += item.price * item.quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Function to update the quantity display in the DOM
function updateQuantityDisplay(itemId) {
  const item = items.find(item => item.id === itemId);
  const quantitySpan = document.querySelector(`#product-${itemId} .quantity`);
  quantitySpan.textContent = item.quantity;
}

// Adjust quantity of an item (increase or decrease)
function adjustQuantity(itemId, delta) {
  const item = items.find(item => item.id === itemId);
  if (item) {
      item.quantity += delta;
      if (item.quantity < 0) item.quantity = 0;  // Prevent negative quantities
      updateQuantityDisplay(itemId);
      updateTotalPrice();
  }
}

// Remove an item from the cart
function removeItem(itemId) {
  const itemIndex = items.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
      document.querySelector(`#product-${itemId}`).remove();
      updateTotalPrice();
  }
}

// Toggle heart icon (like/unlike)
function toggleHeart(itemId) {
  const heartIcon = document.querySelector(`#product-${itemId} .fa-heart`);
  heartIcon.classList.toggle('liked');
}

// Initialize the cart display
function renderCart() {
  productCards.forEach((card, index) => {
      const item = items[index];
      const cardHtml = `
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">This is a ${item.name.toLowerCase()}</p>
              <h4 class="unit-price">${item.price} $</h4>
              <div>
                  <i class="fas fa-plus-circle" onclick="adjustQuantity(${item.id}, 1)"></i>
                  <span class="quantity" id="product-${item.id}-quantity">${item.quantity}</span>
                  <i class="fas fa-minus-circle" onclick="adjustQuantity(${item.id}, -1)"></i>
              </div>
              <div>
                  <i class="fas fa-trash-alt" onclick="removeItem(${item.id})"></i>
                  <i class="fas fa-heart" onclick="toggleHeart(${item.id})"></i>
              </div>
          </div>
      `;

      card.innerHTML = cardHtml; // Update the card content
  });
}

// Initial rendering of the cart
renderCart();

