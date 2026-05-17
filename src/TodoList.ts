// Step 1: Base interface
interface BaseTodoItem {
    id: number;
    task: string;
    completed: boolean;
}

// Step 7: Extended interface with dueDate
export interface TodoItem extends BaseTodoItem {
    dueDate: Date;
}

// Steps 2-6: TodoList class
export class TodoList {
    private todos: TodoItem[];
    private nextId: number;

    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    // Step 2: Add a new todo item
    public addTodo(task: string, dueDate: Date): void {
        if (!task || task.trim() === '') {
            throw new Error("Task description cannot be empty.");
        }

        // Validate the date
        if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
            throw new Error("Invalid due date provided.");
        }

        const newTodo: TodoItem = {
            id: this.nextId++,
            task: task.trim(),
            completed: false,
            dueDate: dueDate,
        };

        this.todos.push(newTodo);
    }

    // Step 2: Mark a todo item as completed
    public completeTodo(id: number): void {
        const todo = this.findById(id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.completed = true;
    }

    // Step 2: Remove a todo item
    public removeTodo(id: number): void {
        const initialLength = this.todos.length;
        this.todos = this.todos.filter(todo => todo.id !== id);

        if (this.todos.length === initialLength) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
    }

    // Step 2: Return all todo items
    public listTodos(): TodoItem[] {
        return [...this.todos];
    }

    // Step 4: Filter todos by completed status
    public filterTodosByCompleted(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    // Step 5: Update the task description of a todo item
    public updateTaskDescription(id: number, newTask: string): void {
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
    public clearCompletedTodos(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    // Private helper to find a todo by ID
    private findById(id: number): TodoItem | undefined {
        return this.todos.find(todo => todo.id === id);
    }
}