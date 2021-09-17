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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var cac_1 = __importDefault(require("cac"));
var inquirer_1 = require("inquirer");
var chalk_1 = __importDefault(require("chalk"));
var prompts_1 = require("./prompts");
var enums_1 = require("./enums");
var process_1 = require("process");
var cli = (0, cac_1.default)();
cli.command('[dirName]', '').action(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, projectName, size, cwdDir, upLevelDir, targetDir, templateDir;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, inquirer_1.prompt)(prompts_1.prompts).then(function (_a) {
                    var projectName = _a.projectName, size = _a.size;
                    return { projectName: projectName, size: size };
                })];
            case 1:
                _a = _b.sent(), projectName = _a.projectName, size = _a.size;
                cwdDir = (0, process_1.cwd)();
                upLevelDir = (0, path_1.resolve)(__dirname, '..');
                targetDir = (0, path_1.resolve)(cwdDir, projectName);
                templateDir = (0, path_1.resolve)(upLevelDir, "templates/" + size);
                if ((0, fs_extra_1.existsSync)(targetDir)) {
                    console.log("");
                    console.error(chalk_1.default.bgRed.black("Error") + ": \u65E2\u306B\u540C\u540D\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u5B58\u5728\u3057\u307E\u3059\u3002");
                    console.log("");
                    return [2 /*return*/];
                }
                if (size === enums_1.choices.LP) {
                    (0, fs_extra_1.copySync)(templateDir, targetDir);
                    return [2 /*return*/];
                }
                if (size === enums_1.choices.WP) {
                    (0, fs_extra_1.copySync)(templateDir, targetDir);
                    return [2 /*return*/];
                }
                console.log("");
                console.log("");
                console.log("\uD83C\uDF86" + chalk_1.default.bgBlack.green("Success") + ": " + projectName + "\u30D5\u30A9\u30EB\u30C0\u306E\u4F5C\u6210\u306B\u6210\u529F\u3057\u307E\u3057\u305F\uFF01\uD83C\uDF86");
                console.log("");
                console.log("\uD83D\uDE80\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5B9F\u88C5\u958B\u59CB\uD83D\uDE80");
                console.log(chalk_1.default.bgBlack.green(1) + ": " + chalk_1.default.white("cd " + projectName));
                console.log(chalk_1.default.bgBlack.green(2) + ": " + chalk_1.default.white("pnpm install"));
                console.log(chalk_1.default.bgBlack.green(3) + ": " + chalk_1.default.white("pnpm run dev"));
                console.log("");
                return [2 /*return*/];
        }
    });
}); });
cli.help();
cli.parse();
