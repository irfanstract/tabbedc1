

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

console["info"](`SHD FREQSH 1`) ;
{
  // TODO
  const {
    ftdSign ,
    xSampleRate ,
  } = (
    (/** @returns {{ ftdSign: -1 | 1 ; xSampleRate: 48000 | 44100 ; }} */ () => ({
      ftdSign: -1 ,
      xSampleRate: 48000 ,
    }) )()
  ) ; 
  ;
  /**
   * 
   */
  class FreqShProcessor1 extends (
    // @ts-ignore
    class XAudioWorkletProcessor1 extends AudioWorkletProcessor {}
  ) {

    //
    /**   
     * @typedef {FrScanFreqsStateItem[] } FrScanFreqsState
     * 
     */ 
    /**   
     * @typedef {Object } FrScanFreqsStateItem
     * @property {number } f      -- the frequency     . fixed for lifetime
     * @property {number } cumulX -- cumulative offset . regularly updated
     * @property {number } cumulY -- cumulative offset . regularly updated
     * 
     */ 
    /**    
     * @typedef {Object } Stats
     * 
     * @property {number } effectiveFactor
     * 
     * @property {{ frCoefsState: FrScanFreqsState ; t: number ; } } lastInputFramesScanState The Last Input Frames Scan State
     * 
     * 
     */
    
    /**    
     * DFT or FFT or DCT.
     * 
     * @returns {(...args: [{ lastInputFramesScanState: Stats["lastInputFramesScanState"] ; inputNdChBuffer: Float32Array; },] ) => (typeof args)[0]["lastInputFramesScanState"] }
     */
    static get freqScan1() {
      const {
        dcy ,
      } = {
        dcy: 2.7 ,
      } ;
      /**   
       * @typedef {Stats["lastInputFramesScanState"] } RState
       */
      return (
        ({
          lastInputFramesScanState ,
          inputNdChBuffer ,
        }) => (
          [...inputNdChBuffer ]
          .reduce((
            /** @type {(v0: RState, v1: number, ) => RState } */
            (...[
              { frCoefsState: v0, t: lastT, }, 
              presentlyInputFrameValue, 
            ]) => {
              const {
                presentlyT ,
              } = {
                presentlyT: (
                  lastT + (1 / xSampleRate)
                )
              } ;
              return {
                t: (
                  presentlyT
                ) ,
                frCoefsState: (
                  v0
                  .map((
                    ({ f, ...priorState }) => {
                      const presentlyRphUnits = (
                        (presentlyT * f )
                      ) ;
                      return (
                        (  
                          /**  @type {<A extends {} >(v: FrScanFreqsState[number] & A ) => (typeof v) } */ 
                          e => e
                        )({
                          f ,

                          cumulX: (priorState["cumulX"] * ((2 ** -dcy) ** (1 / xSampleRate ) ) ) + (Math["cos"]((ftdSign * presentlyRphUnits ) * (2 * Math.PI ) ) * presentlyInputFrameValue ) ,
                          cumulY: (priorState["cumulY"] * ((2 ** -dcy) ** (1 / xSampleRate ) ) ) + (Math["sin"]((ftdSign * presentlyRphUnits ) * (2 * Math.PI ) ) * presentlyInputFrameValue ) ,
                          
                        })
                      ) ;
                    }
                  ) )
                ) ,
              } ;
            }
          ) , lastInputFramesScanState, )
        ) 
      ) ;
    } ;

    // @ts-ignore
    constructor(...args ) { 
      // @ts-ignore
      super(...args ) ;

      // TODO
      const {
        requiredFrequencies1 ,
        effectiveFactor ,
      } = {
        effectiveFactor: 2 ** 7 ,
        requiredFrequencies1: (
          Array.from({
            *[Symbol.iterator]() {
              for (let i = -16 ; i < 16 ; i += 0.5 ) {
                yield i ;
              }
            }
          })
          .map((p) => (
            (2 ** (p / 12) ) * 440
          ))
        ) ,
      } ;
      
      /**   
       * @type {Stats }
       */
      // TODO
      this.state = {
        
        effectiveFactor : effectiveFactor ,
        lastInputFramesScanState: {
          t: 0 ,
          frCoefsState: (
            requiredFrequencies1
            .map((f) => (
              (
                /** @type {() => Stats["lastInputFramesScanState"]["frCoefsState"][number] } */
                () => (
                  { 
                    f: f , 
                    cumulX: 0, 
                    cumulY: 0, 
                  }
                )
              )()
            ))
          ) ,
        } ,
        
      } ;
    }

    /**   
     * 
     * @type {(inputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, outputs: SrcDestNodeMap<SrcDestNodeChannelMap<XNumericArrayBuffer > >, options3: {}, ) => true }
     */
    process(inputNds, outputs, options3, ) { 
      const {
        state: preTurnState ,
      } = this ;
      const {
        lastInputFramesScanState: lastTurnLastInputFramesScanState ,
      } = preTurnState ;
      /**    
       * zero-fill all the dest buffers
       */
      (
        outputs
        .forEach(o => (
          o.forEach(buf => (
            buf.fill(0, )
          ) )
        ) )
      ) ;
      /**    
       * 
       */
      for (const inputNdCHannels of inputNds ) {
        const inputNdChnlCount = (
          inputNdCHannels.length
        ) ;
        const scanned1 = (
          inputNdCHannels
          .map(inputNdChBuffer => {
            const postScanState = (
              FreqShProcessor1.freqScan1({
                lastInputFramesScanState: lastTurnLastInputFramesScanState ,
                inputNdChBuffer ,
              })
            ) ;
            ;
            ;
            return {
              postScanState ,
            } ;
          } )
        ) ;
        const xScanned1 = (
          (scanned1[0] || { postScanState: { t: 0, frCoefsState: [], } , } )
          .postScanState
        ) ;
        // TODO
        (
          outputs
          .map(outputChnls => {
            if (1) {
              (
                outputChnls
                .map(outputBuf => {
                  (
                    outputBuf
                    .forEach((...[ , i, ] ) => {
                      const presentlyT = (
                        lastTurnLastInputFramesScanState.t
                        + (i / xSampleRate )
                      ) ;
                      const val = (
                        (
                          xScanned1.frCoefsState
                          .map((
                            /**   
                             * REMEMBER WHEN USING `ATAN2` THAT `y` IS THE FIRST ONE!!!
                             * 
                             * @type {(v: FrScanFreqsState[number]) => FrScanFreqsState[number] }
                             */
                            ({ f: oldFreq, ...state }) => {
                              const gain = (
                                Math.hypot(state.cumulX, state.cumulY, )
                              ) ;
                              const oldAtanRads2 = ( 
                                Math.atan2(state.cumulY, state.cumulX)
                              ) ;
                              const newFreq = (
                                (2 ** (3 / 12 ) ) * oldFreq
                              ) ;
                              const newAtanRads2 = (
                                (oldAtanRads2 / oldFreq )
                                * newFreq 
                              ) ;
                              return {
                                
                                f: newFreq ,

                                cumulX: (gain * Math["cos"](newAtanRads2 ) ) ,
                                cumulY: (gain * Math["sin"](newAtanRads2 ) ) ,

                              } ;
                            }
                          ))
                          .map(({ f, ...s }) => {
                            ;
                            const peakUnits = (
                              Math.hypot(s.cumulX, s.cumulY, )
                            ) ;
                            const presentlyRphUnitsBeforeTransl = (
                              (presentlyT * f )
                            ) ;
                            const effectivePhaseAsRadians = (
                              /**   
                               * REMEMBER WHEN USING `ATAN2` THAT `y` IS THE FIRST ONE!!!
                               * 
                               */
                              ((
                                // supposedly `-ftdSign`
                                -ftdSign
                              ) * Math.atan2(s.cumulY, s.cumulX) )
                              +
                              (
                                (  presentlyRphUnitsBeforeTransl) * (2 * Math.PI )
                              )
                            ) ;
                            const effectivePhasualOffset = {
                              x: Math["cos"](effectivePhaseAsRadians) ,
                              y: Math["sin"](effectivePhaseAsRadians) ,
                            } ;
                            const effectiveY = (
                              peakUnits * effectivePhasualOffset.y
                            ) ;
                            ;
                            // TODO
                            return (
                              effectiveY / preTurnState.effectiveFactor
                            ) ;
                          } )
                          .reduce((
                            /** @type {(v0: number, v1: number ) => number } */
                            (v0, v1) => (v0 + v1 )
                          ) , 0 )
                        ) 
                      ) ;
                      // TODO
                      outputBuf[i] = (
                        val
                      ) ;
                      ;
                    } )
                  ) ;
                } )
              ) ;
            }
          } )
        ) ;
        ;
        // TODO
        this.state = {
          
          ...preTurnState ,

          lastInputFramesScanState: (
            xScanned1
          ) ,

        } ;
      }
      /**   
       * return
       */
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
      FreqShProcessor1
    ) ;
  }
  
  
  
  
  
  
  
  
  // @ts-ignore
  registerProcessor("freqsh1", FreqShProcessor1, ) ;
}
