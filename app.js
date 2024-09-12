const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/hello', (req, res) => {
    const language = req.query.language || 'English';
    const text = req.query.text || 'Hello';

    let convertedText;

    if (text.toLowerCase() === 'hello') {
        switch (language) {
            case 'French':
                convertedText = "Bonjour le monde";
                break;
            case 'Hindi':
                convertedText = "Namastey sansar";
                break;
            default:
                convertedText = "Hello world";
        }
    } else {
        convertedText = `No translation available for '${text}'`;
    }

    res.json({ message: convertedText });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
