export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

 export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });
  
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);
  if(matchingItem){
    matchingItem.quantity += quantity;
  }else{
    cart.push({
      productId,
      quantity
    }); 
  }
  saveToStorage();
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function calculateCartQuantity(){
  let cartQuantity = 0;
cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});
return cartQuantity;
}
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
};
//Handels save feature in checkout page
export function handleSaveQuantity(link,updateQuantity){
  const productId = link.dataset.productId;

  const quantityInput =document.querySelector(`.js-quantity-input-${productId}`)
  const newQuantity = Number(quantityInput.value);
  
  if(newQuantity <= 0 || newQuantity >= 1000){
    alert('Quantity at least 0 and less than 1000');
  }else{
  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.classList.remove('is-editing-quantity'); 

  const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
  quantityLabel.innerHTML = newQuantity;

  updateQuantity(productId,newQuantity);
  console.log(newQuantity);
  }
};
