import React, {useState} from 'react';
import {decrement, increment, plusNumber} from "../../../slice/counterSlice";
import {useDispatch} from "react-redux";

const CountChanger = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(0)

    function handleAdd() {
        dispatch(increment())
        // setCounter(prevState => prevState + 1)
    }

    function handleDec() {
        dispatch(decrement())
        // setCounter(prevState => prevState - 1)
    }

    function handleAddCustom() {
        dispatch(someAction({}))
    }
    function handleRemoveCustom() {
        dispatch(plusNumber(value))
    }

    return (
        <div>
            <button onClick={handleAdd}>plus</button>
            <button onClick={handleDec}>minus</button>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={handleCustom}>add custom</button>
            <button onClick={handleCustom}>minus custom</button>
        </div>
    );
};

export default CountChanger;
