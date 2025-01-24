const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Save to database or send via email (optional)
    console.log(`New message from ${name} (${email}): ${message}`);
    res.json({ message: 'Thank you for your message!' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
