import { defaultProjectName, choices } from './enums'

export type promptsType = {
  projectName: string
  purpose: string
}

export const prompts = [
  {
    name: 'projectName',
    message: 'プロジェクト名を入力してください。',
    default: defaultProjectName,
  },
  {
    type: 'list',
    name: 'purpose',
    message: 'どのような案件ですか？',
    choices: [choices.JS, choices.LP, choices.WP],
  },
]
