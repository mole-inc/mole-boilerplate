"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logForWordpress = exports.logForLanding = exports.logStartDevelopment = exports.logSuccessMkDir = void 0;
var chalk_1 = __importDefault(require("chalk"));
var logSuccessMkDir = function (projectName) {
    console.log("");
    console.log("");
    console.log("\uD83C\uDF86" + chalk_1.default.bgBlack.green("Success") + ": " + projectName + "\u30D5\u30A9\u30EB\u30C0\u306E\u4F5C\u6210\u306B\u6210\u529F\u3057\u307E\u3057\u305F\uFF01\uD83C\uDF86");
    console.log("");
};
exports.logSuccessMkDir = logSuccessMkDir;
var logStartDevelopment = function () {
    console.log("\uD83D\uDE80\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5B9F\u88C5\u958B\u59CB\uD83D\uDE80");
};
exports.logStartDevelopment = logStartDevelopment;
var logForLanding = function (projectName) {
    logStartDevelopment();
    console.log(chalk_1.default.bgBlack.green(1) + ": " + chalk_1.default.white("cd " + projectName));
    console.log(chalk_1.default.bgBlack.green(2) + ": " + chalk_1.default.white("pnpm install"));
    console.log(chalk_1.default.bgBlack.green(3) + ": " + chalk_1.default.white("pnpm run dev"));
    console.log("");
};
exports.logForLanding = logForLanding;
var logForWordpress = function (projectName) {
    console.log("\u26A0Docker Desktop\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u4E0A\u26A0");
    console.log("" + chalk_1.default.underline.cyan("https://www.docker.com/products/docker-desktop"));
    logStartDevelopment();
    console.log(chalk_1.default.bgBlack.green(1) + ": " + chalk_1.default.white("cd " + projectName));
    console.log(chalk_1.default.bgBlack.green(2) + ": " + chalk_1.default.white("pnpm install"));
    console.log(chalk_1.default.bgBlack.green(3) + ": " + chalk_1.default.white("pnpm run start"));
    console.log(chalk_1.default.bgBlack.green(4) + ": " + chalk_1.default.white("pnpm run dev"));
    console.log("");
};
exports.logForWordpress = logForWordpress;
