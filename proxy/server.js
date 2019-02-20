const express = require('express');

const app = express();

const port = 3030;

app.use('/product/:productId', express.static(`${__dirname}/./public`))


app.listen(port, () => console.log(`serving is running at port ${port}`))