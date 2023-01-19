import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { checkAuthenticated, load_user, googleAuthenticate } from '../actions/auth'
import { useLocation } from 'react-router-dom'

const Layout = ({ checkAuthenticated, load_user, googleAuthenticate, children }) => {
    let location = useLocation()
    const queryString = require('query-string')

    useEffect(() => {
        const values = queryString.parse(location.search)
        const state = values.state ? values.tate : null
        const code = values.code ? values.code : null

        console.log('State: ' + state)
        console.log('Code: ' + code)

        if (state && code) {
            googleAuthenticate(state, code)
        } else {
            checkAuthenticated()
            load_user()
        }
    }, [location])

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default connect(null, { checkAuthenticated, load_user, googleAuthenticate })(Layout)
