import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import router from './routes/rides';

env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('api/v1', router);

const server = app.listen(port);

export default app;
exports.server = server;
