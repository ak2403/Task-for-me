import React from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

const MenuExampleInputs = () => (
  <Menu className="top-menu">
    <Menu.Item style={{ width: '50%' }}>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
    <Icon name='sign out' />
  </Menu>
)

export default MenuExampleInputs