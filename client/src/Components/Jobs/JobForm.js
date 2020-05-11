import React, { useState, useContext, useEffect } from 'react';
import JobContext from '../../context/job/jobContext';


const JobForm = () => {
    const jobContext = useContext(JobContext);

    const { addJob, clearCurrent, updateJob, current} = jobContext;
   
    useEffect(() => {
        if(current !== null) {
            setJob(current);
        } else {
            setJob({
                title:'',
                companyName:'',
                location:'',
                status:'applied'
            });
        }
        },[jobContext, current]);

    const [job, setJob] = useState({
        title:'',
        companyName:'',
        location:'',
        status:'applied'
    });

    const { title, companyName, status, location } = job;

    const onChange = e => setJob({
        ...job, [e.target.name]: e.target.value 
    });
    const onSubmit = e => {
        e.preventDefault();
        if(current === null ){
            addJob(job);
        }else {
            updateJob(job)

        }
        clearAll();
        };

    const clearAll = () => {
       clearCurrent();
    }
 
    return ( 
        <form onSubmit={onSubmit}>
           <h2 className="text-primary">{current ? 'Edit Job' : 'Add Job'}</h2>
           <input 
              type='text' 
              placeholder='title' 
              name='title'
              value={title}
              onChange={onChange}
            />
           <input 
              type='text' 
              placeholder='Company Name' 
              name='companyName'
              value={companyName}
              onChange={onChange}
            />
           <input 
              type='text' 
              placeholder='Location' 
              name='location'
              value={location}
              onChange={onChange}
            />
            <input 
                type="radio" 
                name="status" 
                value="applied" 
                checked={status === 'applied'}
                onChange={onChange}
                /> Applied{''}
            <input 
                type="radio" 
                name="status" 
                value="phone interview" 
                checked={status === 'phone interview'}
                onChange={onChange}
                /> Phone interview{''}
            <input 
                type="radio" 
                name="status" 
                value="onSite interview" 
                checked={status === 'Onsite interview'}
                onChange={onChange}
                /> Onsite interview {''}
            <div>
            <input 
                type="submit" 
                value= {current ? 'Update Job' : 'Add Job'} 
                className="btn btn-primary btn-block" />
            </div>
            {current && (
                <div>
                    <button className='btn btn-ligth btn-block' 
                    onClick={clearAll}
                    >
                        Clear
                    </button>
                </div>
            )}
            
           
        </form>
     );
}
 
export default JobForm;