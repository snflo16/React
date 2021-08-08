const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '이혜은1',
            'birthday': '9806121',
            'gender': '여자1',
            'job': '백수1'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이혜은2',
            'birthday': '9806122',
            'gender': '여자2',
            'job': '백수2'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이혜은3',
            'birthday': '9806123',
            'gender': '여자3',
            'job': '백수3'
        },
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));