import React, { useState } from 'react'
import { reset_password } from '../actions/auth'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: ''
    })

    const { email } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        reset_password(email)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5 bg-light border rounded-3'>
            <div className='container-fluid py-5'>
                <h1>Forgot Password?</h1>
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
                    <button type='submit' className='btn btn-primary'>Reset Password</button>
                </form>
                <p className='mt-3'>
                    Don't have an account? <Link to='/signup'>Signup</Link>
                </p>
                <p className='mt-3'>
                    Remembered your password? <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default connect(null, { reset_password })(ResetPassword)
