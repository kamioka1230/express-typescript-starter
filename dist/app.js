"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');
app.use('/static', express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// router setup
app.use('/', (0, index_1.default)());
const port = '3000';
app.set('port', port);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
