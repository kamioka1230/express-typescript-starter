"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
const express_1 = __importDefault(require("express"));
function router(options = {}) {
    // @ts-ignore
    const router = new express_1.default.Router(options);
    return router
        .get('/', (req, res, next) => {
        res.render('index');
    });
}
