import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteQuestionCommentUseCaseResponse {}

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest) {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (questionComment?.authorId.toString() !== authorId) {
      throw new Error('Not allowed.')
    }

    await this.questionCommentsRepository.delete(questionComment)
  }
}
