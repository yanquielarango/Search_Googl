import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { ResultContextProvider } from "./contexts/ResultContexProvider";
import './index.css';

import App from './App';

ReactDOM.render(
<ResultContextProvider>
<Router>
    <App />
</Router>
</ResultContextProvider>, document.getElementById('root'));

