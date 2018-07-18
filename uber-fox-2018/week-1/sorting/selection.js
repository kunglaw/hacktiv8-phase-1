////https://visualgo.net/bn/sorting
function selectionSorting(arrNum)
{
    
    for(let i = 0; i < arrNum.length; i++)
    {
        var tmpIdx = i;
        var tmp = 0;
        for(let j = i+1; j < arrNum.length; j++)
        {
            if(arrNum[tmpIdx] > arrNum[j] ) 
            {
               tmpIdx = j; 
            }          
        }

        // kalau index i tidak sama dengan tmpIndex
        if(tmpIdx !== i)
        {
            tmp = arrNum[i];
            arrNum[i] = arrNum[tmpIdx];
            arrNum[tmpIdx] = tmp; 
        }
    }

    return arrNum;
}


console.log(selectionSorting([4,3,6,5,7,1,9]))
console.log(selectionSorting([4,3,0,6,100,5,9,8,7,1,1,9]))