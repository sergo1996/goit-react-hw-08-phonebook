import React,{Component} from 'react'
import {connect} from 'react-redux'
import styles from './Form.module.css'
import Logo from '../components/Logo/Logo'
import authOperations from '../redux/auth/authOperations'

class RegistrView extends Component{
    state={
        name:'',
        email:'',
        password:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onRegister(this.state)
        this.setState({name:'', email:'', password:''})
    }
    render(){
        const {name,email,password} = this.state
        return(
        <div>
        <Logo name={'Registration Page'}/>   
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor='name'>
            Name
          </label>
          <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
            />

          <label className={styles.label} htmlFor='password'>
            Password
          </label>
          <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
            />

          <button className={styles.btn} type="submit">Register</button>
        </form>
        </div>    
        )
    }
}


export default connect(null , {onRegister: authOperations.register})(RegistrView)
