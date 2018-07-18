function ticTacToe()
{
    let char = "OX";
    let jml  = [5,4];
    let randomStr = "";
    let result = [];
    let Ocount = 0;
    let Xcount = 0;

    //let changeRound = Math.floor(Math.random() * 2); // 
    for(let k = 0; k < 9; k++)
    {
        let idxChar = Math.floor(Math.random() * 2);
        //console.log(idxChar);
        if(char[idxChar] === "O")
        {
            Ocount++;

        }else if(char[idxChar] === "X")
        {   
            Xcount++;
        }

        if(Ocount === jml[0])
        {
            randomStr += "X";

        }else if(Xcount === jml[1]){

            randomStr += "O";

        }else{
            
            randomStr += char[idxChar];
        }
        //console.log(idxChar+":",char[idxChar]," => "+randomStr);
    }

    //console.log("randomStr :",randomStr);
    //return "";
    let idx = 0;
    for(let i=0; i<3; i++)
    {
        
        let tmp = [];
        for(let j=0; j<3; j++)
        {
            tmp.push(randomStr[idx]);
            idx++;
        }
        result.push(tmp);
    }

    return result;
}

console.table(ticTacToe());