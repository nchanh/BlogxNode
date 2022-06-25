import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';

const app = express();
const port = 3000;

// HTTP Logger
app.use(morgan('combined'));

// Config handlebars
const handlebars = create({
  extname: '.hbs'
});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', './src/resource/views/');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});