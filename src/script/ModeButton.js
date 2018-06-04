import React from "react";

class ModeButton extends React.Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.handleClick} data-mode={this.props.mode}>{this.props.text}</div>
        );
    }
}

export default ModeButton