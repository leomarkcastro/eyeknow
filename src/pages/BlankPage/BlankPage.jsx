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
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';

import style from "./BlankPage.module.css"

const bg = require("./bg2.jpg")

class BlankPage extends React.Component{

    constructor(props) {
        super(props)

        this.title = this.props.title

        console.log(this.props.content)

    }

    render(){
        return (
            
            <IonPage>

                <IonToolbar color="secondary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{this.title}</IonTitle>
                </IonToolbar>

            
                <IonContent>

                    <div style={
                        {
                            backgroundImage: `url(${bg.default})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                            backgroundAttachment: 'fixed',
                            minHeight: '100%',
                            height: 'max-content',
                            transform: 'rotateX(0deg)',
                        }
                    }>
                        <div className={style.content}>
                            
                            {this.props.content}

                        </div>

                    </div>

                </IonContent>
                
            </IonPage>
            
        )
    }

}

export default BlankPage