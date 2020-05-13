import React, {useReducer } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import jobContext from './jobContext';
import jobReducer from './jobReducer';
import {
    GET_JOBS,
    ADD_JOB,
    DELETE_JOB,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_JOB,
    FILTER_JOBS,
    CLEAR_JOBS,
    CLEAR_FILTER,
    JOB_ERROR
} from '../types';

const JobState = props => {
    const initialState = {
        jobs: null,
        current: null,
        filtered: null,
        error: null
    };
    const [state, dispatch] = useReducer(jobReducer, initialState);
    // Get Job
    const getJobs = async job => {
        try {
            const res = await axios.get('/api/jobs');
            dispatch({ type: GET_JOBS, payload: res.data });

        } catch(err) {
          dispatch({
              type: JOB_ERROR,
              payload: err.response.msg
          });
        }
    };

    // Add Job
    const addJob = async job => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/jobs', job, config);
            dispatch({ type: ADD_JOB, payload: res.data });

        } catch(err) {
          dispatch({
              type: JOB_ERROR,
              payload: err.response.msg
          });
        }
    };

    // Delete Job
    const deleteJob = async id => {
        try {
            await axios.delete(`/api/jobs/${id}`);
            dispatch({ 
                type: DELETE_JOB,
                payload: id
             });

        } catch(err) {
          dispatch({
              type: JOB_ERROR,
              payload: err.response.msg
          });
        }
        dispatch({ type: DELETE_JOB, payload: id });
    };

    //Clear Jobs
    const clearJobs = job => {
        dispatch({ type: CLEAR_JOBS });
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
                error:state.error,
                addJob,
                deleteJob,
                setCurrent,
                clearCurrent,
                updateJob,
                filterJobs,
                clearFilter,
                getJobs,
                clearJobs

            }}
            >
                {props.children}
        </jobContext.Provider>
    )
}

export default JobState;