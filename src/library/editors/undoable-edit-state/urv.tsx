


import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;





class UndoRedoStateModel<A> {
  
  undoStack : Immutable.Stack<A > ;
  redoStack : Immutable.Stack<A > ;  
  value: A ;

  constructor(s: Pick<UndoRedoStateModel<A>, "undoStack" | "redoStack" | "value" > ) {
    const {
      undoStack ,
      redoStack ,
      value ,
    } = s ;
    this.undoStack = undoStack ;
    this.redoStack = redoStack ;
    this.value     = value ;
  }
  static asInitiallyEmpty<A>(...[initialValue] : [initialValue: A, ] ) {
    return ((
      new UndoRedoStateModel<typeof initialValue>({
        value: initialValue,
        undoStack: Immutable.Stack() ,
        redoStack: Immutable.Stack() ,
      })
    )) ;
  }

  get afterEdit() {
    const existingState = this ;
    return <A2 extends unknown = A >(...[pushedValue, { needsAdd = () => true , } = {} ,] : [
      pushedValue: A ,
      options ?: (
        {}
        & Partial<{ 
          
          /**   
           * customising this handler would be very very important for ext-editors like Draft because otherwise
           * an enormous number of edits would be generated.
           * 
           */
          needsAdd: (ctx: { 
            priorValue: A ; 
          } ) => boolean ; 
          
        }>
      ) ,
    ] ) => (
      
      new UndoRedoStateModel<A | A2 >({
        undoStack: (
          existingState.undoStack
          .pushAll((
            needsAdd({ priorValue: existingState.value, }) ? 
            [existingState.value, ] : []
          ))
        ) ,
        redoStack: (
          Immutable.Stack()
        ) ,
        value: (
          pushedValue
        ) ,
      })
      
    ) ;
  } ;
  get afterRedo() {
    const existingState = this ;
    return () => {
      const NONEX = Symbol() ; 
      const pushedValue = (
        /** see alse {@link Immutable.Stack.push } */
        existingState.redoStack
        .first(/* the NSV */ NONEX )
      ) ;
      if (pushedValue !== NONEX ) {
        ;
        return (
        
          new UndoRedoStateModel<A >({
            ...existingState.afterEdit<A>(pushedValue, ) , 
            redoStack: (
              existingState.redoStack
              .pop()
            ) ,
          })
          
        ) ;
      } else {
        return existingState ;
      }
    } ;
  } ;
  afterUndo() {
    return (
      this
      .asInverted()
      .afterRedo()
      .asInverted()
    ) ;
  } ;
  protected asInverted() {
    return ((
      new UndoRedoStateModel<A>({
        undoStack: this.redoStack ,
        redoStack: this.undoStack ,
        value: this.value ,
      })
    )) ;
  } ;
} ;



export default UndoRedoStateModel ;

