const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const conn = mysql.createConnection({host:'localhost', user:'kullanici', password:'sifre', database:'veritabani'});

app.post('/add_person', (req, res) => {
  const { name, description, date, place, age, gender, status, detained_by, contact, notes, image_url } = req.body;
  conn.query('INSERT INTO missing_persons (name, description, date, place, age, gender, status, detained_by, contact, notes, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [name, description, date, place, age, gender, status, detained_by, contact, notes, image_url], (err) => {
    if (err) return res.status(500).send('Hata');
    res.send('Kayıt eklendi!');
  });
});

app.get('/list_persons', (req, res) => {
  conn.query('SELECT * FROM missing_persons ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).send('Hata');
    res.json(rows);
  });
});

app.listen(3000, () => console.log('Çalışıyor!')); 