"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = __importDefault(require("./components/Quiz"));
function App() {
    return (<div className="App">
      <Quiz_1.default />
    </div>);
}
exports.default = App;
