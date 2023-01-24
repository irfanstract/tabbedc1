

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from 'react';
import * as RCS from "library/rcs1" ;
import { SvgWithIncl, } from "library/rcsSvg1";
import * as RCSSVG from "library/rcsSvg1";
import * as Ion from "library/useIonicUi1" ;



export {} ;













const xpxs = (
  <SvgWithIncl
  viewBox={'0 0 600 300' }
  style={{ 
    height: `calc(10 * 2em )`, 
    background: `black`, 
    ...{ } ,
  }}
  > 
  { ({ 
    
    //
    withAttachment, 
    withAttachmentAll1 = null, 
    //
    withAttachmentC ,
    asClippedC ,
    
    //
    componentId: componentId, 

  }) => (
  <React.Fragment>
  { (
    /**   
     * all these nasty hackish markup is due to implement CSS Animations and Transitions inline.
     * separate `.css` file and `import`ing it would not be sufficiently portable, so instead
     * we define all these in these inline `<style>`s .
     * 
     */
    (() => {
      ;
      const hoverStatePwVar = "--em";
      return (
        <React.Fragment>
        <style>
          { `#${componentId } *       { } ` }
          { `#${componentId }       { ${hoverStatePwVar }: 0 ; } ` }
        </style>
        { ((...[{ kfIdent, }] : [
          { kfIdent: string ; } ,
        ] ) => (
          <style> 
            { `#${componentId }:hover { ` }
            { `  animation-name: ${kfIdent } ; ` }
            { `  animation-duration: 5s ; animation-iteration-count: infinite ;` }
            { `  animation-timing-function: linear ; ` }
            { `}` }
            { `@keyframes ${kfIdent } { ` }
            { `    0% { ${hoverStatePwVar }:   0   ; } ` }
            { `  100% { ${hoverStatePwVar }:   2   ; } ` }
            { `}` }
          </style>
        ) )({ kfIdent: RCSSVG.asAtRuleSafeIdent(componentId, "em-anim") , }) }
        { (() => {
          const kfIdent = (
            RCSSVG.asAtRuleSafeIdent(componentId, "bwspin-anim")
          ) ;
          return (
            <style>
              { `#${componentId }-bwspin { ` }
              { `  animation-name: ${kfIdent } ; ` }
              { `  animation-duration: 15s ; animation-iteration-count: infinite ;` }
              { `  animation-timing-function: linear ; ` }
              { `}` }
              { `@keyframes ${kfIdent } { ` }
              { `    0% { transform:   rotateY(calc(0deg +   0deg ) )   ; } ` }
              { `  100% { transform:   rotateY(calc(0deg + 360deg ) )   ; } ` }
              { `}` }
            </style>
          ) ;
        } )() }
        </React.Fragment>
      ) ;
    } )()
  ) }
  { (() => {
    const xcm = (
      <A extends { 
        [k: string]: (
          (ReturnType<typeof withAttachment> & {} ) extends [infer V1, infer V2] ? 
          [V1, V2 | null,] 
          : never 
        ) ; 
      }>(a: A, ) => a
    ) ;
    const { 
      gradAttachment1C,  
    } = ({
      
      gradAttachment1C: (
        withAttachmentC(({ assignedId, }) => (
          <linearGradient id={assignedId } direction={`0deg`}> 
          <stop offset={`${  0}%`} stop-color="#0000C0" />
          <stop offset={`${100}%`} stop-color="#8000C0" />
          </linearGradient>
        ) , { assignedId: "grad3455", } , )
        || 
        [{ href: "#unresolved", }, null ]
      ) ,

    }) ;
    const {
      simpleCircleDef1C  
    } = ({
      simpleCircleDef1C: (
        withAttachmentC(({ assignedId, }) => (
          <circle 
          id={assignedId }
          {...{ cx: 64, cy: 64, r: 32, }} 
          style={{ fill: "cyan", }} 
          />
        ) , { assignedId: "simpleCircle", } )
        || 
        [{ href: "#unresolved", }, null ]
      ) ,
    }) ;
    const {
      xBwTxtDefC ,
    } = ({
      xBwTxtDefC : (
        withAttachmentC(({ assignedId, }) => {
        ;
        const main = (
          <g >     
          <g
          style={{
            transform: ( 
              `rotate(calc(var(--em ) * 180deg ) ) `
            ), 
            transition: ` all 3.5s ease-out ` ,
          }}
          >
          <g
          style={{
            transform: (
              // `translate(0px, calc((-5 * var(--em ) ) * 1px ) ) `
              // `rotate(calc(var(--em ) * 180deg ) ) `
              `scale(calc(1 / 32 ) )`
            ), 
          }}
          >
          <text 
          >
            <tspan
            {...{ x: 0, y: 0, } } 
            {...{ textLength: 32, fontSize: 32, } } 
            >
            BW
            </tspan>
          </text>
          </g>
          </g>
          </g>
        ) ;
        return (
          <g id={assignedId }>    
          { (
            asClippedC([
              main ,
              { clippingGraph: (
                <g transform="scale(1, -1) " >
                <rect 
                {...{ width: 512, height: 512, } }
                />
                </g>
              ) , } ,
            ] , { id: "xBwLogoDefImpl" } )
            || <></>
          ) }
          </g>
        ) ;
        } , { assignedId: "xBwLogoDef", } )
        || 
        [{ href: "#unresolved", }, null ]
      ) ,
    }) ;
    const { 
      pattern1,
    } = xcm({
      
      pattern1 : (
        withAttachment(({ assignedId }) => (
          <g
          id={assignedId }
          style={{  
            fill: `url(${gradAttachment1C.href }) ` ,
          }}
          >
          { (
            (
              Immutable.Seq([...{
                *[Symbol.iterator]() {
                  const { width, height, } = {
                    width: 30,
                    height: 20,
                  } ;
                  for (const x of Immutable.Range(0, 600, width) ) {
                    for (const y of Immutable.Range(0, 150, height) ) {
                      yield (
                        <A extends {}>(a: A & {
                          offset: [number, number] ,
                          size: [number, number] ,
                        } ) => a
                      )({ offset: [x, y, ], size: [width + -4, height + -4, ], }) ;
                    } 
                    ;
                  }
                }
              }, ]).toList().push({ offset: [225, 75,] , size: [150, 150,] , })
              .map(({ offset: [x, y], size: [width, height,], }, i ) => (
                <React.Fragment key={i}>
                { ((): React.ReactElement => {
                  switch (((): number => 1 )()) {
                    case 1 :
                      return (
                        <g
                        style={{
                          transform: (
                            `translate(${x }px, calc(${y + height }px ) )  ` 
                          ), 
                        }}
                        >
                        <g
                          id={`${componentId }-bwspin` }
                          style={{ 
                          }}
                        >
                          <g
                          style={{
                            transform: (
                              `  scale(${width}, ${height}) ` 
                            ), 
                          }}
                          >
                            <use 
                            href={`${xBwTxtDefC.href }` }
                            />
                          </g>
                        </g>
                        </g>
                      ) ;
                  }
                  return (
                    <rect 
                    {...{ x, y, width, height, } } 
                    />
                  ) ;
                } )() }
                </React.Fragment>
              ) )
            )
          ) }
          </g>
        ) , { assignedId: "pattern3460", } )
        || 
        [{ href: "#unresolved", }, null ]
      ) 
      
    }) ;
    const rect3 = (
      withAttachment(({ assignedId, }) => (
        <g id={assignedId } >
          <g
          mask={(
            // `url(${pattern1[0].href }P)` 
            // `url(${simpleCircleDef1[0].href }P)` 
            `url(${pattern1[0].href }P)` 
          )}
          >
            <rect
            {...{ width: 600, height: 300, }}
            fill={`url(${gradAttachment1C.href })` }
            />
          </g>
        </g>
      ) , { assignedId: "gr3461", } )
      || 
      [{ href: "#unresolved", }, null ]
    ) ;
    return (
      <>
      <g>
        <g style={{ cursor: "pointer", }}>
        <use href={`${rect3[0].href }` } width="100%" height={"100%"} />
        </g>
      </g>
      <>
      { (pattern1        )[1] }
      { (rect3           )[1] }
      </>
      </>
    ) ;
  })() }
  </React.Fragment>
  ) }
  </SvgWithIncl>
) ;
export default (
  xpxs
) ;








