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
    IonButton,
    IonPopover
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';

import style from "./PageSubjects.module.css"
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2,
    dragThreshold: 10,
    prevNextButtons: false,
    wrapAround: true,
    
}

const book_images = [
    [
        require('./img1.jpg'),
        "Programming",
        "Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++."
    ],
    [
        require('./img2.jpg'),
        "CALCULUS",
        "Calculus is a branch of mathematics that involves the study of rates of change."
    ],
    [
        require('./img3.jpg'),
        "CIRCUITS",
        "An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow."
    ],
]

class PageSubjects extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            popover_event : null,
            popover_open: false,
            popover_message: "",
            popover_title: "",
            popover_link: "",

            rel: true,
        }

    }

    componentDidMount(){
        this.setState({...this.state, rel: false})
    }

    openPopover(title, message){
        this.setState({
            ...this.state,
            popover_title: title,
            popover_message: message,
            popover_open: true,
        })
    }

    render(){
        return (
            
            <div>
            
                        <div className={style.card}>
                            <img src={book_images[0][0].default} />
                            <IonButton onClick={this.openPopover.bind(this, book_images[0][1], book_images[0][2])}>View Description</IonButton>
                        </div>
                        <div className={style.card}>
                            <img src={book_images[1][0].default} />
                            <IonButton onClick={this.openPopover.bind(this, book_images[1][1], book_images[1][2])}>View Description</IonButton>
                        </div>
                        <div className={style.card}>
                            <img src={book_images[2][0].default} />
                            <IonButton onClick={this.openPopover.bind(this, book_images[2][1], book_images[2][2])}>View Description</IonButton>
                        </div>

                <IonPopover
                    event={this.state.popover_event}
                    isOpen={this.state.popover_open}
                    onDidDismiss={() => this.setState({ ...this.state, popover_open: false, popover_event: null })}
                >
                    <div className={style.popover_style}>
                        <h2>{this.state.popover_title}</h2>
                        <hr/>
                        <p>{this.state.popover_message}</p>
                    </div>
                </IonPopover>

            </div>
            
        )
    }

}

export default PageSubjects