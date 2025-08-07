class Sale {
    constructor(id, productId, quantity) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
    }

    calculateTotal(price) {
        return price * this.quantity;
    }
}

module.exports = Sale;