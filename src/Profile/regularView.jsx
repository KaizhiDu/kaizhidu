import React, { Component } from 'react';
import '../ProfileCard/styles.scss';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';
import SocialMediaInfo from './SocialMediaInfo';
import Charts from './Charts';
import Experience from './Experience';
import Education from './Education';

class regularView extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={12} md={4}>
          <ProfileCard />
          <SocialMediaInfo />
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid item xs={12}>
            <div style={{
              marginTop: 600
            }}>
              <Charts />
            </div>
            <div style={{
              marginTop: 160,
              width: 1000
            }}>
              <Experience />
            </div>

            <div style={{
              marginTop: 50,
              width: 1000,
              marginBottom: 50
            }}>
              <Education />
            </div>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

export default regularView;
