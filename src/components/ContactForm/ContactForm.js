import React, {Component} from 'react'
import {connect} from 'react-redux'
import contactsOperations from '../../redux/contacts/contactsOperations'
import styles from './ContactForm.module.css'

class ContactForm extends Component{

    state={
        name:'',
        number:''
    }


    handleChange= e => {
        const {name, value } = e.target
            this.setState({[name]:value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const {name,number} = this.state
        if (name && number){
        this.props.onAddContact(name,number)
        this.setState({name:'', number:''})
        } 
    }

    render(){
        const {name, number} = this.state
        return(
            <>
            
            <form className={styles.contactForm} onSubmit={this.handleSubmit}>
            <label 
                htmlFor='name'
                className={styles.contactFormItem}

                >Name</label>
            <input
                className={styles.contactFormItem}
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={this.handleChange}
                
            />
            <label 
                htmlFor='phone'
                className={styles.contactFormItem}
            >Phone</label>

            <input
            className={styles.contactFormItem}
            type='text'
            id='phone'
            name='number'
            value={number}
            onChange={this.handleChange}
            />

            <button 
            className={styles.contactBtn}
            >Add contact</button>

            </form>
            </>
        )
    }
}


const mapDispatchToProps = {
    onAddContact: contactsOperations.addContact
}

export default connect(null,mapDispatchToProps)(ContactForm)