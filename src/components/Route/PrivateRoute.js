import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {authSelectors} from '../../redux/auth'

const PrivateRoute = ({
    isAuthenticated, 
    component: Component, 
    ...routeProps
    }) =>( 
        <Route
            {...routeProps}
            render={props => 
            isAuthenticated ? <Component {...props}/> : <Redirect to='/login'/>
            }
        />
    );

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state)
  })

export default connect(mapStateToProps)(PrivateRoute)