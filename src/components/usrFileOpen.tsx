

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













import usrFileOpen from "library/usrFileOpen";
/**   
 * 
 * @deprecated
 */
export default usrFileOpen ;
export const FileOpenBtnC = (
  SS.identity<(
    React.FC<(
      {}
      & { onInput : false | React.Dispatch<{ submittedFiles: File[] ; }> ; }
      & Partial<{ allowMultipleItems : boolean ; }>
    )>
  )>(function FileOpenBtnCIMpl({
    onInput: highLevelOnInput ,
    allowMultipleItems = true ,
  }) {
    return (
      <Ion.Button 
      children={"open..." }
      color={"secondary"}
      {...(() : RCS.ComponentProps<typeof Ion.Button> => {
        if (highLevelOnInput) {
          const onClick = (
            async ( ) => {
              const submittedFiles = (
                await (
                  usrFileOpen({
                    allowMultiple: (
                      allowMultipleItems
                    ) ,
                    ifCancelled: (
                      "leave-hanging"
                    ) ,
                  })
                ) 
              ) ;
              highLevelOnInput({
                submittedFiles: submittedFiles ,
              }) ;
            }
          ) ;
          return {
            onClick: onClick ,
          } ;
        } else {
          return {
            disabled: true ,
          } ;
        }
      } )() }
      />
    ) ;
  } )
) ;
export const FileOpenBtnDemoC = (
  function () {
    const [f, setF] = (
      React.useState<File[] >([])
    ) ;
    return (
      <div>
        <p>
          opened files : {}
          <code>{ f.length }</code> {}
        </p>
        <p>
          <label>
            To Open File(s) : {}
            <FileOpenBtnC 
            allowMultipleItems
            onInput={({ submittedFiles, }) => {
              setF(submittedFiles ) ;
            } }
            />
          </label>
        </p>
      </div>
    ) ;
  }
) ;





