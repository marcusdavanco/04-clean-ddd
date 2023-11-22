import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteAnswerCommentUseCaseResponse {}

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest) {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (answerComment?.authorId.toString() !== authorId) {
      throw new Error('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)
  }
}
