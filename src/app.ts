import * as readline from 'readline';
import { TodoList } from './TodoList';

// Initialize Readline interface for console I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todoList = new TodoList();

function showMenu() {
    console.log('\n================================');
    console.log('   Todo List Console App');
    console.log('================================');
    console.log('1. Add Todo');
    console.log('2. Complete Todo');
    console.log('3. Remove Todo');
    console.log('4. List Todos');
    console.log('5. Filter Todos by Completed Status');
    console.log('6. Update Task Description');
    console.log('7. Clear Completed Todos');
    console.log('8. Exit');
    console.log('================================');
    rl.question('Select an option (1-8): ', handleOption);
}

function handleOption(option: string) {
    console.clear();
    switch (option.trim()) {
        case '1':
            rl.question('Enter task description: ', (task) => {
                rl.question('Enter due date (YYYY-MM-DD): ', (dateStr) => {
                    const dueDate = new Date(dateStr);
                    if (isNaN(dueDate.getTime())) {
                        console.log('\n❌ Invalid date format. Please use YYYY-MM-DD.');
                    } else {
                        try {
                            todoList.addTodo(task, dueDate);
                            console.log('\n✅ Todo added successfully!');
                        } catch (error: any) {
                            console.log(`\n❌ Error: ${error.message}`);
                        }
                    }
                    showMenu();
                });
            });
            break;
        case '2':
            rl.question('Enter todo ID to complete: ', (idStr) => {
                const id = parseInt(idStr, 10);
                try {
                    todoList.completeTodo(id);
                    console.log(`\n✅ Todo ${id} marked as completed.`);
                } catch (error: any) {
                    console.log(`\n❌ Error: ${error.message}`);
                }
                showMenu();
            });
            break;
        case '3':
            rl.question('Enter todo ID to remove: ', (idStr) => {
                const id = parseInt(idStr, 10);
                try {
                    todoList.removeTodo(id);
                    console.log(`\n✅ Todo ${id} removed.`);
                } catch (error: any) {
                    console.log(`\n❌ Error: ${error.message}`);
                }
                showMenu();
            });
            break;
        case '4':
            const todos = todoList.listTodos();
            console.log('\n--- All Todos ---');
            if (todos.length === 0) {
                console.log('No todos found.');
            } else {
                todos.forEach(todo => {
                    const status = todo.completed ? '[x]' : '[ ]';
                    console.log(`${status} ID: ${todo.id} | Task: ${todo.task} | Due: ${todo.dueDate.toDateString()}`);
                });
            }
            showMenu();
            break;
        case '5':
            rl.question('Filter by completed? (yes/no): ', (ans) => {
                const isCompleted = ans.trim().toLowerCase() === 'yes';
                const filtered = todoList.filterTodosByCompleted(isCompleted);
                console.log(`\n--- ${isCompleted ? 'Completed' : 'Pending'} Todos ---`);
                if (filtered.length === 0) {
                    console.log('No todos found.');
                } else {
                    filtered.forEach(todo => {
                        console.log(`ID: ${todo.id} | Task: ${todo.task} | Due: ${todo.dueDate.toDateString()}`);
                    });
                }
                showMenu();
            });
            break;
        case '6':
            rl.question('Enter todo ID to update: ', (idStr) => {
                const id = parseInt(idStr, 10);
                rl.question('Enter new task description: ', (newTask) => {
                    try {
                        todoList.updateTaskDescription(id, newTask);
                        console.log(`\n✅ Todo ${id} updated successfully.`);
                    } catch (error: any) {
                        console.log(`\n❌ Error: ${error.message}`);
                    }
                    showMenu();
                });
            });
            break;
        case '7':
            todoList.clearCompletedTodos();
            console.log('\n✅ Completed todos cleared.');
            showMenu();
            break;
        case '8':
            console.log('\nExiting application. Goodbye!');
            rl.close();
            break;
        default:
            console.log('\n❌ Invalid option. Please try again.');
            showMenu();
            break;
    }
}

// Start the application
showMenu();
