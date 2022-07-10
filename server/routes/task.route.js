const Router = require('express')

const todoModel = require('../model/todo');

const {getAll, post} = require('../controller/todoController');

const taskRoute = Router();

const todoPost = taskRoute.post('/:userId/todo', post)

const todoGetAll = taskRoute.get('/:userId/todo',getAll);


module.exports = taskRoute;