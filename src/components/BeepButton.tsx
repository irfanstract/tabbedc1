

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
        const g1 = (
          new (class extends GainNode {
            constructor() {
              super(c) ;
              this.gain.setValueAtTime(2 ** -4, 0, ) ;
            }
          } )
        ) ;
        const o2 = (
          new (class extends OscillatorNode {
            constructor() {
              super(c) ;
              (
                this.frequency
                .setValueAtTime(440, 0, )
              ) ;
            }
          } )
        ) ;
        o2.connect(g1 ).connect(c.destination ) ;
        o2.start(c.currentTime ) ;
        o2.stop(c.currentTime + 0.5 ) ;
      } }
      />
    ) ;
    return (
      mainButton1
    ) ;
  }
) ;


