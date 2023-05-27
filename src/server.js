import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { trainsRouter } from './routes/trainsRouter.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/trains', trainsRouter);

app.listen(PORT);
