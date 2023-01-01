

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













export const xpxs = (
  <SvgWithIncl
  viewBox={'0 0 600 300' }
  style={{ 
    height: `calc(10 * 2em )`, 
    background: `black`, 
    ...{ } ,
  }}
  > 
  { ({ withAttachment, withAttachmentAll1 = null, componentId: cmponentId, }) => (
  <React.Fragment>
  <style>
    { `#${cmponentId } *       { } ` }
    { `#${cmponentId }       { --em: 0 ; } ` }
    { `#${cmponentId }:hover { animation-name: em_anim ; animation-duration: 5s ; animation-iteration-count: infinite ; } ` }
    { `@keyframe em_anim { 0% { --em: 0 ; } 100% { --em: 2 ; } } ` }
  </style>
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
      gradAttachment1,  
    } = xcm({
      
      gradAttachment1: (
        withAttachment(({ assignedId, }) => (
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
      simpleCircleDef1
    } = xcm({
      simpleCircleDef1: (
        withAttachment(({ assignedId, }) => (
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
      xBwTxtDef ,
    } = xcm({
      xBwTxtDef : (
        withAttachment(({ assignedId, }) => (
          <g id={assignedId }>     
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
        ) , { assignedId: "xBwLogoDef", } )
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
            fill: `url(${gradAttachment1[0].href }) ` ,
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
                            `translate(${x }px, calc(${y + height }px ) ) scale(${width}, ${height}) ` 
                          ), 
                        }}
                        >
                          <use 
                          href={`${xBwTxtDef[0].href }` }
                          />
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
            fill={`url(${gradAttachment1[0].href })` }
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
      { (simpleCircleDef1)[1] }
      { (gradAttachment1 )[1] }
      { (pattern1        )[1] }
      { (rect3           )[1] }
      { (xBwTxtDef       )[1] }
      </>
      </>
    ) ;
  })() }
  </React.Fragment>
  ) }
  </SvgWithIncl>
) ;







