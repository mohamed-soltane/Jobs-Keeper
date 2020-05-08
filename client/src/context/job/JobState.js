import React, {useReducer } from 'react';
import uuid from 'uuid';
import jobContext from './JobContext';
import jobReducer from './JobReducer';
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
                name:"Sara Watson",
                email:"Google@gmail.com",
                phone:"610-969-8044",
                type: 'personal'
            },
            {
                id:"2",
                name:"Jasmine Watson",
                email:"Google@gmail.com",
                phone:"610-969-8044",
                type: 'personal'
            },
            {
                id:"3",
                name:"samantha Watson",
                email:"Google@gmail.com",
                phone:"610-969-8044",
                type: 'personal'
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