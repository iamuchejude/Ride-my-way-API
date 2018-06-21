import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Working well and fine');
});

module.export = app;
