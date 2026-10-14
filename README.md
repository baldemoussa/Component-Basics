# Component library

A React page that renders the same person and the same product twice, with different props. The left cards show more detail. The right cards hide the email, role, description, and stock line. There is no router, and the page does not list the cart.

The page does not set a background color. Profile cards are white. Product cards have no fill of their own, so the name, price, and description sit on the page background.

## Screenshots

**The page.** John Doe appears twice. Wireless Headphones, at $199.99, appear twice. Only the first product card shows the description and **In Stock**.

![Two profile cards and two headphone cards](docs/screenshots/library.png)

**Added to cart.** Add to Cart shows a green alert, “Product added to cart!”, with a close button. The close button hides the alert.

![Green alert saying the product was added to the cart](docs/screenshots/added.png)

## What's on the page

**John Doe.** Email `john.doe@example.com` and role Software Engineer show only on the first card. Both cards include “Last login: 2 hours ago” and an Edit Profile button. Edit Profile opens a browser alert that says `Editing user 1`.

**Wireless Headphones.** Price `$199.99`. The description and the green **In Stock** line show only on the first card. Both cards include “Free shipping available” and an Add to Cart button. The button stays enabled because this product is in stock.

`AlertBox` can also render error, warning, and info styles, and `ProductDisplay` can disable the button and label it Out of Stock when `inStock` is false. This page only uses the success alert and an in-stock product.

The avatar and the headphone photo load from other sites, so those images need a network connection.

## Getting started

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173/`.
