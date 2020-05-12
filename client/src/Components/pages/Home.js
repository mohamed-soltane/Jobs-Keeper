import React, { useContext, useEffect }from 'react';
import Jobs from '../Jobs/Jobs';
import JobForm from '../Jobs/JobForm';
import JobFilter from '../Jobs/JobFilter';
import authContext from '../../context/auth/AuthContext';
import AuthContext from '../../context/auth/AuthContext'



const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  },[])
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