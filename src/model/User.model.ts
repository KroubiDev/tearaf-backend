import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

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

	@prop({
		required: true,
		trim: true,
		maxlength: 55,
		match: /[\w-]+@([\w-]+\.)+[\w-]+/,
	})
	public email!: string;

	@prop({
		default: function (this: User) {
			return `${this.firstName} ${this.lastName}`;
		},
	})
	public fullName!: string;
}

export const UserMode = getModelForClass(User); 