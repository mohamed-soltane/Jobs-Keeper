import React, { useContext, Fragment } from 'react';
import JobContext from '../../context/job/jobContext';
import JobItem from './JobItem';

const Jobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs } = jobContext;
    return ( 
        <Fragment>
            {jobs.map(job => (
            <JobItem  key={job.id}  job={job}/>
            ))}
        </Fragment>
     );
}
 
export default Jobs;