









export default (
  async (...[config = { allowMultiple: true, ifCancelled: "leave-hanging", } ] : [
    config ?: { 
      allowMultiple : boolean ;
      ifCancelled : "leave-hanging" | "return-zero-length" ;
    } ,
  ] ) => {
    ;
    const {
      allowMultiple: shallAllowMoreThanOne,
    } = config ;
    ;
    return (
      await new Promise<File[]>(resolve => {
        ;
        const fb = (
          document.createElement("input")
        ) ;
        /**   
         * weren't this explicitly set, this'd default to something else
         */
        fb.type = "file" ;
        /**   
         * by default only one selection, but
         * we want it to be {@link shallAllowMoreThanOne }
         */
        fb.multiple = (
          shallAllowMoreThanOne
        ) ;
        /**   
         * add the relevant listener.
         */
        fb.addEventListener("change", () => {
          const f0 = (
            (() => {
              const files = fb.files ;
              return files ? Array.from(files ) : null ;
            } )()
          ) ;
          if (f0 ) {
            resolve(f0) ;
          } else {
            //
          }
        } ) ;
        /**   
         * make it truly showing.
         */
        fb.click() ;
      } ) 
    ) ;
  }
) ;





