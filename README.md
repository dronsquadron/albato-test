# Saucedemo E2E Tests

Автоматизированные тесты сайта [saucedemo.com](https://www.saucedemo.com), написанные с использованием Playwright и Page Object подхода.

## Установка
```bash
npm install
```

## Запуск тестов
```bash
npx playwright test
```

## Структура проекта
- `tests/e2e.spec.js` — основные тест-кейсы
- `pages/` — Page Object классы (`LoginPage`, `ProductsPage`, `CartPage`)

## Учётные данные
- Username: `standard_user`
- Password: `secret_sauce`
