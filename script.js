
function TextToASCII(text){
    var charCodeArr = ""
    //Translates each character
    for(let i = 0; i < text.length; i++){
        let code = text.charCodeAt(i);
        charCodeArr = charCodeArr+ code  + " ";
    }
    return charCodeArr 
}

function TextToHex(text){
    var charCodeArr = ""
    for(let i = 0; i < text.length; i++){
        let code = text.charCodeAt(i).toString(16);
        charCodeArr = charCodeArr+ code  + " ";
    }
    return charCodeArr 

}

function TextToBinary(text){
    var charCodeArr = ""
    for(let i = 0; i < text.length; i++){
        let code = text.charCodeAt(i).toString(2);
        charCodeArr = charCodeArr+ code  + " ";
    }
    return charCodeArr 
}

function BinaryToText(text){
    const outputStr = text.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    return outputStr
}

function BinarytoHex(text){
    const result = TextToHex(BinaryToText(text))
    return result
}

function BinarytoASCII(text){
    const result = TextToASCII(BinaryToText(text))
    return result
}

function ASCIIToText(text){
    const outputStr = text.split(' ').map(bin => String.fromCharCode(parseInt(bin))).join('');
    return outputStr
}

function ASCIIToBinary(text){
    const result = TextToBinary(ASCIIToText(text))
    return result
}

function ASCIIToHex(text){
    const result = TextToHex(ASCIIToText(text))
    return result
}

function HexToText(text){
    const outputStr = text.split(' ').map(bin => String.fromCharCode(parseInt(bin,16))).join('');
    return outputStr
}

function HexToASCII(text){
    const result = TextToASCII(HexToText(text))
    return result
}

function HexToBinary(text){
    const result = TextToBinary(HexToText(text))
    return result
}

$(document).ready(function(){
    $(".runbut").click(function(){
        var data1 = $('#drop1').val()
        var data2 = $('#drop2').val()
        //Gets users inputted data
        var text = $('#inp1').val()
        //determines what conversiuon is needed, and calls the apppropriate function
        if (data1 == "Plain Text" && data2 == "ASCII"){
            var result = TextToASCII(text)
        }else if(data1 == "Plain Text" && data2 == "Hex"){
            var result = TextToHex(text)
        }else if(data1 == "Plain Text" && data2 == "Binary"){
            var result = TextToBinary(text)
        }else if(data1 == "Binary" && data2 == "Plain Text"){
            var result = BinaryToText(text)
        }else if(data1 == "Binary" && data2 == "Hex"){
            var result = BinarytoHex(text)
        }else if(data1 == "Binary" && data2 == "ASCII"){
            var result = BinarytoASCII(text)
        }else if(data1 == "ASCII" && data2 == "Plain Text"){
            var result = ASCIIToText(text)
        }else if(data1 == "ASCII" && data2 == "Binary"){
            var result = ASCIIToBinary(text)
        }else if(data1 == "ASCII" && data2 == "Hex"){
            var result = ASCIIToHex(text)
        }else if(data1 == "Hex" && data2 == "Plain Text"){
            var result = HexToText(text)
        }else if(data1 == "Hex" && data2 == "Binary"){
            var result = HexToBinary(text)
        }else if(data1 == "Hex" && data2 == "ASCII"){
            var result = HexToASCII(text)
        }
        //Replaces the text in the second box with the result
        document.getElementById("inp2").value = (result);
       
})})
