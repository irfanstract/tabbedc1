
/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import Immutable from "immutable";










declare global {

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
      A | { [k in keyof A ] ?: never ; }
      
      /**   
       * every *key* must consistently appear in every *alternative*, for two reasons:
       * - otherwise, the resulting type will be considered to omit the key
       * - to become `[key] ?: never ;`, which is the heart of all these
       */
   ) ; 
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
      /**   
       * every *key* must consistently appear in every *alternative*, for two reasons:
       * - otherwise, the resulting type will be considered to omit the key
       * - to become `[key] ?: never ;`, which is the hart of all these
       */
      { 
         [whichToRequire in keyof A ] : (
            { [k in whichToRequire ] -?: A[k] ; }
            &
            { [k in keyof Omit<A, whichToRequire > ] ?: never ; }
         ) ;
   }[keyof A ]
   ) ; 
   /**   
   * either
   * (a) exactly one set, as in {@link EitherSetAndOthersUnset },
   * (b) all (left) unset 
   */
   type EitherSetOrBothUnset<A extends {} > = (
      EitherSetAndOthersUnset<A> // obviously - allow cases of exact one property set
      | 
      { [k in keyof A ] ?: never ; } // allow cases where none set
   ) ; 
   
   
   
   
   
   
} ;

declare global {
   type Exactly<A> = A ; 
   type ExactlyNonNull<A extends {}> = A ; 
} 

declare global {
   interface Object {
      __proto__ ?: null | {} ;
   }
}
declare global {
   interface Array<T> {
      toImmutableSeq() : Immutable.Seq.Indexed<T> ;
      toImmutableList() : Immutable.List<T> ;
   }
}
Array.prototype.toImmutableSeq = (
   function () {
      return (
         Immutable.Seq(this)
      ) ;
   }
) ;
Array.prototype.toImmutableList = (
   function () {
      return (
         Immutable.List(this)
      ) ;
   }
) ;
;
declare global {
   interface Array<T> {
      reversed() : Array<T> ;
   }
}
Array.prototype.reversed = (
   function () {
      return (
         this
         .map((v, i, src, ) => (
            src[(src.length + -1 ) + -i ]
         ) )
      ) ;
   }
) ;
declare global {
   interface Array<T> {
      appendedAllAsync<E1>(s: AsyncGenerator<E1, void>, ) : Promise<(T | E1)[] > ;
   }
}
Array.prototype.appendedAllAsync = (
   async function <E1,  >(s: AsyncGenerator<E1, void>, ) {
      const addedBuf = new Array<E1>;
      for await (const f of s ) {
         addedBuf.push(f, ) ;
         ;
      }
      ;
      return [...this, ...addedBuf,] ;
   }
) ;
declare global {
   interface Array<T> {
      asyncMap<E1>(s: (v: T, i: number, ) => Promise<E1 >, ) : Promise<(E1)[] > ;
   }
}
Array.prototype.asyncMap = (
   async function<E1, T>(this: Array<T>, s: (v: T, i: number, ) => Promise<E1>, ) {
      return (
         await Promise.all(this.map(s, ) )
      ) ;
   }
) ;
declare global {
   interface ArrayConstructor { 
      unfold<A, S>(v0: A, digest: { (v0: A) : null | [s: A, emit: S, ] ; } ) : S[] ;
   }
}
// Array.unfold<boolean | number | object >(8, (v) => v ) ;
;
declare global {
   interface ReadonlyArray<T> extends RMAE<T, ReadonlyArray<T> > {
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,               ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,     ] ;
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,unknown        ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2   ] ;
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,unknown,unknown]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2,A2] ;
   }
   interface Array<T> extends RMAE<T, Array<T>> {
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,               ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,     ] ;
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,unknown        ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2   ] ;
      map<A2>(this: ReadonlyArray<T> & Readonly<[unknown,unknown,unknown]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2,A2] ;
   }
}
interface RMAE<T, M extends ReadonlyArray<T >> {
   map<A2>(this: M & Readonly<[unknown,               ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,     ] ;
   map<A2>(this: M & Readonly<[unknown,unknown        ]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2   ] ;
   map<A2>(this: M & Readonly<[unknown,unknown,unknown]>, map: (...args: [val: T, i: number, ] ) => A2 ) : [A2,A2,A2] ;
};
const RMAE = {} ; // TS-1205
export { RMAE, } ;

declare global {
   interface Promise<T> {
      xFinally<A2 extends void>(f: () => Promise<A2> ): Promise<T> ;
   }
}
Promise.prototype.xFinally = (
   async function <A2 extends void, T>(f: () => Promise<A2> ): Promise<T> {
      try {
         return (
            await this 
         ) ;
      } finally {
         await f() ;
      }
   }
) ;

declare global {
   interface Number {
      toDigits<N extends L0To64, >(n: N, ): string ;
   }
}
Number.prototype.toDigits = (
   function (n: number) {
      // TODO
      return (
         this
         .toFixed()
         .padStart(n, "0", )
      ) ;
   }
) ;
import type { L0To64, } from "library/util/l16";
const L0To64 = {} ; // TS-1205
export { L0To64, } ;





