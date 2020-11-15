import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {authSelectors} from '../../redux/auth'

const PublicRoute = ({
    isAuthenticated, 
    component: Component, 
    ...routeProps}) => (
        <Route
        {...routeProps}
        render={props=>
            isAuthenticated && routeProps.restricted ? 
            <Redirect to='/contacts'/> :  
            <Component {...props}/>
        }
        />
    );

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state)
  })


export default connect(mapStateToProps)(PublicRoute)