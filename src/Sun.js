import React from 'react'
import Glass from './Glass'
import './styles/Sun.css'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Sun() {
    const history=useHistory();
    return (
        <div className="sun">
            <div className="weather__info">
                <Glass/>
            </div>
            <Button variant="contained" className="button" onClick={()=>{
                history.goBack();
            }}> <KeyboardBackspaceIcon className="back"/>Go Back</Button>
        </div>
    )
}

export default Sun
