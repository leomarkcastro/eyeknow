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


import style from "./PageProgramming.module.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = {
    "python" : importAll(require.context('./py', false, /\.(png|jpe?g|svg)$/)),
    "java" : importAll(require.context('./jv', false, /\.(png|jpe?g|svg)$/)),
    "cpp" : importAll(require.context('./cp', false, /\.(png|jpe?g|svg)$/)),
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

class PageSubjects extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            lesson : "python",
        }

    }

    componentDidMount(){

    }

    render(){
        return (
            
            <div>
                <IonSegment style={{marginBottom:"1rem", color:"white"}} value={this.state.lesson} okText="Okay" cancelText="Dismiss" onIonChange={e => this.setState({...this.state ,lesson: e.detail.value})}>
                    <IonSegmentButton value="python">Python</IonSegmentButton>
                    <IonSegmentButton value="java">Java</IonSegmentButton>
                    <IonSegmentButton value="cpp">C++</IonSegmentButton>
                </IonSegment>

                {
                    Object.keys(images[this.state.lesson]).slice(0).reverse().map((e,i) => (
                        <img key={`lesson_${i}`} src={images[this.state.lesson][e].default} />
                    ))
                }

                
        

            </div>
            
        )
    }

}

export default PageSubjects