import React from "react";
import {setVisibilityFilter} from "../actions/index";
import {connect} from 'react-redux'

function ModeButton(props){
    return (
        <div className={'todo__modebutton ' + (props.filter==props.mode?"focus":"")}
             onClick={(e) => props.setVisibilityFilter(e.target.dataset.mode)}
             data-mode={props.mode} >
            {props.text}
        </div>
    );
}

const mapStateToProps = (state) => ({
    filter: state.visibilityFilter
})

export default connect(mapStateToProps,{setVisibilityFilter})(ModeButton)