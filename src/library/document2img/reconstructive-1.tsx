
/* eslint-disable import/first */




export {} ; // TS-1208

console["log"](import.meta.url, ) ;











/**      
 * some grabbing solutions rely on `HTMLDocument`'s `<foreignObject>`, in which case
 * the relevant properties (including `width` and `height`) could be customised overriding the (otherwise) inferred characteristics.
 * 
 */
type ReconstructedContainerConstraints = (
  {}
  & Partial<Pick<HTMLImageElement, "width" | "height"> >
) ;
namespace ReconstructedContainerConstraints { ; } // TS-1205

export { ReconstructedContainerConstraints , } ;










