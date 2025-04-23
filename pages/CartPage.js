export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async removeFromCart(productName) {
    await this.page.locator(`text=${productName} >> xpath=.. >> xpath=.. >> button`).click();
  }

  async isItemInCart(productName) {
    return await this.page.locator(`.cart_item:has-text("${productName}")`).count() > 0;
  }
}