import React, { useEffect } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import profilePhoto from '../../img/profile-photo.png';
import { Button } from '@mui/material';
const background = 'https://public-bucket-kaizhidu.s3.us-west-2.amazonaws.com/background5.jpeg';

function Profile({ isMobile }) {
  useEffect(() => {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    // )[0].style.backgroundImage = `url(${background3})`;
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),rgba(16, 16, 16, 0.8)),url(${background})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'cover';
  }, []);

  const history = useHistory();

  return (
    <div className={isMobile ? 'card-container-mobile' : 'card-container'}
      style={{
        marginTop: isMobile ? 0 : -500
      }}
    >
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
        <Button
          onClick={() => history.push('/projects')}
          variant="contained">
                    PROJECT
        </Button>
        <Button
          onClick={() => history.push('/timeline')}
          style={{ marginLeft: 10 }} variant="contained">
                    KNOW ME MORE
        </Button>

      </div>
    </div>
  );
}

export default Profile;
