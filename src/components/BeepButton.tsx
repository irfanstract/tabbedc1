

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from 'react';
import * as RCS from "library/rcs1" ;
import { SvgWithIncl, } from "library/rcsSvg1";
import * as RCSSVG from "library/rcsSvg1";
import CurrentDateTime1 from 'components/CurrentDateTime1';
import { CmC, } from 'components/Tl1';  
import * as Ion from "library/useIonicUi1" ;



export {} ;








import { getInstance as getAudioCtx, } from "library/audioctx/sharedInstance";
import makeBeepOnGivenCtx from "library/audioctx/makeBeepOnGivenCtx";
import { makeBassDrumKickSound     , } from "library/audioctx/makeBassDropSoundCd";
import { makeBassDropSound         , } from "library/audioctx/makeBassDropSoundCd";
import { forAudioCtx, START_NEW_OSCILLATOR, SNO, } from "library/audioctx/withAmpB";




export default (
  function BeepButtonCImpl() {
    const mainButton1 = (
      <Ion.Button 
      children={"Beep"}
      type="button"
      onClick={async (e) => {
        const c = (
          getAudioCtx(e.nativeEvent)
        ) ;
        {
          const c1 = (
            forAudioCtx({ ctx: c, dest: c.destination, }) 
          ) ;
          c1.gainParam.setValueAtTime(2 ** -4, 0, ) ;
          const o2 = (
            c1[START_NEW_OSCILLATOR](SNO.OSC.of({ waveType: "triangle", }) , )
          ) ;
          o2.frequency.setValueAtTime(440, c1.currentTime ) ;
          o2.frequency.exponentialRampToValueAtTime(220, c1.currentTime + 1 ) ;
          setTimeout(() => { c1.close() ; } , 2.5 * 1000 );
        }
      } }
      />
    ) ;
    return (
      mainButton1
    ) ;
  }
) ;
export const BassDrumKickSoundButtonC = (
  function BassDrumKickSoundButtonCImpl() {
    const mainButton1 = (
      <Ion.Button 
      children={"Kick"}
      type="button"
      onClick={async (e) => {
        const c = (
          getAudioCtx(e.nativeEvent)
        ) ;
        makeBassDrumKickSound({ c, d: c.destination, }, ) ;
      } }
      />
    ) ;
    return (
      mainButton1
    ) ;
  }
) ;
export const BassDropButtonC = (
  function BassDropButtonCImpl() {
    const mainButton1 = (
      <Ion.Button 
      children={"Bass Drop"}
      type="button"
      onClick={async (e) => {
        const c = (
          getAudioCtx(e.nativeEvent)
        ) ;
        makeBassDropSound({ c, d: c.destination, }, { startFreq: (2 ** (6 / 12) * 55 ), finalFreq: 45, } ) ;
      } }
      />
    ) ;
    return (
      mainButton1
    ) ;
  }
) ;


