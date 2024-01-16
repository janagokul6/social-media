import React from 'react'
import {AppBar,Avatar,Badge,Input,Stack,TextField,Toolbar, Typography, styled} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
const StyledToolbar=styled (Toolbar)({
  display:'flex',
  justifyContent:'space-between',
})

const SearchBar= styled('div')(({theme})=>({
backgroundColor:'#fdfbfb',
}))

const ProfileIcon= styled('div')(({theme})=>({
  backgroundColor:'#fdfbfb'
  }))

const Navbar = () => {
  return (
<AppBar  position='sticky'>
<StyledToolbar>
<MenuIcon sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} />
  <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} variant='h6' component='h1' fontWeight='700' >BRAND NAME</Typography>
{/* for SearchBar  */}
<Stack width={"40%"}  border='1px sold white' >
<SearchBar />
</Stack>

{/* for avatar and icons  */}
<Stack direction={'row'} spacing={2} alignItems={'center'}>
<Badge  color="error" variant="dot" sx={{display:{xs:'none',sm:'block'},p:1}}>
        <MessageIcon />
      </Badge>
      <Badge color="error" variant="dot"  sx={{display:{xs:'none',sm:'block'},p:1}}>
        <NotificationAddIcon />
      </Badge>
      <Avatar  >G</Avatar>
</Stack>
</StyledToolbar>
</AppBar>
  )
}

export default Navbar