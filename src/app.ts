import express from 'express';
import createConnection from "./database";
import { router } from './router';

const app = express();
createConnection();
app.use(express.json());
app.use(router);

export { app };
