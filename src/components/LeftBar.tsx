import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BlurOnIcon from '@mui/icons-material/BlurOn';

const drawerWidth = 240;

const menuList = ['Home', 'APOD', 'Rover', 'Import Users'];

export default function LeftBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer 
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant='permanent'
                anchor='left'
            >
                <Toolbar />
                <Divider />

                <List>
                    {menuList.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BlurOnIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </Box>
    );
}