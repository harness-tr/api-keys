const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
app.use(express.json());

let apiKeys = {};

// Endpoint to generate an API key
app.post('/generate-key', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send('Name and email are required');
  const key = uuidv4();
  apiKeys[key] = { name, email, createdAt: new Date() };
  res.json({ api_key: key });
});

// Endpoint that requires an API key
app.get('/data', (req, res) => {
  const key = req.headers['x-api-key'];
  if (!key || !apiKeys[key]) return res.status(401).send('Unauthorized');
  res.json({ message: 'Hello, authenticated user!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
