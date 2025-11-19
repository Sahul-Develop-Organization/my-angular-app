//server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const USERS_FILE = './users.json';

app.use(cors());
app.use(bodyParser.json());
// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello Folks, This message is from the Express server!' });
});

// recieving data from the Angular client
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  // Read existing users
  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  }

  // Check if user already exists
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  // Add new user
  users.push({ name, email, password });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.json({ message: 'Registration successful!' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// starting the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
