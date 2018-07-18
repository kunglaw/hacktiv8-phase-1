function stringToArray(str)
{
    let baris = str.split(",");
    let result = [];

    for(i = 0; i < baris.length; i++)
    {
        let kolom = baris[i].split("");
        //console.log("kolom :",kolom);
        let tmp = []; // ini blockscope 
        for(j = 0; j < kolom.length; j++)
        {
            tmp.push(kolom[j]);
        }
       
        result.push(tmp);
    }

    return result;
}

console.log(stringToArray("asdf,eryf,fdgd"))