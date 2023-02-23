/* eslint-disable */
import React, { Component } from 'react';
import '../ProfileCard/styles.scss';
import {Grid, IconButton, List, ListItem, ListItemText, Paper} from "@mui/material";
import ProfileCard from "./ProfileCard";
import SocialMediaInfo from "./SocialMediaInfo";
import Charts from "./Charts";

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
                        <Charts />
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default regularView;
