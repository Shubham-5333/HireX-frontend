import React from 'react';
import './PostJob.css';

const PostJob = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Post a Job</h1>
        <p className="page-subtitle">Find the best talent for your organization.</p>
      </div>
      
      <div className="card">
        <form className="post-job-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="label-field">Job Title</label>
            <input type="text" className="input-field" placeholder="e.g. Senior React Developer" />
          </div>
          
          <div className="input-group">
            <label className="label-field">Company Name</label>
            <input type="text" className="input-field" placeholder="e.g. Acme Corp" />
          </div>
          
          <div className="input-group">
            <label className="label-field">Job Description</label>
            <textarea className="input-field textarea-field" rows="6" placeholder="Describe the role and responsibilities..."></textarea>
          </div>
          
          <div className="form-row">
            <div className="input-group flex-1">
              <label className="label-field">Location</label>
              <input type="text" className="input-field" placeholder="e.g. Remote, New York" />
            </div>
            <div className="input-group flex-1">
              <label className="label-field">Salary Range</label>
              <input type="text" className="input-field" placeholder="e.g. $100k - $150k" />
            </div>
          </div>
          
          <button type="submit" className="btn-primary mt-4">Post Job Listing</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
