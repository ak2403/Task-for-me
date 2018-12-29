import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../Components/input/text-input'
import Button from '../../Components/button'
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

    onSubmit = (e) => {
        e.preventDefault()
        let { company_data } = this.state
        company_data['created_by'] = this.props.user_info._id
        this.props.addUserCompany(company_data)
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    text="Name of the company"
                    placeholder="Enter the company name"
                    onChange={e => this.changeValue('name', e.target.value)} />

                <Input
                    type="text"
                    text="Location of the company"
                    placeholder="Enter the company location"
                    onChange={e => this.changeValue('location', e.target.value)} />

                <button onClick={this.onSubmit}>Next</button>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addUserCompany }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        user_info: authentication.user_info
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany)