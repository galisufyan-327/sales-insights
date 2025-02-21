import { NextFunction, Request, Response } from "express";
import SalesService from "../manager/sales.manager";
import OpenAI from "../utilities/open-ai.util";

class SalesController {

  static async getSalesInsights(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(
        `[INFO] Processing sales insights at ${new Date().toISOString()}`
      );
      console.log(`[REQUEST BODY]:`, req.body);

      const insights = SalesService.processSalesData(req.body);
      console.log(`[INFO] Insights Computed:`, insights);

      const summary = await OpenAI.generateAISummary(insights);
      console.log(`[INFO] AI Summary Generated:`, summary);

      res.json({ insights, summary });
    } catch (error: any) {
      console.error(`[ERROR] Failed to process insights: ${error.message}`);
      next(error);
    }
  }
}

export default SalesController;
