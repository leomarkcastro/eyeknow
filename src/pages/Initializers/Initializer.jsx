import React from "react"

import { IonPage, IonContent, IonHeader, IonIcon, IonSpinner } from '@ionic/react';
import { bookOutline, qrCode,  } from 'ionicons/icons';

import style from "./Initializer.module.css"

import Logo from "../../components/Logo/Logo";


const bg = require("./bg.jpg")

class Initializer extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            user : null,
        }

    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.history.replace("/start")
        }, 2000)
        
    }

    render(){
        return (
            
            <IonPage>
            
                <IonContent>

                    <div  style={
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
                            <sub><IonSpinner name="dots" /></sub>
                        </div>


                    </div>

                    
                </IonContent>
                
            </IonPage>
            
        )
    }
    
}

export default Initializer