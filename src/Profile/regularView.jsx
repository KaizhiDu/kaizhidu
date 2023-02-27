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
    const { breakpoint } = this.props;
    // eslint-disable-next-line no-unused-vars
    let chartMarginTop;

    if (breakpoint === 'lg') {
      chartMarginTop = 800;
    }

    if (breakpoint === 'xl') {
      chartMarginTop = 0;
    }

    return (
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={6}
      >
        <Grid item xs={12} md={4}>
          <ProfileCard breakpoint={breakpoint} />
          <SocialMediaInfo />
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid item xs={12}>
            <div style={{
              marginTop: chartMarginTop,
              width: 1000
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
