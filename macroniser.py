fr = open("latin_input.txt", "r")
s = fr.read()
fr.close()
ret = ""
i = 0

while i < len(s)-1:
    if s[i+1] == "=":
        if s[i] == "a":
            ret += "ā"
        elif s[i] == "e":
            ret += "ē"
        elif s[i] == "i":
            ret += "ī"
        elif s[i] == "o":
            ret += "ō"
        elif s[i] == "u":
            ret += "ū"
        elif s[i] == "A":
            ret += "Ā"
        elif s[i] == "E":
            ret += "Ē"
        elif s[i] == "I":
            ret += "Ī"
        elif s[i] == "O":
            ret += "Ō"
        elif s[i] == "U":
            ret += "Ū"
        else:   # when "=" is added to consonants, pass it
            ret += s[i]
        i += 1
    else:
        ret += s[i]
    i += 1

if s[-1] != "=":
    ret += s[-1]

print(ret)
fw = open("latin_output.txt", "w", encoding="utf-8")
fw.write(ret)
fw.close()
