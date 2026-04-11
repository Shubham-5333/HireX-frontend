import React from 'react';
import { FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';
import './FindJob.css';

const jobs = [
  { id: 1, title: 'Frontend Engineer', company: 'TechNova', location: 'Remote', salary: '$120k - $150k', type: 'Full-time' },
  { id: 2, title: 'Product Designer', company: 'Creative Studio', location: 'New York, NY', salary: '$90k - $110k', type: 'Contract' },
  { id: 3, title: 'Backend Developer', company: 'DataFlow Inc.', location: 'San Francisco, CA', salary: '$140k - $170k', type: 'Full-time' }
];

const FindJob = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-header flex-header">
        <div>
          <h1 className="page-title">Find a Job</h1>
          <p className="page-subtitle">Discover opportunities that match your skills.</p>
        </div>
        <div className="search-bar">
          <input type="text" className="input-field" placeholder="Search by title, company, or keywords..." />
        </div>
      </div>
      
      <div className="job-listings">
        {jobs.map(job => (
          <div key={job.id} className="job-card card transition-hover">
            <div className="job-header">
              <h3 className="job-title">{job.title}</h3>
              <span className="job-type">{job.type}</span>
            </div>
            <p className="job-company">{job.company}</p>
            
            <div className="job-meta">
              <span className="meta-item"><FiMapPin /> {job.location}</span>
              <span className="meta-item"><FiDollarSign /> {job.salary}</span>
              <span className="meta-item"><FiClock /> Posted 2 days ago</span>
            </div>
            
            <div className="job-actions">
              <button className="btn-primary">Apply Now</button>
              <button className="btn-secondary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJob;
