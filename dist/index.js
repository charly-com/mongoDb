"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const todoRoute_1 = __importDefault(require("./routes/todoRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.Database_Url, () => {
    console.log("Database connected");
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/todo', todoRoute_1.default);
const Port = 6000;
app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
});
