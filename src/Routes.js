import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aladin from "./Screens/Aladin";
import LionKing from "./Screens/LionKing";
import SpiderMan from "./Screens/SpiderMan";
import Header from "./Components/Header";
import Todo from "./Todo/Todo";
import Counter from "./Counter/Counter";
import Counter2Container from "./Counter/Counter2Container";
import Crud from "./Crud/Crud";
import ThunkDemo from "./Thunk/ThunkDemo";

export default () => (
    <Router>
        <Header />
        <Route path="/aladin" component={Aladin} />
        <Route path="/lionking" component={LionKing} />
        <Route path="/spiderman" component={SpiderMan} />
        <Route path="/todo" component={Todo}/>
        <Route path="/counter" component={Counter} />
        <Route path="/counter2" component={Counter2Container} />
        <Route path="/crud" component={Crud} />
        <Route path="/thunkdemo" component={ThunkDemo} />
    </Router>
)

