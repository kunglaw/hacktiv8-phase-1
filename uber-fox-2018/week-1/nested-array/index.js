function createNestedArr(row,col)
{
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    let choosenAlphabet = 0;
   

    for(let i=0; i < row; i++)
    {
        let tmp = [];
        for(let j = 0; j < col; j++)
        {
            choosenAlphabet = Math.floor(Math.random() * alphabet.length);
            tmp.push(alphabet[choosenAlphabet]);
        }

        result.push(tmp);
    }

    return result;
}

console.log(createNestedArr(5,3));