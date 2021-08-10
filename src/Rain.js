import React from 'react'
import './styles/Rain.css'
import Glass from './Glass'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Rain() {
    let history=useHistory();
    return (
        <div className="rain__background">
                
            <div className="rain">
                <div className="info">
                    <Glass/>
                </div>
                <Button variant="contained" className="button" onClick={()=>{
                history.goBack();
            }}> <KeyboardBackspaceIcon className="back"/>Go Back</Button>
            </div>
        </div>
    )
}

export default Rain
