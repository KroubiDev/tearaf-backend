import {
	getModelForClass,
	modelOptions,
	prop,
	Ref,
} from '@typegoose/typegoose';
import { Answer } from './Answer.model';
import { User } from './User.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Replay {
	@prop({
		required: true,
		maxlength: [500, 'max answer length is 10000 characters'],
		minlength: [15, 'minimum answer length is 20 characters'],
	})
	public text!: string;

	@prop({ required: true, ref: () => User })
	public author!: Ref<User>;

	@prop({ required: true, ref: () => Answer })
	public answer!: Ref<Answer>;
}

export const UserMode = getModelForClass(Replay);
