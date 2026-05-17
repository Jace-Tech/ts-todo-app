"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
// Steps 2-6: TodoList class
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    // Step 2: Add a new todo item
    addTodo(task, dueDate) {
        if (!task || task.trim() === '') {
            throw new Error("Task description cannot be empty.");
        }
        // Validate the date
        if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
            throw new Error("Invalid due date provided.");
        }
        const newTodo = {
            id: this.nextId++,
            task: task.trim(),
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
    }
    // Step 2: Mark a todo item as completed
    completeTodo(id) {
        const todo = this.findById(id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.completed = true;
    }
    // Step 2: Remove a todo item
    removeTodo(id) {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);
        if (this.todos.length === initialLength) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
    }
    // Step 2: Return all todo items
    listTodos() {
        return [...this.todos];
    }
    // Step 4: Filter todos by completed status
    filterTodosByCompleted(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    // Step 5: Update the task description of a todo item
    updateTaskDescription(id, newTask) {
        if (!newTask || newTask.trim() === '') {
            throw new Error("New task description cannot be empty.");
        }
        const todo = this.findById(id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.task = newTask.trim();
    }
    // Step 6: Clear all completed todos
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
    // Private helper to find a todo by ID
    findById(id) {
        return this.todos.find(todo => todo.id === id);
    }
}
exports.TodoList = TodoList;
