function binary_search(needle,arrNum)
{
   
    //insertion
    for(let i = 1; i < arrNum.length; i++)
    {
        let tmpIdx = i;
        let tmp = 0;

        for(let j = i - 1; j >= 0; j--)
        {
            if(arrNum[tmpIdx] < arrNum[j])
            {
                tmp = arrNum[tmpIdx];
                arrNum[tmpIdx] = arrNum[j];
                arrNum[j] = tmp;

                tmpIdx = j;
            }
        }
    }

    let isMatch = false;
    while(!isMatch)
    {

        var middle = Math.round(arrNum.length / 2); 
        if(needle === middle )
        {
            isMatch = true;

        }else if( needle < middle)
        {

        }else if( needle > middle)
        {
            
        }


        /* if(arrNum.length % 2 === 0)
        {


        }else{

        }*/
    }
}

console.log(binary_search(9,[1,5,3,9,6,8,3,5,6,7]))