import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import axios from 'axios'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
    }

    const loginGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url)
        } catch (err) {

        }
    }

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5 bg-light border rounded-3'>
            <div className='container-fluid py-5'>
                <h1>Login</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputEmail1' className='form-label'>Email</label>
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
                        <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
                <button className='btn btn-danger mt-3' onClick={loginGoogle}>Continue with Google</button>
                <p className='mt-3'>
                    Don't have an account? <Link to='/signup'>Signup</Link>
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

export default connect(mapStateToProps, { login })(Login)
