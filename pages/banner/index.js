import { Container ,Grid,Box} from "@mui/material";
import Detailofbanner from "./index2";
import ImageDesign from "./index3";



export default function Banner(){

    return(
        <>


            <Box sx={{p:2,mt:2,mx:{lg:5,md:1,xl:5,sm:1,xs:1},display:'flex',justifyContent:"center",alignItems:"center"}}>
               
               <Grid sx={{width:{lg:"80%",md:"100%",sm:"100%",xl:"80%",xs:"100%"}}} container>
                   <Grid item lg={8} xl={8} md={12} xs={12} sm={12}>

                       <Detailofbanner />

                   </Grid>

                   <Grid item lg={4} xl={4} md={12} xs={12} sm={12}>

                       <ImageDesign />

                       </Grid>

                </Grid>

            </Box>

       
        
        </>
    )
}