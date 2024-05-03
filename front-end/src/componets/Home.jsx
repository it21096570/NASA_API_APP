import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Stack,
    Box,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';

function LandingPage() {
    const navigate = useNavigate();
    const storedUserName = localStorage.getItem('userName');

    const handleNasaPhoto = () => {
        navigate('/nasaphoto');
    };

    const handleMassRover = () => {
        navigate('/nasaweather');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        navigate('/'); // Redirect to the login page
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundImage: 'url(../images/BI1.jpg)', //  background image URL
                backgroundSize: 'cover', // Ensures the image covers the entire screen
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents image repetition
                color: 'white', // Text color for visibility
            }}
        >
            {/* App Bar for Navigation */}
            <AppBar position="static">
                <Toolbar>
                    <RocketLaunchIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    </Typography>
                    {storedUserName && (
                        <Typography variant="h8" sx={{ mr: 2 }} style={{ backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '5px' }}>
                            Hello, {storedUserName}
                        </Typography>
                    )}
                    <Button color="inherit" onClick={handleLogout}>
                        <LogoutIcon sx={{ mr: 1 }} />
                        Log Out
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container
                maxWidth="md"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center the content vertically
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Welcome to NASA Explorer
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Explore the universe with stunning photos and Mars weather reports.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        onClick={handleNasaPhoto}
                    >
                        NASA Photo
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        onClick={handleMassRover}
                    >
                        MARS Rover Photos
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default LandingPage;
