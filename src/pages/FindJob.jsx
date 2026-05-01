import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';
import './FindJob.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyJobs, findJobs } from '../features/jobSlice';
import { toast } from 'react-toastify';
// import { useState } from 'react';

// const jobs = [
//   { id: 1, title: 'Frontend Engineer', company: 'TechNova', location: 'Remote', salary: '$120k - $150k', type: 'Full-time' },
//   { id: 2, title: 'Product Designer', company: 'Creative Studio', location: 'New York, NY', salary: '$90k - $110k', type: 'Contract' },
//   { id: 3, title: 'Backend Developer', company: 'DataFlow Inc.', location: 'San Francisco, CA', salary: '$140k - $170k', type: 'Full-time' }
// ];



const FindJob = () => {
  const dispatch = useDispatch()
  const appliedjobs = useSelector((state) => state.jobs.appliedJobs);
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('https://hirex-backend-hlth.onrender.com/api/findJob', {
        method: 'GET',
        credentials: 'include'
      })
      const data = await response.json()
      console.log(data.foundData);
      if (response.ok) {
        dispatch(findJobs(data.foundData))
        setJobs(data.foundData)
      }

    }
    fetchJobs()
  }, [])

  const handleApply =async (jobId) => {
    
    try {
      const response = await fetch('https://hirex-backend-hlth.onrender.com/api/applyJob',{
        method:'POST',
        credentials:'include',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({jobId}) 
        
      })
      const data = await response.json()
      toast(data.message)
      console.log("chekcinkg hte id", jobId);
      dispatch(applyJobs(jobId))
    } catch (error) {
      
    }

  } 


  return (
    <div className="page-container animate-fade-in">

      <div className="page-header flex-header">
        <div>
          <p className="page-subtitle">Discover opportunities that match your skills.</p>
        </div>
        <div className="search-bar">
          <input type="text" className="input-field" placeholder="Search by title, company, or keywords..." />
        </div>
      </div>

      <div className="job-listings">

        {jobs.map(job => (
          <div key={job._id} className="job-card card transition-hover">
            <div className="job-header">
              <h3 className="job-title">{job.title}</h3>
              <span className="job-type">{job.type}</span>
            </div>
            <p className="job-company">{job.company}</p>

            <div className="job-meta">
              <span className="meta-item"><FiMapPin /> {job.location}</span>
              <span className="meta-item"><FaRupeeSign />{job.salaryFrom}-{job.salaryTo} LPA</span>
              <span className="meta-item"><FiClock /> Posted 2 days ago</span>

            </div>
            <p className="job-description">{job.description}</p>

            <div className="job-actions">
              <button className="btn-primary" onClick={() => handleApply(job._id,)}>Apply Now</button>
              {/* <button className="btn-secondary">View Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJob;
