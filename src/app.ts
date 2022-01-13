import express from 'express';
import path from 'path';

import indexRouter from './routes/index';

const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// router setup
app.use('/', indexRouter());

const port = '3000';
app.set('port', port);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


