

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
import React from "react";
import * as RCS from "library/rcs1" ;
import { ComponentProps, } from "library/useExistingComponentPropTypes";
import * as Ion from "library/useIonicUi1" ;










export default (
  SS.identity<(
    React.FC<(
      {}
      & { children : (...args: [0 | 1, { expand : () => void ; }, ] ) => React.ReactElement ; }
    )>
  )>(function XModallible({ children: payload, }) {
    const [s, initS] = (
      React.useState<null | HTMLIonModalElement >(null, )
    ) ;
    const expand: { (): void ; } = (
      s ? 
      (() => { s.present() ; } )
      : Object
    ) ;
    return (
      <>
      <div style={{ display: "inline-flex", flexDirection: "column-reverse", }}>
        <div>
        { (
          payload(0, {
            expand: expand ,
          }, )
        ) }
        </div>
        <p> 
          <Ion.Button 
          children={(
            <Ion.IonIcon icon={Ion.iconNames.search } />
          )}
          onClick={() => expand() }
          />
        </p>
      </div>
      <Ion.IonModal  
      ref={initS }
      // isOpen={s }
      // canDismiss={async () => false }
      canDismiss={true }
      // onWillDismiss={() => setS(() => false ) }
      >
      { (
        payload(1, {
          expand: () => {
            console["warn"](`modals can't request to open itself.`) ;
          } ,
        }, )
      ) }
      </Ion.IonModal>
      </>
    ) ;
  } )
) ;

