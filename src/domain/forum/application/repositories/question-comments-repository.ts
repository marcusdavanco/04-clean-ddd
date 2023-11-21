import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  create(question: QuestionComment): Promise<void>
  delete(questionComment: QuestionComment): Promise<void>
}
