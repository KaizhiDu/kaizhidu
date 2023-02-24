/* eslint-disable */
import React, { Component } from 'react';
import '../ProfileCard/styles.scss';
import {Grid, IconButton, List, ListItem, ListItemText, Paper} from "@mui/material";
import ProfileCard from "./ProfileCard";
import SocialMediaInfo from "./SocialMediaInfo";
import Charts from "./Charts";
import ChartsMobile from "./Charts/ChartsMobile";
import Experience from "./Experience";
import Education from "./Education";

class mobileView extends Component {

    render() {
        return (
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={6}
            >
                <Grid item xs={12}>
                    <ProfileCard isMobile />
                    <SocialMediaInfo isMobile />
                    <ChartsMobile />
                    <Experience isMobile/>
                    <Education isMobile/>
                </Grid>
            </Grid>
        );
    }
}

export default mobileView;
