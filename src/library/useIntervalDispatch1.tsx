


/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import * as Ion from "library/useIonicUi1" ;












// TODO
/**    
 * 
 * 
 */
export const useIntervalDispatch = (
  SS.identity<{
    (ctx: (
      {} 
      & { intervalMillis: number ; }
      & { intervalCallback: React.DispatchWithoutAction ; }
      & Partial<{ 
        /** 
         * a function like {@link Date.now} or {@link performance.now} to return `currentT`.
         */
        tMillisGetNow: () => number ;
      }>
      & Required<{ 
        /**    
         * defines which one, to be defined as `interval`, whether `tickInterval` or `recess`
         * - `fixed-tick-interval` -
         *   maintain constant rate, despite callback timing distortions
         * - `lowerbounded-tick-interval` -
         *   define the reference, for the next turn, as WRT the pre-await `t`
         * 
         */  
        stricity: (
          never 
          | "fixed-tick-interval" 
          | "lowerbounded-tick-interval" 
          // | "fixed-recess"
          | "lowerbounded-recess"
        ) ; 
      }>
    ) ) : void ;
  }>(function useIntervalDispatchIm({ 
    intervalMillis: requestedIntervalMillis, 
    intervalCallback: callback, 
    tMillisGetNow = () => performance.now() ,
    stricity = "fixed-tick-interval" ,
  }) {
    /**    
     * {@link RCS.useUpdatedCallback }-wrapped callback which schedules further interval.
     * 
     */
    const scheduleInterval1 = (
      RCS.useUpdatedCallback((
        SS.identity<{
          (ctx: { expectedDispatchTimeMillis : number ; s: AbortSignal ; } ): void ;
        }>((
          async function scheduleIntervalImpl1({ 
            expectedDispatchTimeMillis: expectedThisDispatchTimeMillis, 
            s: abo ,
          }) {
            // left here for possible future debugging
            if (0) {
              return ;
            }
            /**    
             * will be 
             * used below to compute the right `timeout` value
             */
            const preAwaitTMillis = (
              tMillisGetNow()
            ) ;
            /** 
             * {@link abo.aborted } ? return
             */
            if (abo.aborted ) {
              return ;
            }
            /**    
             * `await`s for ({@link expectedThisDispatchTimeMillis } - {@link preAwaitTMillis})
             * 
             */
            await (
              new Promise<void>(async (R) => {
                const timeout = (
                  expectedThisDispatchTimeMillis - preAwaitTMillis
                ) ;
                return (
                  setTimeout(R, (
                    timeout
                  ), )
                ) ;
              } )
            ) ;
            /** 
             * {@link abo.aborted } ? return
             */
            if (abo.aborted ) {
              return ;
            }
            const preCallbackTMillis = (
              tMillisGetNow()
            ) ;
            /**    
             * run {@link callback}
             * 
             */
            callback() ;  
            /** 
             * {@link abo.aborted } ? return
             */
            if (abo.aborted ) {
              return ;
            }
            const afterCallbackTMillis = (
              tMillisGetNow()
            ) ;
            /**   
             * make further scheduling
             * 
             */
            {
              const referenceTMillis = (
                /**   
                 * note: {@link preAwaitTMillis} is not applicable
                 */
                ((): number => {
                  if (stricity === "lowerbounded-recess" ) {
                    return afterCallbackTMillis ;
                  }
                  if (stricity === "lowerbounded-tick-interval" ) {
                    return preCallbackTMillis ;
                  }
                  if (stricity === "fixed-tick-interval" ) {
                    return expectedThisDispatchTimeMillis ;
                  }
                  return expectedThisDispatchTimeMillis ;
                } )()
              ) ;
              scheduleInterval1({
                expectedDispatchTimeMillis: ( 
                  referenceTMillis 
                  + requestedIntervalMillis
                ) ,
                s: abo ,
              }) ;
            }
          }
        ))
      ))
    ) ;
    React["useEffect"](() => {
      const sC = new AbortController() ;
      const tMillisNow1 = (
        tMillisGetNow()
      ) ;
      scheduleInterval1({
        s: sC.signal ,
        expectedDispatchTimeMillis: (
          tMillisNow1 + requestedIntervalMillis
        ) ,
      }) ;
      return (): void => {
        sC.abort() ;
      } ;
    } , [] );
  } )
) ;













