"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("react-dom/client"));
require("bootstrap/dist/css/bootstrap.min.css");
const App_js_1 = __importDefault(require("./App.js"));
client_1.default.createRoot(document.getElementById('root')).render(<App_js_1.default />);