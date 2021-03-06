import React from "react";
import ActiveToDoText from '../containers/ActiveToDoText'
import ClearCompletedButton from '../containers/ClearCompletedButton'
import ModeButton from '../containers/ModeButton';

function Panel(){
    return(
        <div className='todo__pannel'>
            <ActiveToDoText />
            <ModeButton mode="SHOW_ALL"
                        text="All" />
            <ModeButton mode="SHOW_ACTIVE"
                        text="Active" />
            <ModeButton mode="SHOW_COMPLETED"
                        text="Completed" />
            <ClearCompletedButton />
        </div>
    );
}

export default Panel