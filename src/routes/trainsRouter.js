import express from 'express';
import * as trainsController from '../controllers/trainsConroller.js';

export const trainsRouter = express.Router();

trainsRouter.get('/', trainsController.getAvailableTrains);
