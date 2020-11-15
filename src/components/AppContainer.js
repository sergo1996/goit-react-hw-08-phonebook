import React, {Component} from 'react'
import {connect} from 'react-redux'
import App from './App'
import {contactsOperations} from '../redux/contacts'


class AppContainer extends Component {
    componentDidMount(){
        this.props.onFetchContacts()
    }

    render(){
        return (<App {...this.props}/>)
    }
}

const mapDispatchToProps ={
    onFetchContacts: contactsOperations.fetchContacts
}

export default connect(null,mapDispatchToProps)(AppContainer)