const Sale = require('../models/Sale');
const Product = require('../models/Product');

class SalesService {
    constructor() {
        this.sales = [];
    }

    processSale(saleData) {
        const sale = new Sale(this.sales.length + 1, saleData.productId, saleData.quantity);
        this.sales.push(sale);
        return {
            id: sale.id,
            productId: sale.productId,
            quantity: sale.quantity
        };
    }

    getSalesReport() {
        return this.sales.map(sale => ({
            id: sale.id,
            productId: sale.productId,
            quantity: sale.quantity,
            totalAmount: sale.calculateTotalAmount()
        }));
    }

    calculateTotal(salesData) {
        return salesData.reduce((total, sale) => {
            const saleObj = new Sale(sale.id, sale.productId, sale.quantity);
            return total + saleObj.calculateTotalAmount();
        }, 0);
    }
}

module.exports = new SalesService();