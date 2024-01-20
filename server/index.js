const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()

app.use(express.json())
app.use(cors())


const { getHouses } = require('./controller');

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.get(`/api/houses`, getHouses)



app.use(express.static(__dirname + '/static'));
app.listen(4000, () => console.log(`Server running on port 4000`))
