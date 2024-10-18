import { addToCart } from "../data/cart.js";
import { loadProductsFetch, getProduct } from "../data/products.js";
import { orders } from "../data/orders.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import formatCurrency from "./utils/money.js";





async function loadPage(){
  await loadProductsFetch()

  let orderHTML ='';

  orders.forEach((order) => {
    const orderTimingString = dayjs(order.orderTime).format('MMMM DD')
  

  orderHTML +=`
    <div class="orders-grid">
    <div class="order-container">
      
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${orderTimingString}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(order.totalCostCents)}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.id}</div>
        </div>
      </div>

      <div class="order-details-grid">
        ${productListHTML()}
      </div>`

    function productListHTML (){
      let productListHTML='';
      
      order.products.forEach((productDetails) => {
        const product = getProduct(productDetails.productId);
        
        productListHTML += 
        `<div class="product-image-container">
        <img src="${product.image}">
      </div>

      <div class="product-details">
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${dayjs(productDetails.estimatedDeliveryTime).format('MMMM D')}
        </div>
        <div class="product-quantity">
          Quantity: ${productDetails.quantity}
        </div>
        <button class="buy-again-button js-buy-again  button-primary" data-product-id="${product.id}>
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div> `
      });

      return productListHTML;
    }
  })
  document.querySelector('.js-orders-grid').innerHTML = orderHTML;

  document.querySelectorAll('.js-buy-again')
  .forEach((buyItAgain) => {
    buyItAgain.addEventListener('click',() => {
      const {productId} = buyItAgain.dataset;
      addToCart(productId);

      buyItAgain.innerHTML = 'Added';
      setTimeout(() => {
        buyItAgain.innerHTML = `
        <img class="buy-again-icon" src="images/icons/buy-again.png">
        <span class="buy-again-message">Buy it again</span>
      `;
      },1000)
    });
  });
};
  loadPage();