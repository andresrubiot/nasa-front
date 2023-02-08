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

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'APOD',
        href: '/apod/2023-01-01'
    },
    {
        name: 'Rover',
        href: '/rover/2021-01-01'
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