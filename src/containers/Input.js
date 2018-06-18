import React from "react";
import { addTodo } from '../actions/index'
import {connect} from 'react-redux'

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {text:""};
    }
    handleChange = (e) => {
        this.setState({text:e.target.value});
    }

    handleEnter = (e) => {
        if(!e.target.value || e.key!='Enter')
            return;
        this.props.addTodo(e.target.value);
        this.setState({text:""});
    }

    render(){
        return (
            <input className='todo__new'
                   type="text" placeholder="What needs to be done?"
                   onChange={this.handleChange}
                   value={this.state.text}
                   onKeyDown={this.handleEnter}/>
        );
    }
}

export default connect(null, { addTodo })(Input)