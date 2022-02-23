import { getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Answer } from './Answer.model';
import { User } from './User.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Comment {
	@prop({ required: true, maxlength: 500 })
	public text!: string;

	@prop({ required: true, ref: () => User })
	public author!: Ref<User>;

	@prop({ required: true, ref: () => Answer })
	public answer!: Ref<Answer>;
}

export const UserMode = getModelForClass(Comment); 