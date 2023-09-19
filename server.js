const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.post('/bfhl', (req, res) => {
try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      throw new Error('Invalid request format. The "data" field must be an array.');
    }
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highest_alphabet = alphabets.sort()[alphabets.length - 1];
    const response = {
      is_success: true,
      user_id: 'Ayush',
      email: 'ayush.maheshwari2020@vitbhopal.ac.in',
      roll_number: '20BCE10719',
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: [highest_alphabet],
    };
    res.send(response);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).send({ error: error.message });
  }
});

app.get('/bfhl', (req, res) => {
  try {
    const response = {
      operation_code: 1,
    };
    res.send(response);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send({ error: 'Internal server error.' });
  }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });