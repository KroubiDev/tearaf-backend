import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
} from '@typegoose/typegoose';
import { Replay } from './Replay.model';
import { Question } from './Question.model';
import { User } from './User.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Answer {
	@prop({
		required: true,
		maxlength: [10000, 'max answer length is 10000 characters'],
		minlength: [15, 'minimum answer length is 20 characters'],
	})
	public text!: string;

	@prop({ required: true, ref: () => User })
	public author!: Ref<User>;

	@prop({ required: true, ref: () => Question })
	public question!: Ref<Question>;

	@prop({ default: [], required: false, ref: () => User })
	public upVotes: Ref<User[]>;

	@prop({ default: [], required: false, ref: () => User })
	public downVotes: Ref<User[]>;

	@prop({ default: [], required: false, ref: () => Replay })
	public comments: Ref<Replay[]>;
}

export const UserMode = getModelForClass(Answer);
