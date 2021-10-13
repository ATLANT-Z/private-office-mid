export default class Product {
  constructor(data) {
    Object.assign(this, data);
    this.checked = false;
  }

  addToCart() {
    this.addedToCart = true;
  }

  removeFromCart() {
    this.addedToCart = false;
  }
}
