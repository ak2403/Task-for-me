import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from '../../../Components/table'
import { getIssues } from '../../../Redux/Actions/issue-actions'

class IssueList extends Component {
    componentDidMount = () => {
        this.props.getIssues()
    }

    render() {
        let { issues } = this.props

        return (<div>
            <Table data={issues} />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getIssues
}, dispatch)

const mapStateToProps = props => {
    let { issue } = props

    return {
        issues: issue.issues
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList)