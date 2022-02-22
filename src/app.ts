import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const host = 'localhost';
const port = '8080';
app.listen(8080, 'localhost', () => {
	console.info(`Server listing at http://${host}:${port}`);
});
