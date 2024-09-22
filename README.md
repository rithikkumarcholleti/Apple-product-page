Apple-Product-Page

Overview
The Apple Product Page is a responsive web application built using React and Redux. It showcases the iPhone 15, allowing users to view product details, add items to their favorites and cart, and navigate through a clean and modern interface.

Features
-->Product Details: Displays detailed information about the iPhone 15, including features, offers, and reviews.
-->Favorites & Cart Functionality: Users can add products to their favorites and cart, with real-time updates shown in the header.
-->Responsive Design: Optimized for various screen sizes, providing a seamless experience on desktops, tablets, and mobile devices.

Technologies Used
-->React: Frontend framework for building user interfaces.
-->Redux Toolkit: State management for handling cart and favorites.
-->CSS: Styling the application for a modern look.
-->React Router: For seamless navigation between pages.

Installation
To run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/yourusername/apple-product-page.git

Navigate into the project directory:
cd apple-product-page

Install dependencies:
npm install

Start the development server:
npm start

Open your browser and go to http://localhost:3000.

Usage
-->Browse the product details on the main page.
-->Click on "Add to Favorites" or "Add to Cart" buttons to add the product.
-->Check the favorites and cart icons in the header to see the number of items.
-->Click on the favorites or cart icon to view added items.

Screenshots
https://drive.google.com/drive/folders/1MD6aGJjXjAvPTbZF2M_DtsmfJ3ICz1BJ

Folder Structure
/apple-product-page
│
├── /public
│   └── index.html
│
├── /src
│   ├── /components
│   │   ├── Header.js
│   │   ├── ProductPage.js
│   │   ├── Cart.js
│   │   └── Favorites.js
│   ├── /data
│   │   └── productData.json
│   ├── /slices
│   │   └── productSlice.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── package.json
└── README.md
Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.
