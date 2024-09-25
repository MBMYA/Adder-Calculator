import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './views/Calculator';
import Landing from './views/Landing';

const history = createBrowserHistory();

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  return (
    <Component />
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
      <Routes>
        <Route element={<PublicRoute component={Landing}/>} path="/" />
          <Route element={<PublicRoute component={Calculator}/>} path="/calculator" />
      </Routes>
    </Router>
);
