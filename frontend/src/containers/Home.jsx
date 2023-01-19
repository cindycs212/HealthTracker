import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Tracker from '../components/Tracker'

const Home = ({ isAuthenticated }) => {

    const guestHome = () => (
        <Fragment>
            <h5>Welcome to</h5>
            <h1 className='text-center'>Health Tracker</h1>
            <p className='text-center mb-4'>Monitor your health and protect your data</p>
            <div className='d-grid gap-4 col-6 mx-auto'>
                <Link className='btn btn-danger btn-lg' to='/signup' role='button'>Sign Up</Link>
                <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </Fragment>
    )
    const authHome = () => (
        <Fragment>
            <h1 className='text-center'>Welcome back!</h1>
            <span>Health history</span>
            <Tracker />
        </Fragment>
    )

    return (
        <div className='container mt-5 bg-light border rounded-3'>
            <div className='container-fluid py-5'>
                {isAuthenticated ? authHome() : guestHome()}
                {/* {authHome()} */}
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(Home)


