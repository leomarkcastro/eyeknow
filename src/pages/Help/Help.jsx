import React from "react"

import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonSpinner,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonBackButton,
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';

import style from "./Help.module.css"

const help = require("./Help.png")
const bg = require("./bg.jpg")

class Help extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            
            <IonPage>

                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/start" />
                    </IonButtons>
                    <IonTitle>Help</IonTitle>
                </IonToolbar>
            
                <IonContent>

                    <div  style={
                        {
                            backgroundImage: `url(${bg.default})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                            height: '100%',
                        }
                    }>

                        <img src={help.default} />

                    </div>

                    

                </IonContent>
                
            </IonPage>
            
        )
    }

}

export default Help