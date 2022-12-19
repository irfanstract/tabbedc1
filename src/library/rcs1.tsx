

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ; 
import React from "react";
type NonFunctionObject = (
  object & (
    { apply ?: never ; } | { call ?: never ; }
  )
) ;
import { useIntervalDispatch, } from "library/useIntervalDispatch1";


export {} ; // TS-1208








export const { useMemo, useCallback, } = React ;
export const { useDependenciesChgCount1, }: {
  /**   
   * 
   */
  useDependenciesChgCount1(options: { dependencies: React.DependencyList } ): void ;
} = {
  useDependenciesChgCount1: ({ dependencies, }) => {
    const [c, setC,] = (
      React.useState<number>(() => 0 )
    ) ;
    React["useLayoutEffect"](() => {
      setC(c => (c + 1 ) ) ;
    } , dependencies, ) ;
    return c ;
  } ,
}  ;
const undefinedReturnVal = Symbol() ;
/**    
 * a wrapper which would automatically update callend on every render.
 * 
 */
export const useUpdatedCallback = (() => {
  function useUpdatedCallback(c: null ): null ;
  function useUpdatedCallback<A extends unknown[], R >(c:        ((...args: A) => R ) ):        ((...args: A) => R ) ;
  function useUpdatedCallback<A extends unknown[], R >(c: null | ((...args: A) => R ) ): null | ((...args: A) => R ) ;
  function useUpdatedCallback<A extends unknown[], R >(c: null | ((...args: A) => R ) ) {
    const fRef = (
      useUpdatedRef(c, )
    )  ;
    const returnValRef = (
      React.useRef<[] | [R]>([])
    ) ;
    /**   
     * a persisted function (see also {@link React.useState }) which,
     * given an array of args (must be {@link A} ),
     * would run whatever {@link fRef} references .
     * 
     */
    const f1 = (
      useXDispatcher({ fRef, returnValRef, })
    ) ;
    /**   
     * whether {@link c } is/was non-null. 
     * will be used to conditionally null the return-value in accordance with the defining fnc sgnt.
     * 
     */
    const cWasNonNull = !!c ;
    return (
      /**    
       * conditional wrapper which additionally pack (the) args.
       * 
       * can't use `useCallback` due to this nullability.
       * 
       */
      React.useMemo(() => (
        cWasNonNull ?
        ((...a: A): R => f1(a) )
        : null
      ) , [cWasNonNull, f1, ] )
    ) ;
  }
  /**    
   * implementation
   * 
   */
  const useXDispatcher = (
    <A extends unknown[], R >({ fRef, returnValRef, } : { 
      fRef: React.RefObject<((...a: A) => R) | null> ; 
      returnValRef : React.MutableRefObject<[] | [R]> ;
    } ) => {
      return (
        React.useCallback((args: A ) => {
          const f = (
            fRef.current
          ) ;
          if (f) {
            const r = (
              f(...args )
            ) ;
            returnValRef.current = [r] ;
          }
          return ((): R => {
            for (const returnVal of returnValRef.current ) { 
              return returnVal ; 
            } ;
            throw TypeError(`no result available. \n note: we never received non-null callend, had we ?`) ;
          } )() ;
        } , [fRef , returnValRef,] )
      ) ;
    }
  ) ;
  return (
    useUpdatedCallback
  ) ;
} )() ;
export const useUpdatedRef = (() => {
  const TPO = (
    (s: unknown) => typeof s
  ) ;
  return (
    function useUpdatedRef<C extends null | {} >(c: C ): React.RefObject<null | C > {
      ;
      const fRef = (
        React.useRef<null | C>(null )
      ) ;
      fRef.current = c ;
      ;
      return (
        fRef
      ) ;
    }
  ) ;
} )() ;
/**    
 * user-defined {@link React.Dispatch }s.
 * 
 */
export const {
  applySetStateAction    : applySetStateAction       ,
  applySetStateActionB   : applyStateUpdateAction    ,
} = (() => {
  return {
    applySetStateAction: (
      function <A extends null | boolean | symbol | number | bigint | string | NonFunctionObject>(...[ssa, st0] : [
        React.SetStateAction<A> ,
        A ,
      ] ) {
        ;
        const st1 = (
          (typeof ssa === "function" ? ssa : (() => ssa ) )(st0 )
        ) ;
        return st1 ;
      }
    ) ,
    /**   
     * {@link applySetStateAction } with inverted arguments
     */
    applySetStateActionB: (
      <A extends null | boolean | symbol | number | bigint | string | NonFunctionObject>(...[st0, ssa] : [
        A, React.SetStateAction<A> , 
      ] ) => (
        applySetStateAction<A>(ssa, st0, )
      )
    ) ,
  } ;
} )() ;
export class WithErrorbound extends React.Component<React.PropsWithChildren & Partial<{ Button : "button" | (typeof import("@ionic/react").IonButton ) ; }>, { e ?: null | Error ; } > {
  render(): React.ReactNode {
    const Button = (this.props || {} ).Button ?? "button" ;
    return (
      ((this.state || {} ).e ? (
        <div> 
          <Button type="button" onClick={() => this.setState({ e: null, }) } >
            !!!
          </Button>
        </div>
      ) : null )
      || this.props.children
    ) ;
  }
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   console["error"](error , { error, errorInfo , } , ) ;
  // }
  static getDerivedStateFromError(e: Error, ) {
    return { e: e, } ;
  }
}
export const useScan = (
  function <A>(...[f , { intervalMillis, } = { intervalMillis : 500, } ] : [
    main: () => A, 
    config ?: { intervalMillis : number ; }, 
  ] ): A {
    const [v, setV,] = (
      React.useState<A>(f() )
    ) ;
    useIntervalDispatch({
      intervalMillis, 
      intervalCallback: () => {
        setV(f ) ;
      } ,
      stricity: "lowerbounded-recess" ,
    }) ;
    return v ;
  }
) ;









