import React, { useState, useEffect, Suspense } from 'react';
import {Avatar, Button, Grid} from '@mui/material'
import UserInfo from './UserInfo';
import PostPhotos from './PostPhotos';

const Profile = () => {
    // Fake data start
    const [userData, setUserData] = useState(null)
    const [imgData, setImgData] = useState(null)

    useEffect(async () => {
        const userRes = await fetch('https://randomuser.me/api/?results=1')
        const userData = await userRes.json()
        setUserData(userData)

        const imgRes = await fetch('https://api.pexels.com/v1/curated?per_page=5', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: '563492ad6f91700001000001e4ec3e797aff44bebec8c4976b825340'
            }
        })
        const imgData = await imgRes.json()
        setImgData(imgData)
    }, [])

    console.log(userData)
    console.log(imgData)
    // Fake data end

    return (userData && imgData) ? (
        <div className="profileWrapper">
            <Grid container direction="column" spacing={2}>
            <Grid item>
                <UserInfo user={userData} />
            </Grid>
            <Grid item>
                <hr />
            </Grid>
            <Grid item>
                <PostPhotos img={imgData} />
            </Grid>
        </Grid>
        </div>
        
    ):(<div>Wait a sec</div>)
}

export default Profile