import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from "../actions/userActions"

const logo = "/images/textLogo.png";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/")
    };

    return <>
        <div className="headerWrapper">
            <img className="logo" src={logo} alt="logo" className="textLogo" />
            <button onClick={logoutHandler} className="headerIcon" style={{ visibility: userInfo ? 'visible' : 'hidden' }}><LogoutIcon style={{ fontSize: "20px" }} /></button>
        </div>
    </>
}

export default Header;