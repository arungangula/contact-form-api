const express = require('express');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes')

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;

// To Parse Json
app.use(express.json());

app.use('/contact', contactRoutes);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});




