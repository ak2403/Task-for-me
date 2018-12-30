import React, { Component } from 'react'
import Button from '../../Components/button'
import Modal from '../../Components/modal'
import IssueAddition from './children/IssueAddition'

class IssueComponent extends Component {
    state = {
        toggleAdd: false
    }

    toggleModal = () => this.setState({ toggleAdd: !this.state.toggleAdd })

    render() {
        let { toggleAdd } = this.state
        
        return <React.Fragment>
            <div className="content-header">
                <h1>Issues</h1>
                <Button className="add-issue" text="Add New Issue" onClick={this.toggleModal} />
            </div>
            {/* <ProjectList /> */}

            {toggleAdd ? <Modal title="Add Issue" content={<IssueAddition />} closeModal={this.toggleModal} /> : ''}
        </React.Fragment>
    }
}

export default IssueComponent