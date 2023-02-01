

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

import {
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
} from "library/util-all-1" ;
import SS from "lodash" ;
import Immutable from "immutable";
import * as Collections from "library/util-immutable-datastructure" ;
import * as Math2 from "library/util-math-max" ; 









export const dataUrlFromBlob = (
  SS.identity<(src: Blob) => Promise<string> >((
    async (file) => (
      "data:"
      + file.type
      + ";base64"
      + ","
      + (
        // RAW-TO-BASE64
        btoa((
          [...new Uint8Array(await file.arrayBuffer() ) ]
          .map(byte => String.fromCharCode(byte) )
          .join("")
        ))
      )
    )
  ))
) ;