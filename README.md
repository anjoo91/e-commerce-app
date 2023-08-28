# E-Commerce Store

This is a simple SPA (single-page-application) E-Commerce store example built off of Mongoose (MongoDB), Express.js, React.js, and Node.js. AWS S3 is used for hosting image files and JWT is used for authentication. 

There are some basic functionalities to found on this app: 
* Log-In & Sign-Up
    * User credentials are stored in mongoose
    * Some users can be specified to be an admin
* Rotating Banner on Home Screen
    * Product images are automatically cycled through as a banner via updating states
* Admin Authentication
    * Certain CRUD functions and buttons are available only if user is an admin
* C(R)UD - Read Products
    * All users can read/see products added to the website
* (C)RUD - Create Products
    * Admin users can add products to the website
* CRU(D) - Delete Products
    * Admin users can delete products from the website
* Add Products to cart
    * All users can add products to their cart
* Remove Products from cart
    * All users can remove products from their cart
* Checkout
    * Simulated checkout success - no API is integrated as of now
* Order History
    * Cart items that have gone through checkout are marked as paid
    * Paid items are added to the Order History page
    * Order status is displayed as a progress bar for each order

### Getting Started:

trello: https://trello.com/b/yJjVbyYQ/e-commerce-app

gitHub: https://github.com/anjoo91/e-commerce-app

live: https://ontime-watch-store.onrender.com


### ScreenShots:

##### Home Page:

![Home Page](https://i.postimg.cc/wBKdC3Z2/landing-page-mern.png "Landing Page")

##### Products Page (Admin):

![Admin Products Page](https://i.postimg.cc/05t18Vhb/products-page-mern.png "Admin Products Page")

##### Products Page (Non-Admin):

![Non-Admin Product Page](https://i.postimg.cc/jjTF6fBp/products-not-admin-page-mern.png "Non-Admin Products Page")

##### Product Detail Page (Admin):

![Product Detail Page](https://i.postimg.cc/3xYqmpsP/products-detail-page-mern.png "Product Detail Page")

##### Product Detail Page (Non-Admin):

![Non-Admin Product Detail Page](https://i.postimg.cc/W3x5YJh6/products-not-admin-detail-page-mern.png "Non-Admin Product Detail Page")

##### Add Product Page:

![Add Product Page](https://i.postimg.cc/3N2LDJn8/addform-mern.png "Add Product Form Page")

##### Shopping Cart Page:

![Cart Page](https://i.postimg.cc/ZKF7bnWj/cart-page-mern.png "Cart Page")

##### Order History Page:

![Order History Page](https://i.postimg.cc/KvvLT890/Order-History-page-mern.png "Order History Page")

##### Log In Page:

![Login Page](https://i.postimg.cc/52DFDqfr/Login-Form-Mern.png "Login Page")

##### Sign Up Page:

![SignUp Page](https://i.postimg.cc/RFL63kwr/signup-mern.png "SignUp Page")



### Technologies Used:

* MVC
* MongoDB (Mongoose)
* Express.JS
* React.JS
* Node.JS
* AWS S3
* JWT Authentication
* CSS

### IceBox:

* Add shipping address form
* Integrate Stripe/Paypal API
* Add confirmation function with email API
* Update homescreen banner with new images in a new model
* Add more styling
* Add search function & search bar in navbar
* Add more icons on navbar styling

