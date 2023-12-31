"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = require("./Test");
const router = (0, express_1.Router)();
router.get("/", Test_1.getTest);
exports.default = router;
