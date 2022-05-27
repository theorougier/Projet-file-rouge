const express = require('express');

const app = express();
// Init Middleware
app.use(express.json({ extended: false }));

// Test route
app.get('/ping', (req, res) => {
    res.json('pong');
  });

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
