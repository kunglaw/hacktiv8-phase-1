function insertionSorting(arrNum)
{
    //console.log(arrNum);
    //
    for(let i=1; i < arrNum.length; i++)
    {
        //console.log(i);
        let tmpIdx = i;

        for(let j=i-1; j >= 0; j--)
        {
            
            let tmp = 0;
            //console.log(" ","i:"+i+" "+arrNum[i]," j:"+j+" "+arrNum[j]);
            if(arrNum[tmpIdx] < arrNum[j])
            {
                tmp = arrNum[j];
                arrNum[j] = arrNum[tmpIdx];
                arrNum[tmpIdx] = tmp;
                //console.log(" change --> ","i:"+i+" "+arrNum[i]," j:"+j+" "+arrNum[j]);
                tmpIdx = tmpIdx - 1;
            }
           
        }   
        //console.log(arrNum,"=done=");
    }

    return arrNum;
}

console.log(insertionSorting([4,3,6,5,7,1,9]))
console.log(insertionSorting([4,3,0,6,5,9,8,7,1,1,9]))