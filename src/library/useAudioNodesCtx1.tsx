

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











/**     
 * an independently-allocated {@link AudioContext }.
 * 
 * while allocation remains in progress this will remain `null` ;
 * after a fraction of seconds this will change into returning a concrete class instance.
 * 
 */
export const useAudioNodesCtx = (
  () => {
    const allocated1 = (
      RCS.useDeferredCloseable(() => {
        ;
        const r1 = new AudioContext() ;
        if (r1.state === "running" ) {
          r1.suspend() ;
        }
        return r1 ;
      } , [] , )
    ) ;
    React.useDebugValue({ allocated1, }) ;
    return (
      React.useDeferredValue((
        allocated1
      ))
    ) ;
  }
) ;




