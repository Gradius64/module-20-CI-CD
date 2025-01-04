"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const vite_config_1 = __importDefault(require("./vite.config"));
exports.default = (0, cypress_1.defineConfig)({
    component: {
        port: 5173,
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: vite_config_1.default,
        },
    },
    e2e: {
        baseUrl: 'http://localhost:3001',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
