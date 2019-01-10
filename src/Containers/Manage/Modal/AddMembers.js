import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {inviteMembers} from '../../../Redux/Actions/manage-actions'

class AddMembers extends Component {
    state = {
        members: [{
            email: ''
        }]
    }

    changeValue = (value, index) => {
        let { members } = this.state
        members[index].email = value
        this.setState({
            members: members
        })
    }

    submitMembers = (e) => {
        e.preventDefault()
        this.props.inviteMembers(this.state)
    }

    render() {
        return <div>
            <form onSubmit={this.submitMembers}>
                <input onChange={e => this.changeValue(e.target.value, 0)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    inviteMembers
}, dispatch)

const mapStateToProps = props => {
    let { manage } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMembers)