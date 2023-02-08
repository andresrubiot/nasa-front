import { useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EventIcon from '@mui/icons-material/Event';
import CameraIcon from '@mui/icons-material/CameraAlt';
import CodeIcon from '@mui/icons-material/QrCode';
import axios from 'axios'

const endpoint = 'http://127.0.0.1:8000/api'

const Rover = () => {

    const [ rover, setRover ] = useState<any[]>([])

    const getRover = async (date: string) => {
        const response = await axios.get(`${endpoint}/rover/${date}`)
        setRover(response.data.data.photos)
    }

    useEffect( () => {
        getRover('2023-01-01')
    }, [])


    return (
        <Grid container spacing={3}>
            { rover.map((rov) => (
                <Grid item xs={4} key={rov.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={rov.id}
                            height="194"
                            image={ rov.img_src}
                        />
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <CodeIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="ID" secondary={rov.id} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <EventIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Earth date" secondary={ rov.earth_date } />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <CameraIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Camera" secondary={rov.camera.full_name} />
                                </ListItem>
                                </List>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Rover