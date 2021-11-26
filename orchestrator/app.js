const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
