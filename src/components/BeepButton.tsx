

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
import { 
  forAudioCtx, 
  SNO, // needs to be imported, defines the necessary classes
} from "library/audioctx/withAmpB";




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
          const nd100 = (
            forAudioCtx({
              ctx: c , 
              dest: c.destination ,
            })
          ) ;
          if (1) {
            nd100.close({ t: c.currentTime + (15 ) , }) ;
          }
          const nd10 = (
            nd100
            .withConstantAmp(2 ** -2, )
            .withNativeAudioNodeFlt1({
              newImplementingNdInstance1: ({ ctx, }) => {
                return (
                  new AudioWorkletNode(ctx, "freqsh1" )
                ) ;
              } ,
            })
            .asAmplSyncedPrctWhiteNoise()
            // .withConstantAmp(2 ** -1, )
            .withVariableAmp()
          ) ;
          nd10.gainParam.setValueAtTime(2 ** -3, 0 ) ;
          const nd1 = (
            nd10.withVariableAmp()
          ) ;
          nd1.gainParam.setValueAtTime(1, c.currentTime ) ;
          if (1) {
            nd1.gainParam.linearRampToValueAtTime(-1, c.currentTime + 1 ) ;
          }
          const xt = (
            nd1.currentTime
          ) ;
          const duration = 2.5 ;
          {
            const o2 = (
              nd1.startNewOscillator({
                startT: xt ,
                type: SNO.OSC.of({ waveType: "triangle" , }) ,
              })
            ) ;
            o2.frequency.setValueAtTime(440, 0, ) ;
            o2.detune["setValueAtTime"         ]((   0  ) * 100 , (xt  +   0  ), ) ;
            o2.detune["linearRampToValueAtTime"]((-  4  ) * 100 , (xt  +   0.5  ), ) ;
            o2.close({ t: xt + duration , }) ;
          }
          if (0) {
            const nd31 = (
              nd1.withVariableAmp()
            ) ;
            nd31.gainParam.setValueAtTime(2 ** -0.5 , 0, ) ;
            const o3 = (
              nd31.startPracticalWhiteNoise({
                startT: xt ,
              })
            ) ;
            o3.close({ t: xt + duration + 0.5 , }) ;
          }
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


