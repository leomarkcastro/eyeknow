import React from "react"

import { 
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonFab,
    IonFabButton,
    IonSegment,
    IonSegmentButton
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';


import Flickity from 'react-flickity-component'


import style from "./PageCalculus.module.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = {
    "prec" : importAll(require.context('./pc', false, /\.(png|jpe?g|svg)$/)),
    "int" : importAll(require.context('./in', false, /\.(png|jpe?g|svg)$/)),
    "diff" : importAll(require.context('./df', false, /\.(png|jpe?g|svg)$/)),
}


const flickityOptions = {
    initialIndex: 2,
    dragThreshold: 10,
    prevNextButtons: false,
    wrapAround: true,
    lazyLoad: 3,
    initialIndex: 0,
    fullscreen: true,
}

class PageCalculus extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            lesson : "prec",
        }

    }

    componentDidMount(){

    }

    render(){
        return (
            
            
            <div>
                <IonSegment style={{marginBottom:"1rem", color:"white"}} value={this.state.lesson} okText="Okay" cancelText="Dismiss" onIonChange={e => this.setState({...this.state ,lesson: e.detail.value})}>
                    <IonSegmentButton value="prec">Pre Calculus</IonSegmentButton>
                    <IonSegmentButton value="diff">Differential</IonSegmentButton>
                    <IonSegmentButton value="int">Integral</IonSegmentButton>
                </IonSegment>

                {
                    Object.keys(images[this.state.lesson]).map((e,i) => (
                        <img key={`lesson_${i}`} src={images[this.state.lesson][e].default} />
                    ))
                }

                
        

            </div>
            
        )
    }

}

export default PageCalculus