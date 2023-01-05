

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ;
import React from 'react';
import * as RCS from "library/rcs1" ;












export const asAtRuleSafeIdent = (
  SS.identity<(prefix: string, suffix?: null | string) => string>((
    function asAtRuleSafeIdent(prefix, suffix = null) {
      return (
        (suffix ? (prefix + "-" + suffix ) : prefix )
        .replace(/\-/g, () => "_") 
      ) ;
    }
  ))
) ;
export { GraphicallyOverlaidC1, } from "components/DivGraphicallyStacked1";
export const SvgWithIncl = (() => {
  type AttachmentalPayloadCtx = (
    { assignedId: string ; }
  ) ;
  type AttachmentalPayload = (
    (ctx: AttachmentalPayloadCtx, ) => React.ReactElement
  ) ;
  interface EWA extends EWA0<[
    main: AttachmentalPayload, 
    options: { assignedId: string ; }, 
  ] , { href: string ; } > {
    
    //
    // withAttachmentAll: {
    //   (...args : [
    //     main: AttachmentalPayload[] , 
    //     options: { assignedIdPrefix: string ; }, 
    //   ] ): null | [{ href: string ; }, React.ReactPortal | React.ReactElement, ] 
    // } ;
    
  } ;
  type MainPayloadCtx = (
    {}
    & (
      EWA0<Parameters<EWA["withAttachment"] > , ReturnType<Required<EWA>["withAttachment1"] > & {} >
    )
    & { componentId: string ; }
  ) ;
  type MainPayload = (
    (ctx: MainPayloadCtx , ) => React.ReactElement
  ) ;
  return (
    SS.identity<(
      React.FC<(
        {}
        & { children : MainPayload ; }
        & Pick<(
          JSX.IntrinsicElements["svg"]
        ) , "style" | "viewBox" >
      )>
    )>(function SvgWithInclCImpl({ 
      children: contentF, 
      viewBox,
      style ,
    }) {
      const ref1 = (
        React.useState<null | SVGElement>(null, )
      ) ;
      const componentId = (
        RCS.useId()
      ) ;
      const withAttachmentImpl = (
        SS.identity<Parameters<typeof contentF>[0]["withAttachment"] >((
          (e, { assignedId, }, ) => {
            const [defs,] = ref1 ;
            ;
            return (
              defs ?
              [
                { href: `#${assignedId }` , } ,
                RCS.DOM.createPortal(e({ assignedId, }), defs,) ,
              ]
              : null
            ) ;
          }
        ))
      ) ;
      const defsRegOptions = (() : (
        {} 
        & Partial<(
          {}
          & { 
            /**   
             * define whether it shall be "copy" or "mirror".
             */
            payloadDeclMode : (
              "copy" | "mirror"
            ) ; 
          }
          & { 
            /**    
             */
            payloadAssumedCoordSpace : (
              {}
              & 
              Required<JSX.IntrinsicElements["clipPath"] >["clipPathUnits"]
            ) ; 
          }
          & { 
            /**    
             * https://stackoverflow.com/a/55840377 . 
             * there's limitation in by-def the capabilities of `clip-path`s, so
             * we needed to make it `mask`s instead
             */
            engine : (
              keyof Pick<JSX.IntrinsicElements, "clipPath" | "mask" >
            ) ; 
          }
        )>
      ) => ({}))() ;
      return (
        <svg 
        id={componentId}
        {...{ viewBox, style, }}
        children={(
          (() => {
            const defsRegOptions1 = (
              ((): Required<typeof defsRegOptions > => ({
                payloadDeclMode: "mirror",
                payloadAssumedCoordSpace: "userSpaceOnUse",
                engine: "mask",
                ...defsRegOptions ,
              }) )()
            ) ;
            const payloadCbArgs = (
              (): Parameters<typeof contentF> => [{
                // TODO
                withAttachment: (main, { assignedId: supposedId0, } ) => {
                  const {  
                    payloadDeclMode ,
                    payloadAssumedCoordSpace, // 
                    engine ,
                  } = defsRegOptions1 ;
                  const c1 = (
                    withAttachmentImpl(main, { assignedId: supposedId0, })
                  ) ;
                  const c2 = (
                    withAttachmentImpl(({ assignedId: supposedId1, }) => {
                      const declaredPayload = (
                        (() => {
                          switch (payloadDeclMode) {
                            case "mirror" :
                              return (
                                <>
                                  <use href={`#${supposedId0 }` } />
                                </>
                              ) ;
                            case "copy" :
                              return (
                                <>
                                  { main({ assignedId: supposedId1 + "1", }) }
                                </>
                              ) ;
                          }
                        })()
                      ) ;
                      if (engine === "clipPath") {
                        ;
                        return (
                          <clipPath 
                          id={supposedId1 } 
                          clipPathUnits={payloadAssumedCoordSpace }
                          >
                          { declaredPayload }
                          </clipPath>
                        ) ;
                      }
                      return (
                        <mask 
                        id={supposedId1 } 
                        maskContentUnits={payloadAssumedCoordSpace }
                        >
                          <rect 
                          // TODO
                          {...{ x: -1E4, y: -1E4, width: 2E4, height: 2E4, } }
                          fill="black"
                          />
                          <g filter={"contrast(0) brightness(3) " } >
                          { declaredPayload }
                          </g>
                        </mask>
                      ) ;
                    } , { assignedId: supposedId0 + "P", } )
                  ) ;
                  return (
                    <A extends [unknown, unknown]>(a: A | null) => a
                  )((
                    c1 ? 
                    [c1[0], (
                      <>
                      { c1 && c1[1] }
                      { c2 && c2[1] }
                      </>
                    ) ] 
                    : null 
                  )) ;
                } ,
                componentId: (
                  componentId
                ) ,
              }, ]
            )() ;
            return (
              <>
              <defs ref={ref1[1] } />
              { contentF(...payloadCbArgs ) }
              </>
            ) ;
          } )()
        ) }
        />
      ) ;
    } )
  ) ;
} )() ;
interface EWA0<Args extends [main: null | {}, options ?: object,], R extends {}> {
  withAttachment : (
    (...args: Args) => null | [R, null | React.ReactPortal | React.ReactElement]
  ) ;
  withAttachment1 ?: (
    (...args: Args) => null | R
  ) ;
  withAttachmentAll1 ?: (
    (...args: (
      Args extends [(infer Main), ...(infer Etc)] ?
      [main: Main[], ...etc: Etc ]
      : never
    )) => null | R
  ) ;
} ;
export const {
  GMeasuringC ,
  useGMeasCRefDemo ,
} = (() => {
  type R = { clientScale: number ; } ;
  return {
    useGMeasCRefDemo: () => (
      React.useCallback((
        function GMeasCRefDemo(v: null | R ): void { 
          console["log"](GMeasCRefDemo.name, v, ) ;
        }
      ) , [] )
    ) ,
    GMeasuringC: (
      React.forwardRef((
        SS.identity<(
          React.ForwardRefRenderFunction<null | R , {} >
        )>(function GMeasuringCImpl({} , clientRef : React.Ref<R | null> ) {
          const ref1 = (
            React.useState<(
              null | SVGGraphicsElement
            )>(null )
          ) ;
          const [refed, _ ] = ref1 ;
          React["useMemo"](() => {
            console["log"]({ refed }) ;
          } , [refed,] ) ;
          const {
            width: refedClientWIdth = null ,
          } = (
            (refed && refed.getBBox() )
            || {}
          ) ;
          React.useImperativeHandle(clientRef, () => (
            (typeof refedClientWIdth === "number") ?
            { clientScale: refedClientWIdth , }
            : null
          ) , [refedClientWIdth ,] ) ;
          return (
            <rect 
            ref={ref1[1] }  
            {...{ width: 1, height: 1, }}
            />
          ) ;
        } )
      ))
    ) ,
  } ;
} )() ;








