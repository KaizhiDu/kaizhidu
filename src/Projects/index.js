import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './styles.scss';
import carInsurance from '../img/project/carInsurance.jpg';
import community from '../img/project/community.jpg';
import emaily from '../img/project/emaily.jpg';
import erp from '../img/project/erp.png';
import eshopping from '../img/project/eshopping.png';
import personWeb from '../img/project/personWeb.jpg';
import profile from '../img/project/profile.jpg';
import candyStore from '../img/project/candyStore.png';
import duiCloud from '../img/project/dui-cloud.png';
import { Button } from '@mui/material';
import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({
  xl: 2000,
  lg: 1200,
  md: 900,
  sm: 600,
  xs: 0
});

export default function TitlebarBelowImageList() {
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 'sm' || breakpoint === 'xs';

  const [show, setShow] = useState(null);

  return (
    <ImageList cols={isMobile ? 1 : 3} sx={{ width: isMobile ? 415 : 1300, marginTop: 10 }}>
      {itemData.map((item, idx) => {
        const { img, title, author, gitHubUrl, description, demo } = item || {};
        const isShow = idx === show;
        return (
          <ImageListItem key={img} style={{ marginRight: 15, marginBottom: 20 }}>
            <div
              className="project-img-section"
              onMouseOver={() => setShow(idx)}
              onMouseOut={() => setShow(null)}
            >
              <img
                src={`${img}?w=320&fit=crop&auto=format`}
                srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={title}
                width={415}
                height={250}
                loading="lazy"
              />
              <div className={isShow ? 'project-img-section-wording-show' : 'project-img-section-wording' }>
                <p style={{
                  width: 250,
                  overflowWrap: 'normal'
                }}>
                  {description}
                </p>
              </div>
              <div className={isShow ? 'project-img-section-button-show' : 'project-img-section-button' }>
                <Button
                  onClick={() => {
                    window.open(demo || gitHubUrl, 'blank');
                  }}
                  variant="contained"
                >
                  {demo ? 'DEMO' : 'KNOW MORE'}
                </Button>
              </div>
            </div>

            {/*<ImageListItemBar*/}
            {/*  style={{*/}
            {/*    backgroundColor: 'white',*/}
            {/*    padding: 8*/}
            {/*  }}*/}
            {/*  title={item.title}*/}
            {/*  subtitle={<span>by: {item.author}</span>}*/}
            {/*  position="below"*/}
            {/*/>*/}

            <ImageListItemBar
              title={title}
              subtitle={author}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: duiCloud,
    title: 'Dui Cloud Machinery Management System',
    gitHubUrl: 'https://github.com/KaizhiDu/',
    demo: 'https://www.dui-cloud.com',
    // eslint-disable-next-line max-len
    description: 'This project base on AWS serverless, dynamoDB, Graphql, combined with front-end react. Completed a machine management platform that can support multiple clients. Here is a link to the demo:'
  },
  {
    img: candyStore,
    title: 'Easy Candy Store',
    gitHubUrl: 'https://github.com/KaizhiDu/easy-candy-store',
    // eslint-disable-next-line max-len
    description: 'When learning AWS service, use dynamoDB, and api gateway finished a easy demo project. the front-end use react.'
  },
  {
    img: carInsurance,
    title: 'Car Insurance',
    gitHubUrl: 'https://github.com/KaizhiDu/carInsurance',
    // eslint-disable-next-line max-len
    description: 'During my graduate period, I had a course called 510: Software Planning and Development, and this project was a class project.'
  },
  {
    img: community,
    title: 'Community',
    gitHubUrl: 'https://github.com/KaizhiDu/community',
    // eslint-disable-next-line max-len
    description: 'When learning java and spring framework, use a blog system made by spring boot. The front desk uses els template rendering.'
  },
  {
    img: emaily,
    title: 'Emaily',
    gitHubUrl: 'https://github.com/KaizhiDu/Emaily',
    // eslint-disable-next-line max-len
    description: 'When learning react, follow the udemy course and complete a simple mail management system. The technology used is react framework.'

  },
  {
    img: erp,
    title: 'Bingzheng Mechanical Management System',
    gitHubUrl: 'https://github.com/KaizhiDu/Bingzheng-Mechanical-Management-System',
    // eslint-disable-next-line max-len
    description: 'Using the spring framework combined with front-end technology to provide Bingzheng Machinery Company with a basic version of the management software'
  },
  {
    img: eshopping,
    title: 'E-Shooping',
    gitHubUrl: 'https://github.com/KaizhiDu/eshopping-clothing',
    description: 'When learning react and nodeJs, follow udemy courses, and complete a full-stack E-shopping project'
  },
  {
    img: personWeb,
    title: 'Personal Web V1',
    gitHubUrl: 'https://github.com/KaizhiDu/kaizhi-s-website',
    // eslint-disable-next-line max-len
    description: 'After learning react and nodeJS, I completed the first version of my personal webpage based on what I learned.'
  },
  {
    img: profile,
    title: 'Developer Connector',
    gitHubUrl: 'https://github.com/KaizhiDu/profile',
    // eslint-disable-next-line max-len
    description: 'When learning react and nodeJs, follow udemy courses, and complete a full-stack project which is a project for programmer communication platform'
  }
];
