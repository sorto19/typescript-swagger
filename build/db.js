"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = exports.createConnection = void 0;
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
let db;
const createConnection = () => {
    const adapter = new FileSync_1.default('db.json');
    db = lowdb_1.default(adapter);
    db.defaults({ tasks: [] }).write();
};
exports.createConnection = createConnection;
const getConnection = () => db;
exports.getConnection = getConnection;
