import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';

const endpoint = 'http://127.0.0.1:8000/api'

function Import() {

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0] || null);
    };

    const handleUpload = async () => {
        if (!file) {
        return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
        const response = await fetch(`${endpoint}/users/import`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                
                <Typography variant="h5" component="div">
                    <h2>Upload file</h2>
                </Typography>

                <Tooltip title="Select file">
                    <input type="file" onChange={handleFileChange} />
                </Tooltip>

            </CardContent>
            
            <CardActions>
                <Tooltip title="Send file">
                    <Button 
                        type='submit'
                        variant="contained" 
                        endIcon={<SendIcon />}
                        onClick={handleUpload}
                    >
                        Send
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Import