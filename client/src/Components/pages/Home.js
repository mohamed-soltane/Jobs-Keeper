import React from 'react';
import Jobs from '../Jobs/Jobs';
import JobForm from '../Jobs/JobForm';


const Home = () => {
    return (
    <div className="grid-2">
        <div>
          <JobForm />  
        </div>
        <div>
           <Jobs /> 
        </div>
    </div>
    );
}
 
export default Home;