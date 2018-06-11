import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import LeftNavigator from './basic/leftNavigator';
import TopNavigator from './basic/topNavigator';
import ProjectComponent from './layouts/projectComponent';

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="left-container">
                    <LeftNavigator />
                </div>
                <div className="right-container">
                    <TopNavigator />
                    <div>
                        <ProjectComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;