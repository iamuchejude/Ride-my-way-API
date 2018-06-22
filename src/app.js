import express from 'express';
import router from './routes/rides';

const app = express();
app.use('api/v1', router);

module.export = app;
