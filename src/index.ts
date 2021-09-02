import * as fs from 'fs'
import cac from 'cac'
import { prompt } from 'inquirer'
import chalk from 'chalk'

const cli = cac()

cli.command('[dirName]', '').action(async () => {
  prompt([
    {
      name: 'projectName',
      message: 'プロジェクト名を入力してください。',
      default: 'cl-xxxx',
    },
    {
      type: 'list',
      name: 'size',
      message: 'どういった案件ですか？',
      choices: ['lp', 'wordpress'],
    },
  ]).then(({ projectName, size }) => {
    fs.mkdir(projectName, (error) => {
      if (error) {
        console.error(chalk.red('既に同名のディレクトリが存在します。'))
        return
      }
    })
  })
})

cli.help()
cli.parse()
