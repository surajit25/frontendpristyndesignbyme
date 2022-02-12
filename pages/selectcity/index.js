



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

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomInput from '../custominput';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import TextField from '@mui/material/TextField'

export default function SelectCity(props) {
  const [state, setState] = React.useState({
    left: true,
  });


  const v = ['Gurgaon','Faridabad','Delhi','Kolkata','New Delhi','Agra','Hyderabad','Bengaluru','Mumbai','Gujrat']
  

  const [Category ,setCategory]= React.useState(v)

  const [Backup,setBackup] = React.useState(v)

  const Subcategory = ["Sub1",'Sub2','Sub3','Sub4']

  const VisitPage=(id)=>{

    Router.push(`/visit-city/${id}`)

  
  }


  const [citysearch,setCitysearch]  = React.useState("")

  

  const Inputchange=(event)=>{



    setCitysearch(event.target.value)

    if(event.target.value){

      let temp =[]

    for(var i=0;i<Category.length;i++){
      
      if(Category[i].toLowerCase().includes(event.target.value)){
         temp.push(Category[i])
      }
    }
    
    if(temp.length>0){
      setCategory(temp)
    }else{
      setCategory(Backup)
    }

    }else{
      setCategory(Backup)
    }

    
   
    
  }


  const VisitBack=()=>{

    Router.back()
  }



  const list = (anchor) => (

    <Box
     
      sx={{width:'100%'}}
     

    >
    



      <Divider />



      <List>
       
          <ListItem  >
            
            <ListItemText >
              <Typography sx={{fontWeight:"bold",mb:2,fontSize:'20px',display:'flex',justifyContent:"center",alignItems:'center'}}>
                  <ArrowBackIcon onClick={VisitBack}  />
                  <span className='selectcity'>Select City</span>
                  </Typography>

                  <Box sx={{zIndex:"1000"}}>
                      
                       <CustomInput value={citysearch} onChange={(event)=>Inputchange(event)} placeholder="City name" />
         
 
                  </Box>

            </ListItemText>
          </ListItem>
        
      </List>

      <List>
          {Category.map((item,index)=>{
              return(
                 
                <ListItem onClick={()=>VisitPage(item)} key={index} >
                    <ListItemText>
                    <Typography  sx={{fontWeight:"600"}} >{item}</Typography>
                    </ListItemText>

                    <ListItemIcon>
                        <ChevronRightIcon />

                    </ListItemIcon>

                </ListItem>

            
              )

          })}

      </List>


    </Box>
  );

  return (
    <div>
     
          
          <Box

          >
            {list('left')}
          </Box>
      
    </div>
  );
}
