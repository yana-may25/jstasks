function func(n){
    let result = "";
    for (let i = '#' ; i.length<n; i+='#'){
         result+=i;
        result+='\n';
    }
    return result;
}
func(6)