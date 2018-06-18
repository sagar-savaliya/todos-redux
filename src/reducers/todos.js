import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    CLEAR_COMPLETED
} from '../constants/ActionTypes'
let id = 0;
const todos = (state=[], action) => {
    console.log(action.type,action.text);
    switch (action.type){
        case ADD_TODO:
            return [ ...state, {
                    id: id++,
                    text: action.text,
                    done: false
                }];
        case DELETE_TODO:
            var index = state.findIndex((todo) => todo.id==action.id);
            return  [...state.slice(0,index), ...state.slice(index+1)];
        case CLEAR_COMPLETED:
            return [...state].filter((todo)=>!todo.done)
        case TOGGLE_TODO:
            return state.map((todo) => {
                    if(action.id==todo.id){
                        todo.done = !todo.done;
                    }
                    return todo;
                });
        case EDIT_TODO:
            return state.map((todo) => {
                    if(action.id==todo.id){
                        todo.text = action.text;
                    }
                    return todo;
                });
        default:
            return state;
    }
}

export default todos;