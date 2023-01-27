

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















namespace XWith {
  ;
  // mutually-recursive set of functions will not be able to use type-inference.
  export type XBaseOps = {
    close(): void ;
  }
  /** 
   * defines
   * - everything in {@link XBaseOps }
   * - {@link withVariableAmp}(): {@link CWA}
   * 
   */
  export interface CWA extends XBaseOps { 
    
    /**   
     * {@link BaseAudioContext.currentTime }
     */
    currentTime: BaseAudioContext["currentTime"] ;
    
    // the AudioParam(s)
    /**   
     * {@link GainNode.gain }
     */
    gainParam : AudioParam ;

    // the derivations
    /**   
     * {@link GainNode }
     */
    withVariableAmp(): CWA ;
    /**   
     * {@link OscillatorNode } or {@link AudioBufferSourceNode }
     */
    [START_NEW_OSCILLATOR](type: OSC| WSM ): (
      {} 
      & XBaseOps 
      & Pick<OscillatorNode, "frequency" | "detune">
    ) ;
    /**    
     * whitenoise without any implied filtering.
     * 
     */
    startTechnicalWhiteNoise(): (
      {}
      & XBaseOps
    ) ;
    /**    
     * whitenoise with possible implied filtering.
     * 
     */
    startPracticalWhiteNoise(): (
      {}
      & XBaseOps
    ) ;
    
  } 
  ;
  export class WSM {
    private constructor(
      public sm: AudioBuffer, 
      public loop: boolean ,
    ) {}
    static of(p: WSM ): WSM { 
      return new WSM(
        p.sm, 
        p.loop, 
      ) ; 
    }
  } ;
  export class OSC {
    private constructor(public waveType: Exclude<OscillatorType, "custom"> | PeriodicWave,) {}
    static of(p: OSC ): OSC { return new OSC(p.waveType, ) ; }
  } ;
} ;
export const forAudioCtx = (() => {
  const main = (
    function forAudioCtxImpl(...[{ ctx, dest, }, ] : [
      { ctx: BaseAudioContext ; dest: AudioNode | AudioParam ; } , 
    ] ): (
      {} 
      & XWith.XBaseOps
      & XWith.CWA 
    ) {
      const gn0 = ctx.createGain() ;
      gn0.connect(dest) ;
      return (
        new (class CwaImplForThatAudioCtx implements XWith.CWA {
          
          close() {
            gn0.disconnect() ;
          }
          get currentTime() { return ctx.currentTime ; } ;

          gainParam = gn0.gain ;

          withVariableAmp() { 
            return (
              forAudioCtx({
                ctx,
                dest: gn0 ,
              })
            ) ;
          } 
          [START_NEW_OSCILLATOR] = (
            SS.identity<(
              XWith.CWA[typeof START_NEW_OSCILLATOR] 
            )>(function (type) {
              return (
                startNewOscillatorOrBufferSourced1({
                  ctx ,
                  dest: gn0 ,
                  type ,
                })
              ) ; 
            })
          ) ;
          startTechnicalWhiteNoise() {
            return (
              startNewWhiteNoiseNode({
                ctx ,
                dest: gn0 ,
              })
            ) ; 
          }
          startPracticalWhiteNoise() {
            const nd1 = (
              this.startTechnicalWhiteNoise()
            ) ;
            return (
              nd1
            ) ;
          }

        } )
      ) ;
    }
  ) ;
  const startNewOscillatorOrBufferSourced1 = (
    SS.identity<(
      (ctx: (
        {}
        & (Parameters<typeof main>[0] & {} )
        & { type : XWith.OSC | XWith.WSM ; }
      ) ) => ReturnType<XWith.CWA[typeof START_NEW_OSCILLATOR]>
    )>(function startNewOscillatorImpl({
      ctx ,
      dest: gn0 ,
      type ,
    }) {
      // TODO
      ;
      if (type instanceof XWith.WSM ) {
        const o1 = ctx.createBufferSource() ;
        o1.loop = (
          type.loop
        ) ;
        o1.buffer = (
          type.sm
        ) ;
        o1.connect(gn0 ) ;
        o1.start(0) ;
        ;
        return {
          close      : () => { o1.stop() ; } ,
          frequency  : o1.playbackRate       ,
          detune     : o1.detune             ,
        } ;
      }
      if (type instanceof XWith.OSC ) {
        const o1 = ctx.createOscillator() ;
        (() => {
          if (typeof type.waveType !== "object") {
            ;
            o1.type = (
              type.waveType
            ) ;
          }
          if (type.waveType instanceof PeriodicWave) {
            ;
            o1.setPeriodicWave((
              type.waveType
            )) ;
          }
        } )() ;
        o1.connect(gn0 ) ;
        o1.start(0) ;
        return {
          close      : () => { o1.stop() ; } ,
          frequency  : o1.frequency          ,
          detune     : o1.detune             ,
        } ;
      }
      throw TypeError(`'type' were ${type } `) ;
    } )
  ) ;
  // TODO
  const startNewWhiteNoiseNode = (
    (() => {
      const bufferForCtx = (
        SS.memoize((ctx: BaseAudioContext) => (
          (() => {
            const ab1 = (
              ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate)
            ) ;
            // TODO
            {
              ab1.copyToChannel((
                Float32Array.from((
                  Immutable.Range(0, ctx.sampleRate, 1)
                  .map(() => Math.random() )
                  .map(v => (-1 + (v * 2 ) ) )
                ))
              ), 0 ) ;
            }
            return (
              ab1
            ) ;
          } )()
        ))
      ) ;
      return (
        SS.identity<(
          (ctx: (
            {}
            & (Parameters<typeof main>[0] & {} )
          ) ) => (
            {}
            & XWith.XBaseOps
          )
        )>(function ({
          ctx ,
          dest ,
        }) {
          const buffer1 = (
            bufferForCtx(ctx )
          ) ;
          // TODO
          {
            return (
              startNewOscillatorOrBufferSourced1({
                ctx ,
                dest ,
                type: (
                  XWith.WSM.of({
                    loop: false ,
                    sm: buffer1 ,
                  })
                ) ,
              })
            )
          }
        } )
      ) ;
    } )()
  ) ;
  return main ;
} )() ;
export const START_NEW_OSCILLATOR = Symbol() ;
export namespace SNO {
  export const WSM = XWith.WSM ;
  export const OSC = XWith.OSC ;
} ;






