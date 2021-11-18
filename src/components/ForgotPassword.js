import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';



const ForgotPassword = () => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="Login-Area">
                <div className="Login-title">
                    <h2>Forgot Password</h2>
                </div>
                <div className="Login-form">
                    <TextField required id="outlined-basic" label="Email" variant="outlined" helperText="Please type your email address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            </div>
        </Box>
    )
}

export default ForgotPassword;