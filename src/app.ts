import config from 'config';

import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

import indexRouter from './routes/index';

const app = express();

Object.assign(app.locals, {
  baseDir: path.resolve(config.view.directory),
  config: config,
})

// view engine setup
app.set('views', app.locals.baseDir);
app.set('view engine', config.view.engine);

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

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}`);
});


