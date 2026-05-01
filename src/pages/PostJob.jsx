import React from 'react';
import './PostJob.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { postJobs } from '../features/jobSlice';

const PostJob = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    salaryFrom: 0,
    salaryTo: 0,
    type:''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleJobPosting = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/jobPosting', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data);
      toast(data.message)
      if(response.ok){
        dispatch(postJobs(data.jobsData))
        setFormData({
          title: '',
          company: '',
          description: '',
          location: '',
          salaryFrom: 0,
          salaryTo: 0,
          type:''
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Post a Job</h1>
        <p className="page-subtitle">Find the best talent for your organization.</p>
      </div>

      <div className="card">
        <form className="post-job-form" onSubmit={handleJobPosting}>
          <div className="input-group">
            <label className="label-field">Job Title</label>
            <input type="text" name='title' value={formData.title} className="input-field" placeholder="e.g. Senior React Developer" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label className="label-field">Company Name</label>
            <input type="text" name='company' value={formData.company} className="input-field" placeholder="e.g. Acme Corp" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label className="label-field">Job Description</label>
            <textarea className="input-field textarea-field" value={formData.description} name='description' rows="6" placeholder="Describe the role and responsibilities..." onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <div className="input-group flex-1">
              <label className="label-field">Location</label>
              <input type="text" name='location' value={formData.location} className="input-field" placeholder="e.g. Remote, New York" onChange={handleChange} />
            </div>
            <div className="input-group flex-1">
              <label className="label-field">Salary Range From</label>
              <input type="number" name='salaryFrom' value={formData.salaryFrom} className="input-field" placeholder="e.g. 10" onChange={handleChange} />
            </div>
            <div className="input-group flex-1">
              <label className="label-field">Salary Range To</label>
              <input type="number" name='salaryTo' value={formData.salaryTo} className="input-field" placeholder="e.g. 40" onChange={handleChange} />
            </div>
            <div className="input-group flex-1">
              <label className="label-field">Type</label>
              <input type="text" name='type' value={formData.type} className="input-field" placeholder="e.g. full-time" onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-4">Post Job Listing</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
