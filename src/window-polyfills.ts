
/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

/**   
 * this TS/TSX file is to be `import`ed by `src/index.tsx`.
 * this TS/TSX file is intended to make relevant polyfills to the built-in obj(s).
 * 
 */
import Immutable from "immutable";








/**   
 * FOR DEVS :
 * DO NOT REMPVE THIS IMPORT because
 * doing so defeats the purpose of this module !!!
 */
import {
   L0To64 ,
   RMAE ,
} from "library/global/general" ;

/**   
 * fix for browser-level bugs for {@link SVGGraphicsElement}
 * 
 * the updated specification specifies the return-values to be {@link DOMMatrix}, but
 * in practice these two methods gave {@link SVGMatrix }es instead .
 * 
 */
{
   console["log"](SVGMatrix.prototype.__proto__ ) ;
   const polyfilled1 = (
      function <Args extends unknown[]>(method: (this: SVGGraphicsElement, ...argumentes: Args ) => (SVGTransform | DOMMatrix | null ) ) {
         const newImpl = (
            function xxGetSvgMatrix(this: SVGGraphicsElement , ...args: Args ): DOMMatrix | null { 
               const originalReturnValue = (
                  method.call(this, ...args )
               ) ;
               console["log"]({ this: this, args, v0: originalReturnValue, }) ; 
               return (
                  originalReturnValue ?
                  (
                     (originalReturnValue instanceof DOMMatrix) ?
                     originalReturnValue
                     : (() => {
                        /** {@link v0.matrix } spuriously returned nulls */
                        return (
                           Object.assign(new DOMMatrix(), originalReturnValue )
                        ) ;
                     } )()
                  )
                  : null
               ) ;
            }
         ) ;
         try {
            ;
            // newImpl.name = (
            //    method.name + "Rechecked"
            // ) ;
         } catch (z) {
            console["error"](`unable to rename the function. will leave it unnamed or with its default name, which could make things harder.`, `the exception:`, ) ;
            console["info"](z, ) ;
         }
         return (
            newImpl
         ) ;
      }
   ) ;
   try {
      const { 
         getCTM,
         getScreenCTM,
      } = SVGGraphicsElement.prototype ;
      SVGGraphicsElement.prototype.getCTM       = polyfilled1(getCTM      ) ;
      SVGGraphicsElement.prototype.getScreenCTM = polyfilled1(getScreenCTM) ;
   } catch (z) {
      console["error"](z, ) ;
   }
}






export {} ; // TS-1208
