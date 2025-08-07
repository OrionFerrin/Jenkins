const salesService = require('../src/services/salesService');

describe('Sales Service', () => {
    let mockSalesData;

    beforeEach(() => {
        // Clear sales array before each test
        salesService.sales = [];
        mockSalesData = [
            { id: 1, productId: 1, quantity: 2 },
            { id: 2, productId: 2, quantity: 1 },
        ];
    });

    test('should process a sale correctly', () => {
        const saleData = { productId: 1, quantity: 3 };
        const result = salesService.processSale(saleData);
        expect(result).toHaveProperty('id');
        expect(result.productId).toBe(saleData.productId);
        expect(result.quantity).toBe(saleData.quantity);
    });

    test('should retrieve sales report', () => {
        mockSalesData.forEach(sale => salesService.processSale(sale));
        const report = salesService.getSalesReport();
        expect(report).toBeDefined();
        expect(report.length).toBe(mockSalesData.length);
        expect(report[0]).toHaveProperty('totalAmount');
    });

    test('should calculate total sales amount correctly', () => {
        const total = salesService.calculateTotal(mockSalesData);
        expect(total).toBe(15); // With default price of 5: (2*5) + (1*5) = 15
    });
});