import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import FormInput from '../../Components/input/form-input'
import { getCompany } from '../../Redux/Actions/manage-actions'

class Manage extends Component {
    state = {
        edit_details: {}
    }

    componentDidMount = () => this.props.getCompany()

    shouldComponentUpdate = nextProps => {
        let { company_details } = nextProps
        let { edit_details } = this.state

        if (_.isEmpty(edit_details)) {
            this.setState({
                edit_details: company_details
            })
        }

        return true
    }

    render() {
        let { edit_details } = this.state

        return (<div>
            Manage
            <form>
                <FormInput label="Name of the Company" value={edit_details.name} />
            </form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getCompany
}, dispatch)

const mapStateToProps = props => {
    let { manage } = props
    return {
        company_details: manage.company_details
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage)