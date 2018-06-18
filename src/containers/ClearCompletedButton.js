import React from "react";
import {clearCompleted} from "../actions/index";
import {connect} from 'react-redux'
import {getCompletedTodoCount} from "../selectors/index";

function ClearCompletedButton(props) {
    return(
        <div className={'todo__clearcompleted'}
             onClick={props.clearCompleted} >
            {props.text}
        </div>
    );
}
const mapStateToProps = (state) => {
    const count = getCompletedTodoCount(state.todos);
    console.log(count)
    if(count==0)
        return {text:""};
    else
        return {text: "Clear completed(" +count+")"};
}

export default connect(mapStateToProps,{clearCompleted})(ClearCompletedButton)