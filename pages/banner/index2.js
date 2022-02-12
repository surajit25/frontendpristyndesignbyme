
import { Button, Divider, Grid, Stack, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Box } from "@mui/system"

import ApartmentIcon from '@mui/icons-material/Apartment';

import CleanHandsIcon from '@mui/icons-material/CleanHands';

import DialerSipIcon from '@mui/icons-material/DialerSip';

export default function Detailofbanner(){

return(
    <>

    <Box>

        <Typography sx={{whiteSpace:"pre-wrap",fontSize:"33px",color:blue[500],width:{lg:'50%',xl:"50%",md:"100%",xs:"100%",sm:"100%"},lineHeight:"35px",fontWeight:"700",mb:2}}>
        Simplifying Surgery Experience for you and your loved ones
        </Typography>

        <Stack sx={{mb:2}} spacing={2} direction='row'>

            <Stack direction={'column'} >
                <Typography sx={{fontSize:"25px"}} >300+</Typography> 
                <Typography sx={{fontSize:"25px"}} >Doctors</Typography>
            </Stack>

            <Divider orientation="vertical" flexItem ></Divider>


            <Stack direction={'column'}>
                <Typography sx={{fontSize:"25px"}} >50+</Typography> 
                <Typography sx={{fontSize:"25px"}} >Deases</Typography>
            </Stack>

              <Divider orientation="vertical" flexItem></Divider>


            <Stack direction={'column'}>
                <Typography sx={{fontSize:"25px"}}>40+</Typography> 
                <Typography sx={{fontSize:"25px"}}>Cities</Typography>
            </Stack>

        </Stack>

        <Box sx={{mt:2,mb:2,width:{lg:"60%",md:'100%',xs:"100%",sm:"100%",xl:"60%"}}}>

              
              <Grid container   spacing={1}>

                  <Grid item xl={5} lg={5} md={12} xs={12} sm={12} >

                  <Button  color="primary" variant="contained" sx={{borderRadius:'50rem',width:'100%'}}>
                  <Stack direction={'row'} spacing={2}>


                  8929-129-616

                  </Stack>


              </Button>

                  </Grid>

                  <Grid item xl={5} lg={5} md={12} xs={12} sm={12} >

                  <Button color="warning" variant="contained" sx={{borderRadius:"50rem",width:"100%"}}>

                    Book appointment

                    </Button>


                 </Grid>


              </Grid>

          


        </Box>
        

        <Box sx={{mt:2,mb:2,display:{lg:"block",md:"none",sm:"none",xs:"none",xl:"block"}}}>
            <Typography sx={{textTransform:"capitalize",fontWeight:"700",fontSize:'20px'}}>
                pristyn Care COVId-19 safety
            </Typography>

            <Typography sx={{mt:1,mb:1}}>

                <ApartmentIcon sx={{color:'#ff9800'}} /> Our surgical centers are <span className="textbold">COVID</span> safe

            </Typography>


          


            <Typography sx={{mt:1,mb:1}}>
      
             <CleanHandsIcon sx={{color:"#ff9800"}} /> <span className="textbold">Regular sanitization </span> of clinic & hospital premises

            </Typography>


            <Typography sx={{mt:1,mb:1}}>

            <ApartmentIcon sx={{color:'#ff9800'}} /> Our surgical centers are <span className="textbold">COVID</span> safe

            </Typography>


        </Box>


    </Box>


    </>
)
}