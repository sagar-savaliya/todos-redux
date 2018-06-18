import React from "react";
import {getActiveTodoCount} from "../selectors/index";
import {connect} from 'react-redux'

function ActiveToDoText(props) {
        return(
            <div className='todo__left'>
                {props.text}
            </div>
        );
}

const mapStateToProps = (state) => {
    const activTodo = getActiveTodoCount(state.todos);
    return {
        text:  activTodo +
                (activTodo>1?" items left":" item left")
    }
}

export default connect(mapStateToProps)(ActiveToDoText);