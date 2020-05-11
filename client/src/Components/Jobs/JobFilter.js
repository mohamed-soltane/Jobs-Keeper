import React, { useContext, useRef, useEffect } from 'react';
import JobContext from '../../context/job/jobContext';

const JobFilter = () => {
    const jobContext = useContext(JobContext);
    const text = useRef('');
    const { filterJobs, clearFilter, filtered} = jobContext;

    useEffect(() => {
       if(filtered === null) {
           text.current.value= '';
       }
    })
    
    const onChange = e => {
       if(text.current.value !== '') {
           filterJobs(e.target.value);
       }else {
           clearFilter();
       }
    }
    return ( 
        <div>
           <form>
               <input ref={text} type="text" placeholder=" Filter Jobs ..."
               onChange={onChange} />
           </form>
        </div>
     );
}
 
export default JobFilter;