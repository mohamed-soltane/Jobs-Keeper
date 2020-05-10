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
                id:"1",
                title:"Senior Enginer",
                companyName:"Facebook",
                location: 'New York',
                status: 'applied'
            },  {
                id:"1",
                title:"FrontEnd Enginer",
                companyName:"Amazon",
                location: 'Miami',
                status: 'phome interview'
            }
        ]
    };
    const [state, dispatch] = useReducer(jobReducer, initialState);
    // Add Job
    const addJob = job => {
        job.id = uuid();
        dispatch({ type: ADD_JOB, payload: job })
    }

    // Delete Job

    // Set Current Job

    // Clear Current Job

    // Update Job

    // Filter Jobs

    // Clear filter
    return(
        <jobContext.Provider
            value={{
                jobs:state.jobs,
                addJob
            }}
            >
                {props.children}
        </jobContext.Provider>
    )
}

export default JobState;