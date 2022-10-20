import React, { Component } from 'react'
import List from "../List/List.jsx"

import "./Form.css"

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputData: "",
            todoItems: ["Do Exercise", "Learn React."],
        }
    }

    changeTodoInput = (event) => {
        this.setState({ inputData: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputData) {
            let newItems = [...this.state.todoItems, this.state.inputData];
            this.setState({
                inputData: "",
                todoItems: newItems,
            })
        }else{
            alert("please enter something")
        }

    }
    deleteHandler = (key) => {
        let originalTodoItems = [...this.state.todoItems];
        let newTodoItems = originalTodoItems.filter((value, index) => {
            return index !== key;
        })
        this.setState({
            todoItems: newTodoItems,
        })
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row justify-content-center">
                        <div className="col-md-10 kcc-form-card">
                            <form className="container" onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <h1>To do list</h1>
                                    <input type="text" className="form-control" id="todo" placeholder="Please enter something..." onChange={this.changeTodoInput} value={this.state.inputData} />
                                </div>
                                <button type="submit" className="kcc-form-submit-btn">Add</button>
                            </form>
                            <List items={this.state.todoItems} deleteHandler={this.deleteHandler}></List>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
