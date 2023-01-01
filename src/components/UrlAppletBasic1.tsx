

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "library/util-all-1" ;
import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import * as Ion from "library/useIonicUi1" ;












import XModallible from "components/Intimably1";



const XUrlPointedAppletDisplayC = (
  SS.identity<(
    React.FC<(
      {} 
      & { src: string ; } 
      & { title: string ; }
      & { style ?: React.CSSProperties ; }
    )>
  )>(function XUrlPointedAppletDisplayCImpl({
    src ,
    title: title1 ,
    style = {} ,
  }) {
    return (
      // is "data:image/yyy" ?
      src.match(/^data\:image\//i) ? 
      <XModallible>
      { (level, { expand, } , ) => {
        if (level === 0 ) {
          return (
            <span style={{ display: "flex", flexDirection: "column-reverse", }}>
            <button 
            children={(
              <img 
              src={src }
              style={style }  
              />
            )}
            onClick={() => expand() }
            />
            { (
            <a target={"_blank"} href={src } download={title1 } >
              <code>{title1 }.jpg</code>
            </a>
            ) }
            </span>
          ) ;
        }
        return (
          <img 
          src={src }
          />
        ) ;
      } }
      </XModallible>
      : 
      <XModallible>
      { (level, { expand, }, ) => (
        <video 
        controls
        src={src } 
        style={style }
        />  
      ) }
      </XModallible>
    ) ;
  })
) ;


export default XUrlPointedAppletDisplayC ;












