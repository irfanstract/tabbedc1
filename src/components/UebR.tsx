



/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import UndoRedoStateModel from "library/editors/undoable-edit-state/urv";
import { useUndoableEditState, } from "./UndoableEditorBoundary1";
import * as Ion from "library/useIonicUi1" ;
import * as ReactDraft from "draft-js" ;









{}
// eslint-disable-next-line import/first
import { fromHtml, } from "./DraftEditorXdes";
const useXDraftUndoableEditState = (
  () => (
    useUndoableEditState((
      ReactDraft.EditorState.createWithContent((
        fromHtml((
          `<p>nom nom</p><p>nom nom</p><p>nom nom</p><p>nom nom</p>`
        ))
      ))
    ) )
    // ReactDraft.EditorState.set(s1, { allowUndo: false, } )
  )
) ;
export default (
  () => {
    const [eS, { pushState, mod1, undo, redo, state1, }, ] = (
      useXDraftUndoableEditState()
    ) ; 
    return (
      <div>
        <p>
          <Ion.Button 
          children={`Undo`}
          color="secondary"
          onClick={() => undo() }
          />
          <Ion.Button 
          children={`redo`}
          color="secondary"
          onClick={() => redo() }
          />
        </p>
        <div>
          <Ion.Card>
          <Ion.CardContent> 
          <XDraftEditor
          editorState={eS }
          onChange={mod1}
          {...{ undo, redo, }}
          />
          </Ion.CardContent>
          </Ion.Card>
        </div>
        <div>
          <span>
            crrent: <XUndoStackView value={Immutable.Stack([state1.value, ]) } /> ; {}
            undoes: <XUndoStackView value={state1.undoStack } /> ; {}
            redoes: <XUndoStackView value={state1.redoStack } /> ; {}
          </span>

        </div>
      </div>
    ) ;
  }
) ;
// eslint-disable-next-line import/first
import { XUndoStackView, } from "./DraftEditorXdes";
/**     
 * the primary use of this *wrapper* 
 * is to work-around against the *superfluous*, *stale-valued* firing of the `onChange` callback fn before the *final, well-valued* firing .
 * *applying `debounce` by finger-countable number of milliseconds*, to *drop the stale-valued calls*.
 * 
 */
const useXDraftEditorOnchangeFix1 = (
  function <A extends unknown[]>(...[mod10,] : [(...a: A ) => void ] ) {
    const mod11 = (
      RCS.useUpdatedCallback(mod10 )
    ) ;
    const mod111 = (
      React.useMemo(() => (
        SS.debounce((
          mod11
        ), 47, { trailing: true , } )
      ) , [mod11, ] , )
    ) ;
    return (
      // TODO
      mod111
    ) ;
  }
) ;
const XDraftEditor = (() => {
  const withOnlyNUndoRedoStepsInStacks = (
    SS.identity<(...args: [ReactDraft.EditorState , number, ] ) => ReactDraft.EditorState>((
      (newValue0, n, ) => (
        ReactDraft.EditorState.set(newValue0, {
          undoStack: newValue0.getUndoStack().slice(0, n) ,
          redoStack: newValue0.getRedoStack().slice(0, n) ,
        } )
      )
    ))
  ) ;
  const withSingularDummyUndoRedoStacks = (
    SS.identity<(s: ReactDraft.EditorState) => ReactDraft.EditorState>((
      newValue0 => (
        ReactDraft.EditorState.set(newValue0, {
          undoStack: Immutable.Stack<ReactDraft.ContentState>([newValue0.getUndoStack().get(0, newValue0.getCurrentContent() ) , ] ) ,
          redoStack: Immutable.Stack<ReactDraft.ContentState>([newValue0.getRedoStack().get(0, newValue0.getCurrentContent() ) , ] ) ,
        } )
      )
    ))
  ) ;
  /**    
   * if equal, then the resulting {@link Immutable.Set } will exactly be one-item.
   * 
   */
  const compareTheirContentStates = (
    (s: ReactDraft.EditorState[] ) => (
      Immutable.Set(s)
      .map(v => (
        JSON.stringify((
          ReactDraft.convertToRaw((
            v.getCurrentContent()
          ) ) 
        ))
      ) )
    )
  ) ;
  return (  
    SS.identity<(
      React.FC<(
        {}
        & Omit<ComponentProps<typeof ReactDraft.Editor> , "onChange" >
        & { 
          onChange : (
            ReturnType<typeof useXDraftUndoableEditState>[1]["mod1"]
          ) ; 
        }
        & Pick<ReturnType<typeof useXDraftUndoableEditState>[1], "undo" | "redo" >
      )>
    ) >(function XDraftEditor({ editorState: eS, onChange: mod10, undo, redo, ...p }) {
      /**    
       * {@link eS } with the dummy, singular undo-and-redo stacks.
       * necessary to keep the undo-or-redo (hot)keys working.
       * 
       */
      const eSWnd = (
        React.useMemo(() => {
          const s1 = (
            withSingularDummyUndoRedoStacks(eS )
          ) ;
          return (
            // ReactDraft.EditorState.set(s1, { allowUndo: false, } )
            s1
          ) ;
        }, [eS,] )
      ) ;
      const mod1 = mod10 ;
      const [eSTempValue, setESTempValue] = (
        React.useState<null | ReactDraft.EditorState>(null, )
      ) ;
      /**   
       * to be the `onChange` callback.
       * 
       */
      const onChange1 = (
        useXDraftEditorOnchangeFix1((newValue0: ReactDraft.EditorState) => {
          // TODO
          if (1) {
            (() => {
              setESTempValue(() => newValue0 ) ;
            } )() ;
          }
          /**    
           * {@link mod1 }.
           * 
           */
          mod1((updatedExistingUndRdState) => {
            try {
              /**   
               * {@link newValue0.getLastChangeType }.
               * in addition to others, could be "undo" or "redo".
               * sadly, can (spuriously) be `null`, hence the need for extra handling.
               * 
               */
              const lastChgType = (
                (
                  ((): ReactDraft.EditorState => {
                    return {
                      newValue0 ,
                      udsv: updatedExistingUndRdState.value ,
                    }.newValue0 ;
                  } )()
                ).getLastChangeType() 
              ) ;
              console["log"]({ lastChgType, }) ;
              /**   
               * {@link updatedExistingUndRdState.value }
               * 
               */
              const ueuEs = (
                updatedExistingUndRdState
                .value
              ) ;
              /** debugging */
              console["log"](...(
                Object.entries({ eSWnd, ueuEs, newValue0, }).toImmutableSeq()
                .toMap().mapEntries(e => e[1] )
                .mapEntries(([k, e,]) => [
                  k,
                  ({ 
                    undo: e.getUndoStack().size, 
                    redo: e.getRedoStack().size ,
                    plainTxtLen: e.getCurrentContent().getPlainText().length ,
                  }) ,
                ] )
                .entrySeq()
                .flatMap(e => e )
              )) ;
              {
                /** (see above) */
                if (lastChgType) {
                  ;
                  if ((
                    false
                    || lastChgType === "undo"
                    || newValue0.getUndoStack().size < eSWnd.getUndoStack().size
                  ) ) {
                    return (
                      updatedExistingUndRdState
                      .afterUndo()
                    ) ;
                  }
                  if ((
                    false
                    || lastChgType === "redo"
                    // || newValue0.getRedoStack().size < eSWnd.getRedoStack().size
                    // || eSWnd.getUndoStack().size < newValue0.getUndoStack().size
                  ) ) {
                    return (
                      updatedExistingUndRdState
                      .afterRedo()
                    ) ;
                  }
                  /**   
                   * if it'd worth elliding the edit.
                   * 
                   */
                  {
                    const cmp = (
                      compareTheirContentStates([newValue0, eS, ], )
                    ) ;
                    if (( 
                      cmp.size === 1
                    )) {
                      // TODO
                      {
                        console["log"](`no actual change in content (internal repr) ; elliding the OC`) ;
                        return (
                          updatedExistingUndRdState
                        ) ;
                      }
                    } else {
                      console["log"]({ cmp, }) ;
                    }
                  }
                  /**     
                   * at this point,
                   * treat is as a true, non-undo-redo edit.
                   * 
                   */
                  {
                    ;
                    const newValue = (
                      /**    
                       * whether {@link newValue0} or {@link newValueWnd } would not matter since
                       * we'll omit the undo-redo-stacks anyways
                       */
                      withOnlyNUndoRedoStepsInStacks(newValue0, 0, )
                    ) ;
                    return (
                      ((): UndoRedoStateModel<ReactDraft.EditorState> => {
                        if (updatedExistingUndRdState.value === newValue ) {
                          console["log"](`idempotent Edit elided `,  ) ;
                          return updatedExistingUndRdState ;
                        }
                        return (
                          updatedExistingUndRdState
                          .afterEdit(newValue, {
                            needsAdd: ({ priorValue: exitingValue, }) => (
                              // TODO
                              newValue.getLastChangeType() === exitingValue.getLastChangeType() ? 
                              false : true
                            )
                          })
                        ) ;
                      } )()
                    ) ;
                  }
                } else {
                  // TODO
                  return (
                    updatedExistingUndRdState
                  ) ;
                }
              } 
            } finally {
              setESTempValue(() => null ) ;
            }
          } ) ;
        } )
      ) ;
      return (
        <ReactDraft.Editor 
        editorState={(
          eSTempValue || 
          eSWnd
        ) }
        handleKeyCommand={(c): ReactDraft.DraftHandleValue => {
          console["log"](`incoming key cmd : `, c ) ;
          if (c === "undo") { return (undo(), "handled") ; }
          if (c === "redo") { return (redo(), "handled") ; }
          return "not-handled" ;
        } }
        onChange={onChange1 }
        {...p }
        />
      ) ;
    } )
  ) ;
} )() ;



