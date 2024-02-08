import React from 'react';
import Navbar from "../components/Navbar";
import { Box, Container, Typography, Paper, Link } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import logoNoFrame from '../assets/logo.png';

//Setting page
const Settings = () =>{
    return (
        <Box style={{ width: "100%" }}>
            <Navbar/>
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    SETTINGS
                </Typography>
                <Paper elevation={1} sx={{ p: 2 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    bgcolor: 'background.paper'
                }}>
                <Box component="img" src={logoNoFrame}  />
                
                <Box>
                    <Box display="flex" p={1}>
                        <SettingsIcon color="action" />
                        <Typography sx={{ ml: 1 }}>
                            Vacasa Interview
                        </Typography>
                    </Box>
             
                    <Box display="flex"p={1}>
                        <EmailIcon color="action" />
                        <Typography  sx={{ ml: 1 }}>
                            vacasa.interview@vacasa.com
                        </Typography>
                    </Box>
                </Box>
                </Box>
                </Paper>
                <Typography mt={2} variant="h5" component="h1" gutterBottom>
                    Support
                </Typography>
                <Paper elevation={1} sx={{ p: 2}}>
                    <Box mt={2}>
                        
                        <Link href="https://www.vacasa.com/policies" underline="hover">
                            Privacy policy
                        </Link>
                    </Box>
                    <Box mt={2}>
                        <Link href="https://www.vacasa.com/terms-of-service" underline="hover">
                            Terms of Service
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </Container>
    </Box>
    )    
}

export default Settings;