import React, {Component} from "react";
import '../App.css';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);

    }

    componentWillUnmount() {
        console.log('Counter-Unmount')
    }

    render() {
        console.log('Counter-Rendered')
        return (
            <div className="row">
                {this.props.children}
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => {
                        this.props.onIncrement(this.props.counter)
                    }} className="btn btn-secondary btn-sm">+</button>
                    <button onClick={() => {
                        this.props.onDecrement(this.props.counter)
                    }} className="btn btn-secondary btn-sm" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>X</button>
                </div>
            </div>
        );
    }

    formatCount() {
        //object destructuring
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 col badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;