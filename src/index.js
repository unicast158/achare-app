import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from './store/store'
import App from "./Components/App/App";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            {/*<ReduxTest/>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
