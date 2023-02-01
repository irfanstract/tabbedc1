

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import UndoRedoStateModel from "library/editors/undoable-edit-state/urv";
import { useUndoableEditState, } from "components/UndoableEditorBoundary1";
import * as Ion from "library/useIonicUi1" ;













const useXImplTNow = (() => {
  type Args<Src extends Pick<Performance, "now">> = [
    src: Src ,
    config: (
      {}
      & { periodMillis: number ; }
    ) ,
  ] ;
  const useXImplTNow0 = (() => {
    return (
      function useImplTNow<Src extends Pick<Performance, "now">>(...[performance, { periodMillis, }, ] : (
        Args<Src>
      ) ) {
        const {
          // periodMillis = 3000,
        } : Partial<(
          {} 
        )> = {} ;
        const pInitiallyMillis: ReturnType<typeof performance.now> = (
          React.useMemo(() => (
            performance.now()
          ) , [] )
        ) ;
        ;
        const pEllapsedMillis: ReturnType<typeof performance.now> = (
          RCS.useScan(() => {
            const tNowMillis = (
              performance.now() 
            ) ;
            return (
              tNowMillis - pInitiallyMillis
            ) ;
          } , { intervalMillis: periodMillis, } , )
        ) ;
        ;
        return {
          periodMillis ,
          pInitiallyMillis ,
          pEllapsedMillis ,
        } ;
      }
    ) ;
  } )() ;
  return (
    function useImplTNow<Src extends Pick<Performance, "now">>(...args : Args<Src> ) {
      const {
        // periodMillis = 3000,
      } : Partial<(
        {} 
      )> = {} ;
      const {
        periodMillis ,
        pEllapsedMillis: pEllapsedMillisC ,
      } = (
        useXImplTNow0(...args )
      ) ;
      const pEllapsedMillis = (
        Immutable.Range(0, pEllapsedMillisC, periodMillis, )
        .max()
        ?? 
        -1
      ) ;
      const pEllapsedSecs = (
        pEllapsedMillis / 1000
      ) ;
      ;
      return {
        pNowMillis: pEllapsedMillis ,
        pNowSecs  : pEllapsedSecs   ,
      } ;
    }
  ) ;
} )() ;



export default useXImplTNow ;


