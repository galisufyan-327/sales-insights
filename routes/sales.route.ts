import express from 'express';
import SalesController from '../controller/sales.controller';
import SalesService from '../manager/sales.manager';

const router = express.Router();

// POST /api/sales/insights
router.post('/sales/insights', SalesService.validateSalesData, SalesController.getSalesInsights);

export default router;
