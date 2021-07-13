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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';

import style from "./PageHome.module.css"

const img = require('./bg3.jpg')

class PageHome extends React.Component{

    constructor(props) {
        super(props)

    }

    render(){
        return (
            
            <IonCard>
                
                <img src={img.default}/>
                
                <p className={style.contents}>What is EyeKnow?</p>
                    
                
                
                <p className={style.contents}>EyeKnow is an offline-based application on mobile phones used to provide guidelines on studying up to 3 major subjects of engineering courses. </p>

                <p className={style.contents}>It is designed to help students who are struggling with internet connection but is eager to learn and adapt the new normal classes. </p>

                <p className={style.contents}>It would be beneficial to students for the reasons of: it saves money on renting computers, immediate information access, don’t require high-end mobile phones to smoothly operate, and user friendly. </p>

                <p className={style.contents}>The development of educational app called “EyeKnow” will be providing engineering student an opportunity to study major subjects in order to respond on flexible learning of today’s “new” normal class. </p>
            </IonCard>
            
        )
    }

}

export default PageHome