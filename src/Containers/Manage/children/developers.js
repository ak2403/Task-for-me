import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Button from '../../../Components/button'
import Modal from '../../../Components/modal'
import AddMembers from '../Modal/AddMembers'

class Developers extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal })

    render() {
        let { showModal } = this.state

        return (<React.Fragment>
            <Button text="Add members" onClick={this.toggleModal} />

            {showModal ? <Modal title="Invite Members" content={<AddMembers />} closeModal={this.toggleModal} /> : ''}
        </React.Fragment>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = props => {
    let { manage } = props
    return {
        company_details: manage.company_details
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Developers)