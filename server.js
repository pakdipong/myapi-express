const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const products = [
    {
        "id": 1,
        "name": "Coke",
        "price": "30 THB"
    },
    {
        "id": 2,
        "name": "Pepsi",
        "price": "30 THB"
    },
    {
        "id": 3,
        "name": "Beer",
        "price": "59 THB"
    }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    res.json(product);
});

app.post('/products', (req, res) => {
    products.push(req.body)
    res.json(products);
});

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    res.json(products);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});