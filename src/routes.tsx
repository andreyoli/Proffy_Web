import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Lading from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Lading}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/teach" component={TeacherForm}/>
        </BrowserRouter>
    )
};

export default Routes;