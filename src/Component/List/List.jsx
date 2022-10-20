import React, { Component } from 'react'
import "./List.css"

export default class List extends Component {
    render() {
        return (
            <>
                <ul className="list-group todolist">
                    {
                        this.props.items.map((value, index) => {
                            return (
                                <li className="list-group-item todolist__item" key={index}>
                                    <div>
                                        <span>{ value }</span>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={() => this.props.deleteHandler(index)}>X</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

