"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const todo_model_1 = require("../../models/todo/todo.model");
const todoStatus_1 = require("./todoStatus");
let TodoComponent = class TodoComponent extends todoStatus_1.TodoStatus {
    constructor() {
        super(...arguments);
        this.currentTodo = new todo_model_1.TodoModel();
        this.todos = new Array();
        this.currentCss = "";
    }
    AddTask() {
        if (this.currentTodo.todoTask != '') {
            this.currentTodo.id = this.todos.length + 1;
            this.todos.push(this.currentTodo);
            this.todos = this.todos.slice();
            this.currentTodo = new todo_model_1.TodoModel();
        }
    }
    //temporary code. Needs improvement
    Done(task) {
        for (let comTask of this.todos) {
            if (comTask.id == task.id) {
                if (task.isChecked == false) {
                    comTask.cssClass = "striket";
                    this.Completed(task);
                }
                else {
                    comTask.cssClass = "";
                    this.PendingTask(task);
                }
            }
        }
    }
};
TodoComponent = __decorate([
    core_1.Component({
        templateUrl: './src/app/views/todo/todo.html',
        styleUrls: ['./src/app/css/todo.css']
    })
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map