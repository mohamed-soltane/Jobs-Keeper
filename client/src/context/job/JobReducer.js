import {
    ADD_JOB,
    DELETE_JOB,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_JOB,
    FILTER_JOBS,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch(action.type) {
    case ADD_JOB:
        return { 
            ...state,
            jobs: [...state.jobs, action.payload]
          };
          case DELETE_JOB:
        return { 
            ...state,
            jobs: state.jobs.filter(job => job.id !== action.payload)
        };
        case UPDATE_JOB:
        return { 
            ...state,
            jobs: state.jobs.map(job =>
            job.id === action.payload.id ? action.payload : job
            )
        };
        case SET_CURRENT:
        return { 
            ...state,
            current: action.payload
        };
        
        case CLEAR_CURRENT:
        return { 
            ...state,
            current: null
        };
        default:
           return state;
    }
};