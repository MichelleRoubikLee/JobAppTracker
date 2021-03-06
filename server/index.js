const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors');

// const books = require('./routes/books');


connectDB();

app.use(cors());
app.use(express.json());
// app.use('/api/books', books);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});