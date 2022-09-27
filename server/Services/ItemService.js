const ItemModel = require('../Models/ItemModel');

class ItemService {
	async getItems(limit = 15, offset = 0) {
		const items = await ItemModel.find({}).skip(offset).limit(limit);
		return { items, length: await ItemModel.find({}).count() };
	};

	async addItem(date, name, amount, distance) {
		const item = await ItemModel.create({ date, name, amount, distance });
		return item;
	};
};

module.exports = new ItemService();
