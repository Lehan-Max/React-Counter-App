import React, {Component} from "react";
import Counter from './counter';
import '../App.css'

class Counters extends Component {
    render() {
        console.log('Counters-Rendered');
        //this.props object destructuring
        const {onReset, onDelete, onIncrement, counters, onDecrement} = this.props;

        return(
            <React.Fragment>
                <button className="btn btn-primary btn-sm" onClick={onReset}>Reset</button>
                {counters.map(counter => 
                    <Counter
                         key={counter.id}
                         onDelete={onDelete}
                         onIncrement={onIncrement}
                        //  value={counter.value}
                        //  id={counter.id}
                        counter={counter}
                        onDecrement={onDecrement}
                    >
                        {/* children prop */}
                        <p>Counter #{counter.id} </p>
                    </Counter>
                    )
                }
            </React.Fragment>
        )
    }
}

export default Counters;