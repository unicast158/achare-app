import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./Components/App/App";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            {/*<ReduxTest/>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
