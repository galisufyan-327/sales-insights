import express, { Application } from 'express';
import dotenv from 'dotenv';
import routes from './routes/sales.route';
import errorHandler from './middleware/errorHandler.middleware';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is Fire at https://localhost:${port}`);
});
