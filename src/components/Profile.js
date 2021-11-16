import React, { useState, useEffect } from 'react';
import {Avatar, Button} from '@mui/material'
import PhotoLink from './Photo';

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

    return (userData && imgData)?(
        <>
            {/* Header */}
            <div className="user">
                <Avatar src={userData.results[0].picture.large} />
                <div className="userInfo">
                    <h1>UserName</h1>
                    <h4>UserID</h4>
                    <Button variant="text">Friends</Button>
                    <h3>PostCount</h3>
                </div>
            </div>
            <hr />
            <div className="posts">
                {imgData.photos.map((obj) => {
                    return <PhotoLink url={obj.src.small} />
                })}
            </div>

            {/* Footer */}
        </>
    ):(<div>Wait a sec</div>)
}

export default Profile