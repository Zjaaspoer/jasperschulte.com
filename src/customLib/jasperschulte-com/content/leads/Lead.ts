import { QuestionAnswer } from '../commonQuestions.js'

export interface Lead {
  readonly companyContext: string
  readonly files: { readonly description: string; readonly url: string }[]
  readonly leadContext: string
  readonly name: string
  readonly notes: string[]
  readonly questionAnswers: QuestionAnswer[]
  readonly todos: (
    | { readonly contextForAnswer?: string; readonly description: string; readonly type: 'questionAnswer' }
    | { readonly description: string; readonly type: 'generic' | 'uncategorized' }
  )[]
  readonly url: string
}
