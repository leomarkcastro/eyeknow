import React from "react"

import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonSpinner,
    IonButton
} from '@ionic/react';

import { bookOutline, qrCode,  } from 'ionicons/icons';

import style from "./StartPage.module.css"

import Logo from "../../components/Logo/Logo";


const bg = require("./bg.jpg")

class StartPage extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            user : null,
        }

    }

    componentDidMount(){
        /*setTimeout(()=>{
            this.props.history.push("/page/Home")
        }, 2000)*/
        
    }

    render(){
        return (
            
            <IonPage>
            
                <IonContent>

                    <div style={
                        {
                            backgroundImage: `url(${bg.default})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                            height: '100%',
                        }
                    }>
                        <div className={style.logo}>
                            <Logo/>
                            
                        </div>

                        <div className={style.notice}>
                            <IonButton routerLink="/page/Home">Let's Get Started</IonButton>
                            <IonButton color="dark" fill="clear" routerLink="/about">About</IonButton>
                            <IonButton color="dark" fill="clear" routerLink="/credits">Credits</IonButton>
                            <IonButton color="dark" fill="clear" routerLink="/help">Help</IonButton>
                        </div>

                    </div>
                    

                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default StartPage