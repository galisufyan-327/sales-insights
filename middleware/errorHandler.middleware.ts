import { Request, Response, NextFunction } from 'express';

// The errorHandler middleware is a function that takes four parameters: err, req, res, and next. 
// It logs the error to the console and sends a 500 status code with a JSON response containing the error message 'Internal Server Error'.
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Unexpected error happened", err.stack);
    if ((err as any).response) {
        console.log(err.response.data);
        res.status(500).json({ error: err.response.data });
        return;
    }

    res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;