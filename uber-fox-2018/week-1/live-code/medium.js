/*
    0 full 
    1 kosong 
    2 dua *
    3 kosong
*/

function domino(num)
{
    
    let middleVal = [];  
    let horizontalMiddle = []
    let quarter = Math.floor(num / 4);

    horizontalMiddle.push((num-1)-quarter);
    horizontalMiddle.push(quarter);

    // identified nilai tengah 
    if(num%2 === 0)
    {
        middleVal = [(num/2)-1,num/2];
    }
    else
    {
        middleVal.push(Math.floor(num/2));
    }

    //console.log(middleVal);

    for(let i = 0; i < num; i++ )
    {
        let str = ""; 
        for(let j = 0; j < num; j++)
        {   
            // ujung
            if(i === 0 || i === num-1 )
            {
                str += "*";
            }
            else
            {
                if(j === num-1 || j === 0 )
                {
                    str += "*";
                }else
                {
                    if(middleVal.length === 1)
                    {
                        if(i === middleVal[0])
                        {
                            str += "*";

                        }else if(i === horizontalMiddle[0] && j === middleVal[0]){

                            str +=  Math.ceil(Math.random() * 6);

                        }else if(i === horizontalMiddle[1] && j === middleVal[0]){

                            str +=  Math.ceil(Math.random() * 6);
                        }
                        else
                        {
                            str += " ";
                        }

                    }
                    else if(middleVal.length === 2)
                    {
                        if(i === middleVal[0] || i === middleVal[1])
                        {
                            str += "*";

                        }else if(i === horizontalMiddle[0] && j === middleVal[0]){

                            str +=  Math.ceil(Math.random() * 6);

                        }else if(i === horizontalMiddle[1] && j === middleVal[0]){

                            str +=  Math.ceil(Math.random() * 6);
                        }

                        else
                        {
                            str += " ";
                        }
                    }
                        //
                }
            }
            
            
        }

        console.log(str);
    }

}

console.log(domino(19));
console.log(domino(17));