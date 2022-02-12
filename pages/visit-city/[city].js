import { Typography } from "@mui/material";


export default function City(props){

    return(
        <>

        <Typography>this is the city section {props.city}</Typography>
        </>
    )
}


export async function getServerSideProps({params}) {
  

    const city = params.city

    return {
      props: {city:city}, // will be passed to the page component as props
    }

  }




