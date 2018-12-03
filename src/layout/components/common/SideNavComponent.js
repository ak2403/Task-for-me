import React, { Component } from 'react';

class SideNavComponent extends Component{
    
    render(){
        
        return (
            <div className="nav-side-layout">
                <div className="nav-logo-layout">Logo</div>
                <ul className="nav-options">
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Tasks</span>
                    </li>
                    <li>
                        <span>Features</span>
                    </li>
                </ul>
                <div className="nav-logout-layout">
                </div>
            </div>
        )
    }
}

export default SideNavComponent;