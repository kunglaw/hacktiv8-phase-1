"use strict";
function convertToCoin(num)
{
    var pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000];
    var result = [];

    for(let i=pecahan.length; i>=0; i--)
    {
        if(num > pecahan[i])
        {
           
            //temp.push(Math.round(num / pecahan[i]));
            //result.push(temp);
            for(let j = 0; j < Math.floor(num / pecahan[i]); j++)
            {
                result.push(pecahan[i]);
            }
            num = num - (pecahan[i] * Math.floor(num / pecahan[i]));
            console.log("num : "+num)
        }
    }

    return result;
}

console.log(convertToCoin(543));

console.log(convertToCoin(7752));
