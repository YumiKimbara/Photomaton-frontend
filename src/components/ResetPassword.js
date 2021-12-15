import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch, useSelector } from 'react-redux';
import { userForgotPassword } from '../actions/userActions';
import ErrorMessage from './errorMessage/ErrorMessage';
import SuccessMessage from './successMessage/SuccessMessage';


const ResetPassword = () => {

    const [userEmail, setUserEmail] = useState("")
    const [message, setMessage] = useState("")
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const regExp = /[a-zA-Z]/g;

    const forgotPassword = useSelector(state => state.forgotPassword)
    const { error } = forgotPassword;


    const submitHandler = (e) => {
        e.preventDefault();
        if (!userEmail) {
            setMessage(<ErrorMessage error={"Enter a valid email adress"} />)
        } else {
            dispatch(userForgotPassword(userEmail))
            setMessage(<SuccessMessage success={"We've received your request. You'll get an email if your email address is valid. Please check your inbox."} />)
            setTimeout(() => {
                navigate("/login")
            }, 3000);
        }
    }
    // const handleClose = () => {
    //     setOpen(false);
    //     if (error) {
    //         setMessage(error)
    //     } else {
    //         setMessage("We've received your request. Please check your inbox.")
    //         navigate("/login");
    //     };

    // }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {message}
            <div className="Forgot-Area">
                <div className="Forgot-title">
                    <h2>Reset Password</h2>
                </div>
                <div className="Forgot-form">
                    <TextField required id="outlined-basic" label="Email" variant="outlined" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} helperText="Please type your valid email address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="Forgot-button">
                    <Button variant="contained" color="success" onClick={() => navigate("/login")}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="success" onClick={submitHandler}>
                        Submit
                    </Button>
                </div>
            </div>

            {/* <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: "#151515",
                        boxShadow: "0px 0px 15px 10px rgb(43 194 14 / 20%)"
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog> */}
        </Box>
    )
}


export default ResetPassword;