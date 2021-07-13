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

import style from "./Credits.module.css"

const about = require("./Credits.png")
const bg = require("./bg.jpg")

class Credits extends React.Component{

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
                    <IonTitle>Credits</IonTitle>
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

                        <img src={about.default} />

                    </div>

                    

                </IonContent>
                
            </IonPage>
            
        )
    }

}

export default Credits