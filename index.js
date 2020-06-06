const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send({
        welcome : 'To be continued...'
    })
});

app.get('/hello/:name', (req, res) => {

    const {name} = req.params;       
    res.send({
        message : `Hello ${name}`
    })
});

app.get('/health', (req, res) => {

    res.status(200); 
    res.send({
        message : `checked`
    })
});

app.listen(3000, () => console.log(`Running at port ${3000}`));