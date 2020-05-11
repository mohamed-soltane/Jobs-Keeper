import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <TransitionGroup >
            {filtered !== null 
            ? filtered.map(job => (
                <CSSTransition  key={job.id} timeout={500}  classNames="item">
                   <JobItem   job={job} />
                </CSSTransition>
              )) 
            : jobs.map(job => (
                <CSSTransition  key={job.id} timeout={500}  classNames="item">
                    <JobItem job={job} />
                </CSSTransition>
                ))
            }
            </TransitionGroup>
        </Fragment>
     );
}
 
export default Jobs;