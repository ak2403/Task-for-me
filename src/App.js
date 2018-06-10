import React, {Component} from 'react';
import {BrowserRouter,Route,Router} from 'react-router-dom';
import LeftNavigator from './basic/leftNavigator';

const home = ()=> <div>Home</div>
class App extends Component{
    render(){
        return (
            <div>
                    <LeftNavigator />
                <BrowserRouter>
                    <Route path='/' component={home} />
                </BrowserRouter>
                </div>
        )
    }
}

export default App;