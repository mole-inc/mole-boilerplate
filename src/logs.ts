import chalk from 'chalk'

type projectName = string

const logSuccessMkDir = (projectName: projectName) => {
  console.log(``)
  console.log(``)
  console.log(
    `🎆${chalk.bgBlack.green(
      `Success`
    )}: ${projectName}フォルダの作成に成功しました！🎆`
  )
  console.log(``)
}

const logStartDevelopment = () => {
  console.log(`🚀以下のコマンドで実装開始🚀`)
}

const logForLanding = (projectName: projectName) => {
  logStartDevelopment()
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
}

const logForWordpress = (projectName: projectName) => {
  console.log(`⚠Docker Desktopをインストールの上⚠`)
  console.log(
    `${chalk.underline.cyan(`https://www.docker.com/products/docker-desktop`)}`
  )
  logStartDevelopment()
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run start`)}`)
  console.log(`${chalk.bgBlack.green(4)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
}

export { logSuccessMkDir, logStartDevelopment, logForLanding, logForWordpress }