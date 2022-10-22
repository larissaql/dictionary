export default class Words {
  
    name: string
    defition: string
   
  
    constructor(obj: any) {
      const {
        word,
        meanings
      } = obj
  
     
      this.name = word
      this.defition = meanings
    }
  }

