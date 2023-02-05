

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

// import SS from "lodash" ;
// import Immutable from "immutable";
// import * as Collections from "library/util-immutable-datastructure" ;
// import * as Math2 from "library/util-math-max" ;

///





/**   
 * @template {{} } A
 * @typedef {A[] } SrcDestNodeChannelMap
 * 
 */
/**   
 * @template {{} } A
 * @typedef {A[] } SrcDestNodeMap
 * 
 */
/**   
 * @typedef {Float32Array } XNumericArrayBuffer
 * 
 */

console["info"](`SHD GAINOF 1`) ;
{
  /**
   * "**********GGGGAINOFP"
   * 
   */
  class GainofProcessor1 extends (
    // @ts-ignore
    class XAudioWorkletProcessor1 extends AudioWorkletProcessor {}
  ) {

    /**    
     * @typedef {Object } Stats
     * 
     * @property {{ min: number ; max: number ; }[] } lastMinMaxSns
     * 
     */
    
    // @ts-ignore
    constructor(...args ) { 
      // @ts-ignore
      super(...args ) ;
      
      /**   
       * @type {Stats }
       */
      this.state = {

        lastMinMaxSns: [] ,
        
      } ;
    }

    /**   
     * 
     * @type {(inputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, outputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, options3: {}, ) => true }
     */
    process(inputs, outputs, options3, ) {
      {
        ;
        
        const {
          state: existingStat ,
        } = this ;

        const allCHnls = (
          (inputs.flatMap(chnls => chnls) )
        ) ;
        const allValues = (
          [...allCHnls ]
          .flatMap(buf => [...buf] )
        ) ;
        const currentInputValuesMinMax = (
          {
            max: (allValues ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math["max"](v0, v1) , Number["MIN_VALUE"] ) ,
            min: (allValues ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math["min"](v0, v1) , Number["MAX_VALUE"] ) ,
          }
        ) ;
        const xPostworthyMinMax = (
          {
            max: ([...existingStat.lastMinMaxSns.map(e => e["max"] ), currentInputValuesMinMax["max"], ] ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math["max"](v0, v1) , Number["MIN_VALUE"] ) ,
            min: ([...existingStat.lastMinMaxSns.map(e => e["min"] ), currentInputValuesMinMax["min"], ] ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math["min"](v0, v1) , Number["MAX_VALUE"] ) ,
          }
        ) ;
        
        outputs.forEach(o1 => (
          o1.forEach(buf => (
            buf.fill((
              (
                Math.max(0, xPostworthyMinMax.max - xPostworthyMinMax.min ) 
                / 2 
              )
              * 
              (2 ** 3 )
            ))
          ) )
        ) ) ;

        this.state = {

          lastMinMaxSns: [
            currentInputValuesMinMax ,
            ...(
              existingStat.lastMinMaxSns
              .slice(0, 26, )
            ) ,
          ] ,

        } ;
      }
      // setTimeout(() => {
      //   // @ts-ignore
      //   AudioWorkletProcessor[Symbol() ] = (
      //     this
      //   ) ;
      // } , 3 * 1000 ) ;
      return (
        true
      ) ;
    }

  }
  /** 
   * it appears that   
   * in a small number of browsers
   * calling {@link registerProcessor } will *not* prevent the passed-in `class` from being GC(ed)
   * 
   */
  { 
    // @ts-ignore
    AudioWorkletProcessor[Symbol() ] = (
      GainofProcessor1
    ) ;
  }
  
  
  
  
  
  
  
  
  // @ts-ignore
  registerProcessor("gainofb", GainofProcessor1, ) ;
}
