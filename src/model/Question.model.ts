import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
} from '@typegoose/typegoose';
import { Answer } from './Answer.model';
import { User } from './User.model';

export enum QuestionStatus {
	SPAM = 'SPAM',
	NEED_REVIEW = 'NEED_REVIEW',
	POSTED = 'POSTED',
}
export interface Metadata {
	[key: string]: any;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Question {
	@prop({ required: true, maxlength: 10000 })
	public text!: string;

	@prop({ required: true, ref: () => User })
	public author!: Ref<User>;

	@prop({ required: true, ref: () => Answer })
	public answers!: Ref<Answer[]>;

	@prop({ default: [], type: () => [String] })
	public tags!: string[];

	@prop({
		enum: QuestionStatus,
		type: () => String,
		default: QuestionStatus.POSTED,
	})
	public status!: QuestionStatus;

	@prop() //TODO: test type
	public metadata!: Metadata;
}

export const QuestionModel = getModelForClass(Question);
