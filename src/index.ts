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
    return
  }
  if (size === choices.WP) {
    copySync(templateDir, targetDir)
    return
  }
  console.log(``)
  console.log(``)
  console.log(
    `🎆${chalk.bgBlack.green(
      `Success`
    )}: ${projectName}フォルダの作成に成功しました！🎆`
  )
  console.log(``)
  console.log(`🚀以下のコマンドで実装開始🚀`)
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
})
cli.help()
cli.parse()
