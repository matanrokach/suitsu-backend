const express = require('express');
const defaultPort = 8000;

const app = express();

const { weatherRoute } = require('./routes');

app.use((req, res, next) => {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/weather', weatherRoute);

app.use('/', (req, res) => {
	res.send('ok');
})

const Port = process.env.Port || defaultPort;

app.listen(8000, () => {
	console.log(`app is listening on port ${Port}`);
})