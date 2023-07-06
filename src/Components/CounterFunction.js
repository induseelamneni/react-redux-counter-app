import { useEffect, useState } from "react"
import { store } from "../Store/store"
import { decrement, increment } from "../Store/actions/CounterAction"

function CounterFunction(){
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        updateCounter()
        store.subscribe(updateCounter)

    },[])

    function updateCounter(){
        const state = store.getState()
        setCounter(state.counter)
    }

    function onIncrementBtn () {
          store.dispatch(increment())
    }

    function onDecrementBtn (){
        store.dispatch(decrement())

    }

    return(
        <div>
            <h1>Counter application using reduxstore and functional components</h1>
            <div>
                <div>{counter}</div>
                <div>
                    <button type="button" onClick={onIncrementBtn}>Increment</button>
                    <button type="button" onClick={onDecrementBtn}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default CounterFunction