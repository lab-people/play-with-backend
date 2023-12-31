"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const connect_1 = require("./config/connect");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./passport"));
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3005;
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
connect_1.AppDataSource.initialize();
(0, passport_2.default)(passport_1.default);
app.use(passport_1.default.initialize());
app.use((0, cors_1.default)(corsOptions));
(0, routes_1.default)(app);
app.get("/", (req, res) => {
    res.send("Hello, this is the root route!");
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
