function countChar(str, char){
    if (typeof(str)=== "string" && typeof(char)=== "string" && char.length===1){
    let count = 0;
    for (let i=0; i<str.length; i++)
        if (str.charAt(i) === char)
            count++
    return count;}
    else return "please provide valid input"
}