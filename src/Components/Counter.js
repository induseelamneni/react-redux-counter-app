import { Component } from "react"
import {store} from "../Store/store"
import { increment } from "../Store/actions/CounterAction"
import { decrement } from "../Store/actions/CounterAction"

export default class Counter extends Component {

    constructor(props){
       super(props)
       this.state = {counter :0}
       
    }

    componentDidMount() {
        this.updatedCounter()
        store.subscribe(this.updatedCounter.bind(this))
    }

    updatedCounter(){
        const state = store.getState()
        this.setState({
            counter : state.counter,
           })

    }

    onIncrement() {
        store.dispatch(increment())
    }

    onDecrement() {
        store.dispatch(decrement())
    }

    render(){
        return(
            <div>
                <h1>Using Redux building Counter Application</h1>
                <div>{this.state.counter}</div>
                <div>
                <button type="button" onClick={this.onIncrement}>Increment</button>
                <button type="button" onClick={this.onDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}