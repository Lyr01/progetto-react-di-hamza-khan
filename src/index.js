import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from "./components/Error"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BooksInfo from './components/BooksInfo';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
       <App />
      </Route>
      <Route path="/Book/:id" children={<BooksInfo />}></Route>
     <Route path="*">
        <Error />
     </Route>
    </Switch>
  </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
