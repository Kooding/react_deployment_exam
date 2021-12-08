import React, { Component } from 'react';

class Habit extends Component {

    increaseCount = () => {
        this.props.onIncrement(this.props.habit);
    }

    decreaseCount = () => {
        this.props.onDecrement(this.props.habit);
    }

    delete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
    const {name, count} = this.props.habit;
    return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.increaseCount}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.decreaseCount}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.delete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;