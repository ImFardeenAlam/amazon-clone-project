import { validDeliveryOption } from "./deliveryOptions.js";

class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
  
    if(!this.cartItems){
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }
  
    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];
  
    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart;
    this.saveToStorage();
  }

  calculateCartQuantity(){
    let cartQuantity = 0;
  this.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
  }

  updateQuantity(productId, newQuantity) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    matchingItem.quantity = newQuantity;
  
    this.saveToStorage();
  }

    //Handels save feature in checkout page
    handleSaveQuantity(link,updateQuantity){
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
    }

    updateDeliveryOption(productId,deliveryOptionId){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      });
    
      if(!matchingItem){
        return;
      };
    
      if(!validDeliveryOption(deliveryOptionId)){
        return;
      }
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }


}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');




console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);









