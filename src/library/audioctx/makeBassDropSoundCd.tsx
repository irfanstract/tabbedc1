

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











export type CtxAndDest = { 
  c: BaseAudioContext ; 
  d: AudioNode | AudioParam ; 
} ;
export const CtxAndDest = {} ;
export type  CtxTSpecifier           = { tInCtx      : number      ; } ; 
export const CtxTSpecifier           = {  } ; 
export type  AmpFactorSpecifier      = { ampF        : number      ; } ;
export const AmpFactorSpecifier      = {  } ; 
export type  DurationalSpecifier     = { duration    : number      ; } ; 
export const DurationalSpecifier     = {  } ; 
let defaultBassDropAmpFac: number = (
  2 ** -2
) ;
export const makeBassDrumKickSound = (
  SS.identity<{
    (ctx: CtxAndDest ) : void ;
  }>(function implMakeBassDrumKickSound({
    c,
    d,
  }) {
    ;
    return (
      makeBassDropSound({ 
        c, d, 
      } , { 
        duration: 0.5 , 
        ampF: (2 ** 0.625) * defaultBassDropAmpFac , 
        finalFreq: 45 ,
        startFreq: 65 ,
      } )
    ) ;
  } )
) ;
export const makeBassDropSound = (
  SS.identity<{
    (...args : [
      ctx: (
        {}
        & CtxAndDest
        & Partial<CtxTSpecifier>
      ) ,
      dp ?: (
        {}
        & Partial<AmpFactorSpecifier>
        & Partial<DurationalSpecifier>
        & EitherBothSetOrBothUnset<{ finalFreq: number ; startFreq: number ; }>
      ) ,
    ] ) : void ;
  }>(function implMakeBassDropSound({
    c,
    d,
    tInCtx: t1 = c.currentTime ,
  } , {
    duration = 4 ,
    ampF = defaultBassDropAmpFac ,
    finalFreq = 55 ,
    startFreq = (2 ** (6/12 ) ) * finalFreq ,
  } = {} ) {
    ;
    const amp1 = (
      new (class extends GainNode {
        constructor() {
          super(c) ;
          this.gain.setValueAtTime(ampF, 0, ) ;
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
            .setValueAtTime(finalFreq, 0, )
          ) ;
          (
            this.detune
            .setValueAtTime(new (class { semitones !: number ; constructor(public octaves: number) { this.semitones = octaves * 12 ; } ; } )(Math.log2(startFreq / finalFreq ) ).semitones * 100 , 0, )
          ) ;
          if (1) {
            {
              (
                this.detune
                .setValueAtTime(new (class { semitones !: number ; constructor(public octaves: number) { this.semitones = octaves * 12 ; } ; } )(Math.log2(startFreq / finalFreq ) ).semitones * 100, t1, )
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


