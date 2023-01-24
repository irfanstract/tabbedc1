

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
import * as Ion from "library/useIonicUi1" ;



export {} ;











export default (
  SS.identity<{
    (ctx: { c: BaseAudioContext ; d: AudioNode | AudioParam ; } ) : void ;
  }>(function implMakeBassDrumKickSound({
    c,
    d,
  }) {
    ;
    const duration = (
      2.5
    ) ;
    const t1 = (
      c.currentTime
    ) ;
    const amp1 = (
      new (class extends GainNode {
        constructor() {
          super(c) ;
          this.gain.setValueAtTime(2 ** -3, 0, ) ;
        }
      } )
    ) ;
    const fade11 = (
      new (class extends GainNode {
        constructor() {
          super(c) ;
          this.gain.setValueAtTime(1, 0, ) ;
          {
            {
              (
                this.gain
                .setValueAtTime(1, t1, )
              ) ;
              (
                this.gain
                .linearRampToValueAtTime(0, t1 + duration, )
              ) ;
            }
          }
        }
      } )
    ) ;
    const o2 = (
      new (class extends OscillatorNode {
        constructor() {
          super(c) ;
          (
            this.frequency
            .setValueAtTime(55, 0, )
          ) ;
          (
            this.detune
            .setValueAtTime(6 * 100, 0, )
          ) ;
          if (1) {
            {
              (
                this.detune
                .setValueAtTime(6 * 100, t1, )
              ) ;
              (
                this.detune
                .linearRampToValueAtTime(0, t1 + duration, )
              ) ;
            }
          }
        }
      } )
    ) ;
    (
      o2
      .connect(fade11 )
      .connect(amp1 )
      .connect(d )
    ) ;
    o2.start(t1 ) ;
    o2.stop (t1 + (1.5 * duration ) ) ;
    ;
  } )
) ;


