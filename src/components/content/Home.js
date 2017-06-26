import React from 'react';
import { Component } from 'react';
import TodoList from './TodoList';

export default class Home extends Component {

    render() {
        let input;
        return (
            <div >
                <h1>
                    Home
                </h1>
                <div className="alert alert-info" role="alert">
                    This is a linked page.
                </div>
                <TodoList todos={this.props.todos} onTodoClick={this.props.toggleTask}/>
                <form onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.addTask(input.value);
                        input.value = ''
                }}>
                        <input ref={ node => {
                            input = node
                        }} />
                        <button type="submit">
                            Add
                        </button>
                </form>
            </div>
        );
    }

}
