// ===================================
// 1. PRODUCT DATA (Beauty & Fashion)
// ===================================

const products = [


    // --- Fashion ---
    {
        id: 1,
        name: "Hello Kitty T-Shirt",
        category: "Fashion",
        price: 2000,
        image: "image_e product/t-shirt1.jpg", 
        description: "Cute and comfortable Hello Kitty t-shirt."
    },
    {
        id: 2,
        name: "Floral Leather Jacket",
        category: "Fashion",
        price: 7400,
        image: "image_e product/jacket.jpg",
        description: "Stylish black leather jacket with floral embroidery."
    },
    {
        id: 3,
        name: "Pink Fur Heel Boots",
        category: "Fashion",
        price: 8500,
        image: "image_e product/boots.jpg",
        description: "Trendy pink boots with fur details and a bow."
    },
    {
        id: 4,
        name: "Pink Ruffle Dress",
        category: "Fashion",
        price: 5500,
        image: "image_e product/dress1.jpg",
        description: "Elegant pink dress with puffed sleeves and ruffles."
    },
    {
        id: 5,
        name: "Women's Fashion Dress",
        category: "Fashion",
        price: 6000,
        image: "image_e product/dress2.jpg",
        description: "Beautiful and elegant women's dress."
    },

    // --- Jewellery ---
    {
        id: 6,
        name: "Elegant Silver Ring",
        category: "Jewellery",
        price: 15000,
        image: "image_e product/ring.jpg",
        description: "Stunning and Elegant silver ring ."
    },
    {
        id: 7,
        name: "Ruby Jewellery Set",
        category: "Jewellery",
        price: 35000,
        image: "image_e product/earring2.jpg", 
        description: "Beautiful necklace, earrings, ring, and bracelet set."
    },
    {
        id: 8,
        name: "Amethyst Drop Earrings",
        category: "Jewellery",
        price: 7000,
        image: "image_e product/earring1.jpg", 
        description: "Elegant purple gemstone earrings with floral design."
    },

    // --- Beauty & Cosmetics ---
    {
        id: 9,
        name: "Blue Star Perfume",
        category: "Beauty & Cosmetics",
        price: 10000,
        image: "image_e product/perfume1.jpg", 
        description: "Luxury blue crystal perfume with a star-shaped cap."
    },
    {
        id: 10,
        name: "Floral Blossom Perfume",
        category: "Beauty & Cosmetics",
        price: 9500,
        image: "image_e product/perfume2.jpg",
        description: "Elegant perfume with a beautiful flower-shaped cap."
    },
    {
        id: 11,
        name: "Pink Petal Perfume",
        category: "Beauty & Cosmetics",
        price: 11000,
        image: "image_e product/perfume3.jpg",
        description: "Sweet floral fragrance in a stunning pink lotus bottle."
    },
    {
        id: 12,
        name: "Rose Gold Makeup Kit",
        category: "Beauty & Cosmetics",
        price: 18500,
        image: "image_e product/makeup1.jpg",
        description: "Complete beauty set including serum, lipstick, and blush."
    },
    {
        id: 13,
        name: "Pro Eyeshadow Palette",
        category: "Beauty & Cosmetics",
        price: 4500,
        image: "image_e product/makeup2.jpg",
        description: "Highly pigmented eyeshadow palette for stunning looks."
    },
    {
        id: 14,
        name: "Luxury Makeup Collection",
        category: "Beauty & Cosmetics",
        price: 20000,
        image: "image_e product/makeup3.jpg",
        description: "Premium makeup set with foundation, lashes, and brushes."
    },

    // --- Accessories ---
    {
        id: 15,
        name: "Retro Round Sunglasses",
        category: "Accessories",
        price: 3200,
        image: "image_e product/sunglasses.jpg",
        description: "Trendy round sunglasses with gradient lenses."
    },
    {
        id: 16,
        name: "NY Baseball Cap",
        category: "Accessories",
        price: 1250,
        image: "image_e product/cap.jpg",
        description: "Classic beige and brown NY baseball cap."
    },
    {
        id: 17,
        name: "Leather Handbag",
        category: "Accessories",
        price: 7500,
        image: "image_e product/handbag.jpg",
        description: "Stylish black and beige leather handbag."
    },
    {
        id: 18,
        name: "Purple Backpack",
        category: "Accessories",
        price: 5500,
        image: "image_e product/bag1.jpg", 
        description: "Spacious purple backpack with a matching pouch."
    },
        // --- NEW FASHION ITEMS ---
    {
        id: 19,
        name: "Black Floral White Maxi Skirt",
        category: "Fashion",
        price: 3500,
        image: "image_e product/skirt.jpg", 
        description: "Elegant white maxi skirt with black floral prints and an elastic waistband."
    },
    {
        id: 20,
        name: "Classic Beige Block Heel Shoes",
        category: "Fashion",
        price: 5500,
        image: "image_e product/shoes1.jpg", 
        description: "Stylish beige block heels with a delicate pearl strap and brown bow."
    },
    {
        id: 21,
        name: "Casual Cream Chunky Sneakers",
        category: "Fashion",
        price: 9500,
        image: "image_e product/shoes2.jpg", 
        description: "Comfortable cream and beige platform sneakers perfect for everyday wear."
    },
    {
        id: 22,
        name: "Black Wide-Leg Denim Jeans",
        category: "Fashion",
        price: 6800,
        image: "image_e product/jeans1.jpg", 
        description: "Trendy high-waisted black wide-leg jeans for a relaxed look."
    },
    {
        id: 23,
        name: "Classic Blue Wide-Leg Jeans",
        category: "Fashion",
        price: 6500,
        image: "image_e product/jeans2.jpg", 
        description: "High-waisted blue denim wide-leg jeans with a vintage wash."
    },
    {
        id: 24,
        name: "Blue Flower Ringer T-Shirt",
        category: "Fashion",
        price: 1900,
        image: "image_e product/t-shirt2.jpg", 
        description: "Cream-colored t-shirt with blue contrast edges and a blue floral graphic."
    },

    // --- NEW Accessories ---
    {
        id: 25,
        name: "Silver Crystal Fossil Watch",
        category: "Accessories",
        price: 5200,
        image: "image_e product/watch1.jpg", 
        description: "Elegant silver-toned watch with a crystal-studded bezel and Roman numerals."
    },
    {
        id: 26,
        name: "Rose Gold Classic Watch",
        category: "Accessories",
        price: 6200,
        image: "image_e product/watch2.jpg", 
        description: "Minimalist rose gold women's watch with a sleek metal link band."
    },

    // --- NEW Jewellery ---
    {
        id: 27,
        name: "Blue Sapphire Leaf Bracelet",
        category: "Jewellery",
        price: 10500,
        image: "image_e product/bracelet1.jpg", 
        description: "Stunning gold-plated bracelet featuring deep blue sapphire-colored stones in a leaf pattern."
    },
    {
        id: 28,
        name: "Amethyst Vine Bracelet",
        category: "Jewellery",
        price: 11500,
        image: "image_e product/bracelet2.jpg",
        description: "Dainty gold vine bracelet adorned with sparkling purple amethyst stones and crystals."
    }
];


// ===================================
// 2. GET HTML ELEMENTS
// ===================================

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const noProducts = document.getElementById("noProducts");

// ===================================
// 3. CART DATA
// ===================================

let cart = [];

try {
    const savedCart = JSON.parse(localStorage.getItem("charuStoreCart"));
    if (Array.isArray(savedCart)) {
        cart = savedCart.filter(function(item) {
            return products.some(function(product) {
                return product.id === item.id;
            }) && Number.isInteger(item.quantity) && item.quantity > 0;
        });
    }
} catch (error) {
    cart = [];
}

let selectedCategory = "All";

// ===================================
// 4. SAVE CART
// ===================================

function saveCart() {
    localStorage.setItem("charuStoreCart", JSON.stringify(cart));
}

// ===================================
// 5. DISPLAY PRODUCTS
// ===================================

function displayProducts() {
    productContainer.innerHTML = "";
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(function(product) {
        const matchesSearch = product.name.toLowerCase().includes(searchValue);
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    filteredProducts.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        const info = document.createElement("div");
        info.className = "product-info";

        const category = document.createElement("p");
        category.className = "product-category";
        category.textContent = product.category;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = product.description;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = "Rs. " + product.price.toLocaleString("en-LK");

        const button = document.createElement("button");
        button.className = "add-cart-btn";
        button.textContent = "Add to Cart";
        button.addEventListener("click", function() {
            addToCart(product.id);
        });

        info.appendChild(category);
        info.appendChild(name);
        info.appendChild(description);
        info.appendChild(price);
        info.appendChild(button);

        card.appendChild(image);
        card.appendChild(info);

        productContainer.appendChild(card);
    });

    if (filteredProducts.length === 0) {
        noProducts.style.display = "block";
    } else {
        noProducts.style.display = "none";
    }
}

// ===================================
// 6. ADD TO CART
// ===================================

function addToCart(productId) {
    const existingItem = cart.find(function(item) {
        return item.id === productId;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
    alert("Product added to your cart!");
}

// ===================================
// 7. UPDATE CART
// ===================================

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach(function(item) {
        const product = products.find(function(product) {
            return product.id === item.id;
        });

        if (!product) return;

        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        const details = document.createElement("div");
        const name = document.createElement("h4");
        name.textContent = product.name;
        const price = document.createElement("p");
        price.textContent = "Rs. " + itemTotal.toLocaleString("en-LK");

        details.appendChild(name);
        details.appendChild(price);

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const decrease = document.createElement("button");
        decrease.textContent = "-";
        decrease.addEventListener("click", function() {
            changeQuantity(product.id, -1);
        });

        const quantity = document.createElement("span");
        quantity.textContent = item.quantity;

        const increase = document.createElement("button");
        increase.textContent = "+";
        increase.addEventListener("click", function() {
            changeQuantity(product.id, 1);
        });

        const remove = document.createElement("button");
        remove.className = "remove-btn";
        remove.textContent = "Remove";
        remove.addEventListener("click", function() {
            removeFromCart(product.id);
        });

        controls.appendChild(decrease);
        controls.appendChild(quantity);
        controls.appendChild(increase);
        controls.appendChild(remove);

        div.appendChild(details);
        div.appendChild(controls);
        cartItems.appendChild(div);
    });

    if (cart.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-cart";
        emptyMessage.textContent = "Your cart is empty!";
        cartItems.appendChild(emptyMessage);
    }

    cartCount.textContent = totalItems;
    cartTotal.textContent = total.toLocaleString("en-LK");
}

// ===================================
// 8. CHANGE QUANTITY
// ===================================

function changeQuantity(productId, amount) {
    const item = cart.find(function(item) {
        return item.id === productId;
    });

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(function(item) {
            return item.id !== productId;
        });
    }

    saveCart();
    updateCart();
}

// ===================================
// 9. REMOVE FROM CART
// ===================================

function removeFromCart(productId) {
    cart = cart.filter(function(item) {
        return item.id !== productId;
    });

    saveCart();
    updateCart();
}

// ===================================
// 10. SEARCH & FILTER EVENTS
// ===================================

searchInput.addEventListener("input", function() {
    displayProducts();
});

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        selectedCategory = button.dataset.category;
        displayProducts();
    });
});

// ===================================
// 11. CART MODAL EVENTS
// ===================================

cartButton.addEventListener("click", function() {
    cartModal.style.display = "flex";
});

closeCart.addEventListener("click", function() {
    cartModal.style.display = "none";
});

cartModal.addEventListener("click", function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
});

// ===================================
// 12. CHECKOUT
// ===================================

checkoutBtn.addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping with Flora Lady's Fashion! This is a demo checkout.");
    cart = [];
    saveCart();
    updateCart();
    cartModal.style.display = "none";
});

// ===================================
// 13. INITIAL SETUP
// ===================================

displayProducts();
updateCart();