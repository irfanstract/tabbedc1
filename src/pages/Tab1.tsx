

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

/** core lang */
import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;

/** React */
import React from 'react';
import * as RCS from "library/rcs1" ;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as Ion from "library/useIonicUi1" ;

/** Components */
import * as Components from "components/AllComponents" ;
import ExploreContainer from '../components/ExploreContainer';
import CurrentDateTime1 from 'components/CurrentDateTime1';
import UebR from 'components/UebR';
import { DccDemo, DccDemoTwo1, } from 'components/DraftEditorCc';
import { SecondsOfTimeDurativeSlider, SdlsdDemo, } from 'components/SecondsOfTimeDurationSlider';
import { OosDemo, } from 'components/OverlayOrSequencer/f1';
import { CmC, } from 'components/Tl1';
import { xpxs, } from "components/PrimeLogo";
import fsmt from "components/MetroFshExpoBanner";
import BeepButton from "components/BeepButton";
import { BassDropButtonC, } from "components/BeepButton";
import { BassDrumKickSoundButtonC, } from "components/BeepButton";

/** CSS Imports */
import './Tab1.css';

const Tab1: React.FC = () => {
  const [
    allowAnimatedContents ,
    setAllowAnimatedContents ,
  ] = React.useState<boolean>(false, ) ;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        { allowAnimatedContents && (
        <div 
        style={{
          display: "flex" ,
          flexDirection: "column",
        }}
        >
          { xpxs }
          { fsmt }
        </div>
        ) }
        <Components.FileOpenBtnDemoC  
        />
        <ExploreContainer name="Tab 1 page" />
        { allowAnimatedContents && (
        <CurrentDateTime1 />
        ) }
        { null && (
        <React.Fragment key={1}>
        <DccDemoTwo1 />
        </React.Fragment>
        ) }
        <SdlsdDemo />
        <BeepButton />
        <BassDrumKickSoundButtonC />
        <BassDropButtonC />
        <CmC />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
