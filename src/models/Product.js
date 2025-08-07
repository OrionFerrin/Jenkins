class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            price: this.price
        };
    }
}

module.exports = Product;