

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from 'react';
import * as RCS from "library/rcs1" ;












export {} ; // TS-1208


export const GraphicallyOverlaidC1 = (
  ({ children: payload, } : React.PropsWithChildren ) => {
    const topLevelIdent = (
      RCS.useId()
    ) ;
    return (
      <div>
      <div 
      id={topLevelIdent }
      style={{
        //
        height: `calc(10 * 2em )`, 
        position: "relative",
        overflow: "hidden",
      }}
      >
        <style>
          { `#${topLevelIdent } > * { display: block ; } ` }
          { `#${topLevelIdent } > *:not(:nth-child(1)) { position: absolute ; inset-block: 0 ; inset-inline: 0 ;  } ` }
          { `#${topLevelIdent } > *:nth-child(1) { position: relative ; } ` }
        </style>
        <div 
        //
        children={"\u00A0"}
        style={{
          display: "block",
          position: "relative",
          minBlockSize : `calc(10 * 2em )`, 
          minInlineSize: `calc(10 * 2em )`, 
        }}
        />
        { payload }
      </div>
      </div>
    ) ;
  }
) ;