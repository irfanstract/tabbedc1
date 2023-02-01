

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










export const SecondsOfTimeDurativeSlider = (
  SS.identity<(
    React.FC<(
      {}
      & (
        Partial<(
          XNaturalQntValAndSliderValueProps
        ) >
      )
      & { value: {} ; }
      & { onChange: {} ; }
      & Partial<{ style: React.CSSProperties ; }>
    )>
  )>(function STDE({ value, onChange, maxValue = 1.5 * 60, style, }) {
    return (
      <p style={style } >
        duration : {}
        <XNaturalQntValAndSlider 
        {...{ value, maxValue, onChange, unit: "s", } }
        style={{ display: "inline-block", }}
        />
      </p>
    ) ;
  } )
) ;


type XNaturalQntValAndSliderValueProps = (
  {}
  & { value: number ; }
  & { maxValue: number ; }
  & Partial<{ unit    : string ; }>
  & { onChange: React.Dispatch<{ newValue: number ; }> ; }
) ;
const XNaturalQntValAndSlider = (
  SS.identity<(
    React.FC<(
      {}
      & XNaturalQntValAndSliderValueProps
      & Partial<{ style: React.CSSProperties ; }>
    )>
  )>(function XNaturalQntSlider({ value, unit = "", onChange, maxValue, style, }) {
    ;
    return (
      <span style={{ ...style, }} >
      <span style={{ display: "flex", flexDirection: "column", }}>
      <code>
        { value.toFixed(2 ) }{ unit }
      </code> {}
      <Ion.BoundedRangeSlider
      value={value}
      min={0 }
      max={maxValue }
      step={0.25 }
      onIonChange={e => {
        const v = (
          (() => {
            const s = (
              e.detail.value
            )  ;
            if (typeof s === "number" || typeof s === "string") {
              return +s ;
            }
            if (s && (typeof s === "object") ) {
              return s.lower ;
            }
            return s ;
          } )()
        ) ;
        if (typeof v === "number") {
          ;
          onChange({ newValue: v, }) ;
        }
      } }
      style={{
        minInlineSize: `${Math.max(6, (maxValue / 30 ) * 6, ) }em` ,
      } as React.CSSProperties }
      />
      </span>
      </span>
    ) ;
  })
) ;


import { XImg, } from "components/Photocard-D";
import { TwoPhotocardsSpDemo, } from "components/Photocard-D";


export const SdlsdDemo = (
  SS.identity<(
    React.FC
  )>(function SdlsdDemo() {
    const [v, setV,] = (
      React.useState<number>(3, )
    ) ;
    return ( 
      <div>
        <div> 
          <TwoPhotocardsSpDemo />
        </div>
        <div>
        <SecondsOfTimeDurativeSlider 
        value={v}
        onChange={({ newValue, }) => {
          setV(() => newValue ) ;
        } }
        />
        </div>
      </div>
    ) ;
  } )
) ;




