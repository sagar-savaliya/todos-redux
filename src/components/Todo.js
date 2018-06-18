import React from "react";
import Title from './Title';
import Input from '../containers/Input';
import List from '../containers/List';
import Panel from './Panel';

function Todo() {
    return (
        <div>
            <Title />
            <div className='todo'>
                <Input />
                <List />
                <Panel />
            </div>
        </div>
    );
}

export default Todo