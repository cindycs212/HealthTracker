import React, {useState} from "react";
import { connect } from "react-redux";
import { getCycle, deleteCycle, addCycle } from "../actions/cycles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";

const Tracker = ({isAuthenticated, cycles, getCycle, deleteCycle, addCycle}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if (cycles != null && cycles.length === 0) {
            getCycle()
        }
    }, [cycles])

    return (
        <>
            <div>All Cycles</div>
            <button className='btn btn-success btn-sm' data-bs-toggle='modal' data-bs-target='#addCycle'>
                Add New Cycle
            </button>
            <div className='modal fade' id='addCycle' tabindex='-1' aria-labelledby='addCycleLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='addCycleLabel'>Add New Cycle</h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <div>
                            <label>Start Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </div>
                        <div>
                            <label>End Date</label>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                        </div>
                        {
                            (endDate >= startDate) 
                            ? ''
                            : <div style={{color:'red'}}>Invalid End Date</div>
                        }
                        
                    </div>
                    <div className='modal-footer'>
                        <button 
                        type='button' 
                        className='btn btn-primary'
                        onClick={() => addCycle({startDate, endDate})}
                        data-bs-dismiss='modal'
                        disabled={endDate < startDate}>
                            Save Changes
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles && cycles.map(cycle => (
                            <tr key={cycle.id}>
                                <td>{cycle.start_date}</td>
                                <td>{cycle.end_date}</td>
                                <td>
                                    {cycle.duration}
                                </td>
                                <td>
                                <button 
                                className='btn btn-danger btn-sm mx-2'
                                onClick={() => deleteCycle(cycle.id)}>
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    cycles: state.cycles.cycles,
})

export default connect(mapStateToProps, {getCycle, deleteCycle, addCycle})(Tracker)
