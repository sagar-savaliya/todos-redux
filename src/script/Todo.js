import React from "react";
import Title from './Title';
import Input from './Input';
import List from './List';
import Panel from './Panel';
import Message from './Message'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            mode: 'all'
        };
        this.counter = 0;
        this.activetodos = 0;
    }

    componentDidMount() {
        this.jmode = document.querySelector('.todo__all');
    }

    addNewTodo = (newtodoText) => {
        this.activetodos++;
        this.setState(prevState => ({
            todos: [...prevState.todos,{
                text: newtodoText,
                done: false,
                id: this.counter++
            }]
        }))
    }

    ToggleTodo = (e) => {
        var id = e.target.parentElement.dataset.id;
        const todos = this.state.todos;  // make a separate copy of the array
        var index = todos.findIndex((todo) => {
            return todo.id==id;
        })

        todos[index].done = !todos[index].done;
        if(todos[index].done)
            this.activetodos--;
        else
            this.activetodos++;
        this.setState({todos: todos});
    }

    deletedTodo = (e) => {
        const todos = this.state.todos;     // make a separate copy of the array
        var id = e.target.parentElement.dataset.id;
        var index = todos.findIndex((todo) => {
            return todo.id==id;
        })
        if(index==-1)
            return;
        if(!todos[index].done)
            this.activetodos--;
        todos.splice(index, 1);
        this.setState({todos: todos});
    }

    updateTodo = (e) => {
        if(e.key!='Enter')
            return;
        e.target.contentEditable = 'false';
        if(!e.target.innerHTML){
            this.deletedTodo(e);
            return;
        }
        var id = e.target.parentElement.dataset.id;
        const todos = this.state.todos;  // make a separate copy of the array
        var index = todos.findIndex((todo) => {
            return todo.id==id;
        })
        todos[index].text = e.target.innerHTML;
        this.setState({todos: todos});

    }

    clearCompleted = (e) => {
        let todos = this.state.todos;  // make a separate copy of the array
        todos = todos.filter(todo => !todo.done);
        this.setState({todos: todos});
        document.querySelector( ".message" ).style.display = "block";
        setTimeout(this.hideMessage,2000) ;
    }
    hideMessage(){
        document.querySelector( ".message" ).style.display = "none" ;
    }
    changeMode = (e) => {
        this.jmode.classList.remove('focus');
        e.target.classList.add('focus');
        this.jmode = e.target;
        const mode = e.target.dataset.mode;
        this.setState({mode: mode});
    }

    makeEditable = (e) => {
        e.target.contentEditable = 'true';
    }

    render(){
        if(this.state.mode === 'active')
            this.filteredTodos = this.state.todos.filter((todo) => {
                return !todo.done;
            });
       else if(this.state.mode === 'all')
            this.filteredTodos = this.state.todos;
       else
            this.filteredTodos = this.state.todos.filter((todo) => {
                return todo.done;
            });

        return (
            <div>
                <Title className="todo__title" title="todos"/>
                <div className={this.props.className}>
                    <Input className='todo__new' type="text" placeholder="What needs to be done?" OnEnter={this.addNewTodo}/>
                    <List className="todo__list" lists={this.filteredTodos} mode={this.state.mode} onToggle={this.ToggleTodo} onDelete={this.deletedTodo} onEdit={this.makeEditable} onEnter={this.updateTodo}/>
                    <Panel className="todo__pannel" onModeChange={this.changeMode} activeTodos={this.activetodos} onClear={this.clearCompleted}/>
                </div>
                <Message message="Completed cleared"/>
            </div>
        );
    }
}

export default Todo