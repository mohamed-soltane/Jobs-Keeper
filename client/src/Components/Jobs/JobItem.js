import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import JobContext from '../../context/job/jobContext';


const JobItem = ({ job }) => {
    const jobContext = useContext(JobContext);
    const { deleteJob } = jobContext;


    const { id, title, companyName, status, location } = job;

    const onDelete = () => {
        deleteJob(id);
    }
    return ( 
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {title}{''}
                <span 
                    className={
                        'badge ' +
                        (status === 'applied' ? 'badge-success' : 'badge-primary')
                    }
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
            </h3>
            <ul className="list">
                {companyName && (
                    <li>
                       <i className='"fas fa-city"' />{companyName}
                    </li>
                )} {location && (
                    <li>
                      <i className='fas fa-map-marker-alt' /> {location}
                    </li>
                )}
            </ul>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

        </div>
     );
};
JobItem.propTypes = {
    job: PropTypes.object.isRequired
}
 
export default JobItem;