import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const Apod = () => {

    const [ apod, setApod ] = useState([])
    useEffect( ()=> {
        getApod()
    }, [])
    
    const getApod = async () => {
        // const response = await axios.get(`${endpoint}/apod`)
        // setApod(response)
    }

    return (
        <div>Apod</div>
    )
}

export default Apod