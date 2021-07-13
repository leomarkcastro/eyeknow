import React from "react"

import { 
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonFab,
    IonFabButton,
    IonSegmentButton,
    IonSegment
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';


import Flickity from 'react-flickity-component'


import style from "./PageCircuits.module.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = {
    "c1" : importAll(require.context('./c1', false, /\.(png|jpe?g|svg)$/)),
    "c2" : importAll(require.context('./c2', false, /\.(png|jpe?g|svg)$/)),
    "c3" : importAll(require.context('./c3', false, /\.(png|jpe?g|svg)$/)),
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

class PageCircuits extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            lesson : "c1",
        }

    }

    componentDidMount(){

    }

    header(){
        return (
            <IonSelect style={{marginBottom:"1rem", color:"white"}} value={this.state.lesson} okText="Okay" cancelText="Dismiss" onIonChange={e => this.setState({...this.state ,lesson: e.detail.value})}>
                <IonSelectOption value="c1">Chapter 1</IonSelectOption>
                <IonSelectOption value="c2">Chapter 2</IonSelectOption>
                <IonSelectOption value="c3">Chapter 3</IonSelectOption>
            </IonSelect>
        )
    }

    render(){
        return (
            
            <div>
                <IonSegment style={{marginBottom:"1rem", color:"white"}} value={this.state.lesson} okText="Okay" cancelText="Dismiss" onIonChange={e => this.setState({...this.state ,lesson: e.detail.value})}>
                    <IonSegmentButton value="c1">Chapter 1</IonSegmentButton>
                    <IonSegmentButton value="c2">Chapter 2</IonSegmentButton>
                    <IonSegmentButton value="c3">Chapter 3</IonSegmentButton>
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

export default PageCircuits