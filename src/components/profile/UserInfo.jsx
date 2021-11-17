import { PeopleAlt, Settings } from '@mui/icons-material';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const UserInfo = (props) => {
    return (
        <Grid container spacing={2} width="95vw" margin="0 auto">
            <Grid item alignSelf="center">
                <Avatar sx={{height: '90px', width: '90px'}} src={props.user.results[0].picture.large} />
            </Grid>
            <Grid item>
                <Typography variant="h4" color="white">Username</Typography>
                <Typography variant="subtitle2" marginLeft="5px" color="white">UserID • PostCount</Typography>
                <Grid item display="flex" justifyContent="start">
                    
                    {/* <Button variant="text">Friends</Button> */}
                    <IconButton>
                        <PeopleAlt className="icons" />
                    </IconButton> 
                    <IconButton>
                        <Settings className="icons" />
                    </IconButton> 
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default UserInfo;