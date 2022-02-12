import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CardMedia, Container, List, Paper, Stack } from '@mui/material';
import CustomInput from '../custominput';


import AddLocationIcon from '@mui/icons-material/AddLocation';
import Mobsidebar from './mobsidebar';
import  Router from 'next/router';
import { SearchOutlined } from '@mui/icons-material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import DesktopSearch from './desktopsearch';
import HideOnScroll from './hidescroll';
import MobileSearch from './mobilesearch';





export default function Header(props) {

    const [sidebar,setSidebar] = React.useState(false)
    const MobilisidebarOpen =()=>{
        setSidebar(!sidebar)
    }

    const VisitHome=()=>{

      Router.push("/")
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };


    const [mobsearchbaropen,setMobsearchbaropen] = React.useState(false)
    const MobilesearhBarOpen=()=>{

      setMobsearchbaropen(!mobsearchbaropen)
    }


  return (
    <Box>
      <HideOnScroll {...props} >
      <AppBar sx={{bgcolor:"#011E3C",position:"static"}} >
          <Container sx={{p:1}}>

          <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
           <img src={"/logo.svg"} onClick={VisitHome} alt='pristyn care logo'  />
        </Typography>

        <Box sx={{display:{lg:"block",md:"none",sm:"none",xs:"none",xl:"block"},width:"50%"}}>

          <Box sx={{display:'flex',justifyContent:"space-evenly",alignItems:"center",width:"100%"}}>

            <Typography>
             


          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
          >
            <Box sx={{ position: 'relative' }}>
            

              <Stack direction={'row'} className='cursor' onClick={handleClick} >

                <SearchOutlined />
                Search 

                </Stack>

              {open ? 
                <DesktopSearch />
               : null}

            </Box>
          </ClickAwayListener>

              



            </Typography>


            


            <Typography>
                 <Stack direction={'row'}>
                 For Patients <KeyboardArrowDownIcon />
                 </Stack>
              
              </Typography>

              <Typography>
                <Stack direction={'row'}>
                Our Company <KeyboardArrowDownIcon />
                
                </Stack>
               
              </Typography>

            <Typography>
              <Button color='warning' variant='contained' sx={{borderRadius:"50rem"}}>

              Book appointment

              </Button>
             
            </Typography>

        



          </Box>

        </Box>

         
       

         <Box sx={{display:{lg:'none',md:"block",sm:"block",xs:"block",xl:"none"}}}>

             <MenuIcon onClick={MobilisidebarOpen} />

             {sidebar==true?<Mobsidebar click={MobilisidebarOpen} />:""}

         </Box>
         
       

      </Toolbar>

          </Container>

       
       
    <Paper sx={{display:{lg:"none",xl:"none",md:"block",sm:"block",xs:"block",},p:1,borderRadius:"0px"}}>

    <CustomInput onClick={MobilesearhBarOpen} placeholder="Search ..." />



    {mobsearchbaropen?<MobileSearch click={MobilesearhBarOpen} />:""}

    </Paper>

      </AppBar>


      </HideOnScroll>
  
 
    

    </Box>
  );
}
