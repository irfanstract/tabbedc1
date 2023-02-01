

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from 'react';
import * as RCS from "library/rcs1" ;
import { SvgWithIncl, } from "library/rcsSvg1";
import * as RCSSVG from "library/rcsSvg1";
import CurrentDateTime1 from 'components/CurrentDateTime1';
import { CmC, } from 'components/Tl1';  
import * as Ion from "library/useIonicUi1" ;



export {} ;












       
;
const fsmt = (() => {
  const { 
    SvgWithIncl, 
    GraphicallyOverlaidC1, 
  } = RCSSVG ;
  ;
  const C = (() => {
    const {
      useBgGradientAnimRectElemCssDefsElem1 ,
      useBgGradientAnimRectElemCssDefsElem2 ,
    } = (() => {
      type PR = (
        (ctx: (
          {}
          & { targetElemId: string ; }
          & Required<{ 
            /**   
             * within range `[0 INCLUSIVE, 1 INCLUSIVE]`.
             */
            completionStatus: number ; 
          }>
        ) , ) 
        =>
        {
          /**   
           * {@link React.ReactPortal }
           */
          requiredInject: React.ReactElement ;
        }
      ) ;
      const myColorVar = (
        `--my-color1`
      ) ;
      const myAngleVar = (
        `--my-angle1`
      ) ;
      const {
        animDurationSecs,
      } = (() : { animDurationSecs: number ; } => ({
        animDurationSecs: 8 ,
      }) )() ;
      const main = {
        useBgGradientAnimRectElemCssDefsElem1: (
          SS.identity<PR>((
            function useXgImpl({ 
              targetElemId: bgGradientAnimRectElemId, 
              completionStatus ,
            }) {
              const s1 = (
                <style>
                  { `#${bgGradientAnimRectElemId } {` }
                  { ` ${myColorVar }: #300080 ; ` }
                  { ` background: linear-gradient(90deg, #000080, var(${myColorVar }) 50%, #600080 ) ; ` } 
                  { ` transition: all 1s ease-out ; ` }
                  { ` }` }
                </style>
              ) ;
              const csValue = (
                ((): string => {
                  if (1.00 <= completionStatus ) {
                    return "#800080" ;
                  }
                  if (0.75 <= completionStatus ) {
                    return "#800080" ;
                  }
                  return "#0000A0" ;
                } )()
              ) ;
              return {
                requiredInject: (
                  <>
                  { s1 }
                  <style>
                    { `#${bgGradientAnimRectElemId } {` }
                    { ` transition: all ${animDurationSecs }s ease-out ; ` }
                    { ` transition-property: ${ myColorVar } ; ` }
                    { ` ${myColorVar }: ${ csValue } ; ` } 
                    { ` }` }
                  </style>
                  </>
                ) ,
              } ;
            }
          ))
        ) ,
        useBgGradientAnimRectElemCssDefsElem2: (
          SS.identity<PR>((
            function useXgImpl({ 
              targetElemId: bgGradientAnimRectElemId, 
              completionStatus, 
            }) {
              const csAngleValue = (
                ((): string => {
                  if (0.25 <= completionStatus ) { return "180deg" ; }
                  if (0.12 <= completionStatus ) { return "135deg" ; }
                  if (0.00 <= completionStatus ) { return " 90deg" ; }
                  return "90deg" ;
                } )()
              ) ;
              const csColorValue = (
                ((): string => {
                  if (1.00 <= completionStatus ) { return "rgba(  0 48 160 / 1.0 )" ; }
                  if (0.85 <= completionStatus ) { return "rgba(  0 48 176 / 1.0 )" ; }
                  if (0.70 <= completionStatus ) { return "rgba(  0 48 192 / 1.0 )" ; }
                  if (0.55 <= completionStatus ) { return "rgba( 24 48 208 / 0.5 )" ; }
                  if (0.40 <= completionStatus ) { return "rgba( 48 48 224 / 0.0 )" ; }
                  if (0.00 <= completionStatus ) { return "rgba( 48 48 224 / 0.0 )" ; }
                  return "rgba(48 224 48 / 0)" ;
                } )()
              ) ;
              const s1 = (
                <style>
                  { `#${bgGradientAnimRectElemId } {` }
                  { ` ${myColorVar }: rgba(48 224 48 / 0) ; ` }
                  { ` ${myAngleVar }: 90deg ; ` }
                  { ` background: linear-gradient(var(${myAngleVar }), rgba(0 0 0 / 0), var(${myColorVar }) 99% ) ; ` } 
                  { ` transition: all 1s ease-out ; ` }
                  { ` }` }
                  { `#${bgGradientAnimRectElemId } {` }
                  { ` transition: all ${animDurationSecs }s ease-out ; ` }
                  { ` transition-property: ${ myColorVar }, ${ myAngleVar } ; ` }
                  { ` ${myColorVar }: ${csColorValue } ; ` }
                  { ` ${myAngleVar }: ${csAngleValue } ; ` } 
                  { ` }` }
                  {}
                </style>
              ) ;
              return {
                requiredInject: s1 ,
              } ;
            }
          ))
        ) ,
      } ;
      const xAnimatedElemRule = (
        SS.identity<{
          (...ctx: [animandIdent: string, options: (
            {}
            & { 
              /**   
               * @see {@link Array.join }
               */
              keyframesDefIdentifiers: string ; 
            }
            & { animDurationSecs: number ; }
          )] ): React.ReactElement ;
        }>((animandIdent, { keyframesDefIdentifiers: identifiers, }) => (
          <>
          { `#${animandIdent } {` }
          { ` animation-name: ${identifiers } ;   ` }
          { ` animation-iteration-count: infinite ; animation-duration: ${animDurationSecs }s ; ` }
          { ` }` }
          </>
        ) )
      ) ;
      return main ;
    } )() ;
    type WSA<C extends object> = (
      object & C & { stateAll: C ; }
    ) ;
    const useXState = (() => { 
      type StateAll = (
        { state1: number ; state2: number ; }
      ) ;
      return (
        function useXStateImpl(): (
          {}
          & {
            setState: (
              React.Dispatch<React.SetStateAction<StateAll>>
            ) ;
            stateAll: StateAll ;
          }
          & StateAll
          & {
            stateCtrlElement: React.ReactElement ;
          }
        ) {
          ;
          const [stateAll, setState] = (
            React.useState<StateAll>({ state1: 0, state2: 0, })
          ) ;
          const { state1, state2, } = stateAll ;
          RCS.useIntervalDispatch({
            intervalMillis: 500 ,
            stricity: "lowerbounded-recess" ,
            intervalCallback: () => {
              // TODO
              setState((updatedState) => {
                if (state1 < 1 ) {
                  return { ...updatedState, state1: state1 + 0.1 , } ;
                }
                if (state2 < 1 ) {
                  return { ...updatedState, state2: state1 + 0.1 , } ;
                }
                return { ...updatedState, } ;
              } ) ;
            } ,
          }) ;
          const stateCtrlElement = (
            <span>
            <span>
              <Ion.Button 
              children={"reset"}
              onClick={() => {
                setState(() => ({
                  state1: 0 ,
                  state2: 0 ,
                }) ) ;
              } }
              />
              <span
              style={{ 
                display: "inline-block",
                zoom: 0.75 ,
              }}
              >
                <pre  
                children={JSON.stringify({ state1, state2, }, null, 2) }
                style={{
                }}
                />
              </span>
            </span>
            </span>
          ) ;
          ;
          return {
            //
            setState ,
            stateAll ,
            state1 ,
            state2 ,
            stateCtrlElement ,
          } ;
        }
      ) ;
    } )() ;
    return (
      function FSMT_C() {
        const {
          //
          setState ,
          stateAll ,
          state1 ,
          state2 ,
          stateCtrlElement ,
        } = (
          useXState()
        ) ;
        const topLevelIdent = (
          RCS.useId()
        ) ;
        const bgGradientAnimRectElemId1 = (
          topLevelIdent + "-bgRectAnim1"
        ) ;
        const bgGradientAnimRectElemId2 = (
          topLevelIdent + "-bgRectAnim2"
        ) ;
        const css1 = (
          // TODO
          <>
          { useBgGradientAnimRectElemCssDefsElem1({ targetElemId: bgGradientAnimRectElemId1, completionStatus: state1, }, ).requiredInject }
          { useBgGradientAnimRectElemCssDefsElem2({ targetElemId: bgGradientAnimRectElemId2, completionStatus: state2, }, ).requiredInject }
          </>
        ) ;
        return (
          <>
          <>
          { css1 }
          </>
          <div
          style={{
            ...SS.identity<{ [k: string]: null | {} ; }>({
              // [percentageVar]: 0 ,
            }) ,
          }}
          >
          <p>
            { stateCtrlElement }
          </p>
          { (() => {
            const background = (
              <GraphicallyOverlaidC1>
                <div 
                //
                id={bgGradientAnimRectElemId1 }
                children={"\u00A0"}
                style={{ 
                }}
                />
                <div 
                //
                id={bgGradientAnimRectElemId2 }
                children={"\u00A0"}
                style={{ 
                }}
                />
              </GraphicallyOverlaidC1>
            ) ;
            return (
              <GraphicallyOverlaidC1>
                <div 
                style={{ 
                  filter: [
                    
                    `saturate(0.25) ` ,
                    // `hue-rotate(-60deg) ` ,
                    `brightness(2.0) ` ,
                  ].join(" "), 
                }}
                >
                { background }
                </div>
                <SvgWithIncl
                viewBox={'0 0 600 300' }
                style={{ 
                  // background: `black`, 
                  background: `transparent`, 
                  ...{ } ,
                  perspective: `300px` ,
                }}
                >
                { ({ withAttachment, withAttachmentAll1 = null, componentId: componentId, }) => {
                ;
                const { 
                  ELEMET_WHERE_ROTATING_Y ,
                  KEYFRAMES_ROTATING_Y, 
                } = {
                  ELEMET_WHERE_ROTATING_Y: (
                    `${componentId }-rotating-y`
                  ) ,
                  KEYFRAMES_ROTATING_Y: (
                    RCSSVG.asAtRuleSafeIdent(componentId, "rotating-y")
                  ) ,
                } ;
                return (
                  <>
                  <style>
                    { (() => {
                      ;
                      return (
                        <>
                        { `#${ELEMET_WHERE_ROTATING_Y } {  ` }
                        { ` animation-name: ${KEYFRAMES_ROTATING_Y } ; animation-iteration-count: infinite ; animation-duration: 10s ;  ` }
                        { ` transition: all 1s linear; animation-timing-function: linear; ` }
                        { `}` }
                        { `@keyframes ${KEYFRAMES_ROTATING_Y } {  ` }
                        { `   0% { transform : rotateY(calc(330deg +   0deg ) ) ; } ` }
                        { `  50% { transform : rotateY(calc(330deg + 180deg ) ) ; } ` }
                        { `  75% { transform : rotateY(calc(330deg + 270deg ) ) ; } ` }
                        { ` 100% { transform : rotateY(calc(330deg + 360deg ) ) ; } ` }
                        { `} ` }
                        </>
                      ) ;
                    } )() }
                  </style>
                  <g
                  style={{ 
                    // perspective: `300px` ,
                    transformStyle: "preserve-3d",
                  }}
                  >
                  <g 
                  style={{ 
                    transform: `translate(64px, 64px) ` ,
                    // perspective: `300px` ,
                    transformStyle: "preserve-3d",
                  }}
                  >
                    <g>
                    <g
                    id={ELEMET_WHERE_ROTATING_Y }
                    style={{ 
                      // transform: `rotateY(-35deg)` ,
                      // perspective: `300px` ,
                      transformStyle: "preserve-3d",
                    }}
                    >
                    <text
                    style={{ fontVariant: "all-small-caps", fill: "white", }}
                    >
                      <tspan x={0} y={0} >
                      from small text we get a large text
                      </tspan>
                    </text>
                    </g>
                    </g>
                  </g>
                  </g>
                  </>
                ) ;
                } }
                </SvgWithIncl>
              </GraphicallyOverlaidC1>
            ) ;
          } )() }
          </div>
          </>
        ) ;
      }
    ) ;
  } )() ;
  return <C /> ;
} )() ;

export default (
  fsmt
) ;






