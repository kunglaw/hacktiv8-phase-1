let str = "abacccccabacccceeeeddddabaeeeaba"
let str2 = "kkkmmmmooonnoooommmmxxxppaaammmm"

// str adalah string yang akan kita cari perulangannya
// length adalah jumlah karakter yang akan kita cari
// misal length = 2, maka kita akan mencari perulangan yang berisikan 2 karakter contoh: 'ab'
// length = 3, contoh: 'aba'

function countChar(str, length){
    
    var formString = "";
    var arrChar = [];
    var resultArr = [];
    
    var bigger = 0;
    var bigIdx = 0;
    // ambil 1 char 
    for(i = 0; i < str.length; i++)
    {
        var isNewPush = true;
        // form string dari char pertama 
        for(j = i; j < i+length; j++ )
        {
            if(str[j] !== undefined)
            {
                formString += str[j];
            }
        }
        
        if(resultArr.length > 0)
        {
            for(k = 0; k < resultArr.length; k++)
            {
                if(resultArr[k][0] === formString && formString.length === length)
                {
                    resultArr[k].push(formString);
                    isNewPush = false
                    break;
                }
            }

            if(isNewPush === true && formString.length === length)
            {
                var tmp = [formString];
                resultArr.push(tmp);
            }

        }else
        {
            var tmp = [formString];
            resultArr.push(tmp);
        }
        //arrChar.push(formString);
        //console.log(formString);

        formString ="";
    }

    for(l = 0; l < resultArr.length; l++)
    {
       
        if(resultArr[l].length > bigger)
        {
            bigger = resultArr[l].length;
            bigIdx = l;
        }

    }
    
    return resultArr[bigIdx][0]+" "+bigger+"x";

}

console.log(countChar(str,1));
console.log(countChar(str2,3));