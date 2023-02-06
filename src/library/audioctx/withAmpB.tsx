

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
    close(
      /**   
       * this "properties" parameter is optional, but
       * unless omitted, there will be obligatory properties.
       */
      properties ?: (
        {}
        & { t: number }
      ) ,
    ): void ;
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

    asReconnectible() : (
      {}
      & {
        tapOutPt: Pick<AudioNode, "connect" | "disconnect"> ; 
        asFeedinPt: AudioNode | AudioParam ;
      }
    ) ;

    startTapoffOnlyNd() : CWA ;
    onlyTowardsNativeAudioNode1(...args : Parameters<AudioNode["connect"]> ) : CWA ;

    // the derivations
    withConstantAmp(v: number): Omit<CWA, keyof Pick<CWA, "gainParam" > > ;
    /**   
     * {@link GainNode }
     */
    withVariableAmp(): CWA ;
    withVariableBiquadFiltering : () => { 
      main: CWA ; 
      ctrls: (
        {}
        & Pick<BiquadFilterNode, "type" | "frequency" | "gain" | "Q">
      ) ; 
    } ;
    /**    */
    asAmplAnalysis(): CWA ;
    /**    */
    asAmplSyncedPrctWhiteNoise(): CWA ;
    /**   
     * {@link OscillatorNode } or {@link AudioBufferSourceNode }
     */
    startNewOscillator(properties: (
      {}
      & ScheduledSourceNodeStartSpec
      & { type: OSC| WSM }
    ) ): (
      {} 
      & XBaseOps 
      & Pick<OscillatorNode, "frequency" | "detune">
    ) ;
    /**    
     * whitenoise without any implied filtering.
     * 
     */
    startTechnicalWhiteNoise(properties: (
      {}
      & ScheduledSourceNodeStartSpec
    ) ): (
      {}
      & XBaseOps
    ) ;
    /**    
     * whitenoise with possible implied filtering.
     * 
     */
    startPracticalWhiteNoise(properties: (
      Parameters<this["startTechnicalWhiteNoise"] >[0]
    ) ): (
      {}
      & XBaseOps
    ) ;
    
  } 
  export type ScheduledSourceNodeStartSpec = (
    {}
    & { startT : number ; }
  ) ;
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
      const {
        //
        tapOutPt: tapOutNd ,
        gn0 ,
        asFeedinPt: asInputNd ,
        implDisconnectFromDestImmediately ,
      } = (
        ((): (
          {}
          & {
            tapOutPt: Pick<AudioNode, "connect" | "disconnect"> ;
            gn0: Pick<GainNode, "gain">;
            asFeedinPt: AudioNode | AudioParam ;
            implDisconnectFromDestImmediately: () => void;
          }
        ) => {
          ;
          const tapOutNd = ctx.createGain() ;
          const gn0 = ctx.createGain() ;
          gn0.connect(dest) ;
          gn0.connect(tapOutNd) ;
          const asInputNd = (
            gn0
          ) ;
          const implDisconnectFromDestImmediately = (
            function (): void {
              gn0.disconnect() ;
            }
          ) ;
          ;
          return {
            tapOutPt: tapOutNd ,
            gn0 ,
            asFeedinPt: asInputNd ,
            implDisconnectFromDestImmediately ,
          } ;
        } )()
      ) ;
      return (
        new (class CwaImplForThatAudioCtx implements XWith.CWA {
          
          close = (
            SS.identity<XWith.CWA["close"]>((...[{
              t = ctx.currentTime ,
            } = {}] ) => {
              if (1) {
                gn0.gain.cancelScheduledValues(t, ) ;
                gn0.gain.setValueAtTime(0, t + 0.005, ) ;
              }
              if (1) {
                /**  
                 * since `connect()` and `disconnect()` does not support scheduling,
                 * we need to take care of it ourselves `-___-`
                 * 
                 */
                (async () => {
                  M: {
                    for (;; await new Promise<void>(R => setTimeout(R, 500, ) ) ) {
                      if ((
                        t < ctx.currentTime
                      )) {
                        implDisconnectFromDestImmediately() ;
                        break M ;
                      }
                    }
                  }
                } )() ;
              }
            })
          ) ;
          get currentTime() { return ctx.currentTime ; } ;

          asReconnectible = (
            () : ReturnType<XWith.CWA["asReconnectible"] > => {
              return {
                asFeedinPt     : asInputNd      ,
                tapOutPt       : tapOutNd       ,
              } ;
            }
          ) ;

          gainParam = gn0.gain ;

          startTapoffOnlyNd : XWith.CWA["startTapoffOnlyNd"] = (
            () => {
              const nd0 = (
                this
              ) ;
              const mutedNd1 = (
                nd0.withVariableAmp()
              ) ;
              mutedNd1.gainParam.setValueAtTime(0, 0 ) ;
              /**   
               * additional Node becomes necessary
               * because 
               * the Gain setting on the previously-initialised Node 
               * would additionally mute the tapoff from that
               * 
               */
              const nd2 = (
                mutedNd1.withVariableAmp()
              ) ;
              return (
                nd2
              ) ;
            }
          ) ;
          onlyTowardsNativeAudioNode1 = (
            SS.identity<XWith.CWA["onlyTowardsNativeAudioNode1"] >((
              (...xArgs) => {
                const nd1 = this.startTapoffOnlyNd() ;
                (
                  nd1.asReconnectible().tapOutPt
                  .connect(...xArgs )
                ) ;
                return nd1 ;
              }
            ) )
          ) ;

          withConstantAmp = (
            SS.identity<XWith.CWA["withConstantAmp"] >((value1) => {
              const newNd1 = (
                this.withVariableAmp()
              ) ;
              newNd1.gainParam.setValueAtTime(value1, 0, ) ;
              return (
                newNd1
              ) ;
            } )
          ) ;
          withVariableAmp() { 
            return (
              forAudioCtx({
                ctx,
                dest: asInputNd ,
              })
            ) ;
          } 
          withVariableBiquadFiltering : (
            XWith.CWA["withVariableBiquadFiltering"]
          ) = (
            () => {
              const bdFltNode1 = (
                ctx.createBiquadFilter()
              ) ;
              bdFltNode1.connect(asInputNd) ;
              return {
                main: (
                  forAudioCtx({
                    ctx,
                    dest: bdFltNode1 ,
                  })
                ) ,
                ctrls: bdFltNode1 ,
              } ;
            }
          ) ;
          asAmplSyncedPrctWhiteNoise = (
            SS.identity<(
              XWith.CWA["asAmplSyncedPrctWhiteNoise"]
            )>(() => {
              const nd0 = this ;
              // TODO
              const nd2 = nd0.withVariableAmp() ;
              const ndp1 = (
                nd2.withConstantAmp(2 ** -3 )
              ) ;
              ndp1.startNewOscillator({ 
                startT: 0, 
                type: XWith.OSC.of({ waveType: "triangle", }), 
              }) ;
              const nd1 = nd0.startTapoffOnlyNd() ;
              M : {
                if (0) {
                  nd2.gainParam.setValueAtTime(1, 0, ) ;
                  break M ;
                }
                {
                  nd2.gainParam.setValueAtTime(0, 0, ) ;
                  (
                    nd1.asReconnectible().tapOutPt
                    .connect(nd2.gainParam )
                  ) ;
                }
              }
              const nd11 = nd1.asAmplAnalysis() ;
              return nd11.withVariableAmp() ;
            } )
          ) ;
          asAmplAnalysis = (
            SS.identity<(
              XWith.CWA["asAmplAnalysis"]
            )>(() => {
              ;
              const nd0 = this ;
              const cvnd = (({ mode, } : {
                mode: (
                  never 
                  | 1 
                  | 2
                ) ; 
              } ): AnalyserNode | AudioNode => {
                const xMainOutput = (
                  nd0.asReconnectible().asFeedinPt
                ) ;
                switch (mode) {

                case 1 :
                {
                const xConstNd2 = (
                  ctx.createConstantSource()
                ) ;
                xConstNd2.offset.setValueAtTime(0, 0) ;
                {
                  (
                    xConstNd2
                    .connect(xMainOutput )
                  );
                  xConstNd2.start(0, ) ;
                }
                const xAnalyserNd1 = (
                  ctx.createAnalyser()
                ) ;
                xAnalyserNd1.fftSize = 8192 ;
                {
                  // TODO
                  (async () => {
                    for (;; (
                      await (
                        new Promise<void>(R => (
                          setTimeout(R, (2 ** -5 ) * 1000 , )
                        ) )
                      )
                    ) ) {
                      const {
                        rawFreqDomainValues ,
                      } = (
                        fAnalysedNodeCapture(xAnalyserNd1)
                      ) ;
                      const value = (
                        rawFreqDomainValues
                        .toSeq()
                        .map(e => (
                          // TODO
                          e.v / 0xFF 
                        ) )
                        .map((v: number): number => {
                          if (isNaN(v) || v.toString().match(/Infi/g ) ) {
                            return 0 ;
                          }
                          return v ;
                        } )
                        .reduce<{ max: number ; sum: number ; }>(({ max: max0, sum: sum0, } , v1) => {
                          return {
                            max: (
                              Math.max(...[
                                max0 ,
                                v1 ,
                              ])
                            ) ,
                            sum: sum0 + v1 ,
                          } ;
                        } , { max: 0, sum: 0, }, )
                        .max
                      ) ;
                      1 && (
                        xConstNd2.offset
                        .setTargetAtTime(value, xConstNd2.context.currentTime, 2 ** -7 )
                      ) ;
                    }
                  })() ;
                }
                return xAnalyserNd1 ;
                }

                case 2 :
                {
                  const nd1 = (
                    ctx.createGain()
                  ) ;
                  // return (
                  //   new AudioWorkletNode(ctx, "gainofb", )
                  // ) ;
                  (async () => {
                    const nd2 = (
                      new AudioWorkletNode(ctx, "gainofb", )
                      // new GainNode(ctx)
                    ) ;
                    nd1.connect(nd2) ;
                    nd2.connect(xMainOutput);
                  } )() ;
                  return (
                    nd1
                  ) ;
                }
                  
                }
              } )({ mode: 2, }) ;
              const nd1 = (
                nd0.startTapoffOnlyNd()
              ) ;
              (
                nd1.asReconnectible().tapOutPt
                .connect(cvnd )
              ) ;
              {
                //
              }
              // TODO
              if (0) {
                const ndx = (
                  nd1.startNewOscillator({
                    startT: nd1.currentTime ,
                    type: XWith.OSC.of({ waveType: "triangle", }) ,
                  })
                ) ;
                ndx.frequency.setValueAtTime(220, 0, ) ;
              }
              return (
                nd1.withVariableAmp()
              ) ;
            } )
          ) ;
          startNewOscillator = (
            SS.identity<(
              XWith.CWA["startNewOscillator"] 
            )>(function ({ startT, type, }) {
              return (
                startNewOscillatorOrBufferSourced1({
                  startT ,
                  ctx ,
                  dest: asInputNd ,
                  type ,
                })
              ) ; 
            })
          ) ;
          startTechnicalWhiteNoise(...[
            {
              startT = ctx.currentTime ,
            } ,
          ] : Parameters<XWith.CWA["startTechnicalWhiteNoise"] > ) {
            return (
              startNewWhiteNoiseNode({
                startT ,
                ctx ,
                dest: asInputNd ,
              })
            ) ; 
          }
          startPracticalWhiteNoise(...args : Parameters<XWith.CWA["startPracticalWhiteNoise"] > ) {
            const ndDest2 = (
              this
            ) ;
            const fltNd10 = (
              ndDest2.withVariableBiquadFiltering()
            ) ;
            fltNd10.ctrls.type = "lowpass" ;
            fltNd10.ctrls.frequency.setValueAtTime(600, 0 ) ;
            const fltNd11 = (
              ndDest2.withVariableBiquadFiltering()
            ) ;
            fltNd11.ctrls.type = "highpass" ;
            fltNd11.ctrls.frequency.setValueAtTime(16100, 0 ) ;
            const gainNd11 = (
              (() => {
                const xnd = this.startTapoffOnlyNd() ;
                (
                  [
                    fltNd10.main ,
                    fltNd11.main ,
                  ]
                  .forEach(dest => {
                    ;
                    xnd.asReconnectible().tapOutPt.connect(dest.asReconnectible().asFeedinPt ) ;
                  } )
                ) ;
                return xnd ;
              } )()
            ) ;
            gainNd11.gainParam.setValueAtTime(2 ** 0, 0, ) ;
            const nd1 = (
              gainNd11.startTechnicalWhiteNoise(...args )
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
        & SnwCommonArgs
        & { type : XWith.OSC | XWith.WSM ; }
      ) ) => ReturnType<XWith.CWA["startNewOscillator"]>
    )>(function startNewOscillatorImpl({
      startT: usedStartT,
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
        o1.start(usedStartT ) ;
        ;
        return {
          close      : (...[{ t = ctx.currentTime, } = {}]) => { o1.stop(t) ; } ,
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
        o1.start(usedStartT) ;
        return {
          close      : (...[{ t = ctx.currentTime, } = {}]) => { o1.stop(t) ; } ,
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
            & SnwCommonArgs
          ) ) => (
            {}
            & XWith.XBaseOps
          )
        )>(function ({
          startT: expectedStartT ,
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
                startT: expectedStartT ,
                ctx ,
                dest ,
                type: (
                  XWith.WSM.of({
                    loop: true ,
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
  type SnwCommonArgs = (
    {}
    & { startT : number ; }
    & (Parameters<typeof main>[0] & {} )
  ) ;
  return main ;
} )() ;
export namespace SNO {
  export const WSM = XWith.WSM ;
  export const OSC = XWith.OSC ;
} ;
import { fAnalysedNodeCapture, } from "./ansnr/RFDVP1";






