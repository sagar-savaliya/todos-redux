import React from "react";
import Container from './Container'
import { Transition } from 'react-spring'

class List extends React.Component{
    render(){
        const mode = this.props.mode;
        return(
            <div className={this.props.className}>
                <Transition
                    keys={this.props.lists.map(item => item.id)}
                    from={{ opacity: 0, height: 0,}}
                    enter={{ opacity: 1, height: 20}}
                    leave={{ opacity: 0, height: 0, padding: 0, border: 0}} >
                    {
                        this.props.lists.map((list) => styles => {
                            const element = (<Container style={styles} key={list.id}  onToggle={this.props.onToggle} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onEnter={this.props.onEnter} id={list.id} done={list.done} text={list.text}/>);
                            if(mode==='all') {
                                return element;
                            }else if(mode=='active'){
                                return (list.done ? "" : element);
                            }else{
                                return (!list.done ? "" : element);
                            }
                        })
                    }
                </Transition>
            </div>
        );
    }
}

export default List