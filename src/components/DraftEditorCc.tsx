

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
import * as ReactDraft from "draft-js" ;










import { fromHtml, } from "components/DraftEditorXdes";
/**    
 * {@link Immutable.OrderedMap } 
 * is the most appropriate representation which maintains both *uniqueness* and *ordering*.
 * 
 * complete the ReOrder operation.
 * 
 */
import { completeIonicOrderedMapReorder, } from "library/useIonicReorder1";
/**    
 * simple demo 
 * with {@link React.useState } maintaining {@link ReactDraft.EditorState }
 * rendering a {@link ReactDraft.Editor }
 * 
 */
export const DccDemo = (
  function () {
    const [s, setS] = (
      React.useState<ReactDraft.EditorState>((
        ReactDraft.EditorState.createWithContent((
          fromHtml(`<p>nom nom nom</p>`) 
        ))
      ))
    ) ;
    return (
      <Ion.Card>
      <Ion.CardContent> 
        <XDraftEditor1
        editorState={s }
        setState={setS }
        />
      </Ion.CardContent>
      <Ion.Toolbar>
        <Ion.Button 
        type="button"
        children={`undo` }
        onClick={() => setS(s => ReactDraft.EditorState.undo(s, ) ) }
        color="secondary"
        />
        <Ion.Button 
        type="button"
        children={`redo` }
        onClick={() => setS(s => ReactDraft.EditorState.redo(s, ) ) }
        color="secondary"
        />
      </Ion.Toolbar>
      </Ion.Card>
    ) ;
  }
) ;
/**     
 * {@link ReactDraft.Editor } with relevant requirements.
 * 
 */
const XDraftEditor1 = (
  SS.identity<(
    React.FC<(
      {}
      & Pick<ComponentProps<typeof ReactDraft.Editor> , "editorState" >
      & { setState : React.Dispatch<React.SetStateAction<ReactDraft.EditorState> > ; }
    )>
  )>(function ({ editorState: s, setState: setS, }) {
    ;
    return (
      <Ion.Card>
      <Ion.CardContent> 
      <ReactDraft.Editor 
      editorState={s }
      onChange={e => setS(() => e ) }
      />
      </Ion.CardContent>
      </Ion.Card>
    ) ;
  })
) ;
/**    
 * ad-hoc {@link Ion.Item } or {@link Ion.ItemSliding} element.
 * 
 * this can't be a `React.FC`, since
 * turning this into being a `React.FC` would prevent `key` from working properly.
 * 
 */
const renderXIonListItem = (
  SS.identity<(
    React.FC<{ i: number ; mKey: React.Key ; } & React.PropsWithChildren>
  )>(function renderXIonListItem({ i, mKey: key, children, }) {
    return (
      <Ion.Item key={key} >
      <Ion.Reorder 
      children={(
        <span style={{ display: "flex" , flexDirection: "column", }}>
          <span>#{ i }</span>
          <span>[{key }]</span>
        </span>
      )}
      />
      <Ion.Label>
        { children }
      </Ion.Label>
      </Ion.Item>
    ) ;
  } )
) ;
/**    
 * enhanced version of {@link DccDemo } ;
 * multiple {@link ReactDraft.Editor }s each to the corresponding DB (currently local `setState` ) entry ;
 * 
 */
export const DccDemoTwo1 = (
  /**   
   * two-or-three independent editors
   */
  function DccDemoTwoComponentImpl1() {
    const { editorStatesList: sA, setEditorStatesMap: setSA0, fcusState, } = (
      useDdtStateCC()
    ) ;
    return (     
      <>
      <Ion.List>
      <Ion.ReorderGroup
      disabled={false }
      onIonItemReorder={e => (
        completeIonicOrderedMapReorder(e, setSA0, )
      ) }
      >
      { (
        sA
        .entrySeq()
        .map(([key, s, ], i) => { 
          // const key = i ;
          const setS = (
            // TODO
            (itemV0: React.SetStateAction<ReactDraft.EditorState > ) => {
              setSA0(sA1 => {
                ;
                const itemV = (
                  applyStateUpdateAction(sA1.get(key, s, ), itemV0, )
                ) ;
                return (
                  sA1
                  .set(key, itemV, )
                ) ;
              } )
            }
          ) ;
          return (
            renderXIonListItem({
            //
            i: i, 
            mKey: key ,
            children: (
            <>
            { (() => {
              ;
              return (
                <Ion.Card>
                <Ion.CardContent> 
                <XDraftEditor1
                editorState={s }
                setState={setS }
                />
                </Ion.CardContent>
                </Ion.Card>
              ) ;
            } )() }
            <p>
              { (fcusState && (fcusState.key === key ) ) && "Focused" }
            </p>
            </>
            ) ,
            })
          ) ;
        } )
        .toArray()
      ) }
      </Ion.ReorderGroup>
      </Ion.List>
      </>
    ) ;
  }
) ;
import { getDdtDefault, } from "components/draftc/dedicatedState1";
/**    
 * {@link React.Key }, {@link Immutable.Iterable.Indexed }, {@link Immutable.Map},
 * 
 */
import { DdtKey, } from "components/draftc/dedicatedState1";
/**   
 * simple {@link React.useState } maintaining {@link Immutable.List<ReactDraft.EditorState>}
 * 
 */
import { useEditorStateArray1, } from "components/draftc/dedicatedState1";
/**    
 * enhanced of {@link useEditorStateArray1 } 
 * replacing {@link Immutable.Iterable.Indexed }s with {@link Immutable.OrderedMap }s
 * 
 */
import { useEditorStateArrayC, } from "components/draftc/dedicatedState1";
import { areTwoEditorStatesEqual, } from "library/useDraftEditor12";
const useDdtStateCC = (() => {
  type T0 = (
    ReturnType<typeof useEditorStateArrayC >
  ) ;
  const Typed = (
    /**  
     * this hack is necessary 
     * so that (VSC) renames in the earlierly-defined method will affect this site 
     * otherwise this will go out-of-sync
     * 
     */
    <A extends {}>(a: A & (
      {}
      & Omit<T0, keyof Pick<T0, "setEditorStatesArray"> >
      & { [k in keyof { contentStatesList: true ; } ] : Immutable.OrderedMap<DdtKey, ReactDraft.ContentState > ; } 
    )) => a
  ) ;
  const useCfcspBasic = (
    function () {
      /**    
       * multiple states packed into one,
       * prerequisite for avoiding race-conditions
       * 
       */
      const [focusAndCommitedContentMapStateProps, setFocusAndCommitedContMapStateProps] = (
        React.useState<{
          commitedContentMap : (
            Immutable.OrderedMap<DdtKey, ReactDraft.EditorState>
          ) ;
          fcus : (
            null | { key: DdtKey ; value: ReactDraft.EditorState ; }
          ) ;
        }>({
          commitedContentMap: (
            getDdtDefault()
            .toOrderedMap()
          ) ,
          fcus: null ,
        })
      ) ;
      return (
        <A extends {}>(a: A & {} ) => a
      )({
        focusAndCommitedContentMapStateProps ,
        setFocusAndCommitedContMapStateProps , 
        undoSettingCfsp : (
          React.useCallback<{ 
            /** *undo*.  */
            (steps: 1 ,): boolean ;
            /** *no-op*.  */
            (steps: 0 ,): true ;
            /** *redo*.  */
            (steps: -1 ,): boolean ;
            /**  */
            (steps: 1 | 0 | -1 ,): boolean ;
          }>((
            (() => {
              function M(steps: 0,): true ;
              function M(steps: 1 | 0 | -1 ,): boolean ;
              function M(steps: 1 | 0 | -1 ,): boolean { return (steps === 0 ) ? true : false ; } 
              return M ;
            } )()
          ) , [] )
        ) ,
      }) ;
    }
  ) ;
  const useCfcspCur = (() => {
    type Cc = (
      ReturnType<typeof useCfcspBasic>["focusAndCommitedContentMapStateProps"]
    ) ;
    const compareTwoFocusCmmtedContentsStateProps = (
      SS.identity((
        function compareTwoFocusCmmtedContentsStateProps(...[
          [
            existingS0 ,
            newS ,
          ] ,
        ] : [
          [
            Cc ,
            Cc ,
          ] ,
        ] ) {
          ;
          type Content = string | number ;
          /**    
           * will be used bwlow
           */
          const contentStatesSummaryStringReprChgPresent = (
            Immutable.Set([ existingS0, newS, ])
            .map(({ commitedContentMap: content }) => content )
            .map(m => (
              m
              .map(e => e.getCurrentContent() )
              .map<Content>(c => (
                JSON.stringify((
                  ReactDraft.convertToRaw(c, )
                ))
              ) )
            ) )
            .map(m => (
              JSON.stringify(m, )
            ) )
          );
          const thersNoChangeInContents = (() => {
            return (
              contentStatesSummaryStringReprChgPresent
              .size
              ===
              1
            ) ;
          } )() ;
          ;
          return {
            contentStatesSummaryStringReprChgPresent ,
            thersNoChangeInContents ,
          } ;
        }
      ))
    ) 
    return (
      function useCfcspCur() { 
        const [[focusAndCommitedContentMapStateProps, cUndRdoStacks, ], sU, ] = (
          React.useState<[
            Cc , 
            { [k in keyof { undoStack: true ; redoStack: true ; } ]: Immutable.Stack<Cc["commitedContentMap"]> ; } ,
          ]>([
            {
              commitedContentMap: getDdtDefault().toOrderedMap() ,
              fcus: null ,
            } ,
            {
              redoStack: Immutable.Stack() ,
              undoStack: Immutable.Stack() ,
            } ,
          ])
        ) ;
        const setFocusAndCommitedContProps = (
          React.useCallback<ReturnType<typeof useCfcspBasic>["setFocusAndCommitedContMapStateProps"] >((
            function setContentAndFocusProps(newS0) {
              return (
                sU(([existingS0, { redoStack: redoStack0, undoStack: undoStack0, }, ]) => {
                  const newS = (
                    applySetStateAction(newS0, existingS0, )
                  ) ;
                  console["log"]({ existingS0, newS, }, ) ;
                  console["log"](`existing undo stack size: ${undoStack0.size } `) ;
                  for (const { type, } of new (class {
    
                    // TODO
                    // TODO
                    *[Symbol.iterator]() {
                      const {
                        contentStatesSummaryStringReprChgPresent ,
                        thersNoChangeInContents ,
                      } = (
                        compareTwoFocusCmmtedContentsStateProps([existingS0, newS,])
                      ) ;
                      const {
                        typedContentRemainUnchanged ,
                        focusRemainUnchanged ,
                      } = (() : (
                        never 
                        | { focusRemainUnchanged : false ; typedContentRemainUnchanged?: boolean ; }
                        | { focusRemainUnchanged : true  ; typedContentRemainUnchanged?: boolean ; }
                      ) => {
                        const existingF = (existingS0 ).fcus ;
                        const newF      = (newS       ).fcus ;
                        if (existingF || newF ) {
                          if (existingF && newF ) {
                            if (newF.key === existingF.key ) {
                              return {
                                focusRemainUnchanged: true ,
                                typedContentRemainUnchanged: (
                                  areTwoEditorStatesEqual([
                                    (newF     ).value.getCurrentContent() ,
                                    (existingF).value.getCurrentContent() ,
                                  ])
                                ) ,
                              } ;
                            } else {
                              return {
                                focusRemainUnchanged: false ,
                              } ;
                            }
                          } else {
                            // either, but not both, were null.
                            ;
                            return {
                              focusRemainUnchanged: false ,
                            } ;
                          }
                        } else {
                          // both are null.
                          return {
                            focusRemainUnchanged: true ,
                          } ;
                        }
                      })() ;
                      if ((
                        thersNoChangeInContents 
                      )) {
                        console["log"]((
                          `IDEMPTD ContentState for all the keys ; elliding this SS`
                        ) , { csStringReprs: contentStatesSummaryStringReprChgPresent, } ) ;
                        yield { type: "existing-focus-and-commitedcontentmap" as const, } ;
                      } else {
                        ;
                        console["log"]((
                          `CHANGED ContentState for some of the keys ;`
                        ) , { csStringReprs: contentStatesSummaryStringReprChgPresent, } ) ;
                      }
                    }
    
                  })) {
                    if (type === "existing-focus-and-commitedcontentmap") {
                      return [existingS0, { redoStack: redoStack0, undoStack: undoStack0, }, ] ;
                    }
                  }
                  // TODO
                  return [
                    newS ,
                    { 
                      redoStack: Immutable.Stack() , 
                      undoStack: (() => {
                        const {
                          fcus: existingFcus ,
                        } = existingS0 ;
                        // TODO elide extra undoes
                        {}
                        return (
                          undoStack0.push(existingS0.commitedContentMap, )
                        ) ;
                      } )() ,
                    } ,
                  ] ;
                } )
              ) ;
            }
          ) , [sU, ],)
        ) ;
        return (
          <E extends {}>(a: E & ReturnType<typeof useCfcspBasic>) => a
        )({
          focusAndCommitedContentMapStateProps ,
          // TODO
          setFocusAndCommitedContMapStateProps: setFocusAndCommitedContProps ,
          undoSettingCfsp: React.useCallback((
            (() => {
              function M(steps: 0,): true ;
              function M(steps: 1 | 0 | -1 ,): boolean ;
              function M(steps: 1 | 0 | -1 ,): boolean { return (steps === 0 ) ? true : false ; } 
              return M ;
            } )()
          ), []) ,
          cUndRdoStacks ,
        }) ;
      }
    ) ;
  } )() ;
  return (
    function useDdtStateX() {
      ;
      const {
        focusAndCommitedContentMapStateProps ,
        setFocusAndCommitedContMapStateProps: setFocusAndCommitedContProps ,
        undoSettingCfsp,
      } = (
        // useCfcspBasic()
        useCfcspCur()
      ) ;
      const {
        commitedContentMap: editorMapBeforeFocus ,
        fcus: fcusState ,
      } = focusAndCommitedContentMapStateProps ;
      const setEditorMapState = (
        React.useCallback((
          SS.identity<(
            React.Dispatch<React.SetStateAction<typeof editorMapBeforeFocus > >
          )>((newVF) => (
            setFocusAndCommitedContProps(({ commitedContentMap: existingV, ...c }) => {
              const newV = (
                applySetStateAction(newVF, existingV )
              ) ;
              return {
                ...c ,
                commitedContentMap: newV ,
              } ;
            })
          ) )
        ) , [setFocusAndCommitedContProps,])
      ) ;
      const setFcusState = (
        React.useCallback((
          SS.identity<(
            React.Dispatch<React.SetStateAction<typeof fcusState > >
          )>((newVF) => (
            setFocusAndCommitedContProps(({ fcus: existingV, ...c }) => {
              const newV = (
                applySetStateAction(newVF, existingV )
              ) ;
              return {
                ...c ,
                fcus: newV ,
              } ;
            })
          ) )
        ) ,  [setFocusAndCommitedContProps,] )
      ) ;
      /**   
       * {@link T0.editorStatesList }.
       * 
       */
      const sA = (
        React.useMemo(() => {
          const sm10 = (
            editorMapBeforeFocus 
            .map(e => (
              ReactDraft.EditorState.set(e, {
                undoStack: Immutable.Stack<never>() ,
                redoStack: Immutable.Stack<never>() ,
              } )
            ) )
          ) ;
          const sm1 = (
            fcusState ?
            sm10.set(fcusState.key, fcusState.value, )
            : sm10
          ) ;
          return (
            sm1
          ) ;
        } , [editorMapBeforeFocus, fcusState, ] )
      ) ;
      ;
      /**    
       * the `ContentState`s to be displayed (accounting the current focus state).
       * 
       */
      const sAV = (
        React.useMemo(() => (
          sA
          .map(e => e.getCurrentContent() )
        ) , [sA, ] , )
      ) ;
      ;
      /**   
       * see the impl.
       */
      const commitX1 = (
        () => {
          if (fcusState ) {
            setEditorMapState(s => (
              s
              .set(fcusState.key, fcusState.value, )
            ) );
          }
        }
      ) ;
      /**   
       * {@link T0.commit }.
       * 
       */
      const commitAndBlur = (
        React.useCallback(() => {
          setFocusAndCommitedContProps(({ 
            fcus: fcusState, 
            commitedContentMap: s, 
          }) => {
            return {
              commitedContentMap: (
                fcusState ?
                (
                  s
                  .set(fcusState.key, fcusState.value, )
                )
                : s
              ) ,
              fcus: null ,
            } ;
          } ) ;
        } , [setFocusAndCommitedContProps,] , )
      ) ;
      /**   
       * {@link T0.setEditorStatesMap }.
       * 
       */
      const setSA0 = (
        // TODO
        (...[newSAFrmFnc]: Parameters<typeof setEditorMapState> ) => {
          {
            const existingSA = (
              sA
            ) ;
            const newSA = (
              applySetStateAction(newSAFrmFnc, existingSA, )
            ) ;
            const keySeqRemainsUnchanged = (  
              newSA.keySeq()
              .equals(existingSA.keySeq() )
            ) ;
            setFocusAndCommitedContProps((existingState) => {
              const {
                fcus: existingFcus ,
              } = existingState ;
              if (keySeqRemainsUnchanged ) {
                ;
                // TODO
                {
                  const keysWIthChgdCont = (
                    existingSA.keySeq()
                    .filterNot(k => (
                      /**    
                       * whether both are equivalent
                       */
                      (
                        areTwoEditorStatesEqual([
                          existingSA.get(k, null)!, 
                          newSA.get(k, null)!, 
                        ])
                      )
                    ) )
                    .toIndexedSeq()
                  ) ;
                  for (const key1 of (
                    keysWIthChgdCont
                    .take(1)
                  ) ) {
                    {
                      ;
                      /**    
                       * apply the switching .
                       */
                      return {
                        fcus: (
                          { key: key1, value: newSA.get(key1, null)! , }
                        ),
                        commitedContentMap: ((): typeof existingState.commitedContentMap => {
                          const {
                            commitedContentMap: s ,
                          } = existingState ;
                          return (
                            /**    
                             * if there's existing focus, and the focus wwould change,
                             * commit the existing buffered
                             */
                            ((): typeof existingState.commitedContentMap => {
                              if (existingFcus ) {
                                if (key1 !== existingFcus.key) {
                                  ;
                                  if (fcusState ) { 
                                    return (
                                      s
                                      .set(fcusState.key, fcusState.value, )
                                    ) ;
                                  }
                                }
                              }
                              return ( 
                                s
                              ) ;
                            } )()
                          ) ;
                        })() ,
                      } ;
                    }
                  }
                  return (
                    {
                      fcus: existingFcus ,
                      commitedContentMap: existingState.commitedContentMap ,
                    }
                  ) ;
                }
              } else {
                console["info"](`Ordering will change`, ...(
                  Immutable.OrderedMap({ existingSA, newSA, })
                  .map(m => m.keySeq() )
                  .map(s => s.toArray() )
                ) ) ;
                return {
                  fcus: null ,
                  commitedContentMap: ((): typeof existingState.commitedContentMap => {
                    const {
                      commitedContentMap: s ,
                    } = existingState ;
                    if (fcusState ) { 
                      return (
                        s
                        .set(fcusState.key, fcusState.value, )
                      ) ;
                    }
                    ;
                    return ( 
                      s
                    ) ;
                  } )() ,
                } ;
              }
            });
          }
          setFocusAndCommitedContProps(({ fcus: fcusState, commitedContentMap: st0, }) => {
            return {
              fcus: fcusState ,

              commitedContentMap: (() => {
                const st1 = (
                  applySetStateAction(newSAFrmFnc, st0 )
                ) ;
                if (fcusState) {
                  return st0 ;
                }
                return st1 ;
              })() ,
              
            } ;
          } );
        }
      ) ;
      ;
      return (
        Typed({
          contentStatesList: sAV ,
          editorStatesList: sA ,
          fcusState ,
          commit: commitAndBlur ,
          ...(
            <A extends {}>(a: A & ({} & Partial<ReturnType<typeof useCfcspBasic> >) ) => a
          )({ 
            undoSettingCfsp, 
          }) ,
          // /**   
          //  * note that this might behave differently !
          //  */
          setEditorStatesMap: setSA0 ,
          setFcusState ,
        })
      ) ;
    }
  ) ;
} )() ;
import { applySetStateAction, applyStateUpdateAction as applyStateUpdateAction, } from "library/rcs1";
if (0) {
  ;
  applySetStateAction(s => s, {} ) ;
  applySetStateAction(s => s, { apply: 9 , } ) ;
  // applySetStateAction(s => s, Object ) ;
  // applySetStateAction(s => s, Image ) ;
  applySetStateAction(s => s, new Image() ) ;
}






