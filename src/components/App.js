import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Switch} from 'react-router-dom'
import {authOperations, authSelectors} from '../redux/auth'
import {contactsSelectors} from '../redux/contacts'
import {PrivateRoute, PublicRoute} from './Route'
import Layout from './Layout/Layout'
import routes from '../routes'


class App  extends Component {

  componentDidMount(){
    this.props.onGetCurrentUser()
  }
 
  render(){
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Layout>
            {this.props.isLoadingContacts && <h1> LOADING...</h1>}
              <Switch>
                  {routes.map(route => 
                    route.private ?  
                    <PrivateRoute key={route.path} {...route}/> : 
                    <PublicRoute 
                    key={route.path} 
                    {...route} 
                    restricted={route.restricted}/>
                  )}
              </Switch>
          </Layout>
        </Suspense>
    </BrowserRouter>
  )}
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state) ,
  isAuthenticated: authSelectors.isAuthenticated(state)
})

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
