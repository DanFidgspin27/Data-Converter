const chai = window.chai
const expect = chai.expect

//Test TextToASCII Function
describe('TextToASCII', () => {
  it('Plain Text converted to ASCII', () => {
    expect(TextToASCII("Hi")).to.deep.equal("72 105 ")
  
  })
})

//Test TextToHex Function
describe('TextToHex', () => {
    it('Plain Text converted to Hex', () => {
      expect(TextToHex("Hi")).to.deep.equal("48 69 ")
    
    })
  })

//Test TextToBinary Function  
describe('TextToBinary', () => {
    it('Plain Text converted to Binary', () => {
      expect(TextToBinary("Hi")).to.deep.equal("1001000 1101001 ")
    
    })
  })

//Test BinaryToASCII Function
describe('BinarytoASCII', () => {
    it('Binary converted to ASCII', () => {
      expect(BinarytoASCII("1001000 1101001")).to.deep.equal("72 105 ")
    
    })
  })
  
  //Test BinaryToHex Function
  describe('BinarytoHex', () => {
      it('Binary converted to Hex', () => {
        expect(BinarytoHex("1001000 1101001")).to.deep.equal("48 69 ")
      
      })
    })
  
  //Test BinaryToText Function  
  describe('BinaryToText', () => {
      it('Binary converted to Plain Text', () => {
        expect(BinaryToText("1001000 1101001i")).to.deep.equal("Hi")
      
      })
    })

//Test HexToASCII Function
describe('HexToASCII', () => {
    it('Hex converted to ASCII', () => {
      expect(HexToASCII("48 69")).to.deep.equal("72 105 ")
    
    })
  })
  
  //Test HexToText Function
  describe('HexToText', () => {
      it('Hex converted to Plain Text', () => {
        expect(HexToText("48 69")).to.deep.equal("Hi")
      
      })
    })
  
  //Test HexToBinary Function  
  describe('TextToBinary', () => {
      it('Hex converted to Binary', () => {
        expect(HexToBinary("48 69")).to.deep.equal("1001000 1101001 ")
      
      })
    })

//Test ASCIIToText Function
describe('ASCIIToText', () => {
    it('ASCII converted to Plain Text', () => {
      expect(ASCIIToText("72 105")).to.deep.equal("Hi")
    
    })
  })
  
  //Test ASCIIToHex Function
  describe('TextToHex', () => {
      it('ASCII converted to Hex', () => {
        expect(ASCIIToHex("72 105")).to.deep.equal("48 69 ")
      
      })
    })
  
  //Test ASCIIToBinary Function  
  describe('TextToBinary', () => {
      it('ASCII converted to Binary', () => {
        expect(ASCIIToBinary("72 105")).to.deep.equal("1001000 1101001 ")
      
      })
    })