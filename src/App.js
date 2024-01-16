import React, { useState } from "react"
import { Typography, Button, Box, Stack, styled, Toolbar, createTheme, ThemeProvider } from '@mui/material'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import AddPost from "./components/SubComponents/AddPost"
import { ThemeContext } from "@emotion/react"




function App() {

  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction={"row"} m={0.5} spacing={1} justifyContent={"space-between"} >

          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
