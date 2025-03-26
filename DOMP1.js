document.addEventListener("DOMContentLoaded", () => {
  // Function to update total price
  function updateTotal() {
      let total = 0;
      document.querySelectorAll(".card-body").forEach(card => {
          const unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
          const quantity = parseInt(card.querySelector(".quantity").textContent);
          total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
  }

  // Handle quantity increase
  document.querySelectorAll(".fa-plus-circle").forEach(btn => {
      btn.addEventListener("click", () => {
          let quantityElem = btn.nextElementSibling;
          quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
          updateTotal();
      });
  });

  // Handle quantity decrease
  document.querySelectorAll(".fa-minus-circle").forEach(btn => {
      btn.addEventListener("click", () => {
          let quantityElem = btn.previousElementSibling;
          let quantity = parseInt(quantityElem.textContent);
          if (quantity > 0) {
              quantityElem.textContent = quantity - 1;
              updateTotal();
          }
      });
  });

  // Handle item deletion
  document.querySelectorAll(".fa-trash-alt").forEach(btn => {
      btn.addEventListener("click", () => {
          btn.closest(".card-body").remove();
          updateTotal();
      });
  });

  // Handle liking an item
  document.querySelectorAll(".fa-heart").forEach(btn => {
      btn.addEventListener("click", () => {
          btn.classList.toggle("text-danger");
      });
  });

  // Initial total calculation
  updateTotal();
});
