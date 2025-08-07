describe('Sale Model', () => {
    let Sale;

    beforeEach(() => {
        Sale = require('../src/models/Sale'); // Adjust the path as necessary
    });

    test('should calculate total amount correctly', () => {
        const sale = new Sale(1, 1, 2); // id, productId, quantity
        const productPrice = 5; // Assuming a product price for testing
        const totalAmount = sale.calculateTotal(productPrice);
        expect(totalAmount).toBe(10); // 5 * 2
    });

    test('should have correct properties', () => {
        const sale = new Sale(1, 1, 3);
        expect(sale.id).toBe(1);
        expect(sale.productId).toBe(1);
        expect(sale.quantity).toBe(3);
    });
});