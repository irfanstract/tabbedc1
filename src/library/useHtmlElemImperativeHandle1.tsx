

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import * as Ion from "library/useIonicUi1" ;











const useXImperativeHandle = (
  function useNRefImpl<A extends (
    {}
    & Element 
    & DocumentAndElementEventHandlers 
    & ElementCSSInlineStyle 
    & ElementContentEditable 
    & GlobalEventHandlers 
    & HTMLOrSVGElement
  ) >() {
    const [h, setHandle,] = (
      React.useState<null | A>(null )
    ) ;
    return (
      <A extends [unknown, object]>(a: A) => a
    )([
      React.useMemo((): {
          grabFocus: () => void;
          matchesSelector: (v: string ) => (null | boolean)
      } => {
        if (h) {
          return {
            grabFocus : () => h.focus() ,
            matchesSelector: (selector) => (
              h ? 
              h.matches(selector)
              : null
            ) ,
          } ;
        } else {
          return {
            grabFocus: Object ,
            matchesSelector: () => false,
          } ;
        }
      } , [h,] ) ,
      setHandle ,
    ]) ;
  }
) ;

export { useXImperativeHandle as useHtmlElementImperativeHandleAbs, } ;




