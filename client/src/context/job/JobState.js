import React, {useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import jobContext from './jobContext';
import jobReducer from './jobReducer';
import {
    ADD_JOB,
    DELETE_JOB,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_JOB,
    FILTER_JOBS,
    CLEAR_FILTER
} from '../types';

const JobState = props => {
    const initialState = {
        jobs: [
            {
                id:"1",
                title:"Junior Enginer",
                companyName:"Google",
                location: 'San francisco',
                status: 'applied'
            },
            {
                id:"2",
                title:"Senior Enginer",
                companyName:"Facebook",
                location: 'New York',
                status: 'applied'
            },  {
                id:"3",
                title:"FrontEnd Enginer",
                companyName:"Amazon",
                location: 'Miami',
                status: 'phome interview'
            }
        ],
        current: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(jobReducer, initialState);

    // Add Job
    const addJob = job => {
        job.id = uuid();
        dispatch({ type: ADD_JOB, payload: job });
    };

    // Delete Job
    const deleteJob = id => {
        dispatch({ type: DELETE_JOB, payload: id });
    };

    // Set Current Job
    const setCurrent = job => {
        dispatch({ type: SET_CURRENT, payload: job });
    };

    // Clear Current Job
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT});
    };

    // Update Job
    const updateJob = job => {
        dispatch({ type: UPDATE_JOB, payload: job });
    };

    // Filter Jobs
    const filterJobs = text => {
        dispatch({ type: FILTER_JOBS, payload: text });
    };

    // Clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER});
    };

    return(
        <jobContext.Provider
            value={{
                jobs:state.jobs,
                current: state.current,
                filtered: state.filtered,
                addJob,
                deleteJob,
                setCurrent,
                clearCurrent,
                updateJob,
                filterJobs,
                clearFilter



            }}
            >
                {props.children}
        </jobContext.Provider>
    )
}

export default JobState;