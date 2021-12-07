import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput'; import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    // Password visibility eventhandlers
    // const [values, setValues] = React.useState({
    //     password: '',
    //     confirmPassword: '',
    //     showConfirmPassword: false,
    //     showPassword: false,
    // });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleClickShowConfirmPassword = () => {
    //     setValues({
    //         ...values,
    //         showConfirmPassword: !values.showConfirmPassword,
    //     });
    // };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log("Passwords Do Not Match");
        } else {
            dispatch(register(firstName, lastName, userName, email, password))
        };
    }

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [userInfo])


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="Register-Area">
                <div className="Register-title">
                    <h2>Signup</h2>
                </div>
                <div className="Register-form">
                    <TextField required id="outlined-basic" label="Firstname" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField required id="outlined-basic" label="Lastname" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <TextField required id="outlined-basic" label="Username" variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <TextField required id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            // type={values.showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // value={values.password}
                            // onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            // type={values.showConfirmPassword ? 'text' : 'password'}
                            // value={values.confirmPassword}
                            // onChange={handleChange('confirmPassword')}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowConfirmPassword}
                                        edge="end"
                                    >
                                        {/* {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>
                <div className="Register-terms">
                    <Checkbox color="success" />
                    <p>I read and accept <Link href="#" underline="none">
                        {'Terms and Conditions'}
                    </Link></p>
                </div>
                <div className="Register-button">
                    <Button variant="contained" color="success" onClick={submitHandler}>
                        Register
                    </Button>
                </div>
                <div className="Register-signIn">
                    <p>Already have an account? <Link href="#" underline="none" onClick={() => navigate("/login")}>
                        {'Log In'}
                    </Link></p>

                </div>
            </div>
        </Box>
    )
}

export default Register;