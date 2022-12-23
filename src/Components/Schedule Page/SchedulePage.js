import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useEffect, useState } from 'react'
import LeagueService from '../../services/LeagueService'
import brazil from '../../Images/brazil.png'
import cameroon from '../../Images/cameroon.png'
import switzerland from '../../Images/switzerland.png'
import serbia from '../../Images/serbia.png'
  const flags = { Brazil: brazil, Serbia: serbia, Cameroon: cameroon, Switzerland: switzerland }


const SchedulePage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const s = new LeagueService()
    try {
     await s.fetchData()
      const apiData = s.getMatches()
      console.warn(apiData)
      setData(apiData)
     
    } catch (error) {
      console.warn("error", error)
    }
  }





  return (
    <Box width='100vw' height='84vh' display='flex' justifyContent='center'>
      <Box width='90%' height='100%' display='flex' flexDirection='column' alignItems='center'>
        <Box ><Typography mt='60px' fontSize='24px' color='#182C62' fontWeight='bold' >League Schedule</Typography></Box>
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table aria-label='customized table'>
            <TableHead >
              <TableRow sx={{ backgroundColor: '#E4EDF2'}}>
                <TableCell width={'10%'} height={'40px'} sx={{ fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >Date/Time</TableCell>
                <TableCell width={'10%'} height={'40px'} sx={{  fontSize: '12px', fontWeight: '800',color:'#4B5C68' }} >Stadium</TableCell>


                <TableCell width={'35%'} height={'40px'} sx={{ fontSize: '12px',color:'#4B5C68' }} align='right'>Home Team</TableCell>
                <TableCell width={'10%'} height={'40px'}></TableCell>

                <TableCell width={'35%'} height={'40px'} sx={{ fontSize: '12px',color:'#4B5C68' }} align='left'>Away Team</TableCell>

              </TableRow >
            </TableHead>

            <TableBody>
              {
                data.map((val, ind) => {
                  let dateTime = new Date(val.matchDate);



                  return ind%2!=0? <TableCellData ind={ind} color={'#f6f7f7'} val={val} dateTime={dateTime}/>:<TableCellData ind={ind} color={'white'} val={val} dateTime={dateTime}/>

                }
                )}



            </TableBody>

          </Table>
        </TableContainer>

      </Box>
    </Box>
  )
}

export default SchedulePage


const TableCellData = (props) => {
  return <TableRow key={props.ind} sx={{ backgroundColor:`${props.color}` }}>


  <TableCell width={'10%'} height={'70px'} ><Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'right', alignItems: 'center' }}>
    <Typography color='#4B5C68' variant='body2'>{`${props.dateTime.getDate()}.${props.dateTime.getMonth()}.${props.dateTime.getFullYear()} `}</Typography>
    <Typography color='#4B5C68' variant='subtitle2'>{` ${props.dateTime.getHours()}:${props.dateTime.getMinutes()}`}</Typography>
  </Box></TableCell>

  <TableCell width={'14%'} height={'70px'} ><Box   sx={{display:{xl:'flex',lg:'flex',md:'flex',sm:'none',xs:'none', color:'#4B5C68'}}}>{props.val.stadium}</Box></TableCell>
  <TableCell width={'35%'} height={'70px'}  ><Box  display='flex' justifyContent={'end'} alignItems='center'><Typography sx={{display:'inline'}} fontSize='16px' fontWeight='800' color='#4B5C68'  mr='20px'>{`${props.val.homeTeam} ${''}`}</Typography><img style={{mr:'20px'}} src={flags[props.val.homeTeam]} height='37px' width='53px'></img></Box></TableCell>
  <TableCell sx={{fontWeight:'800',color:'#4B5C68'}} align='center' width={'6%'} height={'70px'}  >{props.val.homeTeamScore}:{props.val.awayTeamScore}</TableCell>

  <TableCell width={'35%'} height={'70px'} ><Box display='flex' justifyContent={'start'} alignItems='center'><img src={flags[props.val.awayTeam]} height='37px' width='53px' /><Typography sx={{display:'inline'}} fontSize='16px' fontWeight='800' color='#4B5C68'  ml='20px'>{`${props.val.awayTeam} `}</Typography></Box></TableCell>




</TableRow>
}


