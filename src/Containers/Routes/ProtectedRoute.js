import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetSettings } from '../../Redux/Actions/authenticationActions'

class ProtectedRoute extends Component {

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if (!get_token) {
            this.props.history.push('/login')
        }
    }

    shouldComponentUpdate = nextProps => {
        let { is_user_logout, user_info } = nextProps

        if (is_user_logout) {
            localStorage.removeItem('authToken')
            this.props.history.push('/login')
            this.props.resetSettings()
        }

        if(user_info.hasOwnProperty('is_company_added')){
            if(!user_info.is_company_added && (this.props.history.identify && this.props.history.identify !== 'add-company')){
                this.props.history.push('/company/add-company')
            }
        }

        return true
    }

    render() {
        let Component = this.props.component
        return (<div>
            <Component />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ resetSettings }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_logout: authentication.is_user_logout,
        user_info: authentication.user_info
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute))