import { useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios'
import Typography from '@mui/material/Typography';

const endpoint = 'http://127.0.0.1:8000/api'

const Apod = () => {

    const [ apod, setApod ] = useState<any[]>([])

    const getApod = async (date: string) => {
        const response = await axios.get(`${endpoint}/apod/${date}`)
        setApod([response.data.data])
    }

    useEffect( () => {
        const today = new Date();

        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        
        getApod(`${year}-${month}-${day}`)
    }, [])

    return (
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