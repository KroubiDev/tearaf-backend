import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
} from '@typegoose/typegoose';
import { Question } from './Question.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
	@prop({ required: true, trim: true, maxlength: 15 })
	public firstName!: string;

	@prop({ required: true, trim: true, maxlength: 15 })
	public lastName!: string;

	@prop({ required: true, trim: true, maxlength: 55 })
	public username!: string;

	@prop({ required: true, trim: true, maxlength: 20 })
	public phoneNumber!: string;

	@prop({ default: [], required: false, ref: 'Question' })
	public savedQuestions: Ref<Question[]>;

	@prop({ default: [], required: false, ref: 'Question' })
	public answeredQuestions: Ref<Question[]>;

	@prop({
		required: true,
		trim: true,
		maxlength: 55,
		match: /[\w-]+@([\w-]+\.)+[\w-]+/,
	})
	public email!: string;
}

export const UserModel = getModelForClass(User);
