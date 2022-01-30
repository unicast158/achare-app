import React, {useState} from 'react';
import CountChanger from "./components/CountChanger";
import CounterView from "./components/CounterView";

const ReduxTest = () => {

    return (
        <div>
            <CountChanger/>
            <CounterView/>
        </div>
    );
};

export default ReduxTest;
