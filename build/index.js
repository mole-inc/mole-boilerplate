var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { existsSync, copySync } from 'fs-extra';
import { resolve } from 'path';
import cac from 'cac';
import { prompt } from 'inquirer';
import chalk from 'chalk';
import { prompts } from './prompts';
import { choices } from './enums';
const cli = cac();
cli.command('[dirName]', '').action(() => __awaiter(void 0, void 0, void 0, function* () {
    const { projectName, size } = yield prompt(prompts).then(({ projectName, size }) => {
        return { projectName, size };
    });
    const upLevelDir = resolve(__dirname, '..');
    const targetDir = resolve(upLevelDir, projectName);
    const templateDir = resolve(upLevelDir, `templates/${size}`);
    if (existsSync(targetDir)) {
        console.log(``);
        console.error(`${chalk.bgRed.black(`Error`)}: 既に同名のディレクトリが存在します。`);
        console.log(``);
        return;
    }
    if (size === choices.LP) {
        copySync(templateDir, targetDir);
        console.log(``);
        console.log(``);
        console.log(`🎆${chalk.bgBlack.green(`Success`)}: ${projectName}フォルダの作成に成功しました！🎆`);
        console.log(``);
        console.log(`🚀以下のコマンドで実装開始🚀`);
        console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`);
        console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`);
        console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`);
        console.log(``);
        return;
    }
    if (size === choices.WP) {
        copySync(templateDir, targetDir);
        return;
    }
}));
cli.help();
cli.parse();
