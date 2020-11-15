import React from 'react'
import styles from './Logo.module.css'
import { CSSTransition} from 'react-transition-group'
import transitions from '../transitions.module.css'


const Logo = ({name}) => (
    <div className={styles.logo}>
    <CSSTransition in={true} appear={true} classNames={transitions} timeout={500} >
    <h1 className={styles.title}>{name}</h1>
    </CSSTransition>
    </div>
)

export default Logo;