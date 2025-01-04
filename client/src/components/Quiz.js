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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const questionApi_js_1 = require("../services/questionApi.js");
const Quiz = () => {
    const [questions, setQuestions] = (0, react_1.useState)([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, react_1.useState)(0);
    const [score, setScore] = (0, react_1.useState)(0);
    const [quizCompleted, setQuizCompleted] = (0, react_1.useState)(false);
    const [quizStarted, setQuizStarted] = (0, react_1.useState)(false);
    const getRandomQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const questions = yield (0, questionApi_js_1.getQuestions)();
            if (!questions) {
                throw new Error('something went wrong!');
            }
            setQuestions(questions);
        }
        catch (err) {
            console.error(err);
        }
    });
    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        }
        else {
            setQuizCompleted(true);
        }
    };
    const handleStartQuiz = () => __awaiter(void 0, void 0, void 0, function* () {
        yield getRandomQuestions();
        setQuizStarted(true);
        setQuizCompleted(false);
        setScore(0);
        setCurrentQuestionIndex(0);
    });
    if (!quizStarted) {
        return (<div className="p-4 text-center">
        <button className="btn btn-primary d-inline-block mx-auto" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>);
    }
    if (quizCompleted) {
        return (<div className="card p-4 text-center">
        <h2>Quiz Completed</h2>
        <div className="alert alert-success">
          Your score: {score}/{questions.length}
        </div>
        <button className="btn btn-primary d-inline-block mx-auto" onClick={handleStartQuiz}>
          Take New Quiz
        </button>
      </div>);
    }
    if (questions.length === 0) {
        return (<div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>);
    }
    const currentQuestion = questions[currentQuestionIndex];
    return (<div className='card p-4'>
      <h2>{currentQuestion.question}</h2>
      <div className="mt-3">
      {currentQuestion.answers.map((answer, index) => (<div key={index} className="d-flex align-items-center mb-2">
          <button className="btn btn-primary" onClick={() => handleAnswerClick(answer.isCorrect)}>{index + 1}</button>
          <div className="alert alert-secondary mb-0 ms-2 flex-grow-1">{answer.text}</div>
        </div>))}
      </div>
    </div>);
};
exports.default = Quiz;
