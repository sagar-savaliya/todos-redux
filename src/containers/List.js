import React from "react";
import Container from './Container'
import { Transition } from 'react-spring'
import {addTodo, deleteTodo, editTodo, toggleToDo} from "../actions/index";
import {connect} from "react-redux";
import {getVisibleTodos} from "../selectors/index";

function List({todos}) {
        return(
            <div className='todo__list'>
                <Transition
                    keys={todos.map(item => item.id)}
                    from={{ opacity: 0, padding: 0}}
                    enter={{ opacity: 1, padding: 15}}
                    leave={{ opacity: 0, height: 0, padding: 0, border: 0}} >
                    {
                        todos.map(
                            (todo) => styles => (<Container
                                                    style={styles}
                                                    key={todo.id}
                                                    id={todo.id}
                                                    done={todo.done}
                                                    text={todo.text}/>)
                        )
                    }
                </Transition>
            </div>
        );
}
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
})

export default connect(mapStateToProps, { editTodo, toggleToDo, deleteTodo, addTodo })(List)