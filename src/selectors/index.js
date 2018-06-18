import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

export const getVisibleTodos = (todos,visibilityFilter) => {
    switch (visibilityFilter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.done);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.done);
    }
}

export const getCompletedTodoCount = todos => (
        todos.reduce((count, todo) =>  todo.done ? count + 1 : count, 0 )
)
export const getActiveTodoCount = todos => {
    return todos.reduce((count, todo) => !todo.done ? count + 1 : count, 0);
}