import { Request } from 'express';
import { User } from '../model/User.model';
import { DocumentType } from '@typegoose/typegoose';
export interface RequestContext<T = any> extends Request {
	body: T;
	token?: string;
	user?: DocumentType<User>;
}
