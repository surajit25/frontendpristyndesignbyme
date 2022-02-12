import { CardMedia,Box,Typography } from "@mui/material";

import ApartmentIcon from '@mui/icons-material/Apartment';

import CleanHandsIcon from '@mui/icons-material/CleanHands';

export default function ImageDesign(){


    return(
        <>

        <Box sx={{position:"relative"}}>

            <CardMedia

            component={'img'}

            image ="/hiritik.png"


            className='bannerimg'

            />



            <Box className="banner_hirtik_img1">

            </Box>


            <Box className="banner_hirtik_img2">

            </Box>


        </Box>

          
        <Box sx={{mt:2,mb:2,display:{lg:"none",md:"block",sm:"block",xs:"block",xl:"none"}}}>
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



        </>
    )
}