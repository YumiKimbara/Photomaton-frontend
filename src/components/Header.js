import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const logo = "/images/textLogo.png";

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const navigate = useNavigate();

    return <>
        <div className="headerWrapper">
            <img className="logo" src={logo} alt="logo" className="textLogo" />
            {(!userInfo) ? (
                <Button variant='text' onClick={ ()=>navigate('/login') }>Login</Button>
            ) : (
                <div></div>
            )}
        </div>
    </>
}

export default Header;