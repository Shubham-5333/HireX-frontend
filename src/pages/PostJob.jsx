import React from 'react';
import './PostJob.css';
import { useState } from 'react';

const PostJob = () => {
  const [formData,setFormData] = useState({
    title:'',
    company:'',
    description:'',
    location:'',
    salary:0
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleJobPosting = async(e)=>{
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/jobPosting',{
        method:'POST',
        headers:{
          "Content-Type":'application/json',
        },
        credentials:'include',
        body:JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data);
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
            <input type="text" name='title' className="input-field" placeholder="e.g. Senior React Developer" onChange={handleChange} />
          </div>
          
          <div className="input-group">
            <label className="label-field">Company Name</label>
            <input type="text" name='company' className="input-field" placeholder="e.g. Acme Corp" onChange={handleChange}/>
          </div>
          
          <div className="input-group">
            <label className="label-field">Job Description</label>
            <textarea className="input-field textarea-field" name='description' rows="6" placeholder="Describe the role and responsibilities..." onChange={handleChange}></textarea>
          </div>
          
          <div className="form-row">
            <div className="input-group flex-1">
              <label className="label-field">Location</label>
              <input type="text" name='location' className="input-field" placeholder="e.g. Remote, New York" onChange={handleChange}/>
            </div>  
            <div className="input-group flex-1">
              <label className="label-field">Salary Range</label>
              <input type="text" name='salary' className="input-field" placeholder="e.g. $100k - $150k" onChange={handleChange}/>
            </div>
          </div>
          
          <button type="submit" className="btn-primary mt-4">Post Job Listing</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
