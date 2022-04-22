import React from 'react'
import { Link } from 'react-router-dom'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form action='/login' method='post'>
                <label for='username'>Username</label>
                <input type='text' id='username' name='username' autoFocus required></input>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' required></input>
                <button className='btn'>Login</button>
                <div className='question'>
                    <Link to='/Register'> Don't have an account yet ? <span> Click here</span></Link>
                </div>
            </form>
        </div>
    )
}

export default Form 