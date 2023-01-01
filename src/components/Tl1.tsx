

/* eslint-disable import/first, @typescript-eslint/no-unused-vars    */

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










// TODO
import { useHtmlElementImperativeHandleAbs as useXImperativeHandle, } from "library/rcs1";


import XBoundarySpecificC from "components/SectionSpecificsB";
const xPointerEventLogAppend = (
  SS.identity((e: React.MouseEvent<SVGGElement> ) => {
    console["log"]("mouse pressed", { ...e }, e.nativeEvent, e.clientX, ) ;
    { 
      const { currentTarget, } = e ; 
      console["log"](currentTarget.transform.baseVal.consolidate()?.matrix ?? null ) ;
      console["log"](currentTarget.getCTM() ?? null ) ;
      const sCtm = (
        (currentTarget).getScreenCTM()
      ) ;
      console["log"]((
        sCtm?.transformPoint({ x: e.screenX, y: e.screenY, }) ?? null
      ) ) ; 
    }
  })
) ;
const XMainContentAndZoomPanToolbarC = (
  ({ main, toolbarContents, } : {
    main: React.ReactElement ;
    toolbarContents: React.ReactElement | null ;
  } ) => (
    <div
    style={{ 
      position: "relative",
    }}
    >
    <div 
    style={{ 
      display: "flex", 
      flexDirection: "column", 
      overflowX: "auto",
    }}
    >
      { main }
    </div>
    <div 
    style={{ 
      marginBlockStart: `-2em`, 
    }}
    >
      { toolbarContents }
    </div>
    </div>
  )
) ;
const useXImplTNow = (() => {
  type Args<Src extends Pick<Performance, "now">> = [
    src: Src ,
    config: (
      {}
      & { periodMillis: number ; }
    ) ,
  ] ;
  const useXImplTNow0 = (() => {
    return (
      function useImplTNow<Src extends Pick<Performance, "now">>(...[performance, { periodMillis, }, ] : (
        Args<Src>
      ) ) {
        const {
          // periodMillis = 3000,
        } : Partial<(
          {} 
        )> = {} ;
        const pInitiallyMillis: ReturnType<typeof performance.now> = (
          React.useMemo(() => (
            performance.now()
          ) , [] )
        ) ;
        ;
        const pEllapsedMillis: ReturnType<typeof performance.now> = (
          RCS.useScan(() => {
            const tNowMillis = (
              performance.now() 
            ) ;
            return (
              tNowMillis - pInitiallyMillis
            ) ;
          } , { intervalMillis: periodMillis, } , )
        ) ;
        ;
        return {
          periodMillis ,
          pInitiallyMillis ,
          pEllapsedMillis ,
        } ;
      }
    ) ;
  } )() ;
  return (
    function useImplTNow<Src extends Pick<Performance, "now">>(...args : Args<Src> ) {
      const {
        // periodMillis = 3000,
      } : Partial<(
        {} 
      )> = {} ;
      const {
        periodMillis ,
        pEllapsedMillis: pEllapsedMillisC ,
      } = (
        useXImplTNow0(...args )
      ) ;
      const pEllapsedMillis = (
        Immutable.Range(0, pEllapsedMillisC, periodMillis, )
        .max()
        ?? 
        -1
      ) ;
      const pEllapsedSecs = (
        pEllapsedMillis / 1000
      ) ;
      ;
      return {
        pNowMillis: pEllapsedMillis ,
        pNowSecs  : pEllapsedSecs   ,
      } ;
    }
  ) ;
} )() ;
export const CmC = (() => {
  interface EtUsrPlay { 
    /**   
     * optionally switches the value of {@link isPlaying}.
     */
    makePlaying: React.Dispatch<React.SetStateAction<boolean> > ;
    /**   
     * is set to "play" ?
     */
    isPlaying: boolean ;
  }
  interface EtAll extends EtUsrPlay {
    /**   
     * the selected *t* *seconds* ; {@link isPlaying }.
     */
    selectedT: number ;
    setSelectedT: React.Dispatch<React.SetStateAction<number> > ;
    /**   
     * 
     */
    rewind: React.DispatchWithoutAction ;
  }
  type UseETC1 = {
    (): EtAll ;
  } ;
  /**   
   * abstraction for
   */
  const useCurrentTAndPlaybackState1A = (
    function useEtImpl(): ReturnType<UseETC1> {
      ;
      const {
        pNowSecs: pNowSecs ,
      } = (
        useXImplTNow(performance, { 
          periodMillis: (
            !(document.hidden === true ) ? 
            2000 : 3000
          ), 
        }, )
      ) ;
      const selectedT = (
        pNowSecs % 0x10
      ) ;
      ;
      return {
        selectedT: selectedT,
        setSelectedT: Object ,
        rewind: Object,
        isPlaying: true ,
        makePlaying: Object ,
      } ;
    }
  ) ;
  const useCurrentTAndPlaybackState1B = (() => {
    type CtrState = { tMillis: number ; } ;
    const main = (
      function useEtImpl(): ReturnType<UseETC1> {
        const {
          periodMillis ,
          maxTSeconds: maxT ,
        } = ((): { periodMillis: number ; maxTSeconds: number ; } => ({
          periodMillis: 125,
          maxTSeconds: 32 ,
        }) )() ;
        const [usrPl, setUsrPl] = (
          React.useState<boolean>(false)
        ) ;
        const [{ tMillis: pTMillis, }, dispatchPTMillisStateAction] = (
          React.useReducer((
            SS.identity<(..._: [CtrState, "advance-if-usr-play" | "t-wraparound" | SetSelectedTimeA | "reset"]) => CtrState >(({ tMillis: pTMillis, }, a, ) => {
              if (a === "advance-if-usr-play") {
                if (usrPl) {
                  return { tMillis: pTMillis + periodMillis , } ;
                } else {
                }
              }
              if (a === "t-wraparound") {
                return { tMillis: pTMillis % (maxT * 1000 ) , } ;
              }
              if (a instanceof SetSelectedTimeA) {
                return { 
                  tMillis: (
                    RCS.applySetStateAction(a.newValueSeconds , pTMillis / 1000 ) 
                    * 1000
                  ) , 
                } ;
              }
              if (a === "reset") {
                return { tMillis: 0, } ;
              }
              return { tMillis: pTMillis, } ;
            } )
          ) , { tMillis: 0, } )
        ) ;
        const advanceIfUsrPlay = (
          RCS.useUpdatedCallback(() => (
            dispatchPTMillisStateAction("advance-if-usr-play")
          ) )
        ) ;
        RCS.useIntervalDispatch({
          stricity: "lowerbounded-recess" ,
          intervalMillis: periodMillis ,
          intervalCallback: advanceIfUsrPlay ,
        }) ;
        const pTSeconds = (
          pTMillis / 1000
        ) ;
        React["useLayoutEffect"](() => {} , [pTSeconds,], ) ;
        const selectedT = (
          pTSeconds % maxT
        ) ;
        ;
        return {
          
          selectedT: (
            selectedT
          ),
          setSelectedT: (
            RCS.useUpdatedCallback((...[e]: (
              Parameters<(
                ReturnType<UseETC1>["setSelectedT"]
              )>
            ) ) => {
              dispatchPTMillisStateAction((
                new SetSelectedTimeA(e )
              )) ;
            } )
          ),
          rewind: (
            RCS.useUpdatedCallback(() => {
              dispatchPTMillisStateAction("reset") ; 
              setUsrPl(false ) ; 
            } )
          ),

          isPlaying: usrPl ,
          makePlaying: setUsrPl , 

        } ;
      }
    ) ;
    class SetSelectedTimeA {
      constructor(public newValueSeconds: React.SetStateAction<number> ,) {}
    }
    return main ;
  } )() ;
  const asRwButtons = (
    function (...[
      {
        isPlaying: usrPlay ,
        makePlaying: setUsrPlay ,
        selectedT ,
        rewind: usrRewind ,
      } ,
    ] : [ReturnType<UseETC1> ] ) {
      return {
        
        playbackRewindBtn1: (
          <Ion.Button 
          shape="round"
          children={(
            <Ion.IonIcon icon={Ion.iconNames.playSkipBack } />
          )}
          onClick={() => usrRewind() }
          />
        ) ,
        
        suspensiveBtn : (
          <Ion.Button 
          shape="round"
          children={(
            <Ion.IonIcon icon={Ion.iconNames.pause } />
          )}
          onClick={() => setUsrPlay(() => false ) }
          />
        ) ,
        resumptiveBtn: (
          <Ion.Button 
          shape="round"
          {...{
            children : (
              <Ion.IonIcon icon={Ion.iconNames.play } />
            ) ,
            onClick: () => (
              setUsrPlay(() => true )
            ) ,
          } }
          />
        ) ,
        
      } ;
    }
  ) ;
  const main = (
    SS.identity<React.FC>(function CmCImpl() {
      const {
        isPlaying: usrPlay ,
        makePlaying: setUsrPlay ,
        selectedT ,
        setSelectedT,
        rewind: usrRewind ,
      } = (
        useCurrentTAndPlaybackState1B()
      ) ;
      ;
      const displayedSelectedT = (
        RCS.useGetupValuePrimitive(+selectedT.toFixed(1), selectedT, )
      ) ;
      const {
        playbackRewindBtn1,
        suspensiveBtn ,
        resumptiveBtn ,
      } = (
        asRwButtons({
          isPlaying: usrPlay ,
          makePlaying: setUsrPlay ,
          selectedT ,
          setSelectedT,
          rewind: usrRewind ,
        })
      ) ;
      const playbackCtrlPanel = (
        <XBoundarySpecificC>
        { ({ asLocal, }) => (
        <p>
          { asLocal((
            <span>
              { playbackRewindBtn1 }
            </span>
          )) }
          { (
            usrPlay ? 
            suspensiveBtn
            : resumptiveBtn
          ) }
          <span
          className={`${ usrPlay ? "playback-btn-marquee" : "" } ` }
          >
          { resumptiveBtn }
          </span>
        </p>
        ) }
        </XBoundarySpecificC>
      ) ;
      ;
      const [viewProperties, sVp] = (
        React.useState<{ zoom: number ; }>({ zoom: 1, })
      ) ;
      const tlView = (
        <div className="TlAInfo" >
          <p>
            selected <i>t</i> : {}
            <code>{displayedSelectedT }</code> {}
          </p>
          <XMainContentAndZoomPanToolbarC 
          {...{

            main: (
              <XPlotC 
              {...{ displayedSelectedT, }} 
              onCursorDoubleClick={() => (
                setUsrPlay((hasBeenSo) => !hasBeenSo )
              ) }
              onTDoubleClick={({ newT, }) => (
                setSelectedT(newT, )
              ) }
              viewProperties={{
                inlineScale: (
                  viewProperties.zoom * 20
                ) ,
              }}
              />
            ) ,
            toolbarContents: (
              <p style={{ writingMode: "sideways-rl", }} >
                <Ion.Button 
                children={(
                  <Ion.IonIcon icon={Ion.iconNames.addCircle } />
                )}
                onClick={() => sVp(s => ({ ...s, zoom: 2 * s.zoom, }) ) }
                />
                <Ion.Button 
                children={(
                  <Ion.IonIcon icon={Ion.iconNames.removeCircle } />
                )}
                onClick={() => sVp(s => ({ ...s, zoom: 0.5 * s.zoom, }) ) }
                />
              </p>
            ) ,

          } }
          />
        </div>
      ) ;
      ;
      const ref1 = (
        useXImperativeHandle()
      ) ;
      return (
        <div
        ref={ref1[1] }
        onBlur={() => { } }
        >
          { (tlView           ) }
          { (playbackCtrlPanel) }
        </div>
      ) ;
    } )
  ) ;
  const XPlotC = (
    SS.identity<(
      React.FC<(
        {} 
        & { 
          displayedSelectedT: number ; 
        }
        & Partial<{ 
          pickupPeriod : number ;
        }>
        & Partial<{ 
          onCursorDoubleClick: React.Dispatch<React.MouseEvent<HTMLElement | SVGElement> > ;
        }>
        & Partial<{
          onTDoubleClick : React.Dispatch<{ newT: number ; }> ;
        }>
        & Partial<{ 
          viewProperties: (
            {}
            & Partial<{ inlineScale : number ; }>
          ) ; 
        }>
      )>
    )>((
      function XPlotCImpl({
        displayedSelectedT: mT,
        pickupPeriod = 0.75 ,
        onCursorDoubleClick = Object ,    
        onTDoubleClick = Object ,
        viewProperties = {} ,
      }) {
        const tlCursorDesign = (
          <g>
          <rect 
          style={{ 
            fill: "white", 
            width: 2 ,  
            height: 20 , 
          }}
          />
          <rect 
          style={{ 
            fill: "red", 
            width: 15 ,  
            height: 3 , 
          }}
          />
          </g>
        ) ;
        const { plRectC: xPlRectC, } = (
          useXPlayback({
            t: mT ,
            pickupPeriod ,
          })
        ) ;
        return (
          <div 
          style={{ 
            display: "flex", 
            // flexDirection: "row", 
            // display: "grid", 
            height: `calc(4 * 2em)`, 
            // overflowX: "visible",
            overflow: "visible",
          }}
          >
            <svg 
            viewBox={`0 0 900 300` }
            children={(
              (({ inlineScale = 20 , } : (
                {}
                & Required<ComponentProps<typeof XPlotCImpl > >["viewProperties"]
              ) ) => {
                const cursorLayer = (
                  <g >
                    <g 
                    style={{ 
                      transform: (
                        `translate(${mT * inlineScale }px, 0px) `
                      ) ,  
                      transition: (
                        `all 0.25s ease-in-out`
                      ) ,
                    }}
                    children={(
                      tlCursorDesign
                    )}
                    onDoubleClick={e => onCursorDoubleClick(e) }
                    />
                  </g>
                ) ;
                // `rulerRalyer`
                const rulerLayer = (() => {
                  const drawFor = (
                    function (...[{ mT, }, payload, ] : [
                      { mT: number ; } ,
                      React.ReactElement ,
                    ] ) {
                      return (
                        <g 
                        style={{ 
                          transform: (
                            `translate(${mT * inlineScale }px, 0px) translate(0px, 12px) `
                          ) ,  
                          transition: (
                            `all 0.25s ease-in-out`
                          ) ,
                        }}
                        children={payload }
                        onDoubleClick={() => { onTDoubleClick({ newT: mT, }) ; } }
                        />
                      ) ;
                    } // TODO
                  ) ;
                  return (
                    <g style={{ filter: `saturate(0) `, }} >
                    { (
                      Immutable.Range(0, 32, pickupPeriod, )
                      .map((mT, i, ) => (
                        <React.Fragment key={i } >
                        { (
                          drawFor({ mT, }, (
                            <g transform="scale(0.5, 0.5) ">
                              { tlCursorDesign }
                            </g>
                          ), )
                        ) }
                        </React.Fragment>
                      ) )
                    ) }
                    { (
                      Immutable.Range(0, 64, 4, )
                      .map((mT, i, ) => (
                        <React.Fragment key={i } >
                        { (
                          drawFor({ mT, }, (
                            <g transform="scale(0.75, 0.75) ">
                              { tlCursorDesign }
                            </g>
                          ), )
                        ) }
                        </React.Fragment>
                      ) )
                    ) }
                    </g>
                  ) ;
                } )() ;
                const plRectLayer1 = (
                  <g >
                    <g 
                    style={{ 
                      transform: (
                        // `translate(${displayedSelectedT * inlineScale }px, 0px) `
                        `scale(${inlineScale }, 1) `
                      ) ,  
                      transition: (
                        `all 0.25s ease-in-out`
                      ) ,
                    }}
                    children={(
                      xPlRectC
                    )} 
                    />
                  </g>
                ) ;
                return (
                  <g 
                  style={{ 
                    transform: `translate(calc(max(0px, ${(mT * inlineScale ).toFixed(3) }px - 25% ) * -1 ), 0px )` , 
                  }}
                  >
                  <g 
                  style={{ 
                    transform: `scale(1, 10 )` , 
                  }}
                  >
                    { plRectLayer1 }
                    { rulerLayer }
                    { cursorLayer }
                    <g 
                    />
                  </g>
                  </g>
                ) ;
              } )({
                ...viewProperties ,
              })
            )}
            style={{
              background: "black",
            }}
            />
          </div> 
        ) ;
      }
    ))
  ) ;
  const useXPlayback = (() => {
    const useXPick = (
      function (...[{ mTFloored, pickupLength, }] : [
        (
          {} 
          & { mTFloored: false | number ; } 
          & { pickupLength: number ; } 
        ) ,
      ] ) {
        React["useLayoutEffect"](() => {
          0 && console["log"]({ mTFloored, }) ;
        } , [mTFloored, ] , ) ;
        return (
          RCS.useDeferredCloseable(() => ({
            close: () => {} ,
          }) , [mTFloored,] , )
        ) ;
      }
    ) ;
    return (
      SS.identity((function useXPlRectCC({  t: mT, pickupPeriod, } : (
        {} 
        & { 
          t: number ; 
        } 
        & { 
          pickupPeriod: number ; 
        } 
      ) ) {
        const mTFloored = (
          Immutable.Range(-0 , mT, pickupPeriod, )
          .max()
          ??
          false
        ) ;
        const {
          //
        } = (
          { ...useXPick({ mTFloored, pickupLength: pickupPeriod, }), }
        ) ;
        if (typeof mTFloored === "number" ) {
          ;
          return {
            plRectC: (
              <g
              style={{ 
                transition: "none", 
                transform: `translate(${mTFloored.toFixed(2) }px, 0px ) ` ,
              }}
              >
              <rect 
              width={(
                // 1E4
                pickupPeriod
              ) }
              height={2 }
              style={{ fill: "yellow", }}
              />
              </g>
            ) ,
          } ;
        } else {
          return {
            plRectC : null ,
          } ;
        }
      } ))
    ) ;
  } )() ;
  return main ;
} )() ;
