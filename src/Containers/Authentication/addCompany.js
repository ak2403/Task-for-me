import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUserCompany } from '../../Redux/Actions/authenticationActions'

class AddCompany extends Component {
    state = {
        company_data: {
            name: '',
            location: '',
            created_by: ''
        }
    }

    changeValue = (name, value) => {
        let { company_data } = this.state
        company_data[name] = value
        this.setState({
            company_data
        })
    }

    onSubmit = () => {
        let { company_data } = this.state
        company_data['created_by'] = this.props.user_info._id
        this.props.addUserCompany(company_data)
    }

    render() {
        return <div>
            <div>
                <input onChange={e => this.changeValue('name', e.target.value)} />
            </div>
            <div>
                <input onChange={e => this.changeValue('location', e.target.value)} />
            </div>
            <button onClick={this.onSubmit}>Next</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addUserCompany }, dispatch)

const mapStateToProps = props => {
    let { Authentication } = props
    return {
        user_info: Authentication.user_info
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany)