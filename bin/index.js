"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./constants");
var app = express_1.default();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(constants_1.PORT, function () {
    console.log("server listening on http://localhost:" + constants_1.PORT);
});
exports.default = app;
//# sourceMappingURL=index.js.map