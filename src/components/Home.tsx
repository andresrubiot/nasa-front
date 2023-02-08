import { Toolbar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Welcome to NASA API
                    </Typography>
                </CardContent>
            </Card>

            <Toolbar/>

            <Card>
                <CardContent>
                    <Typography variant="h4" component="div">
                        APOD
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Astronomy Picture of the Day
                        </Typography>
                    </Typography>

                    <Typography variant="body2" px={2}>
                        In this option, you will be able to see the image of the day, Updated daily
                    </Typography>
                </CardContent>
            </Card>

            <Toolbar/>

            <Card>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Rover
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Mars Rover Photos
                        </Typography>
                    </Typography>

                    <Typography variant="body2" px={2}>
                        This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom px={3}>
                        Displays photos from two days ago as of the current day
                    </Typography>

                </CardContent>
            </Card>

            <Toolbar/>

            <Card>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Import users
                    </Typography>

                    <Typography variant="body2" px={2}>
                        Import a list of 10.000 users from Excel and store them in a database.
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom px={3}>
                        The Excel file is located in the seeders folder of the backend.
                    </Typography>

                </CardContent>
            </Card>
        </div>
    )
}

export default Home