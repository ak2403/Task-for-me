import React from 'react'
import {Link} from 'react-router-dom'

const SideBarNav = (props) => {
    let { menu } = props

    let nav_DOM = menu.map(list => {
        return <div><Link to={`/${list.route}`}>{list.text}</Link></div>
    })

    return (<div className="rui-side-nav">
        <div className="nav-logo">

        </div>
        <div className="rui-nav-list">
            {nav_DOM}
        </div>
    </div>)
}

SideBarNav.defaultValue = {
    menu: []
}

export default SideBarNav