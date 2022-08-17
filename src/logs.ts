import chalk from 'chalk'

type projectName = string

const errorDirectoryExists = () => {
  console.log(``)
  console.error(
    `${chalk.bgRed.black(`Error`)}: 既に同名のディレクトリが存在します。`
  )
  console.log(``)
}

const errorPleaseInstallFirebaseTools = () => {
  console.log(``)
  console.log(``)
  console.log(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`)
  console.log(``)
  console.error(
    `${chalk.bgRed.black(`Error`)}: firebase-toolsのインストールが必要です。`
  )
  console.log(``)
  console.log(
    `${chalk.bgBlack.green('実行してください👉')}: ${chalk.white(
      `pnpm install -g firebase-tools`
    )}`
  )
  console.log(``)
  console.log(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`)
  console.log(``)
  console.log(``)
}

const logSuccessMkDir = (projectName: projectName) => {
  console.log(``)
  console.log(``)
  console.log(
    `🎆${chalk.bgBlack.green(
      `Success`
    )}: ${projectName}フォルダの作成に成功しました！🎆`
  )
}

const logForLanding = (projectName: projectName) => {
  console.log(``)
  console.log(`🚀🚀🚀---以下のコマンドで実装開始---🚀🚀🚀`)
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
}

const logForWordpress = (projectName: projectName) => {
  console.log(``)
  console.log(`⚠Docker Desktopをインストールの上⚠`)
  console.log(
    `${chalk.underline.cyan(`https://www.docker.com/products/docker-desktop`)}`
  )
  console.log(``)
  console.log(`🚀🚀🚀---以下のコマンドで実装開始---🚀🚀🚀`)
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run start`)}`)
  console.log(`${chalk.bgBlack.green(4)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
  console.log(
    `${chalk.bgBlack.green('URL')}: ${chalk.white(
      `http://localhost:3001/wp-admin`
    )}`
  )
  console.log(`${chalk.bgBlack.green('ID')}: ${chalk.white(`admin`)}`)
  console.log(`${chalk.bgBlack.green('PW')}: ${chalk.white(`password`)}`)
  console.log(``)
}

const logForJamstack = (projectName: projectName) => {
  console.log(``)
  console.log(`⚠Docker Desktopをインストールの上⚠`)
  console.log(
    `${chalk.underline.cyan(`https://www.docker.com/products/docker-desktop`)}`
  )
  console.log(``)
  console.log(`🚀🚀🚀---以下のコマンドで実装開始---🚀🚀🚀`)
  console.log(
    `${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}/api`)}`
  )
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run start`)}`)
  console.log(`${chalk.bgBlack.green(4)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
  console.log(`以下からWordPressにログインできます。`)
  console.log(
    `${chalk.bgBlack.green('URL')}: ${chalk.white(
      `http://localhost:3001/wp-admin`
    )}`
  )
  console.log(`${chalk.bgBlack.green('ID')}: ${chalk.white(`admin`)}`)
  console.log(`${chalk.bgBlack.green('PW')}: ${chalk.white(`password`)}`)
  console.log(``)
  console.log(`以下からエンドポイントにアクセスできます。`)
  console.log(
    `${chalk.bgBlack.green('URL')}: ${chalk.white(
      `http://localhost:3001?rest_route=/wp/v2/`
    )}`
  )
  console.log(``)
  console.log(`パーマリンク設定を変更している場合は以下から`)
  console.log(
    `${chalk.bgBlack.green('URL')}: ${chalk.white(
      `http://localhost:3001/wp-json/wp/v2`
    )}`
  )
  console.log(``)
}

export {
  errorDirectoryExists,
  errorPleaseInstallFirebaseTools,
  logSuccessMkDir,
  logForLanding,
  logForWordpress,
  logForJamstack,
}
