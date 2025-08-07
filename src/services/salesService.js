const Sale = require('../models/Sale');
const Product = require('../models/Product');

class SalesService {
    constructor() {
        this.sales = [];
    }

    processSale(productId, quantity) {
        const product = new Product(productId); // Assuming Product constructor takes an ID and fetches details
        const sale = new Sale(this.sales.length + 1, productId, quantity);
        this.sales.push(sale);
        return sale;
    }

    getSalesReport() {
        return this.sales.map(sale => ({
            id: sale.id,
            productId: sale.productId,
            quantity: sale.quantity,
            totalAmount: sale.calculateTotalAmount() // Assuming Sale has a method to calculate total amount
        }));
    }
}

module.exports = new SalesService();