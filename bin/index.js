"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var constants_1 = require("./constants");
var item_1 = __importDefault(require("./api-v1/item"));
// Instantiate the app
var app = express_1.default();
// Middleware
app.use(express_1.default.json());
// Set up routing
app.use("/api/v1/items", item_1.default);
// Start the app
app.listen(constants_1.PORT, function () {
    console.log("server listening on http://localhost:" + constants_1.PORT);
});
//# sourceMappingURL=index.js.map