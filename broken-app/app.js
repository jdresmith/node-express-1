const express = require('express');
const axios = require('axios');
const bodyParser  = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', async (req, res) => {
  try {
    const { developers } = req.body;
    const developerInfo = [];

    await Promise.all(developers.map(async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const { name, bio} = response.data;
      developerInfo.push({name, bio});
    }));

    res.json(developerInfo);
  } catch (error) {
    console.error('Error fetching developer information:', error.message);
    res.status(500).json({ error: 'Internal server error'});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

