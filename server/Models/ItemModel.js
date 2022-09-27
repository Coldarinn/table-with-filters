const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ItemSchema = new Schema({
	date: { type: String, required: true },
	name: { type: String, required: true },
	amount: { type: String, required: true },
	distance: { type: String, required: true }
});

module.exports = model('Item', ItemSchema);