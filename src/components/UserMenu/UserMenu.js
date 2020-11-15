import React from 'react'
import { connect } from 'react-redux'
import styles from './UserMenu.module.css'
import {authSelectors, authOperations} from '../../redux/auth'

const UserMenu = ({name, onLogout}) => {
    return (
    <div className={styles.menu}>
        <span className={styles.title}> Welcome, {name}</span>
        <button 
        onClick={onLogout}
        className={styles.btn}
        >Log out</button>
    </div>
    )
}

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state)
})
const mapDispatchToProps ={
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)


