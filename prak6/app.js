const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const ProductRouter = require('./routes/products');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger);


app.use('/products', ProductRouter);



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
