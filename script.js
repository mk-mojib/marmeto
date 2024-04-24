// Small-Images

const smallImages = document.querySelectorAll('.small-img');

smallImages.forEach(smallImg => {
  smallImg.addEventListener('click', function() {
    smallImages.forEach(img => {
      img.classList.remove('active');
    });

    smallImg.classList.add('active');
  });
});

// Quantity

const quantityElement = document.querySelector('.quantity-value');

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

let quantity = 1;
quantityElement.textContent = quantity;

function updateButtonColors() {
  if (quantity === 1) {
    minusButton.classList.add('disabled');
  } else {
    minusButton.classList.remove('disabled');
  }
}

plusButton.addEventListener('click', function() {
  quantity++;
  quantityElement.textContent = quantity;
  updateButtonColors();
});

minusButton.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateButtonColors();
  }
});

// colors

const colorOptions = document.querySelectorAll('.color-box > div');

colorOptions.forEach(colorOption => {
  colorOption.addEventListener('click', function() {
    colorOptions.forEach(option => {
      option.classList.remove('selected');
      option.classList.remove('active'); 
    });

    colorOption.classList.add('selected');
    colorOption.classList.add('active'); 
  });
});

// cart

function displayCartMessage(productName, color, size) {
    const message = `${productName} with Color ${color} and Size ${size} added to cart`;
    const cartMessage = document.getElementById('cartMessage');
    cartMessage.textContent = message;
  }
  
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', function() {
    const selectedSize = document.querySelector('input[name="size"]:checked');
    const size = selectedSize ? selectedSize.nextElementSibling.textContent : '';
  
    const selectedColor = document.querySelector('.color-box > div.active');
    const color = selectedColor ? selectedColor.className.split(' ')[0] : '';
  
    const productName = "Your Product";
    
    displayCartMessage(productName, color, size);
  });
  