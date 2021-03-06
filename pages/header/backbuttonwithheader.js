import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import  Router  from "next/router";


export default function Backbuttonwith(props){

    const VisitHome=()=>{

        Router.push("/")

        CloseSearchbar()
    }

    
  const CloseSearchbar=()=>{

    props.close()
 }


    return(
        <>
        <AppBar sx={{bgcolor:"#011E3C",p:1}} position="static" >
            
            <Container>
                <Toolbar>

                <Typography sx={{flexGrow:1}}>

                    <ArrowBackIosNewIcon onClick={CloseSearchbar} />

                </Typography>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
                    <img src={"/logo.svg"} onClick={VisitHome} alt='pristyn care logo'  />
                </Typography>

                </Toolbar>

            </Container>

        </AppBar>
        </>
    )
}