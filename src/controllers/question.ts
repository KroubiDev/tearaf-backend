import { ReturnModelType } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';
import { Request, Response } from 'express';
import { AddQuestion } from '../dto/AddQuestion.interface';
import { RequestContext } from '../interfaces/RequestContext.interface';
import { Answer } from '../model/Answer.model';
import { Question, QuestionModel } from '../model/Question.model';

export const questionFeedController = (
	questionModel: ReturnModelType<typeof Question, BeAnObject> = QuestionModel
) => {
	return async (_request: Request, response: Response) => {
		const questions = await questionModel.find({}).populate<{
			answers: Answer[];
		}>('answers');
		response.send(questions.map((question) => question.toJSON()));
	};
};

export function addQuestionController(
	questionModel: ReturnModelType<typeof Question, BeAnObject> = QuestionModel
) {
	return async function (
		request: RequestContext<AddQuestion>,
		response: Response
	) {
		if (request.user) {
			await questionModel.create({
				author: request.user.id,
				text: request.body.text,
			});
			response.status(201);
		}
		throw Error('User token is not given.');
	};
}
