import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../../Redux/Actions/authenticationActions'

class DashboardView extends Component{
    render(){
        return <div>
            <button onClick={this.props.logoutUser}>Logout</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch)

const mapStateToProps = props => {
    let { Authentication } = props
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)