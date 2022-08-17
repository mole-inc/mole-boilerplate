import commandExists from 'command-exists'
import { existsSync, copySync, exists } from 'fs-extra'
import { resolve } from 'path'
import cac from 'cac'
import { prompt } from 'inquirer'
import { prompts, promptsType } from './prompts'
import { choices } from './enums'
import { cwd } from 'process'
import {
  logSuccessMkDir,
  logForLanding,
  logForWordpress,
  errorDirectoryExists,
  logForJamstack,
  errorPleaseInstallFirebaseTools,
} from './logs'

const cli = cac()

cli.command('[dirName]', '').action(async () => {
  const { projectName, purpose } = await prompt(prompts).then(
    ({ projectName, purpose }: promptsType) => {
      return { projectName, purpose }
    }
  )
  const cwdDir = cwd()
  const upLevelDir = resolve(__dirname, `..`)
  const targetDir = resolve(cwdDir, projectName)
  const templateDir = resolve(upLevelDir, `templates/${purpose}`)

  if (existsSync(targetDir)) {
    errorDirectoryExists()
    return
  }

  // const isFirebaseToolsExists = await commandExists(`firebase`).catch(
  //   () => false
  // )
  // if (!isFirebaseToolsExists) {
  //   errorPleaseInstallFirebaseTools()
  //   return
  // }

  copySync(templateDir, targetDir)
  logSuccessMkDir(projectName)

  switch (purpose) {
    case choices.LP:
      logForLanding(projectName)
      break
    case choices.WP:
      logForWordpress(projectName)
      break
    case choices.JS:
      logForJamstack(projectName)
  }
})
cli.help()
cli.parse()
