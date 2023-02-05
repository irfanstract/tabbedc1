

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

console["info"](`SHD GAINOF`) ;
{
  /**
   * "**********GGGGAINOFP"
   * 
   */
  // @ts-ignore
  class GainofProcessor1 extends AudioWorkletProcessor {
    /**   
     * 
     * @type {(inputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, outputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, options3: {}, ) => true }
     */
    process(inputs, outputs, options3, ) {
      {
        ;
        const allCHnls = (
          (inputs.flatMap(chnls => chnls) )
        ) ;
        const allValues = (
          [...allCHnls ]
          .flatMap(buf => [...buf] )
        ) ;
        const xExtrema = (
          {
            max: (allValues ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math.max(v0, v1) , 0 ) ,
            min: (allValues ).reduce(/** @type {(...args: [number, number] ) => number } */ (v0, v1) => Math.min(v0, v1) , 0 ) ,
          }
        ) ;
        outputs.forEach(o1 => (
          o1.forEach(buf => (
            buf.fill((xExtrema.max - xExtrema.min ) / 2 )
          ) )
        ) ) ;
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
