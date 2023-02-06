

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
  interface MainPayloadCtx1 extends ExactlyNonNull<(
    {}
    & MainPayloadCtxGraphsAndDefsOps
    & { componentId: string ; }
  )> {}
  interface MainPayloadCtxGraphsAndDefsOps extends Exactly<(
    {}
    & (
      EWA0<Parameters<EWA["withAttachment"] > , ReturnType<Required<EWA>["withAttachment1"] > & {} >
    ) 
  )> {

    asClipped1 : (
      (...args : [
        main: [
          main: React.ReactElement , 
          options: { clippingGraph: React.ReactElement ; } , 
        ] ,
        technicalConfig: { id: string ; } ,
      ] ) 
      =>
      (
        [
          React.ReactElement, 
          ({} & ReturnType<MainPayloadCtxGraphsAndDefsOps["withAttachment"] > )[1], 
        ] 
        | null
      )
    ) ;

    asClippedC : (
      (...a : Parameters<MainPayloadCtxGraphsAndDefsOps["asClipped1"] > ) 
      =>
      (null | (ReturnType<MainPayloadCtxGraphsAndDefsOps["asClipped1"] > & {} )[0] )
    ) ;
    withAttachmentC : (
      (...a : Parameters<MainPayloadCtxGraphsAndDefsOps["withAttachment"] > ) 
      =>
      (null | (ReturnType<MainPayloadCtxGraphsAndDefsOps["withAttachment"] > & {} )[0] )
    ) ;

  } 
  abstract class MainPayloadCtxL implements MainPayloadCtx1 {
    eleeleleeeleeleeleel : 7 = 7 ;

    abstract componentId         : MainPayloadCtx1["componentId"        ] ;
    
    /**   
     * @deprecated
     */
    abstract withAttachment      : MainPayloadCtx1["withAttachment"     ] ;
    /**   
     * @deprecated
     */
    withAttachmentAll1 = undefined ;
    /**   
     * @deprecated
     */
    asClipped1 : (MainPayloadCtx1["asClipped1"]) = (
      // TODO
      (overallContentDesc , { id: overallAssignedId, } ) => {
        const [primaryContent, { clippingGraph: clippingContent1, },] = (
          overallContentDesc
        ) ;
        const clippingGraphDefRef = (
          this.withAttachment(({ assignedId: clipGraphDefAssignedId, }) => (
            <g id={clipGraphDefAssignedId } >
              { clippingContent1 }
            </g>
          ), { 
            assignedId: (
              overallAssignedId + "-clippingGraphDef"
            ) , 
          } )
          || 
          [{ href: "#unresolved", }, null ]
        ) ; 
        return [
          (
            <g
            mask={(
              `url(${clippingGraphDefRef[0].href }P)` 
            )}
            >
              { primaryContent }
            </g>
          ) ,
          clippingGraphDefRef[1] ,
        ] ;
      }
    ) ;
    
    asClippedC = (
      (...a : Parameters<typeof this.asClipped1> ) => {
        const d = (
          this.asClipped1(...a )
          || [null, null]
        ) ;
        return d[0] ;
      }
    ) ;
    withAttachmentC = (
      (...a : Parameters<typeof this.withAttachment> ) => {
        const d = (
          this.withAttachment(...a )
          || 
          [{ href: "#unresolved", }, null]
        ) ;
        return d[0] ;
      }
    ) ;
    
  }
  type MainPayloadCtx = (
    Omit<MainPayloadCtxL, never>
  ) ;
  type MainPayload = (
    (ctx: MainPayloadCtx , ) => React.ReactElement
  ) ;
  type DefsRegConfig = (
        {} 
        & { 
          /**    
           */
          payloadViewBoxSpec : (
            {}
            & 
            Required<JSX.IntrinsicElements["clipPath"] >["clipPathUnits"]
          ) ; 
        }
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
             * https://stackoverflow.com/a/55840377 . 
             * there's limitation in by-def the capabilities of `clip-path`s, so
             * we needed to make it `mask`s instead
             */
            clippingEngine : (
              keyof Pick<JSX.IntrinsicElements, "clipPath" | "mask" >
            ) ; 
          }
        )>
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
      const defsElemRef = (
        React.useState<null | SVGElement>(null, )
      ) ;
      const componentId = (
        RCS.useId()
      ) ;
      const defsRegOptions = (() : DefsRegConfig => ({
        payloadViewBoxSpec: "userSpaceOnUse",
      }))() ;
      return (
        <svg 
        id={componentId}
        {...{ viewBox, style, }}
        children={(
          (function useChildrenX1() {
            const {
              reactPortalMode ,
            } = (() : { reactPortalMode: 1 | 2 ; } => ({
              reactPortalMode: 2 ,
            }) )() ;
            const allDefRefListRef = (
              new (class implements ExactlyNonNull<{}> {

                current !: (
                  Immutable.List<(
                    (
                      ReturnType<MainPayloadCtx["withAttachment"] > & {}
                    )[1]
                  ) >
                ) ;
                
                constructor() {
                  this.current = (
                    Immutable.List()
                  ) ;
                }

              } )
            ) ;
            const iWithAttachmentImpl = (
              SS.identity<Parameters<typeof contentF>[0]["withAttachment"] >((
                (e, { assignedId, }, ) => {
                  const [defs,] = defsElemRef ;
                  ;
                  if (defs) {
                    const p = (
                      RCS.DOM.createPortal(e({ assignedId, }), defs,)
                    ) ;
                    const p1 = (
                      (
                        (...[{ }, ] : [{ } , ]): null | typeof p => {
                          switch (reactPortalMode) {
                            case 1 :
                              return p ;
                            case 2 :
                              (
                                allDefRefListRef.current = 
                                allDefRefListRef.current.push(p, )
                              ) ;
                              return null ;
                          }
                        }
                      )({ })
                    ) ;
                    return [
                      { href: `#${assignedId }` , } ,
                      (() => {
                        return p1 ;
                      } )() ,
                    ] ;
                  } else {
                    return null ;
                  }
                }
              ))
            ) ;
            {
            ;
            const defsRegOptions1 = (
              ((): Required<DefsRegConfig > => ({
                payloadDeclMode: "mirror",
                clippingEngine: "mask",
                ...defsRegOptions ,
              }) )()
            ) ;
            const iWithAttachment = (
              SS.identity<MainPayloadCtx["withAttachment"] >((
                (main, { assignedId: supposedId0, } ) => {
                  const {  
                    payloadDeclMode ,
                    payloadViewBoxSpec, // 
                    clippingEngine: engine ,
                  } = defsRegOptions1 ;
                  const c1 = (
                    iWithAttachmentImpl(main, { assignedId: supposedId0, })
                  ) ;
                  const c2 = (
                    iWithAttachmentImpl(({ assignedId: supposedId1, }) => {
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
                          clipPathUnits={payloadViewBoxSpec }
                          >
                          { declaredPayload }
                          </clipPath>
                        ) ;
                      }
                      return (
                        <mask 
                        id={supposedId1 } 
                        maskContentUnits={payloadViewBoxSpec }
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
                }
              ))
            ) ;
            const payloadCbArgs = (
              (): Parameters<typeof contentF> => [
                new (class MainPayloadCtxImpl extends MainPayloadCtxL {
                  // TODO
                  withAttachment = iWithAttachment ;
                  componentId = componentId ;
                } ),
              ]
            )() ;
            {
            ;
            return (() => {
            ;
            const c = (
              contentF(...payloadCbArgs )
            ) ;
            const {
              current: allDefRefList ,
            } = (
              allDefRefListRef
            ) ;
            return (
              <>
              <>
                <defs ref={defsElemRef[1] } />
                { [...allDefRefList, ] }
              </>
              { c }
              </>
            ) ;
            } )() ;
            }
            }
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








