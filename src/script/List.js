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
                    from={{ opacity: 0, padding: 0}}
                    enter={{ opacity: 1, padding: 15}}
                    leave={{ opacity: 0, height: 0, padding: 0, border: 0}} >
                    {
                        this.props.lists.map(
                            (list) => styles => (<Container
                                                    style={styles}
                                                    key={list.id}
                                                    onToggle={this.props.onToggle}
                                                    onDelete={this.props.onDelete}
                                                    onEdit={this.props.onEdit}
                                                    onEnter={this.props.onEnter}
                                                    id={list.id}
                                                    done={list.done}
                                                    text={list.text}/>)
                        )
                    }
                </Transition>
            </div>
        );
    }
}

export default List