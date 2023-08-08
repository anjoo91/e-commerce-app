# E-Commerce Store

This is a simple SPA (single-page-application) E-Commerce store example built off of Mongoose (MongoDB), Express.js, React.js, and Node.js. AWS S3 is used for hosting image files and JWT is used for authentication. 

There are some basic functionalities to found on this app: 
* Log-In & Sign-Up
    * User credentials are stored in mongoose
    * Some users can be specified to be an admin
* Read Products
    * All users can read/see products added to the website
* Add Products to cart
    * All users can add products to their cart
* Remove Products from cart
    * All users can remove products from their cart
* Create Products
    * Admin users can add products to the website
* Delete Products
    * Admin users can delete products from the website
* Checkout
    * Simulated checkout success - no API is integrated as of now.
* Order History
    * Cart items that have gone through checkout are marked as paid.
    * Paid items are added to the Order History page.

### Getting Started:

trello: https://trello.com/b/yJjVbyYQ/e-commerce-app

gitHub: https://github.com/anjoo91/e-commerce-app


### ScreenShots:

##### Home Page:

![Home Page](https://i.postimg.cc/wBKdC3Z2/landing-page-mern.png "Landing Page")

##### Products Page (Admin):

![Admin Products Page](https://i.postimg.cc/05t18Vhb/products-page-mern.png "Admin Products Page")

##### Products Page (Non-Admin):

![Non-Admin Product Page](https://i.postimg.cc/jjTF6fBp/products-not-admin-page-mern.png "Non-Admin Products Page")

##### Product Detail Page (Admin):

![Product Detail Page](https://i.postimg.cc/3xYqmpsP/products-detail-page-mern.png "Product Detail Page")

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
