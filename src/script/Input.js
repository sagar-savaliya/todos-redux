import React from "react";


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
        this.props.OnEnter(e.target.value);
        this.setState({text:""});
    }

    render(){
        return (
            <input className={this.props.className} type={this.props.type} placeholder={this.props.placeholder} onChange={this.handleChange} value={this.state.text} onKeyDown={this.handleEnter}/>
        );
    }
}

export default Input