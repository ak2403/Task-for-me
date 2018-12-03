import React, { Component } from 'react';
import SideNavComponent from '../common/SideNavComponent';
import TaskComponent from '../Tasks';

class PrivateRoute extends Component {
  constructor() {
    super();
    this.state = {
      nav_minimize: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => this.setState({ nav_minimize: !this.state.nav_minimize })

  render() {
    let { nav_minimize } = this.state;
    return (
      <div className="main-layout">
        <div className={nav_minimize ? "mini-nav-layout" : "nav-layout"}>
          <SideNavComponent toggleFunc={this.toggleNav} />
        </div>

        <div className="content-layout">
          <div className="content-nav-layout"></div>
          <div className="main-content-layout">
            <this.props.component />
          </div>
        </div>
      </div>
    );
  }
}

export default PrivateRoute;