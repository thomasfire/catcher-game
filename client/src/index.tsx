import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './view/App';
import store from './store/store'
import {Provider} from 'react-redux'
import bg2 from '../assets/bg2.png';
import './tailwind.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
            }}>
                <App/>
            </div>
        </Provider>
    </React.StrictMode>
);
