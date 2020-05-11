import React from 'react';
import Jobs from '../Jobs/Jobs';
import JobForm from '../Jobs/JobForm';
import JobFilter from '../Jobs/JobFilter';



const Home = () => {
    return (
    <div className="grid-2">
        <div>
          <JobForm />  
        </div>
        <div>
          <JobFilter />
           <Jobs /> 
        </div>
    </div>
    );
}
 
export default Home;