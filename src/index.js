const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    //console.log(MORSE_TABLE['---..']);
    let codeArr=[],
        decodeString="";
    codeArr=getCodeArr(expr);
    for (let i=0; i<codeArr.length; i++){
        decodeString+=getDecodeLetter(codeArr[i]);
    }
    //console.log(decodeString);
    return decodeString;
}

function getCodeArr(expr){
    let str
        codeArr=[];
    for (i=0; i*10<expr.length; i++){
        str=expr.slice(i*10,(i+1)*10);
        codeArr.push(str);
    }
    return codeArr;
}

function getDecodeLetter(str){
    //console.log("get " +str);
    if (str=="**********"){
        return " ";
    }else{
        let morseLetter="",
         morseSymbol="";
        for (i=0; i<5; i++){
            morseSymbol=str.slice(i*2,i*2+2);
            if(morseSymbol=="10"){
                morseLetter+=".";
            }else if(morseSymbol=="11"){
                morseLetter+="-";
            }
        }
        //console.log(s+"\n");
        return (MORSE_TABLE[morseLetter]);
    }
}

module.exports = {
    decode
}