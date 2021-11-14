import {Link} from 'react-router-dom'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'react-i18next'
import { Button, FormControl, InputLabel, Popover, Select, Stack } from '@mui/material'
import ReactCountryFlag from "react-country-flag"
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next'

function MyNavbar() {
  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    },
    {
      code: 'ru',
      name: 'Русский',
      country_code: 'ru'
    }
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { t } = useTranslation()
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          { t("test_app") }
        </Typography>
        <Button aria-describedby={id} variant="text" onClick={handleClick} color="inherit" underline="hover" sx={{color: 'white', textTransform: 'none'}}>
          <LanguageIcon/>
        </Button>
          <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            {languages.map(({ code, name, country_code}) =>  (
              <Stack key={country_code}>
                <Button onClick={() => i18next.changeLanguage(code)}>
                  <ReactCountryFlag style={{marginRight: '10px'}} countryCode={country_code}/>{name}
                </Button>
              </Stack>
            ))}
          </Popover>
        <MenuItem component="button" color="inherit" underline="hover"><Link to="/react_test/about" className="link-rs">{ t("about") }</Link></MenuItem>
        <MenuItem component="button" color="inherit" underline="hover"><Link to="/react_test" className="link-rs">{ t("home") }</Link></MenuItem>
      </Toolbar>
    </AppBar>
  )
}

export default MyNavbar
