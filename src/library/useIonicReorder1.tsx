

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import * as Ion from "library/useIonicUi1" ;











/**    
 * {@link Immutable.OrderedMap } 
 * is the most appropriate representation which maintains both *uniqueness* and *ordering*.
 * 
 * complete the ReOrder operation.
 * 
 */
export const completeIonicOrderedMapReorder = (
  function <K, V>(...[e, setSA0] : [
    Parameters<(
      Required<(
        ComponentProps<typeof Ion.ReorderGroup>
      )>["onIonItemReorder"]
    )>[0] ,
    React.Dispatch<(
      React.SetStateAction<(
        Immutable.OrderedMap<K, V >
      )>
    )> ,
  ] ): void {
    ;
    const { from, to, } = e.detail ;
    console["log"]({ 
      from, 
      to ,
    }) ;
    /**   
     * side note :
     * the {@link e.detail.complete } call 
     * could technically be moved out before this call to {@link setSA0} .
     * however,
     * the result would be FOUC (Flash(ing) Of Unrendered Content), and so
     * we had to move the EDC call into the `finally` block of the {@link React.SetStateAction SSA }.
     * 
     */
    {
      setSA0(s0 => {
        try {
          ;
          const s01 = (
            s0   
            .entrySeq().toList()
          ) ;
          console["log"]({ 
            s0: s0.toArray(), 
            s01: s01.toArray(), 
          }) ;
          return (
            s01
            .delete(from, )
            .insert(to, s01.get(from, null )! )
            .toOrderedMap()
            .mapEntries(e => e[1] )
          ) ;
        } finally {
          ;
        }
      } ) ;
      setSA0(s => {
        try {
          /**    
           * to take-over the reorder
           */
          e.detail.complete(false, ) ;
        } catch (z) {
          console["error"](z, ) ;
        }
        return s ;
      } )
    }
  }
) ;





