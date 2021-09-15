import { existsSync, copySync } from 'fs-extra'
import { resolve, dirname, join, relative } from 'path'
import cac from 'cac'
import { prompt } from 'inquirer'
import chalk from 'chalk'
import { prompts, promptsType } from './prompts'
import { choices } from './enums'
import { cwd } from 'process'

const cli = cac()

cli.command('[dirName]', '').action(async () => {
  const { projectName, size } = await prompt(prompts).then(
    ({ projectName, size }: promptsType) => {
      return { projectName, size }
    }
  )
  const cwdDir = cwd()
  const upLevelDir = resolve(__dirname, '..')
  const targetDir = resolve(cwdDir, projectName)
  const templateDir = resolve(upLevelDir, `templates/${size}`)

  /*
  debug - target: H:\.pnpm-store\v3\tmp\_npx\27164\5\node_modules\.pnpm\github.com+xaxaxixd+lasso@9d81f05451151e3842845964ab56a1a30ab19a26\node_modules\lasso\cl-xxxx
  debug - template: H:\.pnpm-store\v3\tmp\_npx\27164\5\node_modules\.pnpm\github.com+xaxaxixd+lasso@9d81f05451151e3842845964ab56a1a30ab19a26\node_modules\lasso\templates\landing
  */
  console.log(`debug - dirname: ${__dirname}`)
  console.log(`debug - cwd: ${cwd()}`)
  console.log(`debug - target: ${targetDir}`)
  console.log(`debug - template: ${templateDir}`)

  if (existsSync(targetDir)) {
    console.log(``)
    console.error(
      `${chalk.bgRed.black(`Error`)}: 既に同名のディレクトリが存在します。`
    )
    console.log(``)
    return
  }
  if (size === choices.LP) {
    copySync(templateDir, targetDir)
    console.log(``)
    console.log(``)
    console.log(
      `🎆${chalk.bgBlack.green(
        `Success`
      )}: ${projectName}フォルダの作成に成功しました！🎆`
    )
    console.log(``)
    console.log(`🚀以下のコマンドで実装開始🚀`)
    console.log(
      `${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`
    )
    console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
    console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`)
    console.log(``)
    return
  }
  if (size === choices.WP) {
    copySync(templateDir, targetDir)
    return
  }
})
cli.help()
cli.parse()
