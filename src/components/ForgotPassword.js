import * as React from 'react';
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

const ForgotPassword = () => {

    
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(false);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate("/login");
    };


    const navigate = useNavigate();

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="Forgot-Area">
                <div className="Forgot-title">
                    <h2>Forgot Password</h2>
                </div>
                <div className="Forgot-form">
                    <TextField required id="outlined-basic" label="Email" variant="outlined" helperText="Please type your valid email address"
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
                    <Button variant="contained" color="success" onClick={() => handleClickOpen()}>
                        Submit
                    </Button>
                </div>
            </div>

            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                      backgroundColor: "#151515",
                      boxShadow: "0px 11px 15px -7px rgb(43 194 14 / 20%), 0px 24px 38px 3px rgb(43 194 14 / 14%), 0px 9px 46px 8px rgb(43 194 14 / 12%)"
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText>
                        We've received your request. You will receive email which includes your password in 24 hours.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ForgotPassword;