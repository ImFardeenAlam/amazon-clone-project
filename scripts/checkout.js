import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js';

async  function loadPage() {

  await loadProductsFetch()

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage()
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((value) => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/
// new Promise((resolve) => {
//  loadProducts(() => {
//   resolve();
//  });

// }).then(() => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// loadProducts(() => {
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
