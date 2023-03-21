import { writable } from "svelte/store";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  return Math.random().toString(36).substr(2, 6);
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  const value = todo.value.trim();
  const isDuplicate = todos.some(
    (t) => t.value.toLowerCase() === value.toLowerCase()
  );
  return value.length > 0 && value.length <= 255 && !isDuplicate;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  const capitalizedValue =
    todo.value.charAt(0).toUpperCase() + todo.value.slice(1);
  return {
    id: todo.id,
    value: capitalizedValue,
    done: todo.done,
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  const randomInRange = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const r = randomInRange(50, 150);
  const g = randomInRange(50, 150);
  const b = randomInRange(50, 150);
  return `rgb(${r}, ${g}, ${b})`;
}

export const todoList = writable<TodoItem[]>([]);
