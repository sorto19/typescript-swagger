"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/tasks', (req, res) => res.send('hello world'));
exports.default = router;
