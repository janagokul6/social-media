import React from 'react'
import {  Box, Grid, } from '@mui/material'
import Post from './SubComponents/Post'




const Feed = () => {
  return (
    <Box flex={4} p={2}  >
      {/* <Grid container >
        <Grid item xs={12} lg={6} > <Post /></Grid>
        <Grid item xs={12} lg={6} > <Post /></Grid>
        <Grid item xs={12} lg={6}> <Post /></Grid>
        <Grid item xs={12} lg={6}> <Post /></Grid>
        
      </Grid> */}

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    
    
    </Box>
  )
}

export default Feed