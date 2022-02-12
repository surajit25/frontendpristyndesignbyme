import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import CustomInput from '../custominput';

import { Typography,List,ListItem,ListItemText, Stack } from '@mui/material';
import Backbuttonwith from './backbuttonwithheader';


const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width:'100%',
  bgcolor: 'white',
  height:'100vh',
  color:"black",
};

export default function MobileSearch(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const v=['Piles','Proctology','Laparoscopy','Gynaelogy','ENT','Urology','Vascular','Opthalmology','Fertility']

  const [SearchResult,setSearchResult]= React.useState([])

  React.useEffect(()=>{

      setSearchResult(v)

  },[])

  const CloseSearch=()=>{

    props.click()
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open modal
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >

           

        <Box sx={style}>

           
          <Box sx={{mb:1}}>
                <Backbuttonwith close={CloseSearch} />

            </Box>

          

            <Box sx={{p:1}}>

             <CustomInput placeholder="Search ..." />


           </Box>




        


            <Box sx={{mt:2,mb:1,p:1}}>

            <Typography className='textbold'>Top Searches</Typography>

            </Box>

                <Box sx={{mt:1}}>

                {SearchResult.map((item,index)=>{

                    return(
                        <List key={index} >
                            <ListItem button >
                                <ListItemText>
                                    <Typography sx={{fontWeight:"600",fontSize:'15px',}}>{item}</Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    )
                })}

                </Box>

       
        
        </Box>
      </StyledModal>
    </div>
  );
}
