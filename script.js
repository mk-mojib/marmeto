// Small-Images

// Get all small image elements
const smallImages = document.querySelectorAll('.small-img');

// Add event listener to each small image
smallImages.forEach(smallImg => {
  smallImg.addEventListener('click', function() {
    // Remove 'active' class from all small images
    smallImages.forEach(img => {
      img.classList.remove('active');
    });

    // Add 'active' class to the clicked small image
    smallImg.classList.add('active');
  });
});

// Quantity

// Get the quantity value element
const quantityElement = document.querySelector('.quantity-value');

// Get the plus and minus buttons
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

// Initial quantity
let quantity = 1;
quantityElement.textContent = quantity;

// Function to update button colors
function updateButtonColors() {
  if (quantity === 1) {
    minusButton.classList.add('disabled');
  } else {
    minusButton.classList.remove('disabled');
  }
}

// Function to increase quantity
plusButton.addEventListener('click', function() {
  quantity++;
  quantityElement.textContent = quantity;
  updateButtonColors();
});

// Function to decrease quantity
minusButton.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateButtonColors();
  }
});

// colors

// Get all color options
const colorOptions = document.querySelectorAll('.color-box > div');

// Add event listener to each color option
colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', function() {
    // Remove 'selected' class from all color options
    colorOptions.forEach(option => {
      option.classList.remove('selected');
      option.classList.remove('active'); // Remove 'active' class from all color options
    });

    // Add 'selected' class to the clicked color option
    colorOption.classList.add('selected');
    colorOption.classList.add('active'); // Add 'active' class to the clicked color option
  });
});





// cart

// Function to display cart message
function displayCartMessage(productName, color, size) {
    const message = `${productName} with Color ${color} and Size ${size} added to cart`;
    const cartMessage = document.getElementById('cartMessage');
    cartMessage.textContent = message;
  }
  
  // Add event listener to "Add to Cart" button
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', function() {
    // Get selected size
    const selectedSize = document.querySelector('input[name="size"]:checked');
    const size = selectedSize ? selectedSize.nextElementSibling.textContent : '';
  
    // Get selected color
    const selectedColor = document.querySelector('.color-box > div.active');
    const color = selectedColor ? selectedColor.className.split(' ')[0] : '';
  
    // Get product name (Assuming this is obtained from somewhere in your code)
    const productName = "Your Product";
    
    // Display cart message
    displayCartMessage(productName, color, size);
  });
  