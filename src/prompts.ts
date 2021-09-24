import { defaultProjectName, choices } from './enums'

export type promptsType = {
  projectName: string
  size: string
}

export const prompts = [
  {
    name: 'projectName',
    message: 'プロジェクト名を入力してください。',
    default: defaultProjectName,
  },
  {
    type: 'list',
    name: 'size',
    message: 'どのような案件ですか？',
    choices: [choices.LP, choices.WP],
  },
]
