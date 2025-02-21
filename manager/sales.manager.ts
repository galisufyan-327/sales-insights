import { NextFunction, Request, Response } from "express";
import { salesSchema } from "../schemas/sales.schema";

class SalesService {
  // The processSalesData method takes an array of sales objects and returns an object with the total sales per category and the best performing category.
  // The total sales per category is calculated by summing the amount for each category.
  // The best performing category is the category with the highest total sales.
  // If the sales array is empty, the method returns an object with an empty totalSalesPerCategory object and a null bestPerformingCategory.
  static processSalesData(sales: any[]) {
    if (!sales.length) {
      return {
        totalSalesPerCategory: {},
        bestPerformingCategory: null,
        overallRevenue: 0,
        averageSale: 0,
        salesVolume: 0,
      };
    }

    const volume = sales.length;
    let overallRevenue = 0;
    const amounts: number[] = [];
    const categorySales: Record<string, number> = {};

    sales.forEach(({ category, amount }) => {
      overallRevenue += amount;
      amounts.push(amount);

      categorySales[category] = (categorySales[category] || 0) + amount;
    });

    // Average sale per transaction
    const averageSale = overallRevenue / volume;

    // Best performing category based on total sales
    const bestPerformingCategory = Object.keys(categorySales).reduce(
      (a, b) => (categorySales[a] > categorySales[b] ? a : b),
      Object.keys(categorySales)[0]
    );

    return {
      totalSalesPerCategory: categorySales,
      bestPerformingCategory,
      overallRevenue,
      averageSale,
      salesVolume: volume,
    };
  }

  // The validateSalesData middleware validates the request body against the sales schema.
  // If the request body is invalid, the middleware sends a 400 status code with a JSON response containing the detailed errors.
  static validateSalesData(req: Request, res: Response, next: NextFunction) {
    const { error } = salesSchema.validate(req.body);
    if (error) {
      const detailedErrors = error?.details?.map((detail) => detail?.message);
      res.status(400).json({ errors: detailedErrors });
      return;
    }
    next();
  }
}

export default SalesService;
