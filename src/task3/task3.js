function isEven(n)
    {
        if (n>0){
        if (n===1) return false
        else return isEven(n-2);
        }
          else
            if(n===0) return true
        else if (n<0){
            if (n===1) return false
        else return isEven(n+2);
        }
        
    }