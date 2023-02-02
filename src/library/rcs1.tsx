

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
  useDependenciesChgCount1(options: { dependencies: React.DependencyList } ): number ;
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
export const useGetupValuePrimitive = (
  function useGetupValuePrimitiveI<A extends null | boolean | string | number , A2 extends A >(...[v1, v2]: [v1: A, v2: A, ]): A  {
    const c = (
      useDependenciesChgCount1({ dependencies: [v1,], })
    ) ;
    const cDeferred = (
      React.useDeferredValue(c)
    ) ;
    return (
      (cDeferred === c ) ?
      v2 : v1
    ) ;
  }
) ;
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
export class WithErrorbound extends (
  React.Component<(
    {} 
    & React.PropsWithChildren 
    & Partial<{ Button : "button" | (typeof import("@ionic/react").IonButton ) ; }>
  ), (
    {}
    & { blockingException ?: null | Error ; }
  ) >
) {
  render(): React.ReactNode {
    const { 
      Button = "button" , 
    } = (
      this.props || {} 
    ) ;
    const {
      blockingException = null ,
    } = (
      this.state || {}
    ) ;
    const bangingResetBtn = (
      <Button 
      type="button" 
      onClick={() => this.setState({ blockingException: null, }) } 
      >
        !!!
      </Button>
    ) ;
    return (
      ( blockingException ? (
        <div> 
          <XStackTraceView value={blockingException } />
          <p>{ bangingResetBtn }</p>
        </div>
      ) : null )
      || this.props.children
    ) ;
  }
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  //   console["error"](error , { error, errorInfo , } , ) ;
  // }
  static getDerivedStateFromError(e: Error, ): Partial<WithErrorbound["state"] > {
    return { blockingException: e, } ;
  }
}
const XStackTraceView = (
  SS.identity<(
    React.FC<{ value: Error }>
  )>(function XStackTraceViewImpl({ value: blockingException, }) {
    const { cause = null, } = blockingException ;
    return (
      <div 
      style={{ 
        fontWeight: "bold", 
        border: `0.1em solid currentcolor`,
        borderRadius: `0.25em` ,
        backgroundColor: "yellow", 
        color: "black", 
      }}
      >
        <header>
        <p>
          <code>{ blockingException.message }</code>
        </p>
        </header>
        <pre>
          { blockingException.stack }
        </pre>
        { cause ? (
          <>
          <p>cause:</p>
          { (cause instanceof Error ) && (
            <XStackTraceView value={cause } />
          ) }
          </>
        ) : null }
      </div>
    ) ;
  } )
) ;
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
/**   
 * 
 */
export { useIntervalDispatch, } ;
/**    
 * use deferred allocation of a `close()`able.
 * 
 * @param reallocativeDependencies . if this changes, must re-allocate 
 * @returns a (maintained) `A`, or `null` if alloc remains under progress
 * 
 */
export const useDeferredCloseable = (
  /**   
   * 
   */
  function useDeferredResourceImpl<A extends { close(): void | true | Promise<unknown> ; } >(...[allocate, dependencies,] : [
    reallocate: () => A ,
    reallocativeDependencies: React.DependencyList ,
  ] ) {
    const [toBeReturned, setWhatToReturn] = (
      React.useState<null | A >(null, )
    ) ;
    React["useEffect"](() => {
      const r1 = (
        allocate()
      ) ;
      setWhatToReturn(() => r1 )
      return (
        (): void => {
          r1.close() ;
        }
      ) ;
    } , dependencies , ) ;
    React.useDebugValue({ 
      toBeReturned, 
      dependencies, 
      ...(null ? { allocate, } : {} ) ,
    }) ;
    return toBeReturned ;
  }
) ;
/**
 * modified version of {@link React.useId}
 * 
 */
export const useId = (
  function () {
    const id0 = (
      React.useId()
    ) ;
    return (
      Array.from(id0 )
      .map(c => (
        c.match(/\W/) ?
        c.charCodeAt(0)
        : c
      ) )
      .join("") 
      // otherwise, will not get picked up
      .replace(/^/, () => "elem-" )
    ) ;
  }
) ;
// TODO
export {
  useHtmlElementImperativeHandleAbs ,
} from "library/useHtmlElemImperativeHandle1" ;
export * as DOM from "react-dom" ;









