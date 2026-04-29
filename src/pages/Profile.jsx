import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
import './profile.css'
import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {
    const[user,setUser] = useState("jon doe")
    useEffect(() => {
        const fetchProfile = async () => {


            const response = await fetch("http://localhost:5000/api/profile", {
                method: 'GET',
                // headers: {
                //     "Content-Type": "application/json"
                // },
                credentials: "include"
            });
            const data = await response.json()
            setUser(data.user)
            console.log("sdfsdf",data.user);
        }
        fetchProfile() 

    }, [])
    return (
        <div className="profile-container">
            {/* Header */}
            <div className="profile-header">
                {/* <img
          className="profile-avatar"
          src="https://i.pravatar.cc/150"
          alt="avatar"
        /> */}
                <IoPersonCircle className='profile-avatar' />


                <div>
                    <h2>{user.name}</h2>
                    <p className="role">Frontend Developer</p>
                </div>
            </div>

            {/* Content */}
            <div className="profile-grid">
                <div className="card">
                    <h3>About</h3>
                    <p>
                        Passionate React developer who loves building clean UI and smooth UX.
                    </p>
                </div>

                <div className="card">
                    <h3>Details</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Location:</strong> India</p>
                    <p><strong>Joined:</strong> 2024</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
