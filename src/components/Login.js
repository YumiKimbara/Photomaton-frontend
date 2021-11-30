import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Google from '../images/google.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput'; import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    // Password visibility eventhandlers
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="Login-Area">
                <div className="Login-title">
                    <h2>Login</h2>
                </div>
                <div className="Login-form">
                    <TextField required id="outlined-basic" label="Email or Username" variant="outlined" helperText="Please type your email or username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Please Type Your Password</FormHelperText>
                    </FormControl>
                </div>
                <div className="Login-forgot">
                    <Link href="#" underline="none" onClick={() => navigate("/forgotPassword")}>
                        {'Forgot Password?'}
                    </Link>
                </div>
                <div className="Login-button">
                    <Button variant="contained" color="success" onClick={() => navigate("/")}>
                        Login
                    </Button>
                </div>
                <div className="Login-google">
                    <p>Or Login With </p>
                    <Link href="#" underline="none">
                        <img src={Google} alt="google icon" />
                    </Link>
                </div>
                <div className="Login-register">
                    <p>
                        Don't have an account?
                    </p>
                    <Link href="#" underline="none" onClick={() => navigate("/register")}>
                        {' Register'}
                    </Link>
                </div>
            </div>
        </Box>
    )
}

export default Login;