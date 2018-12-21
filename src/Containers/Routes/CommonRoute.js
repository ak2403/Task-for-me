import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class CommonRoute extends Component{

    componentDidMount = () => {
        let get_token = localStorage.getItem('authToken')
        if(get_token){
            this.props.history.push('/dashboard')
        }
    }

    render(){
        let Component = this.props.component
        return (<div>
            <Component />
        </div>)
    }
}

export default withRouter(CommonRoute)