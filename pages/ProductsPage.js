export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addToCart(productName) {
    await this.page.locator(`text=${productName} >> xpath=.. >> xpath=.. >> button`).click();
  }

  async gotoCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}