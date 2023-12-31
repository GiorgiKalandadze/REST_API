const express = require('express');
const app = express();
const router = require('./src/routes');

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
