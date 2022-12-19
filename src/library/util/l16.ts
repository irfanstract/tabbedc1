

export {} ; // TS-1208





export type L4A = [1,2,3,4] ;
export type L0To4A<A = 1> = (
   never
   | [] | [A] | [A, A] | [A, A, A] | [A, A, A, A]
);
export type L0To4 = (
   L0To4A["length"]
) ;
export type L0To16A = (
   never 
   | [...L0To4A ]
   | [...L4A, ...L0To4A ]
   | [...L4A,...L4A, ...L0To4A ]
   | [...L4A,...L4A,...L4A, ...L0To4A ]
) ;
export type L0To16 = L0To16A["length"] ;
export type L16A = [...L4A,...L4A,...L4A,...L4A];
export type L0T064A = (
   never
   | [...L0To16A]
   | [...L16A, ...L0To16A ]
   | [...L16A,...L16A, ...L0To16A ]
   | [...L16A,...L16A,...L16A, ...L0To16A ]
) ;
export type L0To64 = L0T064A["length"] ;

