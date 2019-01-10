import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import Panel from '../../Components/panel'
import General from './children/general'
import Developers from './children/developers'
import Projects from './children/projects'

class Manage extends Component {
    render() {
        let { view } = this.props

        let panel_options = [{
            text: 'General',
            route: '/manage_company'
        }, {
            text: 'Developers',
            route: '/manage_company/developers'
        }, {
            text: 'Projects',
            route: '/manage_company/projects'
        }]

        let render_DOM = {
            general: <General />,
            developers: <Developers />,
            projects: <Projects />
        }

        return (<React.Fragment>
            <h1>Manage</h1>
            <div className="app-panel-container">
                <div className="panel-container">
                    <Panel options={panel_options} />
                </div>
                <div className="panel-content-container">
                    {render_DOM[view]}
                </div>
            </div>
        </React.Fragment>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = props => {
    let { manage } = props
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Manage))