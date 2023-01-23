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

    function min(n, m)
    {
        if (n===m) return "equal"
        else
       if (n<m) return n
        else return m;
        
    }