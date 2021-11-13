// import {useEffect} from 'react';
// import { loadCSS } from 'fg-loadcss';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { ThemeProvider, createTheme } from '@mui/material/styles';


// const theme = createTheme({
//   components: {
//     MuiIcon: {
//       styleOverrides: {
//         root: {
//           // Match 24px = 3 * 2 + 1.125 * 16
//           boxSizing: 'content-box',
//           padding: 3,
//           fontSize: '1.125rem',
//           color: 'blue'
//         },
//       },
//     },
//   },
// });


const Footer = () => {

//     useEffect(() => {
//     const node = loadCSS(
//       'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
//       // Inject before JSS
//       document.querySelector('#font-awesome-css') || document.head.firstChild,
//     );

//     return () => {
//       node.parentNode.removeChild(node);
//     };
//   }, []);
    
    return <>
    <div className="footerWrapper">
    <HomeIcon className="icons" sx={{ fontSize: 35 }}/>
    <SearchIcon className="icons" sx={{ fontSize: 35 }} />
    <ControlPointIcon className="icons" sx={{ fontSize: 35 }}/>
    <FavoriteBorderIcon className="icons" sx={{ fontSize: 35 }}/>
    <AccountCircleIcon className="icons" sx={{ fontSize: 35 }}/>
    </div>
    </>
}

export default Footer;