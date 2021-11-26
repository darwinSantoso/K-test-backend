/**
 * npx sequelize model:generate --name Product --attributes name:string,price:integer,qty:integer
 *
 * npx sequelize model:generate --name Transaction --attributes user_id:string,product_id:integer,amount:integer,status:string
 *
 * npx sequelize model:generate --name Payment --attributes order_id:integer,status:string,amount:integer
 */

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 4001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
