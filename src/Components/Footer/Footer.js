import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
   <Box width='100vw' height='40px' bgcolor='#F6F7F7' display='flex' justifyContent='end'>
    <Typography mr='40px' color='#4B5C68' >API Version: 1.0</Typography>
   </Box>
  )
}

export default Footer