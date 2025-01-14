"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuestions = void 0;
// import question model
const Question_js_1 = __importDefault(require("../models/Question.js"));
// gets a set of random questions
const getRandomQuestions = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Question_js_1.default.aggregate([
            { $sample: { size: 10 } },
            { $project: { __v: 0 } }
        ]);
        res.status(200).json(questions);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getRandomQuestions = getRandomQuestions;
