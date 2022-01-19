import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
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

// error test router
app.use('/404', function(req, res, next) {
    next(createError(404));
});
app.use('/500', function(req, res, next) {
    next(createError(500));
});

// error handling
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    res.status(err.status || 500);
    res.render('error');
});


const port = '3000';
app.set('port', port);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


