import React, { useContext, Fragment } from 'react';
import JobContext from '../../context/job/jobContext';
import JobItem from './JobItem';

const Jobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, filtered } = jobContext;

    if (jobs.length === 0) {
        return <h4> Please Add  a Job </h4>
    }
    return ( 
        <Fragment>
            {filtered !== null 
            ? filtered.map(job => (
              <JobItem  key={job.id}  job={job} />
              )) 
            : jobs.map(job => (
                <JobItem  key={job.id}  job={job} />
                ))
            }
        </Fragment>
     );
}
 
export default Jobs;