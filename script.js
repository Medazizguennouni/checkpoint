const totalElement = document.querySelector(".total");
const productCards = document.querySelectorAll(".card");

function updateTotal() {
    let total = 0;
    productCards.forEach((card) => {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace('$', ''));
        total += quantity * unitPrice;
    });
    totalElement.textContent = `${total} $`; // Use backticks for string interpolation
}

function changeQuantity(card, change) {
    const quantityElement = card.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 0) quantity = 0;
    quantityElement.textContent = quantity;
    updateTotal();
}

function deleteItem(card) {
    card.remove();
    updateTotal();
}

function toggleLike(heartIcon) {
    heartIcon.classList.toggle("liked");
}

productCards.forEach((card) => {
    const plusButton = card.querySelector(".fa-plus-circle");
    const minusButton = card.querySelector(".fa-minus-circle");
    const deleteButton = card.querySelector(".fa-trash-alt");
    const heartButton = card.querySelector(".fa-heart");

    plusButton.addEventListener("click", () => {
        changeQuantity(card, 1);
    });
    minusButton.addEventListener("click", () => {
        changeQuantity(card, -1);
    });
    deleteButton.addEventListener("click", () => {
        deleteItem(card);
    });
    heartButton.addEventListener("click", () => {
        toggleLike(heartButton);
    });
});

const heartButtons = document.querySelectorAll('.heart-button');
heartButtons.forEach(button => {
    button.addEventListener('click', function() {
   
        if (this.style.color === 'black') {
            this.style.color = 'red';
          } else {
            this.style.color = 'black';
          }
        });
      });
