// Product data
const products = {
    1: {
        id: 1,
        name: "Classic Denim Jacket",
        price: 59.99,
        oldPrice: 79.99,
        description: "Our classic denim jacket is made from premium quality denim for durability and comfort. Features include a regular fit, button-front closure, and multiple pockets for functionality.",
        images: [
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#1a4b8c", name: "Dark Blue" },
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    2: {
        id: 2,
        name: "Premium White T-Shirt",
        price: 24.99,
        description: "Crafted from 100% organic cotton, this premium t-shirt offers exceptional softness and breathability. The relaxed fit makes it perfect for everyday wear.",
        images: [
            "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#ffffff", name: "White" },
            { code: "#000000", name: "Black" },
            { code: "#1a4b8c", name: "Navy" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    3: {
        id: 3,
        name: "Casual Checkered Shirt",
        price: 39.99,
        description: "This stylish checkered shirt features a comfortable regular fit with button-front closure and long sleeves. Perfect for layering or wearing on its own.",
        images: [
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#6b4423", name: "Brown" },
            { code: "#1a4b8c", name: "Blue" },
            { code: "#000000", name: "Black" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    4: {
        id: 4,
        name: "Genuine Leather Jacket",
        price: 129.99,
        description: "Made from 100% genuine leather, this jacket offers both style and durability. Features include a zip-front closure, multiple pockets, and a comfortable fit.",
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    5: {
        id: 5,
        name: "Comfy Oversized Sweatshirt",
        price: 44.99,
        description: "This oversized sweatshirt is made from a soft cotton blend for ultimate comfort. The relaxed fit and dropped shoulders create a stylish, casual look.",
        images: [
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#1a4b8c", name: "Navy" },
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Brown" }
        ],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    6: {
        id: 6,
        name: "Slim Fit Chino Pants",
        price: 49.99,
        description: "These slim fit chino pants are made from a stretch cotton blend for comfort and mobility. The modern fit works well for both casual and business casual occasions.",
        images: [
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#6b4423", name: "Khaki" },
            { code: "#1a4b8c", name: "Navy" },
            { code: "#000000", name: "Black" }
        ],
        sizes: ["28", "30", "32", "34", "36"]
    },
    7: {
        id: 7,
        name: "Floral Summer Dress",
        price: 39.99,
        oldPrice: 49.99,
        description: "This lightweight floral dress is perfect for warm weather. Made from breathable fabric with a flattering A-line silhouette and adjustable waist tie.",
        images: [
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#ff6b6b", name: "Coral" },
            { code: "#4ecdc4", name: "Teal" },
            { code: "#ffe66d", name: "Yellow" }
        ],
        sizes: ["XS", "S", "M", "L"]
    },
    8: {
        id: 8,
        name: "Warm Winter Coat",
        price: 89.99,
        description: "Stay warm in style with this insulated winter coat. Features include a detachable hood, multiple pockets, and a water-resistant outer shell.",
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        colors: [
            { code: "#000000", name: "Black" },
            { code: "#6b4423", name: "Camel" },
            { code: "#1a4b8c", name: "Navy" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    }
  };
  
  // Cart functionality
  let cart = [];
  const cartIcon = document.getElementById('cart-icon');
  const cartCount = document.querySelector('.cart-count');
  const cartModal = document.getElementById('cart-modal');
  const closeModal = document.querySelector('.close-modal');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const toast = document.getElementById('toast');
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewClose = document.querySelector('.quick-view-close');
  const quickViewContent = document.getElementById('quick-view-content');
  
  // Open cart modal
  cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    updateCartDisplay();
  });
  
  // Close cart modal
  closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });
  
  // Close quick view modal
  quickViewClose.addEventListener('click', () => {
    quickViewModal.style.display = 'none';
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === quickViewModal) {
        quickViewModal.style.display = 'none';
    }
  });
  
  // Add to cart functionality
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
        
        // Default color and size for quick add
        const color = products[id].colors[0].code;
        const colorName = products[id].colors[0].name;
        const size = products[id].sizes[2]; // Default to Medium or equivalent
        
        // Check if item already in cart with same color and size
        const existingItem = cart.find(item => 
            item.id === id && 
            item.color === color && 
            item.size === size
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price,
                image,
                color,
                colorName,
                size,
                quantity: 1
            });
        }
        
        updateCartCount();
        showToast();
    });
  });
  
  // Quick view functionality
  const quickViewButtons = document.querySelectorAll('.quick-view');
  quickViewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        openQuickView(productId);
    });
  });
  
  function openQuickView(productId) {
    const product = products[productId];
    
    // Set main product info
    document.getElementById('quick-view-title').textContent = product.name;
    document.getElementById('quick-view-main-image').src = product.images[0];
    
    // Set price
    let priceHTML = `$${product.price.toFixed(2)}`;
    if (product.oldPrice) {
        priceHTML += ` <span class="quick-view-old-price">$${product.oldPrice.toFixed(2)}</span>`;
    }
    document.getElementById('quick-view-price').innerHTML = priceHTML;
    
    // Set description
    document.getElementById('quick-view-description').textContent = product.description;
    
    // Set thumbnails
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => {
            document.getElementById('quick-view-main-image').src = image;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Set color options
    const colorButtons = document.getElementById('color-buttons');
    colorButtons.innerHTML = '';
    product.colors.forEach((color, index) => {
        const colorBtn = document.createElement('div');
        colorBtn.className = 'color-btn';
        if (index === 0) colorBtn.classList.add('active');
        colorBtn.style.backgroundColor = color.code;
        colorBtn.setAttribute('data-color', color.code);
        colorBtn.setAttribute('data-color-name', color.name);
        colorBtn.addEventListener('click', () => {
            document.querySelectorAll('.color-btn').forEach(c => c.classList.remove('active'));
            colorBtn.classList.add('active');
        });
        colorButtons.appendChild(colorBtn);
    });
    
    // Set size options
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        if (product.sizes.includes(btn.getAttribute('data-size'))) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    // Reset active size to first available
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.size-btn[data-size="${product.sizes[2]}"]`).classList.add('active');
    
    // Update add to cart button
    const quickViewAddToCart = document.getElementById('quick-view-add-to-cart');
    quickViewAddToCart.setAttribute('data-id', product.id);
    quickViewAddToCart.setAttribute('data-name', product.name);
    quickViewAddToCart.setAttribute('data-price', product.price);
    quickViewAddToCart.setAttribute('data-image', product.images[0]);
    
    // Open modal
    quickViewModal.style.display = 'flex';
  }
  
  // Quick view add to cart
  document.getElementById('quick-view-add-to-cart').addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const image = this.getAttribute('data-image');
    
    // Get selected color and size
    const selectedColor = document.querySelector('.color-btn.active').getAttribute('data-color');
    const selectedColorName = document.querySelector('.color-btn.active').getAttribute('data-color-name');
    const selectedSize = document.querySelector('.size-btn.active').getAttribute('data-size');
    
    // Check if item already in cart with same color and size
    const existingItem = cart.find(item => 
        item.id === id && 
        item.color === selectedColor && 
        item.size === selectedSize
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            color: selectedColor,
            colorName: selectedColorName,
            size: selectedSize,
            quantity: 1
        });
    }
    
    updateCartCount();
    showToast();
    quickViewModal.style.display = 'none';
  });
  
  // Size selection in quick view
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
  });
  
  // Wishlist functionality
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            showToast('Added to wishlist!');
        }
    });
  });
  
  // Quick view wishlist
  document.querySelector('.quick-view-wishlist').addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        showToast('Added to wishlist!');
    }
  });
  
  // Update cart count display
  function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  // Update cart display in modal
  function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartSubtotal.textContent = '$0.00';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let html = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        html += `
            <div class="cart-item" data-id="${item.id}" data-color="${item.color}" data-size="${item.size}">
                <div class="cart-item-info">
                    <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div>
                            <span class="cart-item-color" style="background-color: ${item.color}"></span>
                            <span class="cart-item-size">${item.size}</span>
                        </div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                    <button class="remove-item">🗑️</button>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
  }
  
  // Quantity adjustment functions
  function decreaseQuantity(e) {
    const itemElement = e.target.closest('.cart-item');
    const itemId = itemElement.getAttribute('data-id');
    const itemColor = itemElement.getAttribute('data-color');
    const itemSize = itemElement.getAttribute('data-size');
    
    const item = cart.find(item => 
        item.id === itemId && 
        item.color === itemColor && 
        item.size === itemSize
    );
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => 
            !(item.id === itemId && 
            item.color === itemColor && 
            item.size === itemSize)
        );
    }
    
    updateCartCount();
    updateCartDisplay();
  }
  
  function increaseQuantity(e) {
    const itemElement = e.target.closest('.cart-item');
    const itemId = itemElement.getAttribute('data-id');
    const itemColor = itemElement.getAttribute('data-color');
    const itemSize = itemElement.getAttribute('data-size');
    
    const item = cart.find(item => 
        item.id === itemId && 
        item.color === itemColor && 
        item.size === itemSize
    );
    
    item.quantity += 1;
    
    updateCartCount();
    updateCartDisplay();
  }
  
  function removeItem(e) {
    const itemElement = e.target.closest('.cart-item');
    const itemId = itemElement.getAttribute('data-id');
    const itemColor = itemElement.getAttribute('data-color');
    const itemSize = itemElement.getAttribute('data-size');
    
    cart = cart.filter(item => 
        !(item.id === itemId && 
        item.color === itemColor && 
        item.size === itemSize)
    );
    
    updateCartCount();
    updateCartDisplay();
  }
  
  // Show toast notification
  function showToast(message = 'Item added to cart!') {
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    showToast('Thanks for subscribing!');
    newsletterForm.reset();
  });
  
  // Checkout button
  const checkoutBtn = document.querySelector('.checkout-btn');
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout! This would connect to a payment system in a real implementation.');
        cart = [];
        updateCartCount();
        updateCartDisplay();
        cartModal.style.display = 'none';
    }
  });
  
  // Continue shopping button
  document.querySelector('.continue-shopping').addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'none';
  });
  
  // Animate elements when they come into view
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
  });