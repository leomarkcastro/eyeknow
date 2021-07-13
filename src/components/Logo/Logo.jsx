import React from "react"

import { IonIcon } from '@ionic/react';
import {  desktopOutline,  } from 'ionicons/icons';

import style from "./Logo.module.css"

const logo = require("./logo.png")

class Logo extends React.Component {

    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <>
                <img src={logo.default} style={{padding:"15%"}}/>
            </>
        )
    }
    
}

export default Logo