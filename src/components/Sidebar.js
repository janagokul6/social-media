import React from 'react'
import { Box, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Stack, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const listItemStyle = { py: { xs: 1, md: 1.5, lg: 3 }, px: { xs: 1, md: 1.5, lg: 3 }, borderRadius: '1rem' };
const listTextStyle = { fontSize: { xs: 2, md: 3, lg: 3.2 } };
const listIconStyle = { fontSize: { xs: 'small', md: 'medium', lg: 'large' } }
const Sidebar = ({ mode, setMode }) => {

  const handelChangeMode = () => {
    if (mode == 'light') {
      setMode('dark')
    }
    if (mode === 'dark') {
      setMode('light')
    }
  }


  return (
    <Box flex={1} p={1} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} >
      <Box position={'fixed'} >


        <Stack spacing={2}  >
          <MenuItem sx={listItemStyle}  >
            <ListItemIcon  > <HomeIcon /> </ListItemIcon>
            <ListItemText >  Home </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle} >
            <ListItemIcon > <ArticleIcon /> </ListItemIcon>
            <ListItemText>  Page </ListItemText>
          </MenuItem >
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <GroupIcon /> </ListItemIcon>
            <ListItemText>  Groups </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <StorefrontIcon /> </ListItemIcon>
            <ListItemText> Marketplace </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <PersonIcon /> </ListItemIcon>
            <ListItemText> Friends </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <SettingsIcon /> </ListItemIcon>
            <ListItemText> Settings </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <AccountCircleIcon /> </ListItemIcon>
            <ListItemText> Profile </ListItemText>
          </MenuItem>
          <MenuItem sx={listItemStyle}>
            <ListItemIcon > <DarkModeIcon /> </ListItemIcon>
            <ListItemText sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}}> Dark mode </ListItemText>
            <Switch onChange={handelChangeMode} />
          </MenuItem>



        </Stack>

      </Box>


    </Box>
  )
}

export default Sidebar