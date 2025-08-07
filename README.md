# README.md

# Coffee Shop App

Welcome to the Coffee Shop App! This application is designed to manage sales and products in a coffee shop environment. 

## Features

- Manage products with details such as name and price.
- Record sales transactions and calculate total amounts.
- RESTful API for sales operations.

## Project Structure

```
coffee-shop-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── models
│   │   ├── Product.js       # Product model
│   │   └── Sale.js          # Sale model
│   ├── routes
│   │   └── salesRoutes.js    # Routes for sales operations
│   └── services
│       └── salesService.js   # Business logic for sales
├── tests
│   ├── product.test.js      # Unit tests for Product model
│   ├── sale.test.js         # Unit tests for Sale model
│   └── salesService.test.js  # Unit tests for salesService
├── Jenkinsfile              # Jenkins configuration for CI/CD
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/coffee-shop-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd coffee-shop-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Usage

You can interact with the API using tools like Postman or curl. The available endpoints are defined in the `salesRoutes.js` file.

## Running Tests

To run the unit tests, use the following command:
```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.