

export {} ; // ts(2669)








declare global {
  interface AudioNode {
    connect(dest: AudioNode) : AudioNode ;
    connect(dest: AudioNode | AudioParam) : void | null | object | AudioNode ;
  }
}







