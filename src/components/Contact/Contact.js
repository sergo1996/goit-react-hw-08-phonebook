import React from 'react'
import styles from './Contact.module.css'
import {connect} from 'react-redux'
import contactsOperations from '../../redux/contacts/contactsOperations'
import PropTypes from 'prop-types';
import contactsSelectors from '../../redux/contacts/contactsSelectors'

const Contact = ({name,number , onRemove}) => {
    // console.log('Comtact re-render', name)
    return(
    <li className={styles.contact}>
    <p className={styles.contactData}>{name}</p>
    <p className={styles.contactData}>{number}</p>
    <button 
    className={styles.button} 
    onClick={onRemove}
    >X</button>
    </li>
    
    )}

const mapStateToProps = (state,ownProps) => {
    const contact = contactsSelectors.getContactById(state, ownProps.id)
 
 return {...contact}
};


const mapDispatchToProps = (dispatch, ownProps) =>({
    onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Contact);


Contact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onRemove: PropTypes.func
}