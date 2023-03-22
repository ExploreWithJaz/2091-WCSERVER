const express = require('express');
const app = express();

//Array for GET Method
const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/', (req, res) => {
  res.send('Hello! Please enter dishes on the URL :)');
});

//get all dishes
app.get('/dishes', (req, res) => {
  res.send(dishes);
});

//get dishes by type
app.get('/dishes/:type', (req, res) => {
  const dish = dishes.find((h) => h.id === parseInt(req.params.id));
  if (!dish) return res.status(404).send('Record not found');
  res.send(dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));
