import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'


function MyNavbar() {
    return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Test App
            </Typography>
            <MenuItem component="button" color="inherit" underline="hover"><Link to="/about" className="link-rs">About</Link></MenuItem>
            <MenuItem component="button" color="inherit" underline="hover"><Link to="/" className="link-rs">Home</Link></MenuItem>
          </Toolbar>
        </AppBar>
    )
}

export default MyNavbar
