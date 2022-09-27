const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const itemRouter = require('./Routers/ItemRouter');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/items', itemRouter);

(function () {
	try {
		mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
	} catch (e) {
		console.log(e);
	}
})();