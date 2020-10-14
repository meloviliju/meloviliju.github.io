function main(text) {
    var str = ""
    var i = 0

    while (i < text.length){
        if (text[i+1] == "="){
            switch (text[i]){
                case "a": str += "ā"; break;
                case "e": str += "ē"; break;
                case "i": str += "ī"; break;
                case "o": str += "ō"; break;
                case "u": str += "ū"; break;
                case "A": str += "Ā"; break;
                case "E": str += "Ē"; break;
                case "I": str += "Ī"; break;
                case "O": str += "Ō"; break;
                case "U": str += "Ū"; break;
                default: str += text[i]  // when "=" is added to consonants, pass it
            }
            i += 1
        }else{
            str += text[i]
        }
        i += 1
    }
    document.getElementById("copy").value = "Copy";
    return str
}

function copyToClipboard(text) {
    text.select();
    document.execCommand("Copy");
    document.getSelection().empty(text);
    document.getElementById("copy").value = "Copied!";
}

function reset(){
    document.getElementById("text_in").value = ""
    document.getElementById("text_out").value = ""
}