import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { AddCompanyCall } from '../../../redux/actions/user-actions'

class AddCompany extends Component {
    state = {
        company_data: {
            name: '',
            theme: ''
        }
    }

    changeValue = (name, value) => {
        let { company_data } = this.state
        company_data[name] = value
        this.setState({
            company_data: company_data
        })
    }

    shouldComponentUpdate = nextProps => {
        let { is_user_logged, user } = nextProps

        if (is_user_logged) {
            if(user.is_company_added){
                this.props.history.push('/projects')    
            }
        } else {
            this.props.history.push('/login')
        }

        return true
    }

    componentDidMount = () => {

    }

    onSubmit = () => {
        this.props.AddCompanyCall(this.state.company_data)
    }

    render() {
        let { name, theme } = this.state.company_data
        return (
            <div>
                <div>
                    <input value={name} onChange={e => this.changeValue('name', e.target.value)} />
                </div>
                <div>
                    <input value={theme} onChange={e => this.changeValue('theme', e.target.value)} />
                </div>
                <div>
                    <button onClick={this.onSubmit}>Add Company</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => {
    let { user } = props

    return {
        is_user_logged: user.is_user_logged,
        user: user.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    AddCompanyCall
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCompany))