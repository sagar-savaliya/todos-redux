import React from "react";
import Container from './Container'

class List extends React.Component{
    render(){
        const lists = this.props.lists;
        const mode = this.props.mode;
        const elements = lists.map((list) =>{
            const element = (<Container key={list.id}  onToggle={this.props.onToggle} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onEnter={this.props.onEnter} id={list.id} done={list.done} text={list.text}/>);
            if(mode==='all') {
                return element;
            }else if(mode=='active'){
                return (list.done ? "" : element);
            }else{
                return (!list.done ? "" : element);
            }
        });
        return(
            <div className={this.props.className}>
                {elements}
            </div>
        );
    }
}

export default List