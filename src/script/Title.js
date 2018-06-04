import React from "react";

class Title extends React.Component{
    render() {
        return (
            <h1 className={this.props.className}>{this.props.title}</h1>
        );
    }
}

export default Title