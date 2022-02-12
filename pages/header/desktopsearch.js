import { Paper,Box,Typography,List,ListItem,ListItemText } from "@mui/material"
import { useEffect, useState } from "react"

import CustomInput  from "../custominput"

export default function DesktopSearch(){

    const v=['Piles','Proctology','Laparoscopy','Gynaelogy','ENT','Urology','Vascular','Opthalmology','Fertility']

    const [SearchResult,setSearchResult]= useState([])

    useEffect(()=>{

        setSearchResult(v)

    },[])

    return(
        <>
        <Paper sx={{position:"absolute",left:"-100%",top:"0px",width:"400px",p:1}}>
                  <CustomInput placeholder="Search ..." />

                  <Box sx={{mt:2,mb:1}}>

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

              
                </Paper>
        </>
    )
}