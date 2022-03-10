import React from 'react';
import ReactDOM from 'react-dom';
import {MoralisProvider} from 'react-moralis';
import "./assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
		<MoralisProvider serverUrl="https://ktx9slty1spy.usemoralis.com:2053/server" appId="qB8zVHSILn5P7HXNkkzplE3RIEmfpE9giGGT3WKP">
			<App />
		</MoralisProvider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
