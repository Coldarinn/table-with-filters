const Router = require('express').Router;
const itemController = require('../Controllers/ItemController');
const itemRouter = new Router();

itemRouter.get('/all', itemController.getItems);
itemRouter.post('/add', itemController.addItem);

module.exports = itemRouter;
