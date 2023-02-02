

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










const INSTANCE = Symbol() ;
declare global {
  interface Window {
    /**   
     * optionally the existing {@link AudioContext} .
     */
    [INSTANCE] ?: AudioContext ;
  }
} ;

const instance = (
  /**   
   * either the preallocated instance if any, or, instead,
   * a newly-allocated instance
   */
  ((): AudioContext => {
    /**   
     * try returning existing instance if any
     */
    {
      const preallocatedInstance = (
        window[INSTANCE] ?? null
      ) ;
      if (preallocatedInstance) {
        if (preallocatedInstance.state !== "closed" ) {
          return preallocatedInstance ;
        }
      }
    }
    /**   
     * return new instance
     */
    return (
      new AudioContext()
    ) ;
  } )()
) ;
/**   
 * make the field properly reference the most-recently-allocated instance
 */
window[INSTANCE] = (
  instance
) ;


/**   
 * note that calls shall follow some user gesture, for usability-related reasons.
 * 
 */
export const getInstance = (
  (e: Event ): typeof instance => {
    instance.resume() ;
    return (
      instance
    ) ;
  }
) ;




