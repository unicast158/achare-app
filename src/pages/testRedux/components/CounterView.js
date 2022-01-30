import React from 'react';
import {useSelector} from "react-redux";

const CounterView = () => {

    const [counter, title] = useSelector((store => [store.counter.counterValue, store.counter.pageTitle]))

    return (
        <div>
            <h1>{title}</h1>
            counter is : {counter}
        </div>
    );
};

export default CounterView;
