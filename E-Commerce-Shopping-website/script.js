// ==================================================
// PRODUCT DATA
// ==================================================

const products = [

    { id: 1, name: "Premium Smartphone", category: "electronics", keywords: "mobile phone smartphone android camera electronics", price: 22999, originalPrice: 29999, discount: "25% OFF", rating: "★★★★☆", reviews: "1,245", description: "Powerful smartphone with stunning display and excellent camera.", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85" },
    { id: 2, name: "Ultra Slim Laptop", category: "electronics", keywords: "laptop computer notebook office study electronics", price: 49999, originalPrice: 62499, discount: "20% OFF", rating: "★★★★★", reviews: "892", description: "High-performance laptop designed for work, study and entertainment.", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85" },
    { id: 3, name: "Wireless Headphones", category: "accessories", keywords: "headphone headphones audio bluetooth wireless music", price: 2999, originalPrice: 4999, discount: "40% OFF", rating: "★★★★☆", reviews: "2,105", description: "Premium wireless audio with deep bass and long battery life.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85" },
    { id: 4, name: "Premium Running Shoes", category: "fashion", keywords: "shoe shoes running footwear sports fashion", price: 2599, originalPrice: 3999, discount: "35% OFF", rating: "★★★★☆", reviews: "786", description: "Lightweight and comfortable shoes designed for daily performance.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85", stock: 4 },
    { id: 5, name: "Smart Fitness Watch", category: "accessories", keywords: "watch smartwatch fitness tracker accessories", price: 3499, originalPrice: 4999, discount: "30% OFF", rating: "★★★★★", reviews: "1,654", description: "Track fitness, notifications and daily activity from your wrist.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85" },
    { id: 6, name: "Modern Lounge Chair", category: "home", keywords: "chair furniture home living room wooden", price: 4999, originalPrice: 5899, discount: "15% OFF", rating: "★★★★☆", reviews: "543", description: "Elegant and comfortable chair designed for modern living spaces.", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=85" },
    { id: 7, name: "Digital Camera", category: "electronics", keywords: "camera photography digital dslr electronics", price: 32999, originalPrice: 39999, discount: "18% OFF", rating: "★★★★☆", reviews: "674", description: "Capture special moments with outstanding image quality.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85", stock: 2 },
    { id: 8, name: "Premium Handbag", category: "fashion", keywords: "bag handbag women fashion leather purse", price: 2499, originalPrice: 3899, discount: "35% OFF", rating: "★★★★★", reviews: "945", description: "Elegant premium handbag designed for everyday fashion.", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85" },
    { id: 9, name: "Coffee Maker", category: "home", keywords: "coffee machine maker kitchen appliance home", price: 3999, originalPrice: 4999, discount: "20% OFF", rating: "★★★★☆", reviews: "527", description: "Enjoy freshly brewed coffee from the comfort of your home.", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=85" },
    { id: 10, name: "Classic Sunglasses", category: "fashion", keywords: "sunglasses glasses eyewear fashion accessories", price: 999, originalPrice: 1999, discount: "50% OFF", rating: "★★★★☆", reviews: "624", description: "Stylish sunglasses offering comfort and UV protection.", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85" },
    { id: 11, name: "Casual Backpack", category: "fashion", keywords: "bag backpack travel college school fashion", price: 1799, originalPrice: 2499, discount: "28% OFF", rating: "★★★★☆", reviews: "781", description: "Spacious and comfortable backpack for work and travel.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85" },
    { id: 12, name: "Table Lamp", category: "home", keywords: "lamp lighting table light home bedroom", price: 1299, originalPrice: 1999, discount: "35% OFF", rating: "★★★★★", reviews: "412", description: "Elegant table lamp perfect for study and bedroom spaces.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85" },

    { id: 13, name: "Bluetooth Speaker", category: "electronics", keywords: "speaker bluetooth audio portable music electronics", price: 1899, originalPrice: 2999, discount: "36% OFF", rating: "★★★★☆", reviews: "1,032", description: "Portable speaker with rich sound and 12-hour battery life.", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85" },
    { id: 14, name: "4K Smart TV 43-inch", category: "electronics", keywords: "television tv smart 4k electronics screen", price: 27999, originalPrice: 34999, discount: "20% OFF", rating: "★★★★☆", reviews: "356", description: "Crystal-clear 4K display with built-in streaming apps.", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=85", stock: 5 },
    { id: 15, name: "Wireless Gaming Mouse", category: "electronics", keywords: "mouse gaming wireless computer accessories electronics", price: 1499, originalPrice: 1999, discount: "25% OFF", rating: "★★★★★", reviews: "1,876", description: "Precision wireless mouse built for fast-paced gaming.", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=85" },
    { id: 16, name: "Men's Denim Jacket", category: "fashion", keywords: "jacket denim men fashion clothing", price: 2199, originalPrice: 3499, discount: "37% OFF", rating: "★★★★☆", reviews: "498", description: "Classic denim jacket that pairs well with any outfit.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85" },
    { id: 17, name: "Women's Summer Dress", category: "fashion", keywords: "dress women fashion clothing summer", price: 1599, originalPrice: 2599, discount: "38% OFF", rating: "★★★★★", reviews: "712", description: "Breezy summer dress made from soft, breathable fabric.", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85" },
    { id: 18, name: "Leather Wallet", category: "accessories", keywords: "wallet leather men accessories", price: 899, originalPrice: 1499, discount: "40% OFF", rating: "★★★★☆", reviews: "1,124", description: "Genuine leather wallet with multiple card slots.", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85" },
    { id: 19, name: "Analog Wrist Watch", category: "accessories", keywords: "watch analog accessories fashion", price: 2299, originalPrice: 3499, discount: "34% OFF", rating: "★★★★☆", reviews: "645", description: "Timeless analog watch with a stainless steel strap.", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85" },
    { id: 20, name: "Non-Stick Cookware Set", category: "home", keywords: "cookware kitchen pots pans home", price: 3299, originalPrice: 4599, discount: "28% OFF", rating: "★★★★★", reviews: "389", description: "5-piece non-stick cookware set for everyday cooking.", image: "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?auto=format&fit=crop&w=700&q=85" },
    { id: 21, name: "Memory Foam Pillow", category: "home", keywords: "pillow bedroom sleep home comfort", price: 899, originalPrice: 1499, discount: "40% OFF", rating: "★★★★☆", reviews: "567", description: "Ergonomic memory foam pillow for better neck support.", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=85" },
    { id: 22, name: "Indoor Plant Pot Set", category: "home", keywords: "plant pot home decor living room", price: 799, originalPrice: 1299, discount: "38% OFF", rating: "★★★★☆", reviews: "298", description: "Set of ceramic planters to freshen up any room.", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85" },
    { id: 23, name: "Herbal Face Wash", category: "beauty", keywords: "face wash skincare beauty herbal", price: 349, originalPrice: 549, discount: "36% OFF", rating: "★★★★☆", reviews: "1,432", description: "Gentle herbal face wash for all skin types.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85" },
    { id: 24, name: "Matte Lipstick Set", category: "beauty", keywords: "lipstick makeup beauty cosmetics", price: 799, originalPrice: 1299, discount: "38% OFF", rating: "★★★★★", reviews: "923", description: "Long-lasting matte lipstick set in 4 shades.", image: "https://images.unsplash.com/photo-1631214524020-3c30402e0084?auto=format&fit=crop&w=700&q=85" },
    { id: 25, name: "Hair Dryer", category: "beauty", keywords: "hair dryer beauty appliance grooming", price: 1499, originalPrice: 2299, discount: "35% OFF", rating: "★★★★☆", reviews: "654", description: "Fast-drying hair dryer with multiple heat settings.", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=85", stock: 3 },
    { id: 26, name: "Perfume Gift Set", category: "beauty", keywords: "perfume fragrance beauty gift", price: 1899, originalPrice: 2999, discount: "37% OFF", rating: "★★★★★", reviews: "445", description: "Elegant fragrance duo, perfect for gifting.", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85" },
    { id: 27, name: "Yoga Mat", category: "sports", keywords: "yoga mat fitness exercise sports", price: 799, originalPrice: 1299, discount: "38% OFF", rating: "★★★★☆", reviews: "812", description: "Non-slip yoga mat with extra cushioning for comfort.", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=700&q=85" },
    { id: 28, name: "Adjustable Dumbbell Set", category: "sports", keywords: "dumbbell weights gym fitness sports", price: 3499, originalPrice: 4999, discount: "30% OFF", rating: "★★★★★", reviews: "367", description: "Space-saving adjustable dumbbells for home workouts.", image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=700&q=85", stock: 5 },
    { id: 29, name: "Cricket Bat", category: "sports", keywords: "cricket bat sports equipment", price: 1999, originalPrice: 2999, discount: "33% OFF", rating: "★★★★☆", reviews: "289", description: "Lightweight willow cricket bat for club-level play.", image: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?auto=format&fit=crop&w=700&q=85" },
    { id: 30, name: "Cycling Helmet", category: "sports", keywords: "helmet cycling safety sports", price: 1299, originalPrice: 1999, discount: "35% OFF", rating: "★★★★☆", reviews: "421", description: "Ventilated cycling helmet built for safety and comfort.", image: "https://images.unsplash.com/photo-1557803175-2172a83c4a34?auto=format&fit=crop&w=700&q=85" }

];



// ==================================================
// STATE
// ==================================================

let displayedProducts = [...products];
let visibleCount = 9;
const PAGE_SIZE = 9;



// ==================================================
// FORMAT PRICE
// ==================================================

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN").format(price);
}



// ==================================================
// WISHLIST STORAGE
// ==================================================

function getWishlist() {
    return JSON.parse(localStorage.getItem("shopnestWishlist")) || [];
}

function saveWishlist(list) {
    localStorage.setItem("shopnestWishlist", JSON.stringify(list));
}

function isWishlisted(id) {
    return getWishlist().includes(id);
}



// ==================================================
// TOAST NOTIFICATIONS
// ==================================================

function showToast(message) {

    let container = document.getElementById("toastContainer");

    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("toast-hide");
        setTimeout(() => toast.remove(), 300);
    }, 2200);

}



// ==================================================
// DISPLAY PRODUCTS
// ==================================================

function displayProducts(productList) {

    const productGrid = document.getElementById("products");
    const noResults = document.getElementById("noResults");
    const resultCount = document.getElementById("resultCount");
    const loadMoreWrap = document.getElementById("loadMoreWrap");

    productGrid.innerHTML = "";

    if (productList.length === 0) {
        noResults.style.display = "block";
        resultCount.innerText = "No matching products";
        loadMoreWrap.style.display = "none";
        return;
    }

    noResults.style.display = "none";
    resultCount.innerText = productList.length + " products available";

    const visibleSlice = productList.slice(0, visibleCount);

    visibleSlice.forEach(function (product) {

        const card = document.createElement("div");
        card.className = "product-card";

        const wishlisted = isWishlisted(product.id);
        const stockNote = product.stock
            ? `<p class="stock-warning">Only ${product.stock} left in stock!</p>`
            : "";

        card.innerHTML = `
            <div class="discount">${product.discount}</div>

            <button class="wishlist ${wishlisted ? "active" : ""}" onclick="toggleWishlist(this, ${product.id})">
                ${wishlisted ? "♥" : "♡"}
            </button>

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>

            <div class="product-content">
                <p class="product-category">${product.category}</p>
                <h2>${product.name}</h2>

                <div class="rating">
                    ${product.rating}
                    <span>(${product.reviews})</span>
                </div>

                <div class="price">
                    <strong>₹${formatPrice(product.price)}</strong>
                    <del>₹${formatPrice(product.originalPrice)}</del>
                </div>

                <p class="description">${product.description}</p>

                ${stockNote}

                <p class="delivery">✓ Free Delivery</p>

                <button class="cart-button" onclick="addToCart(${product.id}, this)">
                    Add to Cart
                </button>
            </div>
        `;

        productGrid.appendChild(card);

    });

    loadMoreWrap.style.display = productList.length > visibleCount ? "flex" : "none";

}



function loadMoreProducts() {
    visibleCount += PAGE_SIZE;
    displayProducts(displayedProducts);
}



// ==================================================
// CART STORAGE
// ==================================================

function getCart() {
    return JSON.parse(localStorage.getItem("shopnestCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("shopnestCart", JSON.stringify(cart));
}



// ==================================================
// ADD TO CART
// ==================================================

function addToCart(productId, button) {

    const selectedProduct = products.find(product => product.id === productId);

    let cart = getCart();
    const existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...selectedProduct, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();
    showToast(`${selectedProduct.name} added to cart`);

    button.innerText = "✓ Added to Cart";
    button.style.backgroundColor = "#26a541";

    setTimeout(function () {
        button.innerText = "Add to Cart";
        button.style.backgroundColor = "#ff9f00";
    }, 1200);

}



// ==================================================
// CART COUNT
// ==================================================

function updateCartCount() {
    const cart = getCart();
    const quantity = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById("cartCount").innerText = quantity;
}



// ==================================================
// SEARCH
// ==================================================

function searchProducts() {

    const query = document.getElementById("searchInput").value.trim().toLowerCase();

    displayedProducts = products.filter(function (product) {

        const searchableText =
            product.name + " " +
            product.category + " " +
            product.keywords + " " +
            product.description;

        return searchableText.toLowerCase().includes(query);

    });

    visibleCount = PAGE_SIZE;
    displayProducts(displayedProducts);
    setActiveCategory(null);

}



// ==================================================
// CATEGORY FILTER
// ==================================================

function filterProducts(category, event) {

    if (event) event.preventDefault();

    document.getElementById("searchInput").value = "";

    if (category === "all") {
        displayedProducts = [...products];
    } else {
        displayedProducts = products.filter(product => product.category === category);
    }

    visibleCount = PAGE_SIZE;
    displayProducts(displayedProducts);
    setActiveCategory(category);

}

function setActiveCategory(category) {
    document.querySelectorAll(".categories a").forEach(function (link) {
        link.classList.toggle("active", link.dataset.category === category);
    });
}



// ==================================================
// SORT PRODUCTS
// ==================================================

function sortProductCards() {

    const sortValue = document.getElementById("sortProducts").value;

    if (sortValue === "low") {
        displayedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
        displayedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "name") {
        displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        displayedProducts = [...displayedProducts];
    }

    displayProducts(displayedProducts);

}



// ==================================================
// WISHLIST TOGGLE
// ==================================================

function toggleWishlist(button, productId) {

    let list = getWishlist();

    if (list.includes(productId)) {
        list = list.filter(id => id !== productId);
        button.innerText = "♡";
        button.classList.remove("active");
    } else {
        list.push(productId);
        button.innerText = "♥";
        button.classList.add("active");
        showToast("Added to wishlist");
    }

    saveWishlist(list);

}



// ==================================================
// SCROLL TO PRODUCTS
// ==================================================

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}



// ==================================================
// MOBILE NAV TOGGLE
// ==================================================

function toggleMobileNav() {
    document.querySelector(".nav-links").classList.toggle("open");
}



// ==================================================
// NEWSLETTER
// ==================================================

function subscribeNewsletter(event) {
    event.preventDefault();
    const input = document.getElementById("newsletterEmail");

    if (!input.value.trim() || !input.value.includes("@")) {
        showToast("Please enter a valid email address");
        return;
    }

    showToast("Subscribed! Watch your inbox for deals.");
    input.value = "";
}



// ==================================================
// BANNER
// ==================================================

const banners = [
    { title: "Everything You Love, All in One Place", text: "Discover amazing products at unbeatable prices." },
    { title: "Big Fashion Sale Is Live", text: "Upgrade your style with exciting offers and discounts." },
    { title: "Latest Technology. Better Prices.", text: "Explore electronics and accessories at amazing prices." }
];

let currentBanner = 0;

function updateBanner() {
    document.getElementById("bannerTitle").innerText = banners[currentBanner].title;
    document.getElementById("bannerText").innerText = banners[currentBanner].text;

    document.querySelectorAll(".banner-dots span").forEach(function (dot, index) {
        dot.classList.toggle("active", index === currentBanner);
    });
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    updateBanner();
}

function previousBanner() {
    currentBanner = (currentBanner - 1 + banners.length) % banners.length;
    updateBanner();
}



// ==================================================
// LIVE SEARCH
// ==================================================

document.getElementById("searchInput").addEventListener("input", searchProducts);



// ==================================================
// PAGE LOAD
// ==================================================

document.addEventListener("DOMContentLoaded", function () {
    displayProducts(products);
    updateCartCount();
    updateBanner();
});



// ==================================================
// AUTO BANNER
// ==================================================

setInterval(nextBanner, 5000);
