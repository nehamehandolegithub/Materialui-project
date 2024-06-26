import React, { useState } from 'react'
import Sidebar from './component/Sidebar'
import Feedbar from './component/Feedbar'
import Rightbar from './component/Rightbar'
import Navbar from './component/Navbar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import "./App.css"
import Add from './component/Add'

const App = () => {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack mt={7} direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feedbar />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
