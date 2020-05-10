import React, { useState, useContext } from 'react';
import JobContext from '../../context/job/jobContext';


const JobForm = () => {
    const jobContext = useContext(JobContext);
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
        jobContext.addJob(job);
        setJob({
            title:'',
            companyName:'',
            location:'',
            status:'applied'
            });
        };
 
    return ( 
        <form onSubmit={onSubmit}>
           <h2 className="text-primary">Add Job</h2>
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
                value="Add Job" 
                className="btn btn-primary btn-block" />
            </div>
            
           
        </form>
     );
}
 
export default JobForm;