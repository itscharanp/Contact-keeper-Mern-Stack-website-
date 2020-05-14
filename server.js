const express = require('express');
//const connectDB = require('./config/db');

const app = express();

//connect DB
//connectDB();

app.get('/', (req, res) =>
  res.send({ msg: 'Welcome to the Contact Kepeer API' })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
