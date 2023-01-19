import React, { useState } from 'react'
import { reset_password_confirm } from '../actions/auth'
import { connect } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    })

    const { new_password, re_new_password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const { uid, token } = useParams()

    const onSubmit = e => {
        e.preventDefault()
        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5 bg-light border rounded-3'>
            <div className='container-fluid py-5'>
                <h1>Reset Password</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='mb-3'>
                        <label for='exampleInputPassword1' className='form-label'>New Password</label>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='New Password'
                            name='new_password'
                            value={new_password}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='exampleInputEmail1' className='form-label'>Re-Enter New Password</label>
                        <input
                            className='form-control'
                            type='password'
                            placeholder='New Password'
                            name='re_new_password'
                            value={re_new_password}
                            onChange={e => onChange(e)}
                            minLength='8'
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)