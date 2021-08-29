export default class Product {
  constructor(data) {
    Object.assign(this, data);
    this.checked = false;
  }

  addToCart() {
    this.isInCart = true;
  }

  removeFromCart() {
    this.isInCart = false;
  }
}
