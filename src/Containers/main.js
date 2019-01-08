import React, { Component } from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommonRoute from './Routes/CommonRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import LoginForm from './Authentication/loginForm';
import SignUp from './Authentication/signUp';
import AddCompany from './Authentication/addCompany';
import DashboardView from './Dashboard';
import ProjectView from './Project';
import IssueView from './Issues';
import DetailView from './Issues/single-issue'
import { retrieveCall } from '../Redux/Actions/authenticationActions';

class MainRoute extends Component {
    componentDidMount = () => {
        if (!this.props.sign_user_id) {
            this.props.retrieveCall()
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-main">
                    <Switch>
                        <CommonRoute exact path='/login' component={LoginForm} />
                        <CommonRoute exact path='/signup' component={SignUp} />
                        <Route exact path='/company/add-company' component={AddCompany} />

                        <ProtectedRoute exact path='/dashboard' component={DashboardView} />
                        <ProtectedRoute exact path='/projects' component={ProjectView} />
                        <ProtectedRoute exact path='/issues' component={IssueView} />
                        <ProtectedRoute exact path='/issue/:issueID' component={DetailView} />
                        <Redirect to="/dashboard" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ retrieveCall }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        sign_user_id: authentication.sign_user_id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute)

// import React, { Component } from 'react';
// import Home from './Home.js';
// import SearchResultPage from './SearchResularPage.js';
// import { Switch, Route, BrowserRouter } from 'react-router-dom'


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'siva',
//       searchText: 'sivaprakash'
//     };
//     //this.handleClick = this.handleClick.bind(this);
//   }
//   render() {
//     return (
//       <div className="shopping-list">

//         <BrowserRouter>

//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/SearchResultPage' render={() =>
//               <SearchResultPage SearchText={this.state.searchText} />
//             } />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;