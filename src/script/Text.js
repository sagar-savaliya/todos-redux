import React from "react";

class Text extends React.Component{
    render(){
        return(
            <div className={this.props.className} onClick={this.props.handleClick}>{this.props.text}</div>
        );
    }
}

export default Text