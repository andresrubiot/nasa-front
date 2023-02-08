import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TopBar from './components/TopBar';
import LeftBar from './components/LeftBar';
import Home from './components/Home';
import Apod from './components/Apod';
import Rover from './components/Rover';
import Import from './components/Import';

function App() {
    return (
        <Container maxWidth="xl">
            <BrowserRouter>
                <Box sx={{ display: 'flex' }}>
                
                    <CssBaseline />
                    
                    <TopBar />
                    <LeftBar />
                
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                    >
                        <Toolbar />

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/apod/:date' element={<Apod />} />
                            <Route path='/rover/:date' element={<Rover />} />
                            <Route path='/import' element={<Import />} />
                        </Routes>

                        
                    </Box>
                </Box>
            </BrowserRouter>
        </Container>
    );
}
    
export default App;