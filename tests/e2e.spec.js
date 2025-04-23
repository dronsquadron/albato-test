import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Successful login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory/);
});

test('Login fails with wrong password', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'wrong_password');
  await expect(page.locator('.error-message-container')).toBeVisible();
});

test('Add item to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.addToCart('Sauce Labs Backpack');
  await expect(products.cartBadge).toHaveText('1');
});

test('Remove item from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await products.addToCart('Sauce Labs Backpack');
  await products.gotoCart();
  await cart.removeFromCart('Sauce Labs Backpack');
  await expect(await cart.isItemInCart('Sauce Labs Backpack')).toBeFalsy();
});