import * as React from 'react';
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

const Register = () => {    

    const navigate = useNavigate();

    // Password visibility eventhandlers
    const [values, setValues] = React.useState({
        password: '',
        confirmPassword: '',
        showConfirmPassword: false,
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

    const handleClickShowConfirmPassword = () => {
        setValues({
            ...values,
            showConfirmPassword: !values.showConfirmPassword,
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
            <div className="Register-Area">
                <div className="Register-title">
                    <h2>Signup</h2>
                </div>
                <div className="Register-form">
                    <TextField required id="outlined-basic" label="Firstname" variant="outlined" />
                    <TextField required id="outlined-basic" label="Lastname" variant="outlined" />
                    <TextField required id="outlined-basic" label="Username" variant="outlined" />
                    <TextField required id="outlined-basic" label="Email" variant="outlined" />

                    <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
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
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                        <InputLabel required htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        edge="end"
                                    >
                                        {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                    <Button variant="contained" color="success" onClick={()=> navigate("/login")}>
                        Register
                    </Button>
                </div>
                <div className="Register-signIn">
                    <p>Already have an account? <Link href="#" underline="none" onClick={()=> navigate("/login")}>
                        {'Log In'}
                    </Link></p>

                </div>
            </div>
        </Box>
    )
}

export default Register;