


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










export const contentFromHtml = (
  (...[html] : [
    html: string ,
  ] ) => {
    const { contentBlocks, entityMap, } = (
      ReactDraft.convertFromHTML(html, )
    ) ;
    return (
      ReactDraft.ContentState.createFromBlockArray(contentBlocks, entityMap, )
    ) ;
  }
) ;
export const UndoStackDisplayC = (
  SS.identity<React.FC<{ value: Immutable.Stack<ReactDraft.EditorState > ; } > >((
    function ({ value, }) {
      type FM = Immutable.Seq.Indexed<string>["flatMap"] ;
      type FM1 = Immutable.Iterable.Indexed<string>["flatMap"] ;
      return (
        <div 
        style={{ zoom: 0.5, }}
        >
        <ol>
          { (
            value
            .map(e => e.getCurrentContent() )
            .entrySeq()
            .groupBy(([i, c,]) => c.getPlainText() )
            .toArray()
            .flatMap(([plainTxt, s]) => (
              s.toSeq()
              .map(([i, c, ]) => (
                { i, c, plainTxt, }
              ) ) 
              .valueSeq().toArray()
            ))
            .toImmutableSeq()
            .sortBy(e => e.i )
            .map(({ i, c, plainTxt, }) => (
              <li key={`${plainTxt} --- ${i}` } >
                <pre>{ plainTxt }</pre>
              </li>
            ))
          ) }
        </ol>
        </div>
      ) ;
    }
  ))
) ;

export const areTwoEditorStatesEqual = (() => {
  function areTwoEditorStatesEqualX(e: ReactDraft.EditorState[]): boolean ;
  function areTwoEditorStatesEqualX(e: ReactDraft.ContentState[]): boolean ;
  function areTwoEditorStatesEqualX(items: ReactDraft.EditorState[] | ReactDraft.ContentState[] ) {
    return (
      // TODO
      Immutable.Set([...items ])
      .map(e => {
        return (
          JSON.stringify((
            /**   
             * strange, 
             * {@link ReactDraft.EditorState.toJSON} is declared to exist but
             * in practice it didn't exist (`e.toJSON is not a function`)
             * 
             */
            () => {
              ;
              if (e instanceof ReactDraft.EditorState ) {
                return ((mode: 0 | 2 ) => {
                  switch (mode) {
                    case 0 : return e ;
                    // TODO
                    case 2 : return { content: e.getCurrentContent(), selection: e.getSelection(), } ;
                  }
                } )(0 ) ;
              }
              if (e instanceof ReactDraft.ContentState ) {
                return ReactDraft.convertToRaw(e) ;
              }
              throw TypeError() ;
              // return e ;
            }
          )() , null , 0 , ) 
        ) ;
      } )
      .size
      ===
      1
    ) ;
  }
  return (
    areTwoEditorStatesEqualX
  ) ;
})() ;





