import React from 'react'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'
import {authSelectors} from '../../redux/auth'
import Logo from '../Logo/Logo'
import styles from './Navigation.module.css'

// const styles = {
//     link: {
//       display: 'inline-block',
//       textDecoration: 'none',
//       padding: 12,
//       fontWeight: 700,
//       color: '#2A363B',
//     },
//     activeLink: {
//       color: '#4267B2',
//     },
//   };

const Navigation = ({isAuthenticated}) => (
    <nav>
    { isAuthenticated ?
      <NavLink
      exact
      to='/contacts'
      className={styles.link}
      activeClassName={styles.activeLink}
      >
          Contacts
      </NavLink> :
      <Logo name={'Phonebook'}/>
    }
        
    </nav>
)

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation)