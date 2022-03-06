import 'dotenv/config';
import express from 'express';
import {
	addQuestionController,
	questionFeedController,
} from './controllers/question';
import { getUser, requestLogger, tokenParser } from './utils/middlewares';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGODB_URI, PORT} from './utils/config';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(tokenParser);

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/question/feed', questionFeedController());
app.post('/question', getUser, addQuestionController());

const host = 'localhost';
const port = PORT || 5000;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		return console.info(`[*] Successfully connected to db`);
	})
	.catch((error) => {
		console.error('[!] Error connecting to database: ', error);
		return process.exit(1);
	});

app.listen(8080, 'localhost', async () => {
	console.info(`[*] Server listing at http://${host}:${port}`);
});
