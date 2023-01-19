import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
        <Fragment>
            <Link className='nav-link' to='/login'>Login</Link>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
        </Fragment>
    );

    const authLinks = () => (
        <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
    );

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Health Tracker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {isAuthenticated ? authLinks() : guestLinks()}
                        </div>
                    </div>
                    <span className='navbar-text text-right'>Your data is protected!</span>
                </div>
            </nav>
            {redirect && <Navigate to='/' />}
        </Fragment >
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);