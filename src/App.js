import React, {Component} from 'react';
import {BrowserRouter,Route,Router} from 'react-router-dom';
import LeftNavigator from './basic/leftNavigator';
import TopNavigator from './basic/topNavigator';

class App extends Component{
    render(){
        return (
            <div className="main-container">
                    <LeftNavigator />
                    <TopNavigator />
                <BrowserRouter>
                </BrowserRouter>
                </div>
        )
    }
}

export default App;