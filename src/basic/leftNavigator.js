import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical className='left-navigator'>
        <Menu.Item
          name='Projects'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Tasks'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}