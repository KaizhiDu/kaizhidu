// eslint-disable-next-line max-len
import React from 'react';
import './styles.scss';
import { Divider, List, ListItem } from '@mui/material';
import wechat from '../../img/wechat.png';
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import web from '../../img/web.png';
import linkin from '../../img/linkin.png';
import github from '../../img/github.png';

const SocialMediaInfo = ({ isMobile }) => (
  <div className={isMobile ? 'socialMedia-container-mobile' : 'socialMedia-container'}>
    <List
      className="socialMediaList"
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem
        className="socialMediaItem"
        key={1}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">www.kaizhidu.com</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={web} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  Website
        </span>
      </ListItem>
      <Divider />

      <ListItem
        className="socialMediaItem"
        key={2}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">+1(626)-342-2297</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={phone} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  Phone
        </span>
      </ListItem>
      <Divider />

      <ListItem
        className="socialMediaItem"
        key={2}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">xiaobabao0807@gmail.com</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={email} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  Email
        </span>
      </ListItem>
      <Divider />

      <ListItem
        className="socialMediaItem"
        key={3}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">linkedin.com/in/kaizhi-du-1588a8181</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={linkin} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  LinkedIn
        </span>
      </ListItem>
      <Divider />

      <ListItem
        className="socialMediaItem"
        key={3}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">github.com/KaizhiDu</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={github} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  GitHub
        </span>
      </ListItem>
      <Divider />

      <ListItem
        className="socialMediaItem"
        key={3}
        disableGutters
        secondaryAction={
          <div className="socialMediaWebsite">dukaizhiUSA</div>
        }
      >
        <div className="socialMediaIcon">
          <img src={wechat} width="24" height="24" />
        </div>
        <span className="socialMediaName">
                  WeChat
        </span>
      </ListItem>
      <Divider />

    </List>

  </div>
);

export default SocialMediaInfo;
