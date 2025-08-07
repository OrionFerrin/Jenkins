const salesService = require('../src/services/salesService');

describe('Sales Service', () => {
    let mockSalesData;

    beforeEach(() => {
        mockSalesData = [
            { id: 1, productId: 1, quantity: 2 },
            { id: 2, productId: 2, quantity: 1 },
        ];
    });

    test('should process a sale correctly', () => {
        const sale = { productId: 1, quantity: 3 };
        const result = salesService.processSale(sale);
        expect(result).toHaveProperty('id');
        expect(result.productId).toBe(sale.productId);
        expect(result.quantity).toBe(sale.quantity);
    });

    test('should retrieve sales report', () => {
        const report = salesService.getSalesReport(mockSalesData);
        expect(report).toBeDefined();
        expect(report.length).toBe(mockSalesData.length);
    });

    test('should calculate total sales amount correctly', () => {
        const total = salesService.calculateTotal(mockSalesData);
        expect(total).toBeGreaterThan(0);
    });
});