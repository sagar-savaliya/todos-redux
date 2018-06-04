import React from "react";

class Container extends React.Component{
    render(){
        return(
            <label className="todo__container" data-id={this.props.id}>
                <div className="checkmark" onClick={this.props.onToggle}>{this.props.done ? '✔️' : '⬜'}</div>
                <div className={"todo__text " + (this.props.done ? 'strike' : '')} onClick={this.props.onEdit} onKeyDown={this.props.onEnter}>{this.props.text}</div>
                <div className='todo__delete' onClick={this.props.onDelete}>☓</div>
            </label>
        );
    }
}

export default Container