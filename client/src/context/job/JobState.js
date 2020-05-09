import React, {useReducer } from 'react';
import uuid from 'uuid';
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
                email:"Google@gmail.com",
                phone:"610-969-8044",
                location: 'San francisco'
            },
            {
                id:"1",
                title:"Senior Enginer",
                companyName:"Facebook",
                email:"Facebook@gmail.com",
                phone:"610-969-8044",
                location: 'New York'
            },  {
                id:"1",
                title:"FrontEnd Enginer",
                companyName:"Amazon",
                email:"Amazon@gmail.com",
                phone:"610-969-8044",
                location: 'Miami'
            }
        ]
    };
    const [state, dispatch] = useReducer(jobReducer, initialState);
    // Add Job

    // Delete Job

    // Set Current Job

    // Clear Current Job

    // Update Job

    // Filter Jobs

    // Clear filter
    return(
        <jobContext.Provider
            value={{
                jobs:state.jobs
            }}
            >
                {props.children}
        </jobContext.Provider>
    )
}

export default JobState;