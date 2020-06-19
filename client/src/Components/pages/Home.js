import React, { useContext, useEffect }from 'react';
import Jobs from '../Jobs/Jobs';
import JobForm from '../Jobs/JobForm';
import JobFilter from '../Jobs/JobFilter';
import Chart from '../chart/Chart';
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
          <Chart />
        </div>
        <div>
          <JobFilter />
           <Jobs /> 
        </div>
    </div>
    );
}
 
export default Home;