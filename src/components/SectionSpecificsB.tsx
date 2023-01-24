

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











const WithSectionSpecificsC = (() => {
  /**   
   * defines these two properties.
   * 
   */
  type FocusedHoveredProps = (
    { focused: boolean ; hovered: boolean ; }
  ) ;
  type AsLocalElement = {
    (e: React.ReactElement): React.ReactElement ;
    (e: React.ReactElement | null): React.ReactElement | null ;
  } ;
  type PayloadCtx = (
    {} 
    & FocusedHoveredProps & { asLocal : AsLocalElement ; }
  ) ;
  return (
    SS.identity<(
      React.FC<(
        {} 
        & { children: (ctx: PayloadCtx ) => React.ReactElement ; }
      )> 
    )>(function BoundarySpecificC({ children: payload, }) {
      const eRef = (
        React.useState<null | HTMLElement>(null )
      ) ;
      const clsName = (
        "uyuewgugdwydywdy" + "_" + RCS.useId()
      ) ;
      const [eSt, setESt] = (
        React.useState<(
          FocusedHoveredProps
        )>({ focused: false, hovered: false, })
      ) ;
      ;
      const {
        opacity: opacityCssvRef ,
        overflow: overflowClpMdCssvRef ,
      } = {
        opacity: (
          "--xbs-opacity"
        ) ,
        overflow: (
          "--xbs-overflow-clipping-mode"
        ) ,
      } ;
      // TODO
      return (
        <>
        <div
        ref={eRef[1] }
        className={`${clsName } ` }
        onBlur ={() => { setESt(v => ({ ...v, focused: false, }) ) ; } }
        onFocus={() => { setESt(v => ({ ...v, focused: true , }) ) ; } }
        onPointerLeave={() => { setESt(v => ({ ...v, hovered: false, }) ) ; } }
        onPointerEnter={() => { setESt(v => ({ ...v, hovered: true , }) ) ; } }
        >
          { payload({
             ...eSt, 
             asLocal: (e) => (
              <React.Fragment>
              <div style={{ 
                opacity: `var(${opacityCssvRef } ) ` , 
                filter: `saturate(var(${opacityCssvRef } ) ) ` ,
                zoom: `0.7` ,
                maxBlockSize : `calc(2em + (var(${opacityCssvRef } ) * 20em ) ) ` , 
                maxInlineSize: `calc(2em + (var(${opacityCssvRef } ) * 20em ) ) ` , 
                 /* following the `maxYyySize` settings above */
                overflow:(
                  `var(${ overflowClpMdCssvRef } )`
                  // "auto"
                ) ,
                transition: `all 2.5s ease-out , opacity 1.5s ease-out , filter 1.5s ease-out`, 
              }}>
                { e }
              </div>
              </React.Fragment>
             ) ,
          }, ) }
          <style> 
            { `.${clsName }              { ${opacityCssvRef } : 0 ; } ` }
            { `.${clsName }:hover        { ${opacityCssvRef } : 1 ; } ` }
            { `.${clsName }:focus-within { ${opacityCssvRef } : 1 ; } ` }
            { `.${clsName }              { ${overflowClpMdCssvRef } : hidden ; } ` }
            { `.${clsName }:hover        { ${overflowClpMdCssvRef } : auto ; } ` }
            { `.${clsName }:focus-within { ${overflowClpMdCssvRef } : auto ; } ` }
          </style>
        </div>
        </>
      ) ;
    } )
  ) ;
} )() ;



export default (
  WithSectionSpecificsC
) ;






