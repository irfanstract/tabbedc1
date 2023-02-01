

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

import "./imim.css";










export const XIm1 = (
  SS.identity<(
    React.FC<(
      {} 
      & Required<React.PropsWithChildren>
    ) > 
  )>(function ({ children, }) {
    return (
      <span
      className="SdlsdDemoIXImg "
      style={{ 
        display: `inline-block` ,
        border: `0.1em solid transparent` ,
      }}
      >
        <button
        style={{
          appearance: "none",
          MozAppearance: "none",
          border: "0.1em solid transparent" ,
          background: "transparent" ,
        }}
        >
        <span
        style={{
          display: "inline-flex" ,
          flexDirection: "column",
          // height: `8em` ,
          // aspectRatio: "auto",
          ...((): React.CSSProperties => {
            if (0) {
              return {
                boxShadow: `0 0 1em 0.5em rgba(0 0 0 / 0.5)` ,
                margin: `1em` ,
              } ;
            } else {
              return {} ;
            }
          } )() ,
          border: `${0.75 }em solid white ` ,
          background: "gray",
          minWidth: "6em" ,
          minHeight: "6em" ,
        }}
        >
          { children }
        </span>
        </button>
      </span>
    ) ;
  })
) ;;


export const XImg = (
  ({ children, } : React.PropsWithChildren ) => {
    return (
      <XIm1>
      <svg 
      viewBox="0 0 400 300"
      style={{
        height: `8em` ,
        background: "rgb(0 0 0 )",
      }}
      children={children }
      />
      </XIm1>
    ) ;
  }
) ;


export const TwoPhotocardsSpDemo = (
  () => (
    <span>
    <XImg 
    />
    <XImg 
    children={(
      <rect 
      width={400 }
      height={400 }
      fill="#0080C0"
      />
    )}
    />
    </span>
  ) 
) ;








