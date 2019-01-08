import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../../Components/button'
import Modal from '../../Components/modal'
import IssueAddition from './children/issue-addition'
import IssueList from './children/issue-list'
import { resetSettings } from '../../Redux/Actions/issue-actions'

class IssueComponent extends Component {
    state = {
        toggleAdd: false
    }

    toggleModal = () => this.setState({ toggleAdd: !this.state.toggleAdd })

    shouldComponentUpdate = nextProps => {
        let { toggleAdd } = this.state
        let { is_issue_added } = nextProps

        if (toggleAdd && is_issue_added) {
            this.setState({
                toggleAdd: false
            })
            this.props.resetSettings()
        }
        
        return true
    }

    render() {
        let { toggleAdd } = this.state

        return <React.Fragment>
            <div className="content-header">
                <h1>Issues</h1>
                <Button className="add-issue" text="Add New Issue" onClick={this.toggleModal} />
            </div>
            <div className="content-elements">
                <IssueList />
            </div>

            {toggleAdd ? <Modal title="Add Issue" content={<IssueAddition />} closeModal={this.toggleModal} /> : ''}
        </React.Fragment>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    resetSettings
}, dispatch)

const mapStateToProps = props => {
    let { issue } = props
    return {
        is_issue_added: issue.is_issue_added
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueComponent)