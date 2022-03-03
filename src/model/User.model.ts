import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
} from '@typegoose/typegoose';
import { Question } from './Question.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
	@prop({
		required: true,
		trim: true,
		maxlength: [55, 'username must be at most 55 characters long'],
		minlength: [3, 'username must be at least three characters long'],
		unique: true,
		match: [/^[_a-zA-Z]\w*$/, 'invalid username'],
	})
	public username!: string;

	@prop({
		required: true,
		trim: true,
		maxlength: [55, 'email must be at most 55 characters long'],
		unique: true,
		match: [/[\w-]+@([\w-]+\.)+[\w-]+/, 'invalid email'],
	})
	public email!: string;

	@prop({ default: [], required: false, ref: () => Question })
	public savedQuestions: Ref<Question[]>;

	@prop({ default: [], required: false, ref: () => Question })
	public answeredQuestions: Ref<Question[]>;
	
	@prop({ required: false, trim: true, maxlength: 15 })
	public firstName?: string;

	@prop({ required: false, trim: true, maxlength: 15 })
	public lastName?: string;

	@prop({ required: false, trim: true, minlength: 4, maxlength: 20 })
	public phoneNumber?: string;
}

export const UserMode = getModelForClass(User);
