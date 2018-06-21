import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/authentication';

class TopNavigator extends Component {
  constructor(props) {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (<Menu className="top-menu">
      <Menu.Item style={{ width: '50%' }}>
        <Input className='icon' icon='search' placeholder='Search...' />
      </Menu.Item>
      <Icon name='sign out' onClick={this.logout} />
    </Menu>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: logout
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TopNavigator)