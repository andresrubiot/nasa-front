import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

export default function TopBar() {
    return (
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    NASA API
                </Typography>
            </Toolbar>
        </AppBar>
    );
}