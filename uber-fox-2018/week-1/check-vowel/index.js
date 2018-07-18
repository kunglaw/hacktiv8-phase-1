
function checkVowel(str){
    let vowel = "aiueoAIUEO";
    let isVowel = false;

    for(let i = 0; i < str.length; i++)
    {
        for(let j=0; j < vowel.length; j++)
        {
            if(str[i] === vowel[j])
            {
                isVowel = true;
                break;
            }
        }

        if(isVowel)
        {
            break;
        }
    }

    return isVowel;

}

console.log(checkVowel("HGJKLPqwdcVbA"));