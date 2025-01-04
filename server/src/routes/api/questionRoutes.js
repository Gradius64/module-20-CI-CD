"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const questionController_js_1 = require("../../controllers/questionController.js");
router.route('/random').get(questionController_js_1.getRandomQuestions);
exports.default = router;
