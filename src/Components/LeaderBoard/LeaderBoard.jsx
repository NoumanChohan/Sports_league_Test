import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LeagueService from '../../services/LeagueService'
import brazil from '../../Images/brazil.png'
import cameroon from '../../Images/cameroon.png'
import switzerland from '../../Images/switzerland.png'
import serbia from '../../Images/serbia.png'
const flags = { Brazil: brazil, Serbia: serbia, Cameroon: cameroon, Switzerland: switzerland }
const LeaderBoard = () => {
    const [matchData,setMatchData]=useState([])
  async function Foo() {
   
    const s=new LeagueService();
    await s.fetchData()
    setMatchData(s.getLeaderboard())
  }
  useEffect(()=>{
        Foo()
  },[])

  return (
    <Box width='100vw' height='84vh' display='flex' justifyContent='center'>
      <Box width='90%' height='100%' display='flex' flexDirection='column' alignItems='center'>
        <Box ><Typography mt='60px' fontSize='24px' color='#182C62' fontWeight='bold' >League Schedule</Typography></Box>
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table aria-label='customized table'>
            <TableHead >
              <TableRow sx={{ backgroundColor: '#E4EDF2'}}>
                <TableCell width={'60%'} height={'40px'} sx={{ fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >Team Name</TableCell>
                <TableCell width={'10%'} height={'40px'} sx={{ fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >MP</TableCell>


                <TableCell width={'10%%'} height={'40px'} sx={{ fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >GF</TableCell>
                

                <TableCell  width={'10%'} height={'40px'} sx={{ fontSize: '12px',fontWeight: '800',color:'#4B5C68' }} >GA</TableCell>
                <TableCell align='center' width={'10%'} height={'40px'} sx={{ fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >Points</TableCell>

              </TableRow >
            </TableHead>
        <TableBody>

            {matchData.map((val,index)=>{
                console.warn("Flagssssss",flags[val.teamName])
                return  <TableRow sx={{ backgroundColor: '#E4EDF2'}}>
                   
                <TableCell width={'60%'} height={'40px'}  ><Box sx={{display:'flex' ,alignItems:'center'}}>

                    <img  height='37px' width='53px' src={flags[val.teamName]}/><Typography fontWeight='800' color='#4B5C68' fontSize= '16px' ml={'10px'}>{val.teamName}</Typography></Box></TableCell>
                <TableCell width={'10%'} height={'40px'} sx={{ fontSize: '16px', fontWeight: '500',color:'#4B5C68' }} >{val.matchesPlayed}</TableCell>


                <TableCell width={'10%%'} height={'40px'} sx={{ fontSize: '16px', fontWeight: '500',color:'#4B5C68' }} >{val.goalsFor}</TableCell>
                

                <TableCell  width={'10%'} height={'40px'} sx={{ fontSize: '16px',fontWeight: '500',color:'#4B5C68' }} >{val.goalsAgainst}</TableCell>
                
                <TableCell  align='center' width={'10%'} height={'40px'} sx={{ fontSize: '16px', fontWeight: '800',color:'#025feb', }} >{val.points}</TableCell>

              </TableRow >
            })}
        </TableBody>

            </Table>
            </TableContainer>



        </Box>
        </Box>
  )
}

export default LeaderBoard