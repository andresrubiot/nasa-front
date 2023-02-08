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
import Typography from '@mui/material/Typography';

const endpoint = 'http://127.0.0.1:8000/api'

const Apod = () => {

    const [ apod, setApod ] = useState<any[]>([])

    const getApod = async (date: string) => {
        const response = await axios.get(`${endpoint}/apod/${date}`)
        setApod([response.data.data])
        console.log([response.data.data])
    }

    useEffect( () => {
        getApod('2023-01-01')
    }, [])

    return (
        // <div>
        //     { apod.map((apd, index) => (
        //         <div key={index}>
        //             { apd.date }
        //             hola
        //         </div>
        //     ))}
        // </div>
        <Grid container>
            { apod.map((apd) => (
                <Grid item xs={12} key={apd.date}>

                    <Card>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={apd.hdurl}
                            title={apd.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {apd.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {apd.explanation}
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            ))}
        </Grid>
    )
}

export default Apod