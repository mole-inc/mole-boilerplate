"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompts = void 0;
var enums_1 = require("./enums");
exports.prompts = [
    {
        name: 'projectName',
        message: 'プロジェクト名を入力してください。',
        default: enums_1.defaultProjectName,
    },
    {
        type: 'list',
        name: 'purpose',
        message: 'どのような案件ですか？',
        choices: [enums_1.choices.JS, enums_1.choices.LP, enums_1.choices.WP],
    },
];
