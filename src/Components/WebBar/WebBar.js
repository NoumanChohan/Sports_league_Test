import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const WebBar = () => {
  return (
    <Box width='100vw' height='60px' bgcolor='#025FEB' display='flex' justifyContent='space-between' alignItems='center'>
      <Box height='100%' display='flex' alignItems='center' marginLeft='40px' >
        <img src='Images/logo.svg' alt='logo' width='110px'></img>
      </Box>
      
      <Box width='259px' height='100%' display='flex' justifyContent='end' alignItems='center' marginRight='40px'>
       
       
       <Box width='37%' height='100%'  display='flex' justifyContent='space-between' alignItems='center' mr='40px'>
        <img src='Images/schedule.png' height='25px'></img>
        <Typography fontSize='16px' color='#FFFFFF'>Schedule</Typography>
        </Box>

        <Box width='47%' height='100%' display='flex' justifyContent='space-between' alignItems='center'>
        <img src='Images/leaderboard.png' height='25px'></img>
        <Typography fontSize='16px' color='#FFFFFF'>LeaderBoard</Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default WebBar
{/* <Box width='100vw'>
    <AppBar >
      <Toolbar sx={{ height: '60px', backgroundColor: 'red' ,justifyContent:'space-between', alignItems:'center' }}>
        
       

          <Box height='100%' width='115px' bgcolor='grey'  display='flex' alignItems='center' marginLeft='16px' >
            <img src='Images/logo.svg' alt='logo' width='110px'></img>
          </Box>

          <Box height='100%' width='25%' display='flex' alignItems='center' bgcolor='grey'  justifyContent='end' marginRight='16px'>
              <Box display='flex' alignItems='center' height='100%' width='100px' bgcolor='green' marginRight='40px'>
              <img src='Images/schedule.png' height='25px' style={{}}></img>
              <Typography>Schedule</Typography>
              </Box>


              <Box display='flex' alignItems='center' height='100%' width='125px' bgcolor='pink' >
              <img src='Images/leaderboard.png' height='25px'></img>
              <Typography>LeaderBoard</Typography>
              </Box>


          </Box>


        
      </Toolbar>
    </AppBar>
    </Box> */}