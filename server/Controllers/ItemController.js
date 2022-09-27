const itemService = require('../Services/ItemService');

class ItemController {
	async getItems(req, res, next) {
		try {
			const { limit, offset } = req.query;
			const items = await itemService.getItems(limit, offset);
			return res.json(items);
		} catch (e) {
			next(e);
		};
	};

	async addItem(req, res, next) {
		try {
			const { date, name, amount, distance } = req.body;
			const item = await itemService.addItem(date, name, amount, distance);
			return res.json(item);
		} catch (e) {
			next(e);
		}
	}
};


module.exports = new ItemController();
