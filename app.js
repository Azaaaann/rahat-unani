// Rahat Unani E-Commerce & Interactive Logic

// --- 1. Product Database ---
const PRODUCTS = [
    // Medicines Category
    {
        id: "med-1",
        title: "Khamira Gaozaban Ambari",
        description: "A precious brain and heart tonic, enriched with pure silver leaf and botanical herbs.",
        price: 850,
        category: "medicines",
        weight: "150g",
        isFeatured: true,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAKNw5qxzXto3ImK-nHMlC9gVziW0UEkGf_InPSwvy0LKFHE_nSxYJkx4g1ZibCdYHFdx-6FEsso21XXtyGTXVOQL2j0MJ_-3WNungdL4VQhzf5eZal1Cm85e08K1iD1wi0cy9AZH9g9QmVjIr2iOzN-y5YYz1GgMik0dkrpvNNm2nXfHz1SDGbh46VQlIWdH-R4uWTwsfuoxd2rf5ADmhbiCKnewuUf5zssJ21pbD_lFKEXGGuq2OUzwF8EUZeC4dKZTOg4eze7M",
        badge: "BEST SELLER"
    },
    {
        id: "med-2",
        title: "Majun Falasfa",
        description: "Traditional Unani recipe for strength, vitality, nerve conditioning, and backache relief.",
        price: 320,
        category: "medicines",
        weight: "200g",
        isFeatured: false,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrMM3XOzdmVS8G22RjtFlPg9PnvMuob4Xtdjtqjh3NmPifW_hCRwrwEeij4zz9zGvoQSGEcqSOt04UJXZDLnjEFaUW6-odL-eRDY2zlt_ANaS9KyB9R4ItTdhQtRSn3bnfv4xSfTCilMdR2j_5M75u0PVmDjTs9zbyUVFpPXkdhIGe5HZO-OhFnUzuUodlHqSo3OYXR7sIQ-DPyekcShe6935qzgzODHtIAVNSqJ4kcoVtG7OKSlGYhnFK3CdOHpdW5eITtRRfKzg",
        badge: "VITALITY"
    },
    {
        id: "med-3",
        title: "Rogan Sukoon",
        description: "Soothing massage oil for rapid relief from joint pain, headache, and muscle soreness.",
        price: 180,
        category: "medicines",
        weight: "100ml",
        isFeatured: false,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW0Z21H-1-Zh7JL8txQMnsd-VljKXaBv2yA_AJaE__1Hq9ue4IpIJdxMGthXMeEeNk3l5zGIi0DfrToqrwCeld7-Tq7Pa3AErCIFtlx96m1Y0C4p49Ti5BR3DZLV5l3TooEDYe3QZhJwxyrzR9KBQvMd-Ifw86v5cg7-7lw3uA5CacBNnIBXSRnO5canJi5t1JC4iTMUWbMhvf2FeGbkBvI7sNlALxJOpAM8Homjw-IBi3FPslE3emYGd8o9Hn1RQ4KtexDxwp9ck",
        badge: "PAIN RELIEF"
    },
    {
        id: "med-4",
        title: "Sharbat Bazoori Motadil",
        description: "Classic cooling drink that detoxifies kidneys and liver, restoring internal balance.",
        price: 150,
        category: "medicines",
        weight: "200ml",
        isFeatured: false,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqghf5qjW3jPvkiik4ViGaXKpctbeZM6nVwbNWQclomLSiPQevAH_MPL-uU9vjXng2nqv757n7P1XR5BohcNiYxCtV0IcSYn6-F5yQjZwMqWEw1fs7wIdp9pyKeg2T3jU9dUwf4kNV69r-IvyzMbbSgrcjTYbuuWiK-ltLShGhbYmrTUoUolKlrVEyB_v4eZrM87pnAs3OyJrYcqTOHE_JptAhKPuexvrI9k_zyYiVMds_rDT2aYmrDCRg5SVrf_5fRnA8o6Efa4",
        badge: "DETOX"
    },
    {
        id: "med-5",
        title: "Habbe Kabid Naushadri",
        description: "A digestive tablet that relieves flatulence, improves liver activity, and increases appetite.",
        price: 95,
        category: "medicines",
        weight: "100 Tab",
        isFeatured: false,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4cRm_ug3g4_p-EsYIYEO7P6URgJUW8JfEfk1BpwwgvOscs8xHr5N7M6c04f-j6iFYzlGcz8ElGx6tbxjrP74SOYuEzjYHTcq_Fo4OXcP1GZugEwroJpTGYHAASSpKR-L67p5ED-ZpsilCQd4WSl0tE4HNVkDsMbuYWi9TzlHMoI4lVhJx_zC8MOYK47WjXHyVq9HEX-jDYXVl9DBLXwwaFRRm6L3Z6_flpZKCWG_Wykgx9sPtRR1E_9BC5f8F4-YkEuNjt38yHd8",
        badge: "DIGESTIVE"
    },

    // Spices Category
    {
        id: "spice-1",
        title: "Premium Kashmiri Saffron",
        description: "Grade A hand-picked threads of Pampore saffron. Rich in antioxidants and deep golden hue.",
        price: 350,
        category: "spices",
        weight: "1g",
        isFeatured: true,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWMlu1WcXOyOrq043anZtEGlkmpk1j3QV33GS3KyOaCJGmmQwSQ4G8Btu-fgTmlfWhP3PLGoHnA2RIEDuQS1YQTlccVcuaix4g3-2e9MAnHVslhXP3qvtHlOqdh6VQx3s_ioMiumDwAlVXCwi8uwT_rsfLvkmYJRj7iyWLEhvLL1XfACBX-IMms9cXumBeMjRErhzYkbGuDlfrhf1-PqXgcYfwWmVYrY7M_UBzACeZt7hq4p-BPmnThZurPj4NytDI8Ush8Gb2GBI",
        badge: "RED GOLD"
    },
    {
        id: "spice-2",
        title: "Green Cardamom (Elaichi)",
        description: "Bold 8mm green cardamom pods sourced from Kerala plantations. Unmatched aroma.",
        price: 220,
        category: "spices",
        weight: "100g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
        badge: "AROMATIC"
    },
    {
        id: "spice-3",
        title: "Tellicherry Black Pepper",
        description: "Premium organic black pepper berries, carefully dried to retain high piperine levels.",
        price: 180,
        category: "spices",
        weight: "150g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80",
        badge: "ORGANIC"
    },
    {
        id: "spice-4",
        title: "Ceylon Cinnamon Rolls",
        description: "Thin-layered sweet Ceylon cinnamon quills. Low coumarin, completely authentic.",
        price: 160,
        category: "spices",
        weight: "100g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1509358740172-6451878225d1?auto=format&fit=crop&w=400&q=80",
        badge: "PURE CEYLON"
    },

    // Dry Fruits Category
    {
        id: "df-1",
        title: "California Almonds (Badam)",
        description: "Jumbo sized California almonds, packed with vitamin E, fibers and heart-healthy fats.",
        price: 450,
        category: "dry-fruits",
        weight: "250g",
        isFeatured: true,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp_GOb7F-7kieHFNxm6Wxz7N0dUoGOjxuyzrwMN5q6Hc75wZ048G7Q6IFZUXwIJOCVjSWBELi-2y1rkZSSIFFq3PFdRh72YjBZr7ogTfaRtJP1hobzJGwEGWdrscJKN92UZeZaIzH4VzvaFNxS6P-09mD3IxtLOoPk9OQaix5X3mavh5MczZlZbmhq-92z_j09XV7I82tRi3DSpjpXScYmOBSE9W4TCZHqPwAyzwOqDtUvAGivGDiUpWdk3lnxCO8NE77LWwZlc_Y",
        badge: "JUMBO"
    },
    {
        id: "df-2",
        title: "Organic Dried Figs (Anjeer)",
        description: "Soft, chewy dried figs from Turkey. Naturally sweet, rich in calcium and iron.",
        price: 380,
        category: "dry-fruits",
        weight: "250g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=400&q=80",
        badge: "FIBER RICH"
    },
    {
        id: "df-3",
        title: "Jumbo Cashew Nuts (Kaju)",
        description: "Grade W180 king-size crispy white cashew nuts, processed clean for peak flavor.",
        price: 420,
        category: "dry-fruits",
        weight: "250g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1600189020840-e9db18c395ea?auto=format&fit=crop&w=400&q=80",
        badge: "PREMIUM"
    },
    {
        id: "df-4",
        title: "Premium Kimia Dates",
        description: "Original soft black Mazafati dates from Bam. Moist, melting texture and instant energy.",
        price: 280,
        category: "dry-fruits",
        weight: "500g",
        isFeatured: false,
        image: "https://images.unsplash.com/photo-1587570220970-22c66c30bb82?auto=format&fit=crop&w=400&q=80",
        badge: "NATURAL ENERGY"
    }
];

// --- 2. State Variables ---
let cart = JSON.parse(localStorage.getItem("rahat_cart")) || [];
let orders = JSON.parse(localStorage.getItem("rahat_orders")) || [];
let currentCategoryFilter = "all";
let trackingOrder = null;

// --- 3. DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // 3.1 Initial Renderings
    renderCatalogue();
    updateCartUI();

    // 3.2 Add animations on load for Hero text
    document.querySelectorAll(".hero-fade").forEach((el, index) => {
        el.classList.add("animate-fade-in-up");
        el.style.animationDelay = `${index * 150}ms`;
    });

    // 3.3 Scroll animation observer & Scroll Spy
    setupScrollAnimations();
    setupScrollSpy();

    // 3.4 Event Listeners
    setupEventListeners();

    // 3.5 Check URL for hash navigation
    handleHashNavigation();

    // 3.6 Initialize 3D & particle effects
    initParticles();
    init3DTiltCards();
    initParallaxScroll();
    initCounterAnimation();
});

// Window scroll event for sticky navbar
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// --- 4. Event Listeners Setup ---
function setupEventListeners() {
    // 4.1 Cart drawer toggle
    const cartBtn = document.getElementById("cart-toggle-btn");
    const cartCloseBtn = document.getElementById("close-cart-btn");
    const cartOverlay = document.getElementById("cart-overlay");

    cartBtn.addEventListener("click", () => toggleCart(true));
    cartCloseBtn.addEventListener("click", () => toggleCart(false));
    cartOverlay.addEventListener("click", () => toggleCart(false));

    // 4.2 Catalogue Filter Tabs
    const filterTabs = document.querySelectorAll(".filter-tab");
    filterTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            filterTabs.forEach(t => t.classList.remove("bg-primary", "text-white", "border-primary"));
            filterTabs.forEach(t => t.classList.add("bg-surface", "text-on-surface-variant", "border-outline-variant/30"));
            
            tab.classList.remove("bg-surface", "text-on-surface-variant", "border-outline-variant/30");
            tab.classList.add("bg-primary", "text-white", "border-primary");

            currentCategoryFilter = tab.getAttribute("data-category");
            renderCatalogue(currentCategoryFilter);
        });
    });

    // 4.3 Checkout modal toggle
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeCheckoutBtn = document.getElementById("close-checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");

    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Your cart is empty!", "error");
            return;
        }
        toggleCart(false);
        checkoutModal.classList.remove("hidden");
        checkoutModal.classList.add("flex");
        document.body.classList.add("overflow-hidden");
        renderCheckoutSummary();
    });

    closeCheckoutBtn.addEventListener("click", () => {
        checkoutModal.classList.add("hidden");
        checkoutModal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
    });

    // 4.4 Checkout Form & Payment Mode Tab changes
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    paymentMethods.forEach(method => {
        method.addEventListener("change", (e) => {
            const upiDetails = document.getElementById("upi-details");
            const cardDetails = document.getElementById("card-details");
            const codDetails = document.getElementById("cod-details");

            upiDetails.classList.add("hidden");
            cardDetails.classList.add("hidden");
            codDetails.classList.add("hidden");

            if (e.target.value === "upi") upiDetails.classList.remove("hidden");
            if (e.target.value === "card") cardDetails.classList.remove("hidden");
            if (e.target.value === "cod") codDetails.classList.remove("hidden");
        });
    });

    // 4.5 Place Order Submission
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        processOrderSubmission();
    });

    // 4.6 My Orders Section toggle
    const myOrdersBtn = document.getElementById("my-orders-btn");
    const trackingModal = document.getElementById("tracking-modal");
    const closeTrackingBtn = document.getElementById("close-tracking-btn");

    myOrdersBtn.addEventListener("click", () => {
        trackingModal.classList.remove("hidden");
        trackingModal.classList.add("flex");
        document.body.classList.add("overflow-hidden");
        renderOrdersList();
    });

    closeTrackingBtn.addEventListener("click", () => {
        trackingModal.classList.add("hidden");
        trackingModal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
    });

    // 4.7 Mobile Navigation toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // 4.8 Search Remedies Box
    const searchInput = document.getElementById("search-box");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            renderCatalogueFiltered((prod) => prod.title.toLowerCase().includes(query) || prod.description.toLowerCase().includes(query));
        });
    }

    // 4.9 Consultation Form Submit
    const consultForm = document.querySelector("#consult form");
    if (consultForm) {
        consultForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Consultation requested successfully! Our Hakim will call you within 24 hours.", "success");
            consultForm.reset();
        });
    }

    // 4.10 Dark Mode Theme Toggle
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    if (darkModeBtn && darkModeIcon) {
        // Sync icon on startup (class is already applied by inline script in head)
        const isDark = document.documentElement.classList.contains("dark");
        darkModeIcon.innerText = isDark ? "light_mode" : "dark_mode";

        darkModeBtn.addEventListener("click", () => {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                darkModeIcon.innerText = "dark_mode";
                localStorage.setItem("rahat_theme", "light");
                showToast("Light mode enabled", "info");
            } else {
                document.documentElement.classList.add("dark");
                darkModeIcon.innerText = "light_mode";
                localStorage.setItem("rahat_theme", "dark");
                showToast("Dark mode enabled", "success");
            }
        });
    }
}

// --- 5. Catalog Management ---
function renderCatalogue(category = "all") {
    const grid = document.getElementById("catalogue-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = category === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === category);

    filtered.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function renderCatalogueFiltered(filterFunc) {
    const grid = document.getElementById("catalogue-grid");
    if (!grid) return;

    grid.innerHTML = "";
    const filtered = PRODUCTS.filter(filterFunc);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-on-surface-variant text-body-lg">
                No products found matching your search.
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card-popup rounded-3xl p-6 flex flex-col justify-between grid-item-fade";
    
    card.innerHTML = `
        <div>
            <div class="flex justify-between items-start mb-4">
                <span class="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold font-label-sm uppercase tracking-wider">
                    ${product.badge}
                </span>
                <span class="text-sm font-label-md text-on-surface-variant/75">${product.weight}</span>
            </div>
            
            <div class="img-container bg-surface-container-low rounded-2xl h-48 mb-6 overflow-hidden flex items-center justify-center cursor-pointer" onclick="showProductDetails('${product.id}')">
                <img class="w-3/4 h-3/4 object-contain" src="${product.image}" alt="${product.title}"/>
            </div>
            
            <h4 class="font-headline-sm text-lg text-primary mb-1 cursor-pointer hover:text-secondary transition-colors" onclick="showProductDetails('${product.id}')">${product.title}</h4>
            <p class="text-sm text-on-surface-variant line-clamp-2 mb-6">${product.description}</p>
        </div>
        
        <div class="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/20">
            <span class="font-bold text-lg text-primary">₹${product.price.toFixed(2)}</span>
            <button class="bg-primary text-white px-4 py-2 rounded-full font-label-sm text-xs hover:bg-secondary transition-colors flex items-center gap-1 shadow-md hover:shadow-lg" onclick="addToCart('${product.id}')">
                <span class="material-symbols-outlined text-sm">add_shopping_cart</span> Add
            </button>
        </div>
    `;

    return card;
}

// --- 6. Product Detail Modal ---
function showProductDetails(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    // Create a simple overlay modal for detail view
    const detailModal = document.createElement("div");
    detailModal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in-scale";
    detailModal.id = "product-detail-modal";

    detailModal.innerHTML = `
        <div class="bg-surface rounded-3xl p-8 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh] border border-outline-variant/20">
            <button class="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors" onclick="closeProductDetails()">
                <span class="material-symbols-outlined text-3xl">close</span>
            </button>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-surface-container-low rounded-2xl p-6 flex items-center justify-center">
                    <img class="max-h-64 object-contain" src="${product.image}" alt="${product.title}"/>
                </div>
                <div class="flex flex-col justify-between">
                    <div>
                        <span class="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-4 font-label-sm">
                            ${product.badge}
                        </span>
                        <h2 class="font-headline-md text-2xl text-primary mb-2">${product.title}</h2>
                        <span class="text-on-surface-variant font-label-md block mb-4">Pack Size: ${product.weight}</span>
                        <p class="text-on-surface-variant leading-relaxed mb-6">${product.description}</p>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-primary mb-6">₹${product.price.toFixed(2)}</div>
                        <button class="w-full bg-primary text-white py-4 rounded-full font-label-md hover:bg-secondary hover:scale-[1.02] transition-all flex items-center justify-center gap-2" onclick="addToCart('${product.id}'); closeProductDetails();">
                            <span class="material-symbols-outlined">add_shopping_cart</span> Add to Shopping Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(detailModal);
    document.body.classList.add("overflow-hidden");
}

function closeProductDetails() {
    const modal = document.getElementById("product-detail-modal");
    if (modal) {
        modal.remove();
        document.body.classList.remove("overflow-hidden");
    }
}
window.closeProductDetails = closeProductDetails; // make global

// --- 7. Cart State Management ---
function toggleCart(isOpen) {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (isOpen) {
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.classList.add("overflow-hidden");
    } else {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
    }
}

function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.product.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${product.title} to cart!`, "success");
}
window.addToCart = addToCart; // make global

function changeQuantity(id, delta) {
    const item = cart.find(item => item.product.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.product.id !== id);
    }

    saveCart();
    updateCartUI();
}
window.changeQuantity = changeQuantity; // make global

function removeFromCart(id) {
    cart = cart.filter(item => item.product.id !== id);
    saveCart();
    updateCartUI();
    showToast("Item removed from cart.", "info");
}
window.removeFromCart = removeFromCart; // make global

function saveCart() {
    localStorage.setItem("rahat_cart", JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count badge
    const badges = document.querySelectorAll(".cart-count-badge");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    badges.forEach(badge => {
        badge.innerText = totalItems;
        if (totalItems > 0) {
            badge.classList.remove("hidden");
        } else {
            badge.classList.add("hidden");
        }
    });

    // Render drawer list
    const cartList = document.getElementById("cart-items-list");
    const cartEmptyState = document.getElementById("cart-empty-state");
    const cartSummary = document.getElementById("cart-summary-section");

    if (cart.length === 0) {
        cartList.classList.add("hidden");
        cartSummary.classList.add("hidden");
        cartEmptyState.classList.remove("hidden");
    } else {
        cartList.classList.remove("hidden");
        cartSummary.classList.remove("hidden");
        cartEmptyState.classList.add("hidden");

        cartList.innerHTML = "";
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.product.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement("div");
            row.className = "flex gap-4 p-4 bg-surface-container-low rounded-2xl mb-3";
            row.innerHTML = `
                <img class="w-16 h-16 object-contain bg-surface rounded-xl p-1 border border-outline-variant/10" src="${item.product.image}" alt="${item.product.title}"/>
                <div class="flex-1 min-w-0">
                    <h5 class="font-bold text-primary text-sm truncate">${item.product.title}</h5>
                    <span class="text-xs text-on-surface-variant">${item.product.weight}</span>
                    <div class="flex justify-between items-center mt-2">
                        <div class="flex items-center gap-2 bg-surface rounded-full px-2 py-1 shadow-sm border border-outline-variant/10">
                            <button class="w-5 h-5 flex items-center justify-center text-xs font-bold text-on-surface hover:text-primary" onclick="changeQuantity('${item.product.id}', -1)">-</button>
                            <span class="text-xs font-bold text-primary w-4 text-center">${item.quantity}</span>
                            <button class="w-5 h-5 flex items-center justify-center text-xs font-bold text-on-surface hover:text-primary" onclick="changeQuantity('${item.product.id}', 1)">+</button>
                        </div>
                        <span class="font-bold text-primary text-sm">₹${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
                <button class="text-outline hover:text-red-600 self-start" onclick="removeFromCart('${item.product.id}')">
                    <span class="material-symbols-outlined text-lg">delete</span>
                </button>
            `;
            cartList.appendChild(row);
        });

        // Update totals
        const shipping = subtotal > 500 ? 0 : 50; // free shipping above 500
        const total = subtotal + shipping;

        document.getElementById("cart-subtotal").innerText = `₹${subtotal.toFixed(2)}`;
        document.getElementById("cart-shipping").innerText = shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`;
        document.getElementById("cart-total").innerText = `₹${total.toFixed(2)}`;
    }
}

// --- 8. Checkout & Payment Simulation ---
function renderCheckoutSummary() {
    const list = document.getElementById("checkout-items-list");
    if (!list) return;

    list.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement("div");
        row.className = "flex justify-between items-center py-2 border-b border-outline-variant/20 text-sm";
        row.innerHTML = `
            <div>
                <span class="font-bold text-primary">${item.product.title}</span> 
                <span class="text-on-surface-variant text-xs">(x${item.quantity})</span>
            </div>
            <span class="font-bold text-primary">₹${itemTotal.toFixed(2)}</span>
        `;
        list.appendChild(row);
    });

    const shipping = subtotal > 500 ? 0 : 50;
    const total = subtotal + shipping;

    document.getElementById("checkout-subtotal").innerText = `₹${subtotal.toFixed(2)}`;
    document.getElementById("checkout-shipping").innerText = shipping === 0 ? "FREE" : `₹${shipping.toFixed(2)}`;
    document.getElementById("checkout-total").innerText = `₹${total.toFixed(2)}`;
}

function processOrderSubmission() {
    // Gather details
    const name = document.getElementById("checkout-name").value;
    const phone = document.getElementById("checkout-phone").value;
    const email = document.getElementById("checkout-email").value;
    const address = document.getElementById("checkout-address").value;
    const city = document.getElementById("checkout-city").value;
    const pincode = document.getElementById("checkout-pincode").value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    // Validate
    if (!name || !phone || !email || !address || !city || !pincode) {
        showToast("Please fill all details.", "error");
        return;
    }

    // Hide checkout details modal and show payment processing screen
    document.getElementById("checkout-form-container").classList.add("hidden");
    const processingSection = document.getElementById("payment-processing-container");
    processingSection.classList.remove("hidden");

    // Stepper elements
    const steps = [
        document.getElementById("proc-step-1"),
        document.getElementById("proc-step-2"),
        document.getElementById("proc-step-3")
    ];

    // Simulate progress timeline
    setTimeout(() => {
        // Complete Step 1: Connecting
        steps[0].innerHTML = '<span class="material-symbols-outlined text-green-600 mr-2 text-xl">check_circle</span> Connection Secure';
        steps[0].classList.add("text-green-600", "font-bold");
        steps[1].classList.remove("text-outline");
        steps[1].classList.add("text-primary", "font-bold");

        setTimeout(() => {
            // Complete Step 2: Processing
            steps[1].innerHTML = '<span class="material-symbols-outlined text-green-600 mr-2 text-xl">check_circle</span> Auth Verified';
            steps[1].classList.add("text-green-600", "font-bold");
            steps[2].classList.remove("text-outline");
            steps[2].classList.add("text-primary", "font-bold");

            setTimeout(() => {
                // Complete Step 3: Confirming
                steps[2].innerHTML = '<span class="material-symbols-outlined text-green-600 mr-2 text-xl">check_circle</span> Payment Confirmed';
                steps[2].classList.add("text-green-600", "font-bold");

                setTimeout(() => {
                    // Create Order object
                    const orderId = "RU-" + Math.floor(100000 + Math.random() * 900000);
                    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
                    const shipping = subtotal > 500 ? 0 : 50;
                    const total = subtotal + shipping;

                    const newOrder = {
                        orderId,
                        date: new Date().toLocaleDateString(),
                        items: [...cart],
                        shippingDetails: { name, phone, email, address, city, pincode },
                        paymentMethod,
                        status: "Placed", // Status stepper: Placed -> Formulating -> Shipped -> Delivered
                        subtotal,
                        shipping,
                        total
                    };

                    orders.push(newOrder);
                    localStorage.setItem("rahat_orders", JSON.stringify(orders));

                    // Show success screen
                    showOrderSuccess(newOrder);

                    // Clear cart
                    cart = [];
                    saveCart();
                    updateCartUI();

                }, 800);
            }, 1000);
        }, 1200);
    }, 1000);
}

function showOrderSuccess(order) {
    const processingSection = document.getElementById("payment-processing-container");
    processingSection.classList.add("hidden");

    const successSection = document.getElementById("payment-success-container");
    successSection.classList.remove("hidden");

    document.getElementById("success-order-id").innerText = order.orderId;
    document.getElementById("success-total").innerText = `₹${order.total.toFixed(2)}`;

    // Draw confetti on success
    drawConfetti();

    // Trigger local tracking
    trackingOrder = order;
}

// Global button handlers for Success Close
function closeSuccessScreen() {
    const successSection = document.getElementById("payment-success-container");
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutFormContainer = document.getElementById("checkout-form-container");

    successSection.classList.add("hidden");
    checkoutModal.classList.add("hidden");
    checkoutModal.classList.remove("flex");
    checkoutFormContainer.classList.remove("hidden"); // reset for next time

    // Reset processing steps
    document.getElementById("proc-step-1").innerHTML = '<span class="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent mr-2"></span> Establishing Secure Connection...';
    document.getElementById("proc-step-1").className = "flex items-center text-primary font-medium text-sm";
    
    document.getElementById("proc-step-2").innerHTML = '<span class="material-symbols-outlined mr-2 text-xl">lock_open</span> Authorizing Payment...';
    document.getElementById("proc-step-2").className = "flex items-center text-outline text-sm";

    document.getElementById("proc-step-3").innerHTML = '<span class="material-symbols-outlined mr-2 text-xl">credit_card</span> Waiting for Confirmation...';
    document.getElementById("proc-step-3").className = "flex items-center text-outline text-sm";

    document.getElementById("checkout-form").reset();
    document.body.classList.remove("overflow-hidden");
}
window.closeSuccessScreen = closeSuccessScreen; // make global

// --- 9. Order History & Live Tracking ---
function renderOrdersList() {
    const container = document.getElementById("orders-list-container");
    const trackingDetail = document.getElementById("tracking-detail-section");
    if (!container) return;

    trackingDetail.classList.add("hidden"); // Hide detail initially

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-on-surface-variant">
                <span class="material-symbols-outlined text-4xl block mb-2">receipt_long</span>
                You haven't placed any orders yet.
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    // Show in reverse chronological order
    [...orders].reverse().forEach(order => {
        const itemNames = order.items.map(i => `${i.product.title} (x${i.quantity})`).join(", ");
        const card = document.createElement("div");
        card.className = "p-4 bg-surface-container-low rounded-2xl mb-3 border border-outline-variant/20 hover:border-primary/40 transition-colors cursor-pointer";
        card.onclick = () => selectOrderForTracking(order.orderId);
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="font-bold text-primary text-sm">${order.orderId}</span>
                <span class="text-xs text-on-surface-variant font-label-sm">${order.date}</span>
            </div>
            <p class="text-xs text-on-surface-variant truncate mb-2">${itemNames}</p>
            <div class="flex justify-between items-center">
                <span class="font-bold text-primary text-xs">₹${order.total.toFixed(2)}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider 
                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}">
                    ${order.status}
                </span>
            </div>
        `;
        container.appendChild(card);
    });
}

function selectOrderForTracking(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    trackingOrder = order;
    const detailSection = document.getElementById("tracking-detail-section");
    detailSection.classList.remove("hidden");

    // Set order metadata
    document.getElementById("track-order-id").innerText = order.orderId;
    document.getElementById("track-date").innerText = order.date;
    document.getElementById("track-shipping").innerText = `${order.shippingDetails.name}, ${order.shippingDetails.address}, ${order.shippingDetails.city} - ${order.shippingDetails.pincode}`;
    
    // Set Items list
    const itemsList = document.getElementById("track-items-summary");
    itemsList.innerHTML = "";
    order.items.forEach(item => {
        const li = document.createElement("div");
        li.className = "flex justify-between text-xs py-1 border-b border-outline-variant/10";
        li.innerHTML = `<span>${item.product.title} (x${item.quantity})</span><span class="font-semibold text-primary">₹${(item.product.price * item.quantity).toFixed(2)}</span>`;
        itemsList.appendChild(li);
    });

    const shippingPrice = order.shipping === 0 ? "FREE" : `₹${order.shipping.toFixed(2)}`;
    const totalRow = document.createElement("div");
    totalRow.className = "flex justify-between text-xs font-bold pt-2 text-primary";
    totalRow.innerHTML = `<span>Total (incl. Shipping ${shippingPrice})</span><span>₹${order.total.toFixed(2)}</span>`;
    itemsList.appendChild(totalRow);

    updateTrackingStepper();
}
window.selectOrderForTracking = selectOrderForTracking; // make global

function updateTrackingStepper() {
    if (!trackingOrder) return;

    const stages = ["Placed", "Formulating", "Shipped", "Delivered"];
    const currentIdx = stages.indexOf(trackingOrder.status);

    const stepItems = [
        document.getElementById("step-placed"),
        document.getElementById("step-formulating"),
        document.getElementById("step-shipped"),
        document.getElementById("step-delivered")
    ];

    stepItems.forEach((step, idx) => {
        step.classList.remove("completed", "active");
        if (idx < currentIdx) {
            step.classList.add("completed");
        } else if (idx === currentIdx) {
            step.classList.add("active");
        }
    });

    // Toggle simulation button based on status
    const simBtn = document.getElementById("simulate-status-btn");
    if (trackingOrder.status === "Delivered") {
        simBtn.disabled = true;
        simBtn.innerText = "Order Delivered";
        simBtn.className = "w-full bg-slate-200 text-slate-500 py-3 rounded-full text-sm font-semibold cursor-not-allowed";
    } else {
        simBtn.disabled = false;
        simBtn.innerText = `Simulate Next Stage (${stages[currentIdx + 1]})`;
        simBtn.className = "w-full bg-primary hover:bg-secondary text-white py-3 rounded-full text-sm font-semibold transition-all transform hover:scale-[1.01]";
    }
}

// Global status simulation runner
function runStatusSimulation() {
    if (!trackingOrder) return;

    const stages = ["Placed", "Formulating", "Shipped", "Delivered"];
    const currentIdx = stages.indexOf(trackingOrder.status);

    if (currentIdx < stages.length - 1) {
        const nextStatus = stages[currentIdx + 1];
        trackingOrder.status = nextStatus;

        // Save back to list
        const mainOrder = orders.find(o => o.orderId === trackingOrder.orderId);
        if (mainOrder) mainOrder.status = nextStatus;
        localStorage.setItem("rahat_orders", JSON.stringify(orders));

        showToast(`Order status updated to: ${nextStatus}`, "success");
        updateTrackingStepper();
        renderOrdersList(); // refresh parent sidebar view
    }
}
window.runStatusSimulation = runStatusSimulation; // make global

// --- 10. Animation & Micro-interaction Helpers ---
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // Attach to sections and elements
    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
        observer.observe(el);
    });
}

function setupScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a.nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 160) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

function handleHashNavigation() {
    // Scroll smoothly to hashed sections, or handle filters if relevant
    const hash = window.location.hash;
    if (!hash) return;

    // Handle catalog categories
    if (hash === "#medicines" || hash === "#spices" || hash === "#dry-fruits") {
        const cat = hash.replace("#", "");
        const tab = document.querySelector(`.filter-tab[data-category="${cat}"]`);
        if (tab) {
            tab.click();
            // Scroll to catalog section
            const catalogSec = document.getElementById("catalogue");
            if (catalogSec) {
                setTimeout(() => {
                    catalogSec.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }
}

// Listen to hash changes in browser
window.addEventListener("hashchange", handleHashNavigation);

// Confetti generator for checkout success
function drawConfetti() {
    const canvas = document.getElementById("success-confetti");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    const colors = ["#00261a", "#d4af37", "#14b8a6", "#3b6756", "#fed65b", "#ef4444"];
    const pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * width,
            y: Math.random() * height - height,
            r: Math.random() * 6 + 4,
            d: Math.random() * height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }

    let animationId;
    function update() {
        ctx.clearRect(0, 0, width, height);

        pieces.forEach((p, idx) => {
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tiltAngle += p.tiltAngleIncremental;
            p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();

            // Reset pieces at bottom
            if (p.y > height) {
                p.x = Math.random() * width;
                p.y = -20;
                p.tilt = Math.random() * 10 - 5;
            }
        });

        animationId = requestAnimationFrame(update);
    }

    update();

    // Stop after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, width, height);
    }, 6000);
}

// Toast notification helper
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `fixed bottom-6 right-6 z-50 px-6 py-3 rounded-2xl text-white font-label-md text-sm shadow-xl flex items-center gap-2 transition-all transform translate-y-12 opacity-0 duration-300`;
    
    let icon = "check_circle";
    let bg = "bg-primary"; // forest green

    if (type === "error") {
        icon = "error";
        bg = "bg-red-600";
    } else if (type === "info") {
        icon = "info";
        bg = "bg-teal-600";
    }

    toast.classList.add(bg);
    toast.innerHTML = `<span class="material-symbols-outlined">${icon}</span> ${message}`;

    document.body.appendChild(toast);

    // animate in
    setTimeout(() => {
        toast.classList.remove("translate-y-12", "opacity-0");
    }, 10);

    // animate out
    setTimeout(() => {
        toast.classList.add("translate-y-12", "opacity-0");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}
window.showToast = showToast; // make global

// ═══════════════════════════════════════════════════
// FLOATING PARTICLES GENERATOR
// ═══════════════════════════════════════════════════
function initParticles() {
    const containers = document.querySelectorAll('.particles-container');
    containers.forEach(container => {
        const count = 20;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 6 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = '0';
            // Vary colors
            const colors = ['#fed65b', '#14b8a6', '#007a4d', '#f5c842', '#ffffff'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(particle);
        }
    });
}

// ═══════════════════════════════════════════════════
// 3D MOUSE-TILT TRACKING FOR PRODUCT CARDS
// ═══════════════════════════════════════════════════
function init3DTiltCards() {
    // Apply 3D tilt on mouse move for all product cards and tilt-cards
    const handleTilt = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8; // max 8 degrees
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.03)`;
    };

    const resetTilt = (card) => {
        card.style.transform = '';
    };

    // Observe DOM for dynamically rendered cards
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.product-card-popup').forEach(card => {
            if (!card.dataset.tiltInit) {
                card.dataset.tiltInit = 'true';
                card.addEventListener('mousemove', (e) => handleTilt(e, card));
                card.addEventListener('mouseleave', () => resetTilt(card));
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Also init for already existing cards
    document.querySelectorAll('.product-card-popup').forEach(card => {
        if (!card.dataset.tiltInit) {
            card.dataset.tiltInit = 'true';
            card.addEventListener('mousemove', (e) => handleTilt(e, card));
            card.addEventListener('mouseleave', () => resetTilt(card));
        }
    });

    // Tilt cards in promo section
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ═══════════════════════════════════════════════════
// PARALLAX SCROLL EFFECTS
// ═══════════════════════════════════════════════════
function initParallaxScroll() {
    const orbs = document.querySelectorAll('.floating-orb');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                orbs.forEach((orb, i) => {
                    const speed = (i % 3 + 1) * 0.03; // Vary speeds
                    const yOffset = scrollY * speed;
                    orb.style.transform = `translateY(${yOffset}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ═══════════════════════════════════════════════════
// ANIMATED COUNTER FOR STATS
// ═══════════════════════════════════════════════════
function initCounterAnimation() {
    const statsSection = document.getElementById('about');
    if (!statsSection) return;

    const counters = statsSection.querySelectorAll('.font-headline-sm');
    let animated = false;

    const animateCounter = (el) => {
        const text = el.textContent.trim();
        const match = text.match(/(\d+)/);
        if (!match) return;
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = text; // Ensure exact final value
            }
        };
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach((el, i) => {
                    setTimeout(() => animateCounter(el), i * 200);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}
