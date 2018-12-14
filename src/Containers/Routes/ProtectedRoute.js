import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class ProtectedRoute extends Component{

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if(!get_token){
            this.props.history.push('/login')
        }
    }

    render(){
        let Component = this.props.component
        return (<div>
            <Component />
        </div>)
    }
}

export default withRouter(ProtectedRoute)