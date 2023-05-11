function showModal() {
  const buttons = document.querySelectorAll(".product_btn");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal-content__close");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  showModal();
});

document.addEventListener("DOMContentLoaded", function () {
  const cartTitle = document.querySelector(".cart__title");
  const cart = document.querySelector(".cart");

  cartTitle.addEventListener("click", function () {
    cart.classList.toggle("cart-open");
  });
});

function showDeliveryModal() {
  const buttons = document.querySelectorAll(".cart__submit");
  const modal = document.querySelector(".modal-delivery");
  const closeBtn = document.querySelector(".delivery__close");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  showDeliveryModal();
});

function deliveryPickupSwitch() {
  const pickupRadio = document.querySelector('input[value="pickup"]');
  const deliveryRadio = document.querySelector('input[value="delivery"]');
  const deliveryFieldset = document.querySelector(".modal__delivery__fieldset.hidden");

  pickupRadio.addEventListener("change", () => {
    if (pickupRadio.checked) {
      deliveryFieldset.classList.add("hidden");
    }
  });

  deliveryRadio.addEventListener("change", () => {
    if (deliveryRadio.checked) {
      deliveryFieldset.classList.remove("hidden");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  deliveryPickupSwitch();
});
