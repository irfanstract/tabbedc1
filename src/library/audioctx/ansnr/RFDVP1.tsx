

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













interface RawFreqDomainValuesProps {

  /**    
   * 
   */
  rawFreqDomainValues: (
    Immutable.List<(
      RawFreqDomainValuesProps.FreqDomainKeyValueEntry
    )>
  ) ;
  /**   
   * *the values in {@link rawFreqDomainValues } index-wise*
   * 
   */
  rawFreqDomainValues1: (
    number[]
  ) ;
  
} ;
namespace RawFreqDomainValuesProps {
  ; // TS-1205

  export type FreqDomainKeyValueEntry = { k: number ; v: number ; } ;
  
}
export { RawFreqDomainValuesProps, } ;







/**    
 * in terms of {@link AnalyserNode.getByteFrequencyData }.
 * 
 */
export const fAnalysedNodeCapture = (
  SS.identity<{

    (src: AnalyserNode ) : (
      {}
      & RawFreqDomainValuesProps
    ) ;

  }>((analys) => {
    ;
    const {
      sampleRate: ctxSampleRate
    } = analys.context ;
    const {
      frequencyBinCount: frequencyBinCount,
    } = (
      analys
    ) ;
    const freqs = (
      Immutable.Range(0, frequencyBinCount, 1 )
      .map(i => (
        1 + i
      ) )
      .map(i => (
        (i / (2 * frequencyBinCount ) ) * ctxSampleRate
      ) )
      .toArray()
    ) ;
    const buffer = (
      new Uint8Array(frequencyBinCount )
    ) ;
    analys.getByteFrequencyData(buffer) ;
    return {
      //
      
      rawFreqDomainValues1: (
        [...buffer]
      ) ,
      rawFreqDomainValues: (
        Immutable.Range(0, frequencyBinCount, 1, )
        .toList()
        .map((i: number): RawFreqDomainValuesProps.FreqDomainKeyValueEntry => (
          {
            k: (  freqs[i] ) || 0 , 
            v: ( buffer[i] ) || 0 , 
          }
        ) )
      ) ,
      
    } ;
  } )
) ;






