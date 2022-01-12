"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = __importDefault(require("path"));
const fastify_autoload_1 = __importDefault(require("fastify-autoload"));
const app = async (fastify, opts) => {
    fastify.register(fastify_autoload_1.default, {
        dir: path_1.default.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    });
    fastify.register(fastify_autoload_1.default, {
        dir: path_1.default.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    });
};
exports.app = app;
exports.default = app;
//# sourceMappingURL=app.js.map