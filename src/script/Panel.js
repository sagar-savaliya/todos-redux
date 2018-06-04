import React from "react";
import Text from './Text';
import ModeButton from './ModeButton';

class Panel extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                <Text className="todo__left" text={this.props.activeTodos+(this.props.activeTodos>1?' items':' item')+' left'}/>
                <ModeButton className="todo__all focus" handleClick={this.props.onModeChange} mode="all" text="All"/>
                <ModeButton className="todo__active" handleClick={this.props.onModeChange} mode="active" text="Active"/>
                <ModeButton className="todo__completed" handleClick={this.props.onModeChange} mode="completed" text="Completed"/>
                <Text className="todo__clearcompleted" text="Clear completed" handleClick={this.props.onClear}/>
            </div>
        );
    }
}

export default Panel