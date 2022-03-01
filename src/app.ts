import express from 'express';
import { addQuestionController, questionFeedController } from './controllers/question';
import { getUser, requestLogger, tokenParser } from './utils/middlewares';

const app = express();
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(tokenParser);

app.get('/question/feed', questionFeedController());
app.post('/question', getUser, addQuestionController());

const host = 'localhost';
const port = '8080';
app.listen(8080, 'localhost', async () => {
	console.info(`Server listing at http://${host}:${port}`);
});
