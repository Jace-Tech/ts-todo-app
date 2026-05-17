# TypeScript Todo List Application

A simple, interactive console-based Todo List application built with TypeScript. This application allows you to manage tasks by adding, completing, removing, and filtering them. It runs directly in your terminal and keeps running until you explicitly exit.

## Features
- **Add Todo:** Add a new task with a description and due date.
- **Complete Todo:** Mark a specific task as completed using its ID.
- **Remove Todo:** Delete a task from the list using its ID.
- **List Todos:** View all tasks, along with their completion statuses and due dates.
- **Filter Todos:** View only completed or only pending tasks.
- **Update Task Description:** Modify the description of an existing task.
- **Clear Completed Todos:** Remove all tasks marked as completed in one go.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

## How to Run

I have already compiled the TypeScript files to JavaScript for you to bypass any local `npm` cache permission errors.

You can simply run the compiled application by typing:

```bash
node dist/app.js
```

## Usage Instructions
Once the application starts, a main menu will appear with numbered options (1-8). 
Simply type the number of the action you wish to perform and press `Enter`. The application will then prompt you for any necessary inputs (e.g., task description, ID, or due date).

*Note: Due dates should be entered in the `YYYY-MM-DD` format when prompted.*
