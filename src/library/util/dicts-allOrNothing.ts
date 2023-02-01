







/**   
 * either 
 * - all properties set
 * - all properties unset
 * 
 * *to avoid surprising behaviours when using this TD, 
 * avoid non-`object`s, and {@link Required make all known properties required and non-`undefined` }*.
 * 
 */
type EitherBothSetOrBothUnset<A extends {} > = (
   globalThis.EitherBothSetOrBothUnset<A>
) ;
namespace EitherBothSetOrBothUnset { ; } // TS-1205
/**   
* exactly one be set and all others be unset.
* 
* consider *frequency and period* as example;
* there's invariant that `freq * period === 1 `.
* to prevent assigning/giving/specifying conflicting values at once, 
* it'd be good to restrict the argumentation/constraints to exactly one of them .
* 
* *to avoid surprising behaviours when using this TD, 
* avoid non-`object`s, and {@link Required make all known properties required and non-`undefined` }*.
* 
*/
type EitherSetAndOthersUnset<A extends {} > = (
   globalThis.EitherSetAndOthersUnset<A>
) ;
const EitherSetAndOthersUnset = {} ; // TS-1205
/**   
* either
* (a) exactly one set, as in {@link EitherSetAndOthersUnset },
* (b) all (left) unset 
*/
type EitherSetOrBothUnset<A extends {} > = (
   globalThis.EitherSetOrBothUnset<A>
) ;
const EitherSetOrBothUnset = {} ; // TS-1205












export {
   EitherBothSetOrBothUnset ,
   EitherSetAndOthersUnset ,
   EitherSetOrBothUnset ,
   // Partial ,
} ;
