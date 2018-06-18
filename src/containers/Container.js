import React from "react";
import {editTodo, toggleToDo, deleteTodo, addTodo} from "../actions/index";
import {connect} from "react-redux";

class Container extends React.Component {
    handleKeyDown = (e) => {
        if(e.key=='Enter'){
            e.target.contentEditable='false';
            const text = e.target.innerHTML;
            const id = e.target.parentElement.dataset.id;
            if(text)
                this.props.editTodo(id,e.target.innerHTML);
            else
                this.props.deleteTodo(id);
        }
    }
   render(){
        return(
            <label style={this.props.style} className="todo__container" data-id={this.props.id}>
                <div
                    className="checkmark"
                    onClick={(e) => this.props.toggleToDo(e.target.parentElement.dataset.id)}>
                    {this.props.done ? '✔️' : '⬜'}
                </div>
                <div
                    className={"todo__text " + (this.props.done ? 'strike' : '')}
                    onClick={(e) => e.target.contentEditable='true'}
                    onKeyDown={this.handleKeyDown}>
                    {this.props.text}
                </div>
                <div
                    className='todo__delete'
                    onClick={(e) => this.props.deleteTodo(e.target.parentElement.dataset.id)}>
                    ☓
                </div>
            </label>
        );
   }
}

export default connect(null, { editTodo, toggleToDo, deleteTodo, addTodo })(Container)