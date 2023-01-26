function func(n){
    let result = "";
    for (let i = '#' ; i.length<n; i+='#'){
         result+=i + '\n';
    }
    return result;
}
