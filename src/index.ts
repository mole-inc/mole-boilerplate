import { existsSync, copySync } from 'fs-extra'
import { resolve, dirname, join, relative } from 'path'
import cac from 'cac'
import { prompt } from 'inquirer'
import chalk from 'chalk'
import { prompts, promptsType } from './prompts'
import { choices } from './enums'
import { cwd } from 'process'
import { logSuccessMkDir, logForLanding, logForWordpress } from './logs'

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

  logSuccessMkDir(projectName)

  if (size === choices.LP) {
    copySync(templateDir, targetDir)
    logForLanding(projectName)
    return
  }
  if (size === choices.WP) {
    copySync(templateDir, targetDir)
    logForWordpress(projectName)
    return
  }
})
cli.help()
cli.parse()
