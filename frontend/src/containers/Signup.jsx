import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { first_name, last_name, email, password, re_password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password)
            setAccountCreated(true)
        }
    }

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    if (accountCreated) {
        return <Navigate to='/login' />
    }

    return (
        <div className='container mt-5 bg-light border rounded-3'>
            <div className='container-fluid py-5'>
                <h1>Sign Up</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='mb-3'>
                        <label for='exampleInputEmail1' className='form-label'>Email</label>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputFirstName1' className='form-label'>First Name</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='First Name'
                            name='first_name'
                            value={first_name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputLastName1' className='form-label'>Last Name</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Last Name'
                            name='last_name'
                            value={last_name}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputPassword1' className='form-label'>Password</label>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputPassword2' className='form-label'>Confirm Password</label>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Confirm Password'
                            name='re_password'
                            value={re_password}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                </form>
                <p className='mt-3'>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
                <p className='mt-3'>
                    Forgot your password? <Link to='/reset-password'>Reset Password</Link>
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Signup)
