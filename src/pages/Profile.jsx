import React, { useEffect, useState } from 'react';
import { FiMail, FiMapPin, FiBriefcase, FiEdit3, FiAward, FiGithub, FiLinkedin, FiCalendar } from 'react-icons/fi';
import './profile.css';

const Profile = () => {
    const [user, setUser] = useState({ name: "Loading...", email: "Loading..." });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/profile", {
                    method: 'GET',
                    credentials: "include"
                });
                const data = await response.json();
                if (data.user) {
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };
        fetchProfile();
    }, []);

    // Placeholder data for premium UI display
    const details = {
        title: 'Software Developer',
        location: 'Remote, IN',
        about: 'Passionate developer who loves building clean UI, smooth UX, and scalable backend services. Dedicated to continuous learning and open-source contributions.',
        skills: ['React', 'Node.js', 'JavaScript', 'CSS/SCSS', 'MongoDB', 'UI/UX'],
        joined: '2024'
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="page-header flex-header">
                <div>
                    <h1 className="page-title">My Profile</h1>
                    <p className="page-subtitle">Manage your personal information and settings.</p>
                </div>
                {/* <button className="btn-primary">
                    <FiEdit3 /> Edit Profile
                </button> */}
            </div>

            <div className="profile-grid">
                {/* Left Column */}
                <div className="profile-main">
                    <div className="card profile-header-card transition-hover">
                        <div className="profile-cover"></div>
                        <div className="profile-avatar-container">
                            <div className="profile-avatar">
                                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                        </div>
                        <div className="profile-basic-info">
                            <h2 className="profile-name">{user.name}</h2>
                            <p className="profile-title"><FiBriefcase /> {details.title}</p>
                            
                            <div className="profile-contact-row">
                                <span className="contact-item"><FiMapPin /> {details.location}</span>
                                <span className="contact-item"><FiMail /> {user.email}</span>
                                <span className="contact-item"><FiCalendar /> Joined {details.joined}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card profile-section transition-hover">
                        <h3 className="section-title">About Me</h3>
                        <p className="section-content">{details.about}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="profile-sidebar">
                    <div className="card profile-section transition-hover">
                        <h3 className="section-title"><FiAward /> Top Skills</h3>
                        <div className="skills-container">
                            {details.skills.map((skill, index) => (
                                <span key={index} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* <div className="card profile-section transition-hover">
                        <h3 className="section-title">Social Links</h3>
                        <div className="social-links">
                            <a href="#" className="social-link"><FiGithub /> GitHub</a>
                            <a href="#" className="social-link"><FiLinkedin /> LinkedIn</a>
                        </div>
                    </div> */}
                    
                    {/* <div className="card profile-section transition-hover resume-upload-card">
                        <h3 className="section-title">Resume</h3>
                        <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>Upload your latest resume to apply for jobs faster.</p>
                        <button className="btn-secondary" style={{width: '100%'}}>Upload Resume</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
