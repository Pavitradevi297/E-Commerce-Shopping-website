// ==================================================
// GET CART
// ==================================================

function getCart() {
    return JSON.parse(localStorage.getItem("shopnestCart")) || [];
}



// ==================================================
// SAVE CART
// ==================================================

function saveCart(cart) {
    localStorage.setItem("shopnestCart", JSON.stringify(cart));
}



// ==================================================
// FORMAT PRICE
// ==================================================

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN").format(price);
}



// ==================================================
// TOAST NOTIFICATIONS
// ==================================================

function showToast(message) {

    let container = document.getElementById("toastContainer");

    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.style.position = "fixed";
        container.style.bottom = "25px";
        container.style.right = "25px";
        container.style.zIndex = "9999";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "10px";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.padding = "13px 20px";
    toast.style.borderRadius = "5px";
    toast.style.backgroundColor = "#222";
    toast.style.color = "white";
    toast.style.fontSize = "13px";
    toast.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
    container.appendChild(toast);

    setTimeout(function () {
        toast.style.transition = "0.3s";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2200);

}



// ==================================================
// DISPLAY CART
// ==================================================

function displayCart() {

    const cart = getCart();
    const cartProducts = document.getElementById("cartProducts");
    const itemCount = document.getElementById("cartItemCount");

    cartProducts.innerHTML = "";

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    itemCount.innerText = totalQuantity + (totalQuantity === 1 ? " item" : " items");


    if (cart.length === 0) {

        cartProducts.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <h2>Your Cart is Empty</h2>
                <p>Add some products before proceeding to checkout.</p>
                <a href="index.html">Continue Shopping</a>
            </div>
        `;

        calculatePrice();
        return;

    }


    cart.forEach(function (product) {

        const productElement = document.createElement("div");
        productElement.className = "cart-product";

        productElement.innerHTML = `
            <div class="cart-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="cart-product-info">
                <p class="cart-category">${product.category}</p>
                <h3>${product.name}</h3>

                <div class="cart-price">
                    <strong>₹${formatPrice(product.price)}</strong>
                    <del>₹${formatPrice(product.originalPrice)}</del>
                </div>

                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${product.id})">−</button>
                    <span>${product.quantity}</span>
                    <button onclick="increaseQuantity(${product.id})">+</button>
                </div>
            </div>

            <div>
                <button class="remove-button" onclick="removeProduct(${product.id})">REMOVE</button>
            </div>
        `;

        cartProducts.appendChild(productElement);

    });


    calculatePrice();

}



// ==================================================
// INCREASE QUANTITY
// ==================================================

function increaseQuantity(productId) {

    let cart = getCart();
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity++;
    }

    saveCart(cart);
    displayCart();

}



// ==================================================
// DECREASE QUANTITY
// ==================================================

function decreaseQuantity(productId) {

    let cart = getCart();
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity--;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
    }

    saveCart(cart);
    displayCart();

}



// ==================================================
// REMOVE PRODUCT
// ==================================================

function removeProduct(productId) {

    let cart = getCart();
    cart = cart.filter(product => product.id !== productId);

    saveCart(cart);
    displayCart();
    showToast("Item removed from cart");

}



// ==================================================
// PRICE CALCULATION
// ==================================================

function calculatePrice() {

    const cart = getCart();

    const originalTotal = cart.reduce((total, product) => total + (product.originalPrice * product.quantity), 0);
    const productTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const discount = originalTotal - productTotal;
    const platformFee = cart.length > 0 ? 19 : 0;
    const finalTotal = productTotal + platformFee;

    document.getElementById("productTotal").innerText = "₹" + formatPrice(originalTotal);
    document.getElementById("discount").innerText = "- ₹" + formatPrice(discount);
    document.getElementById("finalTotal").innerText = "₹" + formatPrice(finalTotal);

    const savingMessage = document.getElementById("savingMessage");

    if (discount > 0) {
        savingMessage.innerText = "You will save ₹" + formatPrice(discount) + " on this order.";
    } else {
        savingMessage.innerText = "";
    }

}



// ==================================================
// PLACE ORDER
// ==================================================

function placeOrder() {

    const cart = getCart();

    if (cart.length === 0) {
        showToast("Your cart is empty. Please add products first.");
        return;
    }


    const fullName = document.getElementById("fullName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const city = document.getElementById("city").value.trim();
    const address = document.getElementById("address").value.trim();
    const state = document.getElementById("state").value;


    if (fullName === "" || mobile === "" || pincode === "" || city === "" || address === "" || state === "") {
        showToast("Please complete all delivery address details.");
        return;
    }


    if (!/^[0-9]{10}$/.test(mobile)) {
        showToast("Please enter a valid 10-digit mobile number.");
        return;
    }


    if (!/^[0-9]{6}$/.test(pincode)) {
        showToast("Please enter a valid 6-digit PIN code.");
        return;
    }


    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!paymentMethod) {
        showToast("Please select a payment method.");
        return;
    }


    // Generate order reference and estimated delivery date
    const orderId = "SN" + Date.now().toString().slice(-8);

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const deliveryDateFormatted = deliveryDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    document.getElementById("orderIdText").innerText = orderId;
    document.getElementById("deliveryDateText").innerText = deliveryDateFormatted;

    document.getElementById("successOverlay").style.display = "flex";

    localStorage.removeItem("shopnestCart");

}



// ==================================================
// CONTINUE SHOPPING
// ==================================================

function continueShopping() {
    window.location.href = "index.html";
}



// ==================================================
// PAGE LOAD
// ==================================================

document.addEventListener("DOMContentLoaded", displayCart);
