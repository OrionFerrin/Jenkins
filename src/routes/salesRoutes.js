// salesRoutes.js

const express = require('express');
const salesService = require('../services/salesService');

const router = express.Router();

// Route to create a sale
router.post('/sales', async (req, res) => {
    try {
        const saleData = req.body;
        const newSale = await salesService.createSale(saleData);
        res.status(201).json(newSale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to retrieve all sales
router.get('/sales', async (req, res) => {
    try {
        const sales = await salesService.getAllSales();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;