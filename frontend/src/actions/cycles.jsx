import axios from 'axios'
import { 
    GET_CYCLE_SUCCESS,
    GET_CYCLE_FAIL,
    ADD_CYCLE_SUCCESS,
    ADD_CYCLE_FAIL,
    DELETE_CYCLE_SUCCESS,
    DELETE_CYCLE_FAIL,
 } from './types'

export const getCycle = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tracker/`, config)
            dispatch({
                type: GET_CYCLE_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            console.log(`err: ${err}`)
            dispatch({
                type: GET_CYCLE_FAIL
            })
        }
    } else {
        dispatch({
            type: GET_CYCLE_FAIL
        })
    }
 }

 export const deleteCycle = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/tracker/${id}/`, config)

        dispatch({
            type: DELETE_CYCLE_SUCCESS,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: DELETE_CYCLE_FAIL
        })
    }
 }

 export const addCycle = ({startDate, endDate}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const body = JSON.stringify({ 
        start_date: startDate.toISOString().slice(0,10) , 
        end_date: endDate.toISOString().slice(0,10), 
        duration: Math.floor((endDate - startDate) / (1000*60*60*24))
    })

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/tracker/`, body, config)
    
        dispatch({
            type: ADD_CYCLE_SUCCESS,
            payload: res.data,
        })
    } catch(err) {
        dispatch({
            type: ADD_CYCLE_FAIL,
        })
    }
 }
