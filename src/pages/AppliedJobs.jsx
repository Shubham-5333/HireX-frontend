import React from 'react';
import { FiClock, FiMapPin, FiBriefcase, FiCheckCircle, FiXCircle, FiClock as FiPending } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import './AppliedJobs.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AppliedJobs = () => {
    const[appliedJobs,setAppliedJobs] = useState([])
    const mockJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechNova",
            location: "Remote",
            appliedDate: "2026-04-25",
            status: "Reviewed",
            type: "Full-time"
        },
        {
            id: 2,
            title: "React Native Engineer",
            company: "AppFlow",
            location: "San Francisco, CA",
            appliedDate: "2026-04-20",
            status: "Pending",
            type: "Contract"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "New York, NY",
            appliedDate: "2026-04-10",
            status: "Rejected",
            type: "Full-time"
        },
        {
            id: 4,
            title: "Senior Software Engineer",
            company: "DataFlow Inc.",
            location: "Remote",
            appliedDate: "2026-04-05",
            status: "Accepted",
            type: "Full-time"
        }
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Accepted':
                return <span className="status-badge status-accepted"><FiCheckCircle /> {status}</span>;
            case 'Reviewed':
                return <span className="status-badge status-reviewed"><FiCheckCircle /> {status}</span>;
            case 'Rejected':
                return <span className="status-badge status-rejected"><FiXCircle /> {status}</span>;
            default:
                return <span className="status-badge status-pending"><FiPending /> {status}</span>;
        }
    };

    useEffect(() => {
        const appliedData = async () => {
            const response = await fetch("http://localhost:5000/api/appliedJobs", {
                method: 'GET',
                credentials: 'include'
            })
            
            const data = await response.json()   
            toast(data.message) 
            console.log("get",data.allAppliedJobs);
            setAppliedJobs(data.allAppliedJobs)
        }
        appliedData()
    }, []) 

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header flex-header">
                <div>
                    <h1 className="page-title">Applied Jobs</h1>
                    <p className="page-subtitle">Track the status of your job applications.</p>
                </div>
            </div>

            <div className="applied-jobs-list">
                {appliedJobs.length === 0 ? (
                    <div className="empty-state card">
                        <h3>No Applications Yet</h3>
                        <p className="text-muted">You haven't applied to any jobs. Start exploring opportunities!</p>
                    </div>
                ) : (
                    appliedJobs.map(job => (
                        <div key={job._id} className="card applied-job-card transition-hover">
                            <div className="job-info">
                                <div className="job-title-row">
                                    <h3 className="job-title">{job.title}</h3>
                                    {/* {getStatusBadge(job.status)} */}
                                </div>
                                <p className="job-company"><FiBriefcase /> {job.company}</p>

                                <div className="job-meta">
                                    <span className="meta-item"><FiMapPin /> {job.location}</span>
                                    <span className="meta-item"><FiClock /> Applied on {job.appliedDate}</span>
                                    <span className="meta-item type-badge">{job.type}</span>
                                </div>
                                <p className="job-description"> {job.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;
