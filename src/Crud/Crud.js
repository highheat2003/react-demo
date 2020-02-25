import React from 'react';
import AllPostContainer from "./AllPostContainer";
import './Crud.css'
import PostFormContainer from "./PostFormContainer";

const Crud = () => (
    <div className="App">
        <h1>CRUD with Redux</h1>
        참고 : <a href="https://codeburst.io/redux-a-crud-example-abb834d763c9" target="_blank">
                https://codeburst.io/redux-a-crud-example-abb834d763c9
               </a>
        <PostFormContainer />
        <AllPostContainer />
    </div>
)

export default Crud;
