

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { applySetStateAction, } from "library/rcs1";
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import UndoRedoStateModel from "library/editors/undoable-edit-state/urv";
import { useUndoableEditState, } from "components/UndoableEditorBoundary1";
import * as Ion from "library/useIonicUi1" ;
import * as ReactDraft from "draft-js" ;












import { contentFromHtml as fromHtml, } from "library/useDraftEditor12";

import { areTwoEditorStatesEqual, } from "library/useDraftEditor12";




/**    
 * for {@link useEditorStateArray1 }.
 * 
 */
export const getDdtDefault = () => (
  Immutable.Range(0, 3, )
  .map(i => (
    ReactDraft.EditorState.createWithContent((
      fromHtml(`<p>nom nom nom, #${i }, friend!</p>`) 
    ))
  ))
  .toList()
) ; 



/**    
 * {@link React.Key }, {@link Immutable.Iterable.Indexed }, {@link Immutable.Map},
 * 
 */
type DdtKey = number | string ;
const DdtKey = {} ; // TS-1205
export { DdtKey, } ;

/**   
 * simple {@link React.useState } maintaining {@link Immutable.List<ReactDraft.EditorState>} .
 * each, is independent {@link ReactDraft.EditorState }, operates independently of others ;
 * *undo-or-redo*ing one will not affect any other .
 * 
 */
export const useEditorStateArray1 = (
  () => {
    ;
    const [sA, setSA] = (
      React.useState<(
        Immutable.List<ReactDraft.EditorState>
      )>((
        getDdtDefault()
      ))
    ) ;
    return {
      /**    
       * {@link Immutable.List } of the {@link ReactDraft.EditorState}s .
       * 
       */
      editorStatesList: sA,
      /**    
       * 
       */
      setEditorStatesArray: setSA,
    } ;
  }
) ; 

/**    
 * enhanced of {@link useEditorStateArray1 } 
 * replacing {@link Immutable.Iterable.Indexed }s with {@link Immutable.OrderedMap }s .
 * each, is independent {@link ReactDraft.EditorState }, operates independently of others ;
 * *undo-or-redo*ing one will not affect any other .
 * 
 */
export const useEditorStateArrayC = (() => {
  return (
    function useDdtStateX() {
      const Typed = (
        /**  
         * the return-type of {@link useEditorStateArray1 }, with amended methods and new ones
         * 
         * extra hacks would be necessary 
         * so that (VSC) renames in the earlierly-defined method will affect this site 
         * otherwise this will go out-of-sync 
         * 
         */
        <A extends {}>(a: A & (
          /**    
           * with `sA`'s type(s) changed
           */
          (
            {}
            & { [k in keyof ReturnType<typeof useEditorStateArray1> ] ?: unknown ; }
          )
        )) => a
      ) ;
      ;
      const [sA, setSA] = (
        React.useState<(
          Immutable.OrderedMap<DdtKey, ReactDraft.EditorState>
        )>((
          getDdtDefault()
          .toOrderedMap()
        ))
      ) ;
      {
        ;
        const setSC = (
          React.useCallback<(
            ( ReturnType<typeof useEditorStateArray1> )["setEditorStatesArray"] 
          )>((
            (newS0) => (
              setSA((sAE) => {
                const newS = (
                  applySetStateAction(newS0, (
                    sAE
                    .valueSeq()
                    .toList()
                  ) )
                ) ;
                return (
                  newS
                  .toOrderedMap()
                ) ;
              })
            )
          ) , [setSA, applySetStateAction, ] , )
        ) ;
        return Typed({
          /**    
           * {@link Immutable.OrderedMap }, 
           * with significant ordering, of from {@link DdtKey} the {@link ReactDraft.EditorState}s .
           * 
           * .
           * 
           */
          editorStatesList: sA,
          /** @deprecated */
          setEditorStatesArray: setSC,
          setEditorStatesMap: setSA ,
        }) ;
      }
    }
  ) ;
} )() ;


