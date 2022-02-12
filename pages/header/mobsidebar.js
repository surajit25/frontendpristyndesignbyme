

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import AddLocationIcon from '@mui/icons-material/AddLocation';

import AddIcon from '@mui/icons-material/Add';
import Router  from 'next/router';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack ,TextField} from '@mui/material';

import CustomInput from '../custominput';

import Autocomplete from '@mui/material/Autocomplete';

export default function Mobsidebar(props) {
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if(open==false){
        props.click()
    }

   

    setState({ ...state, [anchor]: open });
  };

  const Category = ['Proctology','Laparoscopy','Gynaecology','ENT','Urology','Vascular','Asthetic','Orthopedics','Ophthalmology','Fertility']

  const Subcategory = ["Sub1",'Sub2','Sub3','Sub4']

  const VistiCategory=(id)=>{

    Router.push(`/product-category/${id}`)
     
    props.click()
  
  
  }

  const [openselectcity,setOpenselectcity] = React.useState(false)



  const OpenSelectCity=()=>{

      Router.push("/selectcity")

      props.click()
  }

  const CloseAllDrawer=()=>{

    setOpenselectcity(!openselectcity)

    props.click()
    
  }

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300, }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
    

     <Box   sx={{mt:1,display:'flex',alignItems:"center",p:2,width:'100%',justifyContent:"space-between"}} >

       <Stack direction={'row'}  onClick={OpenSelectCity} spacing={1}>

       <Typography>
         <AddLocationIcon />
       </Typography>

       <Typography  className='textbold'>
       Select City
       </Typography>

       </Stack>

      
       <Typography>
          <ChevronRightIcon />
       </Typography>
  

     </Box>


               

      <Divider />



      <List>
       
          <ListItem  >
            
            <ListItemText >
              <Typography sx={{fontWeight:"bold",fontSize:'20px'}}>Wellness</Typography>
            </ListItemText>
          </ListItem>
        
      </List>

      <List>
          {Category.map(item=>{
              return(

            <ListItem button   >
         

            <Accordion sx={{width:"100%",boxShadow:"none",bgcolor:"inherit"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography onClick={()=>VistiCategory(item)} sx={{fontWeight:"600"}} >{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <List>
             {Subcategory.map(item2=>{
               return(
                 <ListItem button >

                   <ListItemText primary={item2} />
                   
                 </ListItem>
               )
             })}
          </List>
         
        </AccordionDetails>
      </Accordion>



            </ListItem>
              )

          })}

      </List>


    </Box>
  );

  return (
    <div>
     
          
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
           
            PaperProps={{
              sx:{width:"80%"}
            }}

            disableEnforceFocus

          
          >
            {list('left')}
          </Drawer>
      
    </div>
  );
}
