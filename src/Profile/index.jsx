/* eslint-disable */
import React, { Component } from 'react';
import '../ProfileCard/styles.scss';
import background2 from '../img/background2.jpeg';
import {Grid, IconButton, List, ListItem, ListItemText, Paper} from "@mui/material";
import MyTimeline from "../MyTimeline";
import ProfileCard from "./ProfileCard";
import SocialMediaInfo from "./SocialMediaInfo";
import Charts from "./Charts";

class Profile extends Component {
  // componentDidMount() {
  //   document.getElementsByTagName(
  //     'body'
  //     // eslint-disable-next-line max-len
  //   )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  // rgba(16, 16, 16, 0.8)),url(${background2})`;
  //   document.getElementsByTagName(
  //     'body'
  //     // eslint-disable-next-line max-len
  //   )[0].style.backgroundSize = 'cover';
  // }

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
                <ProfileCard/>
                <SocialMediaInfo />
            </Grid>

            <Grid item xs={12} md={8}>

                <Grid item xs={12}>
                    <Charts />
                </Grid>


                <Grid item xs={12}>
                    <Charts />
                </Grid>



            </Grid>


            {/*<Grid item xs={6}>*/}
            {/*  <ProfileCard />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={6}>*/}
            {/*  <MyTimeline />*/}
            {/*</Grid>*/}

          </Grid>
    );
  }
}

export default Profile;
