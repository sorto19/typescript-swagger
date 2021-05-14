"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000); //nombre de variable port si no toma el port 3000
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(task_routes_1.default);
exports.default = app;
