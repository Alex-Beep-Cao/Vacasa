import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

// Home page
const Home = () =>{
    return (
        <Box style={{ width: "100%" }}>
             <Navbar />
             <Box
                sx={{ margin: "0px" }}
                style={{
                    backgroundColor: "white",
                    marginBottom: ".5rem",
                    marginLeft: ".5rem",
                    marginRight: ".5rem",
                }}
                >
           <Typography component="div">
                <Box sx={{ textAlign: 'center', m: 1 }}> Vacasa Home page, It's empty </Box>
            </Typography>
            </Box>
        </Box>
    )    
}

export default Home;