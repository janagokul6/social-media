import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';

const iconBtnStyle = {
    padding: 1,
    '&:hover': {
      backgroundColor: '#5aa6fd',
    }
  }
const Post = () => {
  return (
    <Card sx={{ bgcolor: 'palette.background.default',margin:2,borderRadius:'3%' }} elevation={6}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton sx={iconBtnStyle} aria-label="settings">
          <EditIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="10%"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AWEuJiyY8AdSjXS3fC1veCodaOWeduFSSA&usqp=CAU"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions sx={{justifyContent:'space-between'}} >
      <IconButton sx={iconBtnStyle} aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />} />
      </IconButton>
      <IconButton sx={iconBtnStyle} aria-label="share">
        <CommentIcon />
      </IconButton>
      <IconButton sx={iconBtnStyle} aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>

  </Card>
  )
}

export default Post