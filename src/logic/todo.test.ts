import { TodoItem, generateID, validateTodo, formatTodo, generateColor } from './todo';

describe('Todo Functions', () => {
    describe('generateID', () => {
        it('should return a unique ID', () => {
            const id1 = generateID();
            const id2 = generateID();
            expect(id1).not.toBe(id2);
        });
    });

    describe('validateTodo', () => {
        const todos: TodoItem[] = [
            { id: '1', value: 'Test Todo 1', done: false },
            { id: '2', value: 'Test Todo 2', done: true },
        ];

        it('should not allow empty value', () => {
            const todo: TodoItem = { id: '3', value: '', done: false };
            expect(validateTodo(todo, todos)).toBe(false);
        });

        it('should not allow value longer than 255 characters', () => {
            const longValue = 'A'.repeat(256);
            const todo: TodoItem = { id: '3', value: longValue, done: false };
            expect(validateTodo(todo, todos)).toBe(false);
        });

        it('should not allow duplicate value (case insensitive)', () => {
            const todo: TodoItem = { id: '3', value: 'test todo 1', done: false };
            expect(validateTodo(todo, todos)).toBe(false);
        });

        it('should allow valid value', () => {
            const todo: TodoItem = { id: '3', value: 'Valid Todo', done: false };
            expect(validateTodo(todo, todos)).toBe(true);
        });
    });

    describe('formatTodo', () => {
        it('should capitalize the first letter of the todo value', () => {
            const todo: TodoItem = { id: '1', value: 'test todo', done: false };
            const formattedTodo = formatTodo(todo);
            expect(formattedTodo.value).toBe('Test todo');
        });
    });

    describe('generateColor', () => {
        it('should generate a color with r, g, and b values between 50 and 150', () => {
            const color = generateColor();
            const regex = /^rgb\((\d{2,3}), (\d{2,3}), (\d{2,3})\)$/;
            const match = color.match(regex);

            expect(match).toBeTruthy();
            if (match) {
                const r = parseInt(match[1], 10);
                const g = parseInt(match[2], 10);
                const b = parseInt(match[3], 10);

                expect(r).toBeGreaterThanOrEqual(50);
                expect(r).toBeLessThanOrEqual(150);
                expect(g).toBeGreaterThanOrEqual(50);
                expect(g).toBeLessThanOrEqual(150);
                expect(b).toBeGreaterThanOrEqual(50);
                expect(b).toBeLessThanOrEqual(150);
            }
        });
    });
});
