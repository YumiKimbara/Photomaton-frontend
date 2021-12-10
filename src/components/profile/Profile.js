import React, { useState, useEffect, Suspense } from 'react';
import { Avatar, Button, Grid } from '@mui/material'
import UserInfo from './UserInfo';
import PostPhotos from './PostPhotos';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    // Fake data start
    const [userData, setUserData] = useState(null)
    const [imgData, setImgData] = useState(null)
    // const [editStatus, SetEditStatus] = useState(true)

    useEffect(async () => {
        const userRes = await fetch('https://randomuser.me/api/?results=1')
        const userData = await userRes.json()
        setUserData(userData)

        const imgRes = await fetch('https://api.pexels.com/v1/curated?per_page=20', {
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

    // User Login Check, if the user is not logged in, redirect to login page

    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/profile")
        } else {
            navigate("/login")
        }
    }, [userInfo])


    return (userData && imgData) ? (
        <Grid container className="profileWrapper" direction="column" spacing={2}>
            <UserInfo user={userData} />
            <PostPhotos img={imgData} />
        </Grid>
    ) : (<div>Wait a sec</div>)

}

export default Profile