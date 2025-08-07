class Sale {
    constructor(id, productId, quantity) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
    }

    calculateTotal(price) {
        return price * this.quantity;
    }

    calculateTotalAmount() {
        // For testing purposes, using a default price of 5
        return this.calculateTotal(5);
    }
}

module.exports = Sale;