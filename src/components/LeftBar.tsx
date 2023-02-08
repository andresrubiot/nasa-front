import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const today = new Date();

        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        
        let now = (`${year}-${month}-${day}`)

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'APOD',
        href: '/apod/' + now,
    },
    {
        name: 'Rover',
        href: '/rover/' + now,
    },
    {
        name: 'Import users',
        href: '/import'
    }
]

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
                    {links.map((link) => (
                        <ListItem key={link.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BlurOnIcon />
                                </ListItemIcon>
                                <NavLink 
                                    to={link.href}
                                    className={({ isActive }) => isActive ? 'active' : undefined }
                                >
                                    {link.name}
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </Box>
    );
}