"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getSingleTodo = exports.getAllTasks = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = async (req, res) => {
    try {
        const tasks = await todoModel_1.default.create(req.body);
        res.status(201).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.createTodo = createTodo;
const getAllTasks = async (req, res) => {
    try {
        const tasks = await todoModel_1.default.find({});
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getAllTasks = getAllTasks;
const getSingleTodo = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const tasks = await todoModel_1.default.findOne({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ message: `No task with id:${taskID}` });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
    res.json({ id: req.params.id });
};
exports.getSingleTodo = getSingleTodo;
const updateTodo = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const tasks = await todoModel_1.default.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!tasks) {
            res.status(404).json({ id: taskID, data: req.body });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    //res.send('delete tasks from the controller')
    try {
        const { id: taskID } = req.params;
        const tasks = await todoModel_1.default.findOneAndDelete({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ message: `No task with id:${taskID}` });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.deleteTodo = deleteTodo;
