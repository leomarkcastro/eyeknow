import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { 
  homeOutline, 
  homeSharp, 
  bookSharp, 
  bookOutline, 
  desktopSharp, 
  desktopOutline ,
  calculatorSharp,
  calculatorOutline,
  flashSharp,
  flashOutline,
  clipboardSharp,
  clipboardOutline 
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Subjects',
    url: '/page/Subjects',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'Programming',
    url: '/page/Programming',
    iosIcon: desktopOutline,
    mdIcon: desktopSharp
  },
  {
    title: 'Calculus',
    url: '/page/Calculus',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Circuits',
    url: '/page/Circuits',
    iosIcon: flashOutline,
    mdIcon: flashSharp
  },
  {
    title: 'Glossary',
    url: '/page/Glossary',
    iosIcon: clipboardOutline,
    mdIcon: clipboardSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" color="secondary">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>eyeknow</IonListHeader>
          <IonNote>Start Learning Now!</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
