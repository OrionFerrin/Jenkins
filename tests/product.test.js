describe('Product Model', () => {
    const Product = require('../src/models/Product');

    let product;

    beforeEach(() => {
        product = new Product(1, 'Coffee', 2.5);
    });

    test('should create a product with correct properties', () => {
        expect(product.id).toBe(1);
        expect(product.name).toBe('Coffee');
        expect(product.price).toBe(2.5);
    });

    test('should return product details', () => {
        const details = product.getDetails();
        expect(details).toEqual({
            id: 1,
            name: 'Coffee',
            price: 2.5
        });
    });
});