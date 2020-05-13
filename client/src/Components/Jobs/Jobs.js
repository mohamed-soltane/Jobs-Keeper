import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import JobContext from '../../context/job/jobContext';
import Spinner from '../layout/Spinner'
import JobItem from './JobItem';

const Jobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, filtered, getJobs, loading } = jobContext;

    useEffect(() => {
        getJobs();
        // eslint -disable-next-line
    }, []);

    if (jobs !== null && jobs.length === 0 && !loading) {
        return <h4> Please Add  a Job </h4>
    }
    return ( 
        <Fragment>
            {jobs !== null && !loading ? ( <TransitionGroup >
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
            </TransitionGroup>) : <Spinner />}
           
        </Fragment>
     );
}
 
export default Jobs;