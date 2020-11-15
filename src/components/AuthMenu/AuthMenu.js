import React from 'react'
import {NavLink} from 'react-router-dom'

const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    activeLink: {
      color: '#4267B2',
    },
  };

const AuthMenu = () => (
    <nav>
        
        <NavLink
        exact
        to='/register'
        style={styles.link}
        activeStyle={styles.activeLink}
        >
            Register
        </NavLink>

        <NavLink
        exact
        to='/login'
        style={styles.link}
        activeStyle={styles.activeLink}
        >
            Log in
        </NavLink>
        
    </nav>
)

export default AuthMenu