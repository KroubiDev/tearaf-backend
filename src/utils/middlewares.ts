import { Request, Response, NextFunction } from 'express';
import {
	RequestContext,
} from '../interfaces/RequestContext.interface';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import { User } from '../model/User.model';
import { DocumentType } from '@typegoose/typegoose';

export function requestLogger(
	request: Request,
	_response: Response,
	next: NextFunction
) {
	console.log('Method:', request.method);
	console.log('Host:', request.hostname);
	console.log('Body:', request.body);
	console.log('======');
	next();
}

export function tokenParser(
	request: RequestContext,
	response: Response,
	next: NextFunction
) {
	const auth = request.get('authorization');

	if (auth && auth.toLowerCase().startsWith('bearer')) {
		request.token = auth.substring(7);
	}

	next();
}

export function getUser(
	request: RequestContext,
	response: Response,
	next: NextFunction
) {
	//TODO: better error handling
	if (request.token) {
		request.user = verify(request.token, JWT_SECRET) as DocumentType<User>;
		next();
	}
	throw Error('Can not get user in getUser middleware');
}
