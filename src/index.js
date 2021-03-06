import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';

import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Call to public folder
app.use(express.static(__dirname + '/public'));

// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Config handlebars
const handlebars = create({
  extname: '.hbs'
});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/resource/views/');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  const body = req.body;
  console.log(body);

  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});