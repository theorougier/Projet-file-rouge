const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors())

// Connect DB
connectDB();


// Test route
app.get('/ping', (req, res) => {
    res.json('pong');
  });

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/facts', require('./routes/facts'));
app.use('/api/images', require('./routes/images'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
