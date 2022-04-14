import React from 'react'
import { Link } from 'react-router-dom'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
              
                <label>Email</label>
                <input type='email'></input>
               
                <label>Password</label>
                <input type='password'></input>
               
                <button className='btn'>Submit</button>
                <div className='question'>
                <Link to='/Register'> Don't have an account yet ? <span> Click here</span></Link>
                </div>  
            </form>
        </div>
    )
}

export default Form 