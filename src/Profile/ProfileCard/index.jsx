import React from 'react';
import './styles.scss';
import profilePhoto from '../../img/profile-photo.png';
import { Button } from '@mui/material';

function Profile({ isMobile }) {
  return (
    <div className={isMobile ? 'card-container-mobile' : 'card-container'}>
      <div className="upper-container">
        <div className={isMobile ? 'image-container-mobile' : 'image-container'}>
          <img className="profile-image" src={profilePhoto} alt="" height="100px" width="100px"/>
        </div>
      </div>
      <div className="lower-container">
        <h3 className="profile-name">Kevin Du</h3>
        <h4 className="profile-position">Software engineer</h4>
        <p className="profile-introduction">For me, most of the
                    happiness comes from solving problems, especially solving problems independently,
                    not from how big the CASE is and how much bonus it has.</p>
        <Button variant="contained">
                    PROJECT
        </Button>
        <Button style={{ marginLeft: 10 }} variant="contained">
                    KNOW ME MORE
        </Button>

      </div>
    </div>
  );
}

export default Profile;
