import React,{Component} from 'react'
import {connect} from 'react-redux'
import styles from './Form.module.css'
import Logo from '../components/Logo/Logo'
import authOperations from '../redux/auth/authOperations'

class LoginView extends Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onLogin(this.state)
        this.setState({name:'', email:'', password:''})
    }
    render(){
        const {email,password} = this.state
        return(
        <div>
        <Logo name={'Login Page'}/>   
        <form onSubmit={this.handleSubmit} className={styles.form}>

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

          <button className={styles.btn} type="submit">Log In</button>
        </form>
        </div>    
        )
    }
}

export default connect(null, {onLogin: authOperations.login})(LoginView)
