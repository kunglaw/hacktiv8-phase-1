// roman numerals
"use strict"
function romanNumerals(num)
{
    let numbers  = [1,   4,   5,   9, 10,  40, 50,  90, 100,400,500,900,1000]
    let romanNum = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let result = "";

    if(num > 3000)
    {
        return "please insert below than 3000";
    }

    for(let i = numbers.length; i >= 0; i--)
    {
        
        if(num >= numbers[i])
        {
            for(let j = 0; j < Math.floor(num / numbers[i]); j++)
            { 
                num = num - (numbers[i] * Math.floor(num / numbers[i]));
                return romanNum[i] + romanNumerals(num);
            }
           
        }else{
            return "";
        }
    }

}

console.log("23 | XXIII ",romanNumerals(23));
console.log("790 | DCCXC ",romanNumerals(790));
console.log("1453 | MCDLIII ",romanNumerals(1453));
console.log("3000 | MMM ",romanNumerals(3000));
console.log("1646 | MDCXLVI ",romanNumerals(1646));
