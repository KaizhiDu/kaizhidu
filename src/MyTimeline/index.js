/* eslint-disable max-lines */
import React, { useEffect } from 'react';
import './styles.scss';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
// import StarIcon from '@mui/icons-material/Star';
import anchor from '../img/anchor.png';
import walks from '../img/walks.png';
import nightSpirits from '../img/nightSpirits.png';
import tozoo from '../img/tozoo.png';
import marverick from '../img/marverick.png';

const background = 'https://public-bucket-kaizhidu.s3.us-west-2.amazonaws.com/background2.jpeg';

const MyTimeline = () => {
  useEffect(() => {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  rgba(16, 16, 16, 0.8)),url(${background})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'contain';
  }, []);

  return (
    <div>

      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText={
            <div> 07/2020 – Present <WorkIcon className="title-icon"/> </div>
          }
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>Hornblower - Encore</h3>
          <h4 className="subTitle">Fullstack Sofeware Enginner</h4>
          <br/>

          <p>
            &ensp; After graduated, I joined <b>hornblower - Encore</b>, a great company that is thriving.
            The company is mainly engaged in online ticket sales business. The front-end of the Anchor uses the
            <b>React</b>, the back-end uses <b>graphQL, AWS serverless service - lambda and nosql database -
            DynamoDB</b>.
            <br/>
            &ensp; We have in-depth cooperation with many famous online ticketing platforms,
            such as: <b>expedia, getYourGuide, go city, viator, groupon</b> etc...
            In addition, due to the expansion of business territory, we have established cooperation with
            many companies, such as <b>Walks, Venture Ashore, Nightly Spirits, Toronto Zoo, Maverick Helicopter</b>,
            etc...
          </p>
          <p>
            &ensp; Encore has its own ticket sales system.
            - <b>Anchor</b>. I have contributed a lot to the Anchor platform,
            such as: <b>Water Taxi</b> system, <b>charter</b> (private Event) system, <b>Event Schedule</b> system, etc.
            <br/>
            <img
              src={anchor}
              width={80}
              height={35}
              style={{
                cursor: 'pointer',
                marginTop: 5
              }}
              onClick={() => {
                window.open('https://www.getanchor.io/', 'blank');
              }}
            />
          </p>
          <p>
            &ensp; <b>WALKS</b> is the first big project I was in charge of after joining the company,
            which is a guided tour-led project. I am mainly responsible for the development of the
            tour guide and coordinator system. <br/>
            <img
              src={walks}
              width={80}
              height={35}
              style={{
                cursor: 'pointer',
                marginTop: 5
              }}
              onClick={() => {
                window.open('https://www.takewalks.com/', 'blank');
              }}
            />
          </p>

          <p>
            &ensp; <b>NIGHTLY SPIRITS</b> is another important project that I am responsible for.
            In addition to being responsible for the tour guide and coordinator system, I am also responsible
            for the new wait list function.
            <br/>
            <img
              src={nightSpirits}
              width={80}
              height={35}
              style={{
                cursor: 'pointer',
                marginTop: 5
              }}
              onClick={() => {
                window.open('https://nightlyspirits.com/', 'blank');
              }}
            />
          </p>

          <p>
            &ensp; <b>TORONTO ZOO</b> is next important project that I am responsible for.
            I am mainly responsible for the implementation of membership functions, including generating and upgrading
            members, setting blackout date, import existing membership data and other functions.
            <br/>
            <img
              src={tozoo}
              width={80}
              height={35}
              style={{
                cursor: 'pointer',
                marginTop: 5
              }}
              onClick={() => {
                window.open('https://www.torontozoo.com/', 'blank');
              }}
            />
          </p>

          <p>
            &ensp; <b>MAVERICK</b> is next important project that I am responsible for.
            I am mainly responsible for the implementation of commission Template functions.
            <br/>
            <img
              src={marverick}
              width={80}
              height={35}
              style={{
                cursor: 'pointer',
                marginTop: 5
              }}
              onClick={() => {
                window.open('https://www.maverickhelicopter.com/', 'blank');
              }}
            />
          </p>

        </TimelineItem>

        <TimelineItem
          key="001"
          dateText={
            <div> 05/2019 – 08/2019 <WorkIcon className="title-icon"/> </div>
          }
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>Tap Series</h3>
          <h4 className="subTitle">Front-end Sofeware Enginner (CPT)</h4>
          <br />
          <p>
            &ensp; During my study at school, I found a job opportunity in CPT (Curricular Practical Training),
            which benefited from my internship experience in China.
          </p>
          <p>
            &ensp; The company I work for is called Tap Series, which is an online food safety training company.
            Mainly doing online courses and selling them. A government-recognized certificate is issued upon
            passing the course.
          </p>
          <p>
            &ensp; I am mainly responsible for the development of front-end in the company,
            mainly using HTML+CSS technology.
          </p>
        </TimelineItem>

        <TimelineItem
          key="001"
          dateText={
            <div> 01/2019 – 5/2020 <SchoolIcon className="title-icon"/> </div>
          }
          dateInnerStyle={{ background: '#61b8ff' }}

          style={{ color: '#61b8ff' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>California Lutheran University</h3>
          <h4 className="subTitle">Finish Master Degree</h4>
          <br/>
          <p>
            &ensp; After returned to the United States, I continued my graduate studies.
            After coming back this time, I met new friends and experienced many new interesting things.
            In addition, because of my work experience in China, I also successfully found a CPT job.
          </p>
          <p>
            &ensp; In the second half of the study, I also learned a lot from the courses.
            There are many courses that impress me. For example: IT 511 Data Communications and Networking;
            IT 531 Data Mining; IT 532 Data Warehousing and Business Intelligence
          </p>
          <p>
            &ensp; I completed my postgraduate study in May 2020 and obtained my master degree.
            I think my study career has come to an end for the time being.
            But I will definitely continue to study and further my education.
          </p>
        </TimelineItem>

        <TimelineItem
          key="001"
          dateText={
            <div> 05/2018 – 12/2018 <WorkIcon className="title-icon"/> </div>
          }
          style={{ color: '#e86971' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>Chao Xing</h3>
          <h4 className="subTitle">Sofeware Enginner Intern</h4>
          <br/>
          <p>
            &ensp; After returned to China, and finished the family affairs. I decided to take advantage of this time
            to find a company in China for an internship for a period of time. I interviewed several companies,
            and finally decided to intern at Beijing Chaoxing Company.
          </p>
          <p>
            &ensp; This is a very good company whose main business is university management system. I had a very
            memorable time with my colleagues. The project is mainly based on the J2EE JAVA management framework, which
            integrates multiple technologies such as JAVA mysql mybatis Jquery.
          </p>
          <p>
            &ensp; During my internship, I learned a lot and participated in many projects. For example: curriculum
            system, student course selection system, etc.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText={
            <div> 12/2017 – 02/2018 <SchoolIcon className="title-icon"/> </div>
          }
          style={{ color: '#61b8ff' }}
          dateInnerStyle={{ background: '#61b8ff' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>California Lutheran University</h3>
          <h4 className="subTitle">Start Master Degree</h4>
          <br/>
          <p>
            &ensp; After graduating from language school, I successfully applied to the graduate program at Cal Lutheran
            University, a comprehensive private university. The school has been recognized by WASC,
            an authoritative institution in the American education industry, and ranks 18th in the master
            rankings in the western United States.
          </p>
          <p>
            &ensp; My major is information technology. In addition to teaching me practical technology,
            I also taught IT-related management knowledge. The courses that impressed me the most are:
            IT 508 Information Technology Management; IT 510 Software Planning and Development;
            IT 514 Distributed Systems I learned a lot in these advanced courses.
          </p>
          <p>
            &ensp; However, due to family reasons, I decided in February 2018 to return to China to
            take a year off from school.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText={
            <div> 08/2016 – 11/2017 <SchoolIcon className="title-icon"/> </div>
          }
          style={{ color: '#61b8ff' }}
          dateInnerStyle={{ background: '#61b8ff' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>English Language School (ELS)</h3>
          <h4 className="subTitle">English Learner</h4>
          <br/>
          <p>
            &ensp; After graduating from college, I suddenly decided that I wanted to go abroad for graduate school.
            Because I feel that the United States will have more opportunities.
            Especially for programmers, California is a paradise of programmer. So I chose CA, USA.
          </p>
          <p>
            &ensp; Because the decision was in a hurry, I did not have more time to prepare for the TOEFL test,
            so I found the ELS (English Language School) project on the Internet,
            and wanted to learn English abroad first, and then do postgraduate study.
          </p>
          <p>
            &ensp; In the language school, I made friends from various countries, and the teachers and classmates
            were very friendly. I not only learned a lot of English knowledge, but also learned the culture and customs
            of different countries. This period of time in the language school is very unforgettable for me.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText={
            <div> 09/2012 – 06/2016 <SchoolIcon className="title-icon"/> </div>
          }
          style={{ color: '#61b8ff' }}
          dateInnerStyle={{ background: '#61b8ff' }}

          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>Changchun University of Technology</h3>
          <h4 className="subTitle">Bachelor Degree</h4>
          <br/>
          <p>
            &ensp; My major in college is Computer Science and Applications.
            Changchun University of Technology has a very excellent professor team.
            I have learned a lot in school and am very proud to be part of Changchun University of Technology.
          </p>
          <p>
            &ensp; My first programming language was C language, and then the teacher taught us JAVA,
            JAVASCRIPT, SQL and other programming languages one after another.
          </p>
          <p>
            &ensp; Our major pays great attention to practice, and there are many practical
            opportunities in the school. I have participated in the school database optimization
            project and community management service project.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText={
            <div> 09/2009 – 2012/05 <SchoolIcon className="title-icon"/> </div>
          }
          dateInnerStyle={{ background: '#61b8ff' }}
          style={{ color: '#61b8ff' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3>Zhangqiu No. 4 High School</h3>
          <h4 className="subTitle">High School Student</h4>
          <br/>
          <p>
            &ensp; After graduating from junior high school, I was admitted to Zhangqiu Fourth Middle School,
            a key high school in Shandong Province, China. This is a very strict school that has produced many
            outstanding talents.
          </p>
          <p>
            &ensp; In addition to daily study during school, my hobby is to learn network and programming related
            knowledge.
            A few good friends and I used to write a lot of interesting static web pages with html+css technology.
          </p>
        </TimelineItem>

      </Timeline>

    </div>
  );
};

export default MyTimeline;
