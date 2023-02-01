

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
 * given an {@link ReactDraft.ContentState },
 * returns an {@link ReactDraft.EditorState } as-well-as a number of functors .
 * 
 * implementation can be complicated ;
 * {@link ReactDraft.ContentState }s do not maintain the caret states, so
 * this fnc will need to play role managing cached {@link ReactDraft.EditorState } instance
 * 
 */
export const useContentStateEditorState1 = (() => {
  const main = (
    function useContentStateEditorState(...[actualC, ] : [
      ReactDraft.ContentState ,
    ]) {
      ;
      /**    
       * see the most-read discussion about "React input element cursor jumps to the end"
       * 
       * naive implementation would 
       * simply use exactly one state (and that'd be EditorState) and 
       * either (a) automatically clear/null that or (b) leave that non-null, but
       * (option a) would be prone to stale-ness and
       * (option b) would effectively mean loss of info about the last-time caret pos , so
       * we had to instead make this two-valued, {@link useXStateWithNullFallback }
       * 
       */
      // const [localE, setLocalE] = (
      //   React.useState<null | ReactDraft.EditorState >(null, )
      // ) ;
      // const [[localE, localES, ], setLocalE,]
      const [localE, { lastNonNullVl: lastNonNullLocalE, setState: setLocalE, },] = (
        useXStateWithNullFallback<ReactDraft.EditorState >()
      ) ;
      /**    
       * if {@link localE } were non-null {@link ReactDraft.EditorState } with {@link ReactDraft.convertToRaw precisely-equivalent contents} , use it ,
       * otherwise,
       * instantiate new one as follows ,
       */
      const actualCAsEditorState = (
        /**    
         * if {@link localE } were non-null {@link ReactDraft.EditorState } with {@link ReactDraft.convertToRaw precisely-equivalent contents} , use it ,
         * otherwise,
         * instantiate new one as follows ,
         */
        React.useMemo((): ReactDraft.EditorState => { 
          const {
            debug1 = false ,
          } = ((): Partial<{ debug1 : boolean ; }> => ({}) )() ;
          if (localE ) {
            if ((
              (debug1 === false) || (
                areTwoEditorStatesEqual([
                  localE.getCurrentContent() ,
                  actualC ,
                ])
              )
            ) ) {
              return localE ;
            } 
          }
          {
            /**   
             * new `EditorState`
             * - contents being {@link actualC }
             * - ideally, allowing `undo` and `redo`, but
             *   the way {@link ReactDraft.Editor } practically worked invalidated the [...]
             * - finally, 
             *   the caret-range being (re)set to that of (if non-null) {@link lastNonNullLocalE } ;
             *   see the most-read discussion about "React input element cursor jumps to the end"
             * 
             */ 
            const fE = (  
              ((): ReactDraft.EditorState => {
                const e1 = (
                  ReactDraft.EditorState.createWithContent(actualC, )
                ) ; 
                const e21 = (
                  ReactDraft.EditorState.set(e1, { allowUndo: true, } )
                ) ;
                const e22 = (
                  lastNonNullLocalE ?
                  (
                    ReactDraft.EditorState["acceptSelection"](e21, lastNonNullLocalE.getSelection(), )
                  )
                  : e21
                ) ;
                const e23 = (
                  ReactDraft.EditorState.set(e22, { allowUndo: true, } )
                ) ;
                const e3 = (
                  // with dummy undo-redo stacks to keep either cmd working
                  ReactDraft.EditorState.set(e23, { 
                    undoStack : Immutable.Stack([e23.getCurrentContent() , ]) ,
                    redoStack : Immutable.Stack([e23.getCurrentContent() , ]) ,
                  } )
                ) ;
                return (
                  // TODO 
                  e23
                ) ;
              } )()
            ) ;
            return fE ;
          }
        } , [actualC, localE, ] , )
      ) ;
      /**    
       * {@link localE } if non-null, or
       * {@link actualCAsEditorState } with caret set to (...)
       */
      const finalE = (
        React.useMemo(() => (   
          actualCAsEditorState
        ) , [actualCAsEditorState, ] , )
      ) ;
      /**    
       * 
       */
      const debouncedClearE = (
        React.useCallback((
          SS.debounce(() => {
            setLocalE((e) => null ) ;
          } , 2 * 1000 , { trailing: true, } )
        ) , [setLocalE, ] )
      ) ;
      ;
      return (
        <A extends [unknown, unknown],>(a: A) => a
      )([finalE, { localE, setLocalE, actualE: actualCAsEditorState, debouncedClearE, }, ]) ;
    }
  ) ;
  const useXStateWithNullFallback = (() => {
    type St0A<A1 extends null | {} , A2 extends null | {}> = (
      [currentlyState: A1, lastNonNullState: A2, ]
    ) ;
    type St0<A extends {} > = (
      never  
      | St0A<null, null >
      | St0A<A, A >     
      | St0A<null, A >                       
    ) ;
    return (
      function useXReducer<B extends object >() {
        const [[presentlyV, lastNonNullVl,], dispatch, ] = (
          React.useReducer((() => {
            type St = (
              St0<B >
            ) ;
            return (
              SS.identity<(...args: [St, React.SetStateAction<B | null > ] ) => St>((
                ([oldE0, oldE1, ], newEF ) => {
                  const newE = (
                    RCS.applySetStateAction(newEF, oldE0, )
                  ) ;
                  if (newE) {
                    /**   
                     * at this point {@link newE } is `object`
                     */
                    return [newE, newE, ] ;
                  } else {     
                    /**    
                     * at this point {@link newE } is `null`, so
                     * the RHS will need to be {@link oldE1 }
                     */
                    return (
                      oldE1 ?
                      [newE, oldE1, ]
                      : [newE, oldE1, ]
                    ) ;      
                  }
                }      
              ) )
            ) ;         
          } )(), [null, null, ] )
        ) ;
        return (
          (
            <A extends [presentlyVal: unknown, etc: unknown, ]>(a: A) => a
          )([ 
            presentlyV, 
            { 
              presentlyVl: presentlyV, 
              /**   
               * the last non-null value, if any, or
               * null if there's not yet any
               */
              lastNonNullVl, 
              /**   
               * the main setter. 
               */
              setState: dispatch, 
            } , 
          ])
        ) ;
      }
    ) ;
  } )() ;
  return main ;
} )() ;
const useXDraftContentStateEditorState1 = (
  useContentStateEditorState1
) ;


export const XDraftContentStateEditor = (
  (...[props] : [
    {
      value : ReactDraft.ContentState ;
      onInput : null | (
        React.Dispatch<{ newValue: ReactDraft.ContentState ; onlyAugments : boolean ; }>
      ) ,
      undoOrRedo : null | (
        React.Dispatch<{ type: "undo" | "redo", }>
      ) ,
      style : React.CSSProperties ;
    } ,
  ] ): React.ReactElement => {
    const { value: actualC, onInput, undoOrRedo, style: style1, } = props ;
    const [nE, { localE, setLocalE, actualE, debouncedClearE, }, ] = (
      useXDraftContentStateEditorState1(actualC, )
    ) ;
    return (
      <ReactDraft.Editor 
      editorState={nE }
      {...(
        onInput ? { 
          readOnly: false ,
          onChange: (e: ReactDraft.EditorState) => {
            {
              const edt = (
                e.getLastChangeType()
              ) ;
              if (edt === "redo" || edt === "undo") { 
                 undoOrRedo && undoOrRedo({ type: edt, } ) ;
              } 
            }
            {
              const onlyAugments = (
                nE.getUndoStack().size
                ===
                e.getUndoStack().size
              ) ;
              const newValueArgument = (
                e.getCurrentContent()
              ) ;
              {
                debouncedClearE() ;
                setLocalE(e ) ;
                if ((
                  areTwoEditorStatesEqual([
                    e.getCurrentContent() ,
                    nE.getCurrentContent() ,
                  ])
                )) {
                  console["debug"](`effectively, no chg of CurrentContent`) ;
                } else {
                  ;
                  onInput({ 
                    newValue: newValueArgument , 
                    onlyAugments: onlyAugments ,
                  }) ;
                }
              }
            }
          } ,
          style: {
            ...style1 ,
            border: `0.2em solid currentcolor` ,
          } ,
        } : {
          readOnly: true ,
          onChange: Object ,
          style: {
            ...style1 ,
            border: `0.2em solid transparent` ,
          } ,
        }
      ) }
      />
    ) ;
  } 
) ;









