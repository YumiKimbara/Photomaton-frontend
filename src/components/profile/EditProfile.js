import { Avatar, FormControl, Grid, Input, InputLabel, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TitleBar from '../TitleBar';
import axios from 'axios';

const EditProfile = () => {
    const [info, setInfo] = useState({})

    const handleSubmit = async() => {
        const response = await axios('http://localhost:3333/api/users/editUser/')
        console.log(response)
    }

    return (
        <Grid container className='editProfileWrapper'>
            <TitleBar
                title="Edit Profile"
                leftBtn={{ type: "close", url: "/profile" }}
                rightBtn={{ type: "submit" }}
                onClick= {handleSubmit}
            />
            <Avatar alt='' src='' />
            <Grid container width='100vw' height='70vh' display='flex' direction='column' justifyContent='space-evenly' alignItems='center'>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='username' style={{color: 'rgb(187, 187, 187'}}>Username</InputLabel>
                        <Input id='username' onChange={(e) => setInfo({...info, username: e.target.value})}></Input>
                    </FormControl>
                    {/* <FormControl variant='standard'>
                        <InputLabel htmlFor='email' style={{color: 'rgb(187, 187, 187'}}>Email</InputLabel>
                        <Input id='email' onChange={(e) => setInfo({...info, email: e.target.value})}></Input>
                    </FormControl> */}
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='firstName' style={{color: 'rgb(187, 187, 187'}}>First Name</InputLabel>
                        <Input id='firstName' onChange={(e) => setInfo({...info, firstName: e.target.value})}></Input>
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='lastName' style={{color: 'rgb(187, 187, 187'}}>Last Name</InputLabel>
                        <Input id='lastName' onChange={(e) => setInfo({...info, lastName: e.target.value})}></Input>
                    </FormControl>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor='bio' style={{color: 'rgb(187, 187, 187'}}>Bio</InputLabel>
                        <Input id='bio' onChange={(e) => setInfo({...info, bio: e.target.value})}></Input>
                    </FormControl>
            </Grid>

        </Grid>
    )
}

export default EditProfile;