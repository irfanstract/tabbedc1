

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
import UndoRedoStateModel from "library/editors/undoable-edit-state/urv";
import { useUndoableEditState, } from "components/UndoableEditorBoundary1";
import * as Ion from "library/useIonicUi1" ;
import * as ReactDraft from "draft-js" ;

import { useIntervalDispatch, } from "library/useIntervalDispatch1";
import { dataUrlFromBlob, } from "library/dataUrlFromBlob";
import usrFileOpen from "components/usrFileOpen";
import { areTwoEditorStatesEqual, } from "library/useDraftEditor12";












type WithSsTypeof<A> = { $$typeof: A ; } ;
type KeyedList<A> = Immutable.OrderedMap<number | string, A > ;
/**   
 * this wrapper becomes important as
 * the built-in {@link Immutable.List } is overloaded hence subject to breaking IDE "rename" actions
 * 
 */
function keyedList<A>(items : A[] ): KeyedList<A> {
  return (
    Immutable.List(items )
    .toOrderedMap()
  ) ;
} 
import { applyStateUpdateAction, applySetStateAction, } from "library/rcs1";
import { completeIonicOrderedMapReorder, } from "library/useIonicReorder1";
import XBoundarySpecificC from "components/SectionSpecificsB";
type XUndoRedoOrEditOf<A extends {} > = (
  never 
  | { newValue ?: never ; type: "undo" | "redo" ; } 
  | { newValue: A ; type : "typing" ; /** `true` implies that the closest undo would be discarded as being insignificant; otherwise, `false`. */ onlyAugments : boolean ; }
) ;
import { 
  useContentStateEditorState1 as useXDraftContentStateEditorState1, 
} from "components/draftc/contentStateEditorState1";
//  
import XModallible from "components/Intimably1";
import XUrlPointedAppletDisplayC from "components/UrlAppletBasic1";
type OMdl = (
  never
  | (WithSsTypeof<"overlay" > & { items: KeyedList<OMdl > ; } )
  | (WithSsTypeof<"sequence"> & { items: KeyedList<OMdl > ; } )
  | {
    [txtType in keyof { text: true ; draftjstxt: true ; } ] : (
      {}
      & WithSsTypeof<txtType> & 
      ( 
        {}
        & Omit<React.CSSProperties, "content"> 
        & { content : {
          text: Required<React.CSSProperties >["content"] ;
          draftjstxt: ReactDraft.RawDraftContentState ;
        }[txtType ] ; }
      ) 
    ) ;
  }["text" | "draftjstxt"]
  | (WithSsTypeof<"embed"> & { src: string ; } )
) ;
// TS-1205
namespace OMdl { 
  ;
}
export { OMdl, } ;
const xFromUsrFilesAsync = (
  async () => {
    ;
    const files1 = (
      await usrFileOpen()
    ) ;
    console["log"]({ files1, }) ;
    const m = (
      await ( 
        files1
        .asyncMap(async (f): Promise<ComponentProps<typeof OfEmbeddedClpC>["value"]> => {
          // TODO
          const d = (
            await dataUrlFromBlob(f, )
          ) ;
          return {
            $$typeof: "embed" ,
            src: d ,
          } ;
        } )
      ) 
    ) ;
    ;
    return (
      m
    ) ;
  }
) ;
/**   
 * editor for some known {@link OMdl } subtypes.
 * 
 */
const OOS = (
  SS.identity<(
    React.FC<(
      {}
      & { value : OMdl ; }
      & { onInput ?: null | React.Dispatch<XUndoRedoOrEditOf<OMdl > > ; }
    )>
  )>(function OverlayOrSqcer({ value: mdl, onInput: onInput = null , }) {
    if (mdl.$$typeof === "sequence") {
      return (
        <OSqcer 
          value={mdl} 
          {...{ onInput: onInput, }} 
        />
      ) ;
    }
    if (mdl.$$typeof === "overlay") {
      return (
        <OOvrl 
          value={mdl} 
          {...{ onInput: onInput, }} 
        />
      ) ;
    }
    if (mdl.$$typeof === "text" || mdl.$$typeof === "draftjstxt") {
      return (
        <OTxtDispl 
          value={mdl} 
          {...{ onInput: onInput, }} 
         />
      ) ;
    }
    if (mdl.$$typeof === "embed") {
      return (
        <OfEmbeddedClpC 
          value={mdl} 
          {...{ onInput: onInput, }} 
         />
      ) ;
    }
    return (
      <div />
    ) ;
  } )
) ;
const OfEmbeddedClpC = (
  SS.identity<(
    React.FC<(
      {}
      & ComponentProps<typeof OOS >
      & { value : WithSsTypeof<"embed"> & OMdl ; }
    )>
  )>(function OfEmbeddedClpC({ value: { src, } , onInput = null , }) {
    const title1 = "img" ;
    const style = (
      SS.identity<React.CSSProperties>({
        /** `height`, noy `block-side` */
        height: `calc(4.5 * 2em )` ,
      })
    ) ;
    return (
      <div>
        <p>Footage</p>
        <div>
        { (
          <XUrlPointedAppletDisplayC 
          {...{ src, title: title1, style, } }
          />
        ) }
        </div>
      </div>
    ) ;
  } )
) ;
const OSqcer = (
  SS.identity<(
    React.FC<(
      {}
      & ComponentProps<typeof OOS >
      & { value : WithSsTypeof<"sequence"> & OMdl ; }
    )>
  )>(function OverlayEditor(psps) {
    ;
    const {
      mdl,
      ls ,
      lsEditor ,
    } = (
      useOOsequencerEditorCProps(psps )
    ) ;
    const amendousToolbar = (() => {
      const { onInput = null } = psps ;
      if (onInput ) {
        const iAppendAll = (
          function (...[m] : [OMdl[] ] ): void {
            ;
            console["log"](`to be added all:` , m, ) ;
            // TODO
            onInput({
              type: "typing" ,
              onlyAugments: false ,
              newValue: (() => {
                const lastKeyOrNull = (
                  (ls.entrySeq().last(null ) || [null, null] )[0]
                ) ;
                const key1 = (
                  // TODO
                  SS.random(30, Number.MAX_SAFE_INTEGER,)
                  .toString()
                ) ;
                const main = (
                  SS.identity<(
                    ComponentProps<typeof OSqcer>["value"]
                  )>({
                    $$typeof: "sequence" ,
                    items: (
                      ls
                      .merge<(typeof m)[number]>((
                        Object.fromEntries((
                          m 
                          .map((v, i, ): [string, typeof v] => (
                            ["" + key1 + "-" + i , v, ]
                          ) )
                        ))
                      ))
                    ) ,
                  })
                ) ;
                console["log"]({ m, main, key1, }) ;
                return main ;
              } )() ,
            }) ;
            ;
          }
        ) ;
        const iFileOpen = (
          async () => {
            const m = (
              await xFromUsrFilesAsync()
            ) ;
            iAppendAll(m) ;
          }
        ) ;
        ;
        return (
          <div>
            <Ion.Button 
            children={`add footage` }
            onClick={() => iFileOpen() }
            />
          </div>
        ) ;
      }
    } )() ;
    return (
      <div>
        <header>
        <p>Sequence</p>
        </header>
        <div>
        { lsEditor }
        </div>
        { amendousToolbar }
      </div>
    ) ;
  } )
) ;
const useOOsequencerEditorCProps = (
  function (p : (
    ComponentProps<(
      typeof OSqcer | typeof OOvrl
    )>
  )) {
    const { value: mdl, onInput: onInput = null, } = p ;
    const ls = (
      mdl.items
    ) ;
    const lsEditor = (
      <OMdlListEditor 
      unordered={true } 
      value={ls}
      onInput={(
        onInput && (
          (e) => {    
            if (e.type === "typing" ) {
              ;
              const { newValue: newList, onlyAugments, } = e ;
              const newValue = (
                SS.identity<(
                  ComponentProps<typeof OSqcer | typeof OOvrl >["value"]
                )>({
                  ...mdl ,
                  items: newList,
                })
              ) ;
              onInput({
                type: "typing" ,
                newValue ,
                onlyAugments ,
              }) ;
            }
          }
        )
      ) } 
      />
    ) ;
    return {
      mdl ,
      ls ,
      lsEditor ,
    } ;
  }
) ;
const OOvrl = (
  SS.identity<(
    React.FC<(
      {}
      & ComponentProps<typeof OOS >
      & { value : WithSsTypeof<"overlay"> & OMdl ; }
    )>
  )>(function OverlayEditor(psps) {
    ;
    const {
      ls ,
      lsEditor ,
    } = (
      useOOsequencerEditorCProps(psps )
    ) ;
    return (
      <div>
        <header>
        <p>Overlay</p>
        </header>
        { lsEditor }
      </div>
    ) ;
  } )
) ;
const OMdlListEditor = (
  SS.identity<(
    React.FC<{ 
      value: KeyedList<OMdl> ; 
      unordered: boolean ; 
      onInput ?: null | React.Dispatch<(XUndoRedoOrEditOf<KeyedList<OMdl> > ) > ;
    }>
  )>(function XLs({ value: ls, unordered, onInput: onAggregateInput = null , }) {
    const asReordered = (
      (...[{ from, to, }] : [{ from: number ; to: number ; }]) => {
        const lsAsEntries = (
          ls
          .entrySeq().toList()
        ) ;
        return (
          lsAsEntries
          .remove(from )
          .insert(to, lsAsEntries.get(from )! )
          .toOrderedMap().mapEntries(e => e[1] )
        ) ;
      }
    ) ;
    const asWithoutNthItem = (
      (i: number ) => (
        ls
        .entrySeq().toList()
        .delete(i )
        .toOrderedMap().mapEntries(e => e[1])
      )
    ) ;
    const rrref = (
      React.useState<null | HTMLIonReorderGroupElement>(null)
    ) ;
    /**    
     * I decided to move the {@link Ion.ReorderGroup `reo.complete(false)` } call out into this {@link React.useLayoutEffect } callback,
     * to avoid flicker/FOUC(s)
     */
    React["useLayoutEffect"](() => {
      rrref[0]?.complete(false ) ;
    }, [ls, ] ) ;
    return (
      <XBoundarySpecificC>
      { ({ asLocal: asHdn, }) => {
        ;
        const {
          ionReorderProps ,
          reordToolbar ,
        } = (function rx1() : {
          ionReorderProps: ComponentProps<typeof Ion.ReorderGroup > ;
          reordToolbar : (ft : { i: number ; } ) => React.ReactElement ;
        } {
          return (
            onAggregateInput ?
            ((): ReturnType<typeof rx1> => {
              const applyReorder = (
                function (...[{ from, to, }] : [
                  { from: number ; to: number ; } ,
                ] ) {
                  ;
                  onAggregateInput(({
                    type: "typing" ,
                    newValue: (
                      asReordered({ from, to, })
                    ) ,
                    /**   
                     * note that *reorders* should be considered *significant*.
                     */
                    onlyAugments: false ,
                  })) ;
                }
              ) ;
              const applyDelete = (
                function (...[{ i, }] : [{ i: number ; }]) {
                  onAggregateInput({
                    type: "typing" ,
                    onlyAugments: false ,
                    newValue: (
                      asWithoutNthItem(i, )
                    ) ,
                  }) ;
                }
              ) ;
              return {
                ionReorderProps: {
                  disabled: !(true) ,
                  onIonItemReorder : (e) => { 
                    {
                      const { from, to, } = e.detail ;
                      applyReorder({ from, to, }) ;
                    }
                  } ,
                } ,
                reordToolbar : ({ i, }) => {
                  const delButn = (
                    <Ion.Button 
                    title={`remove this item` }
                    children={(
                      <>
                      <Ion.IonIcon icon={Ion.iconNames.trash } />
                      <Ion.IonIcon icon={Ion.iconNames.trash } />
                      </>
                    )}
                    color="danger"
                    onClick={() => {
                      applyDelete({ i, }) ;
                      ;
                    } }
                    />
                  ) ;
                  const nudgeBtn = (
                    (...[vl1, ] : [-1 | 1, ] ) => {
                      const { title, iconName, onClick, } = {
                        
                        title: ((): string => {
                          if (vl1 < 0 ) { return ("slide this item up"  ) ; } 
                          if (vl1 > 0 ) { return ("slide this item down") ; } 
                          return "" ;
                        })()  ,
                        iconName: {
                          [-1 ]: (Ion.iconNames.arrowUp  ) ,
                          [ 1 ]: (Ion.iconNames.arrowDown) ,
                        }[vl1 ] ,
                        onClick: () => {
                          const { from, to, } = {
                            from: i ,
                            to: i + vl1 ,
                          } ;
                          applyReorder({ from, to, }) ;
                          ;
                        } ,
 
                      } ;
                      return (
                        <Ion.Button 
                        title={title }
                        children={(
                          <>
                          <Ion.IonIcon icon={Ion.iconNames.ellipse } />
                          <Ion.IonIcon icon={iconName} />
                          </>
                        )}
                        color="secondary"
                        onClick={onClick }
                        />
                      ) ;
                    }
                  ) ;
                  return (
                    asHdn((
                      <span>
                        { nudgeBtn(-1 ) }
                        { nudgeBtn( 1 ) }
                        { delButn }
                      </span>
                    ))
                  ) ;
                } ,
              } ;
            } )()
            : {
              ionReorderProps: { disabled: !false, } ,
              reordToolbar : () => <span /> ,
            }
          ) ;
        } )() ;
        return (
          <Ion.List style={{ zoom: `0.85`, }} >
          <Ion.ReorderGroup
          ref={rrref[1] }
          {...ionReorderProps }
          >
          { (
            ls
            .entrySeq()
            .map(([key, e], i, ) => {
              return (
                <Ion.Item key={key}>
                  <div slot="start" style={{ inlineSize: `min-content`, }}>
                    <Ion.Reorder>
                      { unordered ? null : <>#{i }</> } {}
                      [<code>{key }</code>] {}
                    </Ion.Reorder>
                    { reordToolbar({ i, }) }
                  </div>
                  <Ion.Label> 
                    <OOS 
                    value={e } 
                    {...(
                      onAggregateInput && {
                        onInput: (e) => {
                          if (e.type === "typing"  ) {
                            ;
                            const { newValue: itemNewVal, onlyAugments, } = e ;
                            onAggregateInput({
                              type: "typing" ,
                              newValue: (
                                ls
                                .set(key, itemNewVal )
                              ) ,
                              onlyAugments ,
                            }) ;
                          }
                          if (e.type === "undo" || e.type === "redo" ) {
                            onAggregateInput({ type: e.type, } ) ;
                          }
                        }  ,
                      }
                    ) }
                    />
                  </Ion.Label>
                </Ion.Item>
              ) ;
            } )
          ) }
          <Ion.Item>
            <Ion.Label>
              (that's all )
            </Ion.Label>
          </Ion.Item>
          </Ion.ReorderGroup>
          </Ion.List>
        ) ;
      } }
      </XBoundarySpecificC>
    ) ;
  } )
) ;
const OTxtDispl = (
  SS.identity<(
    React.FC<(
      {}
      & ComponentProps<typeof OOS >
      & { value : (WithSsTypeof<"text"> | WithSsTypeof<"draftjstxt">) & OMdl ; }
    )>
  )>(function OverlayEditor({ value: mdl, onInput = null , }) {
    ;
    const actualC = (
      React.useMemo((): ReactDraft.ContentState => {
        if (mdl.$$typeof === "text") {
          ;
          const { content: c0, } = mdl ;
          return (
            ReactDraft.ContentState.createFromText(c0)
          ) ;
        }
        if (mdl.$$typeof === "draftjstxt") {
          ; 
          const { content: c0, } = mdl ;
          return (
            ReactDraft.convertFromRaw(c0 )
          ) ;
        }
        {
          ;
          console["error"]({ mdl, }) ;
          throw TypeError(`usupported`) ;
        }
      } , [mdl, ] , )
    ) ;
    const style1 = (
      (({ content, ...p } : typeof mdl ) => p )(mdl )
    ) ;
    return (
      <div>
        <header>
        <p>Text Content</p>
        </header>
        <div>
          <Ion.Card>
          <Ion.Title 
          children={(
            <p>
              Some Text ...
            </p>
          )}
          />
          <Ion.CardContent>
          <div   
          style={{
            display: "block",
            minBlockSize: `calc(3 * 2em )` ,
          }}
          >
          <XDraftContentStateEditor 
          {...{
            value: actualC ,

            onInput : (
              onInput ?
              ({ newValue: newValueArgument, onlyAugments, }) => {
                ;
                onInput({ 
                  type: "typing" ,
                  newValue: { 
                    ...mdl, 
                    $$typeof: "draftjstxt", 
                    content: ReactDraft.convertToRaw(newValueArgument, ) , 
                  } , 
                  onlyAugments: onlyAugments ,
                }) ;
              }
              : null
            ) ,
            undoOrRedo: (
              onInput ?
              ({ type: edt, }) => (
                onInput({ type: edt, } )
              )
              : null
            ) ,

            style: {
              ...style1 ,
            },
            
          }}
          />
          </div>
          </Ion.CardContent>
          </Ion.Card>
        </div>
      </div>
    ) ;
  } )
) ;
import { XDraftContentStateEditor, } from "components/draftc/contentStateEditorState1";

export default OOS ;

export const OosDemo = (() => {
  const defaultMdl1 : OMdl = {
    $$typeof: "sequence", 
    items: keyedList<OMdl>([
      {
        $$typeof: "overlay", 
        items: keyedList<OMdl>([
          {
            $$typeof: "text",
            content: "Layer 1 !" ,
          } ,
          {
            $$typeof: "text",
            content: "What does it mean to" ,
          } ,
          {
            $$typeof: "text",
            content: "Layer 3" ,
          } ,
          {
            $$typeof: "overlay", 
            items: Immutable.OrderedMap(), 
          } ,
        ]) , 
      } ,
      {
        $$typeof: "text",
        content: "Hi !" ,
      } ,
      {
        $$typeof: "text",
        content: "What does it mean to" ,
      } ,
      {
        $$typeof: "text",
        content: "do the same thing for days" ,
      } ,
    ]) , 
  } ;
  const useDFromWindow = (() => {
    const w = localStorage as { uiwgwfywtfwfuytfuwtyfwtu1 ?: ReturnType<typeof JSON.stringify > ; } ;
    return (
      function useDFromWindowImpl() {
        const { code = null , } = (
          RCS.useScan(() => ({ code: w.uiwgwfywtfwfuytfuwtyfwtu1, }), { intervalMillis: 500, } )
        ) ;
        const mdl = (
          // TODO
          React.useMemo(() => (
            code ? 
            (() => {
              const descr = (
                JSON.parse(code, (k: string, v) => {
                  if (k === "items") {
                    console["debug"]({ k, v, } ) ;
                    return Immutable.OrderedMap(v, ) ;
                  }
                  return v ;
                } )
              ) ;
              return ( 
                new UndoRedoStateModel<OMdl>({
                  value: descr.value ,
                  undoStack: Immutable.Stack(descr.undoStack) ,
                  redoStack: Immutable.Stack(descr.redoStack) ,
                }, )  
              )  ;
            } )()
            : UndoRedoStateModel.asInitiallyEmpty<OMdl>(defaultMdl1, ) 
          ), [code] )
        ) ;
        return (
          <A extends [value: object, setState: Function]>(a: A) => a
        )([
          React.useDeferredValue(mdl) ,
          RCS.useUpdatedCallback((newValF: React.SetStateAction<UndoRedoStateModel<OMdl> > ): void => {
            const newMdl = (
              RCS.applySetStateAction(newValF, mdl, )
            ) ;
            console["debug"]({ newMdl, mdl, }) ;
            w.uiwgwfywtfwfuytfuwtyfwtu1 = (
              // TODO
              JSON.stringify((
                newMdl
              ), (k: string, v: undefined | null | { [k: string] : null | {} ; } ) => {
                if (v && (v instanceof Object) ) {
                  console["debug"]({ v, }) ;
                  if ("items" in v) {
                    console["debug"]({ k, v, }) ;
                    return (
                      ({ ...v, items: (v.items as Immutable.OrderedMap<unknown, unknown>).entrySeq() })
                    ) ;
                  }
                }
                return v ;
              } )
            ) ;
          } , ) ,
        ]) ;
      } 
    ) ;
  })() ;
  return (
    function OosDemoC() {
      const [undoRedoStacks, sURS ] = (
        // React.useState<UndoRedoStateModel<OMdl> >(UndoRedoStateModel.asInitiallyEmpty<OMdl>(defaultMdl1, ) )
        useDFromWindow()
      ) ;
      const [v, { undo, redo, undoRedoPnl, pushState, } ] = (
        useUndoableEditState<OMdl>(undoRedoStacks, sURS, )
      ) ;
      // TODO
      {
        const c = (
          RCS.useUpdatedCallback(() => v )
        ) ;
        React["useLayoutEffect"](() => {
          ;
          console["log"]({ c, }) ;
        } , [c, ] , )
      };
      {} ;
      return (
        <Ion.Card>
        <Ion.CardContent>
          <p>
            { undoRedoPnl }
          </p>
          <OOS 
          value={v } 
          onInput={(e) => {
            if (e.type === "typing" ) {
              const { newValue, onlyAugments, } = e ;
              pushState(newValue, { onlyAugments, }, ) ;
            }
            if (e.type === "undo" || e.type === "redo" ) {
              const type = e.type ;
              console["log"]({ type, }) ;
              if (type === "undo") { undo() ; }
              if (type === "redo") { redo() ; }
            }
          } }
          />
        </Ion.CardContent>
        </Ion.Card>
      ) ;
    }
  ) ;
} )() ;




