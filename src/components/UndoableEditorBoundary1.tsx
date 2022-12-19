

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import * as Ion from "library/useIonicUi1" ;








export const {
  useUndoableEditState ,
  useUndoableEditState1, 
} = (() => {
  type SD<A> = [A, React.Dispatch<React.SetStateAction<A> > ] ;
  class XState1<A> {

    private constructor() {}
    
    useMain = (
      function useMain (...[initialValue] : [A,] )  {
        return (
          React.useState<UndoRedoStateModel<A> >((
            UndoRedoStateModel.asInitiallyEmpty(initialValue, )
          ))
        ) ;
      }
    ) ;

  } ;
  const useUndoableEditStateFromUseState = (
    (() => {
      const main = (
        SS.identity((  
      
          function useUndoableEditStateA<A>(args1 : SD<UndoRedoStateModel<A> > ) {
            return (
              new impl11<A>()
              .useMain(args1 )
            ) ;
          }
          
        ))
      ) ;
      return main ;
    } )()
  ) ;
  class impl11<A> {
    useMain = (
      function useUndoabEditImpl(args1 : SD<UndoRedoStateModel<A> > ) {
        const [state1, SST, ] = (
          args1
        ) ;
        const { undoStack, redoStack, value, } = state1 ;
        const {
          undo ,
          redo ,
          pushState, 
          mod1,
        } = (
          useUesDispatchers(SST, )
        ) ;
        const undoRedoPnl = (
          <span>
          <Ion.Button 
          children={(
            <span>undo ({ undoStack.size })</span>
          )}
          onClick={() => undo()  }
          />
          <Ion.Button 
          children={(
            <span>redo ({ redoStack.size })</span>
          )}
          onClick={() => redo()  }
          />
          </span>
        ) ;
        // const [] ;
        return (
          (
            <C1 extends [typeof value, unknown, ]>(e: C1) => e
          )([
            value, 
            (
              <A extends {}>(a: A & { [k in keyof ReturnType<typeof useUesDispatchers>] ?: object ; } ) => a
            )({ 
              /**    
               * clears the redo-stack, and then
               * push a (new) edit
               */
              pushState, 
              redo, undo, 
              /**     
               * a race-condition-aware means to directly amend it as {@link UndoRedoStateModel }.
               */
              mod1, 
              undoRedoPnl ,
              /**    
               * the current-state, {@link UndoRedoStateModel}.
               */
              state1, 
            }), 
          ])
        ) ;
      }
    ) ;
  }
  const useUndoableEditStatePlain = (
    function useXState<A>(initialValue : A ) : ReturnType<impl11<A>["useMain"] > {
      const s = (
        React.useState<UndoRedoStateModel<A> >((
          UndoRedoStateModel.asInitiallyEmpty(initialValue, )
        ))
      ) ;
      return (
        useUndoableEditStateFromUseState(s, )
      ) ;
    }
  ) ;
  function useUndoableEditStateOverloadedTwo<A>(initialValue: A ) : ReturnType<impl11<A>["useMain"] > ;
  function useUndoableEditStateOverloadedTwo<A>(...args : SD<UndoRedoStateModel<A>> ) : ReturnType<impl11<A>["useMain"] > ;
  function useUndoableEditStateOverloadedTwo<A>(...args : [A] | SD<UndoRedoStateModel<A>> ) : ReturnType<impl11<A>["useMain"] > {
    const f = ((): (() => ReturnType<impl11<A>["useMain"] > ) => {
      if (2 === args.length ) {
        return function use1() {
          return useUndoableEditStateFromUseState<A>(args ) ;
        } ;
      }
      if (1 === args.length ) {
        const [initialValue] = args ;
        return function use1() {
          return useUndoableEditStatePlain<A>(initialValue) ;
        } ;
      }
      throw TypeError() ;
    } )() ;
    return (
      f()
    ) ;
  }
  return {
    useUndoableEditState: useUndoableEditStateOverloadedTwo ,
    useUndoableEditState1: useUndoableEditStateFromUseState ,
  } ;
} )() ;
import UndoRedoStateModel from "library/editors/undoable-edit-state/urv";

/**   
 * implementation for the above
 * 
 */
const useUesDispatchers = (
  <A, A2 = never>(SST : React.Dispatch<React.SetStateAction<UndoRedoStateModel<A> > > ) => {
    return (
      React.useMemo(() => {
        const undo = () => SST(existingState => existingState.afterUndo() ) ;
        const redo = () => SST(existingState => existingState.afterRedo() ) ;
        return { 
          undo ,
          redo ,
          pushState: (
            (...[pushedValue, { onlyAugments, } = { onlyAugments: false , }, ] : [
              A ,
              { 
                /**   
                 * if `true` means that the closest `undo` can be discarded.
                 */
                onlyAugments : boolean ; 
              } ? ,
            ] ) => (
              SST((existingState) => (
                ([existingState] as const)
                .map(e => (
                  onlyAugments ?
                  e.afterUndo() : e
                ) )
                .map(e => e.afterEdit(pushedValue, ))
                [0]
              ) )
            ) 
          ) ,
          mod1: SST,
          // undoRedoPnl ,
          invokeDebugger: () => SST(existingState => existingState.afterUndo() ) ,
        } ;
      } , [SST, ] )
    ) ;
  }
) ;
const uesUndoIdempotent = Symbol() ;








