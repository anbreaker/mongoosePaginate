const express = require('express');
const app = express();

const productRoutes = require('./routes/routesProducts');

require('./database');

// Middlewares
app.use(express.json());

app.use(productRoutes);

const port = 3000;
app.listen(port);
console.log(`Server on Port: http://localhost:${port}`);
