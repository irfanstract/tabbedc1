

/* eslint-disable import/first */

import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "library/util-all-1" ;
import SS from "lodash" ;
import { Seq, List,   } from "immutable";
import { Range, } from "immutable";
import { Stack, } from "immutable";
import {  Map,  } from "immutable";
import {   Set, } from "immutable";
import { SortedMap, } from "library/util-immutable-datastructure";
import { SortedSet, } from "library/util-immutable-datastructure";
















/**
 * Babel(ify) will ignore and discard this `import type` anyway.
 */
import type { ReconstructedContainerConstraints, } from "library/document2img/reconstructive-1";



/**    
 * 
 * @see https://web.archive.org/web/20160625111122/https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas 
 */
export const {
  documentNodeAsSvgStandaloneCode ,
  documentNodeAsBltToSvg ,
} = (() => {
  const newTemplate1 = (
    (...[options ,] : [
      (
        {}
        & (
          {}
          & { width: number ; height: number ; }
          & Partial<{ upscaling : number ; }>
        )
      ) ,
    ] ) : [
      HTMLElement ,
      {
        /**    
         * id to, the designated paste area
         */
        containerId : string ;
        /**    
         * id to, the element where the font-style attrib(s) shall go to
         */
        fontStyleBndryId : string ;
      } ,
    ] => {
    ;
    const {
      width = 500 ,
      height = 1000 ,
      upscaling = 1.5 ,
    } = options ;
    ;
    const id = `elem986737535256` ;
    const d0 = (
      document.createElement("div")
    ) ;
    d0.innerHTML = (
      /**    
       * the attrib `xmlns` would normally be expected for standalone SVG file(s) .
       * however, 
       * in case of `divElem.innerHTML = "<svg ....>...</svg>" `,
       * `innerHTML` will take care of that .
       * 
       * for simplicity with external tooling,
       * need to specify its `background` and `color`
       * 
       * `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">`
       * 
       */
      `<svg width="${upscaling * width }" height="${upscaling * height }">` +
      `<foreignObject width="100%" height="100%">` +
      `<div id=${id }FNT style="background: white ; color: black ; zoom : ${upscaling } ;" >  ` +
      `<div id=${id } ></div> ` +
      ` </div> ` +
      `</foreignObject>` +
      '</svg>'
    ) ;
    return [
      d0 ,
      {
        containerId: id ,
        fontStyleBndryId: id + "FNT" ,
      } ,
    ] ;
    }
  ) ;
  const gcsWidthAndHeightPixels = (
    (...[gcs1,] : [CSSStyleDeclaration, ] ) => {
      // TODO
      return {
        width:  Math.max(( 50), +((gcs1.width ).match(/[\-0-9\.eE]+/g )?.[0] ?? "0" ) ) ,
        height: Math.max(( 50), +((gcs1.height).match(/[\-0-9\.eE]+/g )?.[0] ?? "0" ) ) ,
      } ;
    }
  ) ;
  const main = {

    documentNodeAsSvgStandaloneCode : (
      function (...args1 : (
        Parameters<typeof getCaptureBlitSupp1>
      ) ) {
        // const [] = args ;
        ;
        const {
          doBlit ,
          bufferdocSerToXmlString ,
        } = (
          getCaptureBlitSupp1(...args1 )
        ) ;
        {
          doBlit() ;
          return (
            bufferdocSerToXmlString()
          ) ;
        }
      }
    ) ,

    /**   
     * this is to be 
     * a reform to {@link documentNodeAsSvgStandaloneCode } which 
     * enable repeated usages with the init only happening once
     * 
     */
    documentNodeAsBltToSvg : (
      (...a: Parameters<typeof getCaptureBlitSupp1> ) => (
        getCaptureBlitSupp1(...a)
      ) 
    ) ,
    
  } ;
  const getCaptureBlitSupp1 = (
    function (...a : [
      Element, 
      (
        {} 
        & Partial<{ 

          /**  
           * some grabbing solutions rely on `HTMLDocument`'s `<foreignObject>`, in which case
           * the relevant properties (including `width` and `height`) could be customised overriding the (otherwise) inferred characteristics.
           * 
           */
          reconstructedContainerProperties: (
            ReconstructedContainerConstraints
          ) ; 
          
        }>
        & Partial<{

          /**    
           * this property assumes that setting-up of the font-styles were based on (re)assigning an entry in the `style`.
           * there are 2-to-4 different properties to choose one from.
           */
          fontStylePredefMode : (
            keyof Pick<CSSStyleDeclaration, "font" | "fontFamily" | "fontWeight" | "fontSize" >
          ) ;
  
        }>
      ) ? ,
    ] ) {
      const [
        srcNode, 
        { 
          reconstructedContainerProperties: reconstructedContainerSpec = {}, 
          fontStylePredefMode = "font" , 
        } = {}, 
      ] = a ;
      ; // TODO
      const dmSerialiser = (
        (new XMLSerializer)
      ) ;
      // const sAsHtml = (
      //   s.outerHTML
      // ) ;
      const gcs1 = (
        getComputedStyle(srcNode, )
      ) ;
      const gcsWhp = (
        gcsWidthAndHeightPixels(gcs1, )
      ) ;
      console["debug"]({
        gcsSize: [gcs1.width, gcs1.height, ] ,
        gcsWhp ,
      }) ;
      const [d0, { containerId: pastingDestId, fontStyleBndryId, }, ] = (
        newTemplate1({
          width  : ({ ...gcsWhp, ...reconstructedContainerSpec }).width  ,
          height : ({ ...gcsWhp, ...reconstructedContainerSpec }).height ,
        })
      ) ;
      const initFontStyle = (
        () => void (
          d0.querySelector<HTMLElement | SVGElement>(`#${fontStyleBndryId }`)!.style[fontStylePredefMode] = 
          getComputedStyle(document.querySelector("#root") || document.body , )[fontStylePredefMode]
        )
      ) ;
      const doBlit = () => {
        const dest = (
          d0.querySelector(`#${pastingDestId }`)!
        ) ;
        /**    
         * an alternative would be to stick to `s.outerHTML`, but
         * the difference (of the overheads) can be significant
         * 
         */
        {
          /**    
           * needs explicit clearing since
           * it might have already been used before
           * 
           */
          dest.innerHTML = "" ;
          dest.appendChild((
            srcNode.cloneNode(true, )
          ), ) ;
        }
        /**    
         * with `<style>`s left intact, 
         * browsers refused to render the whole SVG
         */
        (
          Array.from(dest.querySelectorAll("style, script") ) 
          .forEach(e => e.remove() )
        ) ;
      } ;
      const bufferdocSerToXmlString = () => {
        ;
        const serielend2 = (
          d0.querySelector("svg")!
        ) ;
        console["debug"]({
          s: srcNode ,
          sSnapshot: srcNode.cloneNode(true, ) ,
          serielend2 ,
        }) ;
        // (new XMLSerializer)
        return (
          dmSerialiser.serializeToString(serielend2 )
        ) ;
      } ;
      ;
      initFontStyle() ;
      ;
      return {
        
        /* BLITTING */

        /**   
         * attempt to render clone of the src node into the buffernode.
         */ 
        doBlit ,

        /* READING FROM THE BUFFERDOC */

        /**    
         * serialse from the buffernode, to standalone SVG code (ie SVG with the normally-necessary XMLNS d ).
         */
        bufferdocSerToXmlString ,

      } ;
    }
  ) ;
  return main ;
})() ;










