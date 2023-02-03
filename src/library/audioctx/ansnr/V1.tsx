

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






export const AnalysisC = (
  SS.identity<(
    React.FC<(
      {}
      & { src: AudioNode ; }
    )>
  )>(function AnalysisCImpl({
    //
    src ,
  }) {
    const {
      src: src1 ,
      analys ,
      rawFreqDomainValues ,
    } = useXAnalysis1(src, ) ;
    React["useLayoutEffect"](() => {
      if (analys) {
        analys.fftSize = 0x800 ;
      }
    } , [analys,] ) ;
    const renderedJson1 = (
      <span style={{ display: "block", }}>
      <code>
      [{ (
        rawFreqDomainValues
        .filter(e => (27 <= e.k ) )
        .filter(e => (e.k < 1800 ) )
        .take(90 )
        .toArray()
        .map(({ k: k, v: v, }): string | React.ReactElement => (
          <span>
            [
              <span style={{ textAlign: "right", display: "inline-block", minWidth: `calc(3 * 1em)` }} >
              { k.toFixed() }
              </span>
              ,
              <span style={{ textAlign: "right", display: "inline-block", minWidth: `calc(3 * 1em)` }} >
              { v.toFixed() }
              </span>
            ]
          </span>
        ) )
        .map(s => (
          <span style={{ display: "block", }} >
            <>{s }, </>
          </span>
        ) )
      ) }]
      </code>
      </span>
    ) ;
    return (
      <div>
      <p>
        Analys: { String(analys ) }
      </p>
      <p>
        { renderedJson1 }
      </p>
      </div>
    ) ;
  } )
) ;
const useXAnalysisNode1 = (
  (src: AudioNode,) => {
    ;
    const [analys, setAnalys] = (
      React.useState<AnalyserNode>(() => (
        // dummy initial resource
        src.context
        .createAnalyser()
      ))
    ) ;
    React["useLayoutEffect"](() => {
      const analys11 = (
        src.context
        .createAnalyser()
      ) ;
      src.connect(analys11) ;
      setAnalys(() => analys11 );
      return (): void => {
        src.disconnect(analys11, ) ;
      } ;
    } , [src, ] ) ;
    ;
    ;
    return (
      analys
    ) ;
  }
) ;
import { RawFreqDomainValuesProps  , } from "library/audioctx/ansnr/RFDVP1";
import { fAnalysedNodeCapture      , } from "library/audioctx/ansnr/RFDVP1";
const useXAnalysis1 = (() => {
  type FinalReturn = (
    {}
    & { analys: AnalyserNode ; } 
    & RawFreqDomainValuesProps
  ) ;
  return (
    SS.identity<(
      (src0: AudioNode ,) => (
        {}
        & { src: typeof src0 ; } 
        & FinalReturn
        // TODO
      )
    )>(function useAnalysisImpl(...[
      src ,
    ]) {
      const analys = (
        useXAnalysisNode1(src, )
      ) ;
      const anl1 = (
        RCS.useScan((): (
          {}
          & RawFreqDomainValuesProps
        ) => {
          if (analys) {
            return (
              fAnalysedNodeCapture(analys, )
            ) ;
          } else {
            return {
              rawFreqDomainValues1: (
                []
              ) ,
              rawFreqDomainValues: (
                Immutable.List()
              ) ,
            } ;
          }
        } , {
          intervalMillis: 200 ,
        } )
      ) ;
      // TODO
      return {
        src: src ,
        analys: analys ,
        ...anl1 ,
      } ;
    } )
  ) ;
} )() ;
export const AnalysisCDemo = (
  function AnalysisCDemoImpl() {
    const [cc, initCc] = (
      useEvtActivatedFccNodeState()
    ) ;
    const mainButton1 = (
      <Ion.Button 
      children={"Beep"}
      type="button"
      onClick={async (e) => {
        initCc(e) ;
        for (const nd1 of (cc ? ([cc] as const) : [] ) ) {
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
            1 && (
            o2.detune["linearRampToValueAtTime"]((-  4  ) * 100 , (xt  +   0.5  ), )
            ) ;
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
      <div
      {...{
        onPointerEnterCapture    : e => initCc(e) ,
        onKeyDownCapture         : e => initCc(e) ,
      } }
      >
        <p>
          Acoustic Analytical Demo
        </p>
        <p>
          Beep : {}
          { mainButton1 } {}
        </p>
        <div>
          { cc && (
            <AnalysisC 
            src={cc.asReconnectible().tapOutPt as AudioNode }
            />
          ) }
        </div>
      </div>
    ) ;
  }
) ;
const useEvtActivatedFccNodeState = (
  () => (
    React.useReducer((() => {
      type XRes = ReturnType<typeof forAudioCtx> ;
      return (oldV: null | XRes, e: React.SyntheticEvent ): XRes | null => {
        if (oldV) {
          return oldV ;
        } else {
          const c = (
            getAudioCtx(e.nativeEvent)
          ) ; 
          const nd1 = (
            forAudioCtx({
              ctx: c , 
              dest: c.destination ,
            })
          ) ;
          nd1.gainParam.setValueAtTime(2 ** -3, 0 ) ;
          return (
            nd1
          ) ;
        }
      }
    } )() , null, )
  )
) ;







