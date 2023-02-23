/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './styles.scss';
import profile from '../profile.jpeg';
import background2 from '../img/background2.jpeg';
import { createBreakpoint } from 'react-use';
const useBreakpoint = createBreakpoint({
  xl: 1563,
  lg: 1200,
  md: 900,
  sm: 600,
  xs: 0
});
const MyTimeline = () => {
  useEffect(() => {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  rgba(16, 16, 16, 0.8)),url(${background2})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'cover';
  }, []);

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'sm' || breakpoint === 'xs';

  return (
    <div className={isMobile ? 'myTimeline-mobile' : 'myTimeline' }>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="11/2010 – Present"
          style={{ color: '#e86971' }}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>

          {/*<img src={background2} width={300} height={200}/>*/}

          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>

          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2009 – 11/2010"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
          <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>

          <img src={profile} width={100} height={100}/>

          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={(
            <div
              style={{
                display: 'block',
                float: 'left',
                padding: '10px',
                background: 'rgb(150, 150, 150)',
                color: '#fff'
              }}
            >
                    11/2008 – 04/2009
            </div>
          )}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3>Title, Company</h3>
          <h4>Subtitle</h4>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
          <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
          </p>
        </TimelineItem>

      </Timeline>
    </div>
  );
};

export default MyTimeline;
