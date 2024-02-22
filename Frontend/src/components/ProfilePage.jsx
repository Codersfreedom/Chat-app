import React from 'react'
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <div className='Profile-container'>
            <div className="profile">
                <div className="profile-pic">
                    <img src="" alt="profile" />
                </div>
                <div className="profile-info">
                    <h3>John Doe</h3>
                    <p>Username</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
