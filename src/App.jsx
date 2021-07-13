import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import BlankPage from './pages/BlankPage/BlankPage';
import Credits from './pages/Credits/Credits';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './flickity.css'

/* Theme variables */
import './theme/variables.css';
import Initializer from './pages/Initializers/Initializer';
import StartPage from './pages/StartPage/StartPage';
import Help from './pages/Help/Help';
import About from './pages/About/About';
import PageHome from './pages/PageHome/PageHome';
import PageSubjects from './pages/PageSubjects/PageSubjects';
import PageProgramming from './pages/PageProgramming/PageProgramming';
import PageCalculus from './pages/PageCalculus/PageCalculus';
import PageCircuits from './pages/PageCircuits/PageCircuits';
import PageGlossary from './pages/PageGlossary/PageGlossary';

const App = () => {
  return (
    <IonApp>

      <IonReactRouter>

        <IonSplitPane contentId="main">

          <Menu />

          <IonRouterOutlet id="main">

            <Route exact path="/init" component={Initializer} />
            <Route exact path="/start" component={StartPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/credits" component={Credits} />
            <Route exact path="/help" component={Help} />
            <Route path="/page/Home" exact  render={
              (props) => <BlankPage {...props} title="Home" content={<PageHome />} />}
            />
            <Route path="/page/Subjects" exact  render={
              (props) => <BlankPage {...props} title="Subjects" content={<PageSubjects />} />}
            />
            <Route path="/page/Programming" exact  render={
              (props) => <BlankPage {...props} title="Programming" content={<PageProgramming />} />}
            />
            <Route path="/page/Calculus" exact  render={
              (props) => <BlankPage {...props} title="Calculus" content={<PageCalculus />} />}
            />
            <Route path="/page/Circuits" exact  render={
              (props) => <BlankPage {...props} title="Circuits" content={<PageCircuits />} />}
            />
            <Route path="/page/Glossary" exact  render={
              (props) => <BlankPage {...props} title="Glossary" content={<PageGlossary />} />}
            />
              
            <Redirect from="/" to="/init" exact/>
          </IonRouterOutlet>

        </IonSplitPane>


      </IonReactRouter>

    </IonApp>
  );
};

export default App;
